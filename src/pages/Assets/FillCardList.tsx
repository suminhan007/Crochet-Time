import {
    Icon, LandAlert,
    LandButton,
    LandDialog,
    LandDropdown,
    LandLink,
    LandLoading,
    LandMessage,
    LandPop,
    LandState
} from "@suminhan/land-design";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import supabase from "../../utils/supabse.ts";

type Props = {
}
const FillCardList:React.FC<Props> = ({
}) => {
    const [fillData,setFillData] = useState<{id:string,img_url:string,colors?: string[]}[]>([]);
    const [loading,setLoading] = useState(true);
    const fetchLatestImage = async () => {
        const {data:{user}} = await supabase.auth.getUser();
        const userId = user?.id;
        const { data:ImgData, error } = await supabase
            .from('fillCard') // 替换为你的表名
            .select('id,img_url, colors')
            .eq('user_id',userId)
            .order('created_at', { ascending: false })// 按创建时间倒序排列

        if (error) {
            console.error('Error fetching image:', error);
        } else if (ImgData && ImgData.length > 0) {
            const { data: UrlData, error:UrlError } = await supabase
                .storage
                .from('CroKnitTime')
                .createSignedUrls(ImgData?.map(i => `fillCards/${i.img_url}`), 60)
            if(UrlError){
                console.log(UrlError)
            }else{
                const imgData = ImgData?.map((i,idx) => Object.assign(i, { img_url: UrlData[idx].signedUrl,colors: i.colors?.filter((j:string) => j != '#DDDDDD')}))
                setFillData(imgData); // 更新图片 URL
            }
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchLatestImage()
    }, []);
    const navigate = useNavigate();
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedCard, setSelectedCard] = useState<string>();
    const [showPublishDialog, setShowPublishDialog] = useState(false);
    //提示信息
    const [toast, setToast] = useState<boolean>(false);
    const [toastText, setToastText] = useState<string>("");

    const handleShowToast = (show: boolean, text: string) => {
        setToastText(text);
        setToast(show);
        const timer = setTimeout(() => {
            setToast(false);
            clearTimeout(timer);
        }, 1000);
    };

    const handleDeleteColorCard = async () => {
        const response = await supabase.from('fillCard').delete().eq('id',selectedCard);
        if(response.status<300 && response.status>100){
           window.location.reload()
        }else{
            handleShowToast(true,'删除失败')
        }
        setShowDeleteDialog(false);
    }
    const handleDownloadColorCard = async (url:string) => {
        const downloadUrl =url.split('?token=')[0].split('CroKnitTime/fillCards/')[1];
        const response = await supabase.storage.from('CroKnitTime').download(`fillCards/${downloadUrl}`);
        if(response.error){
            handleShowToast(true,'下载失败，请稍后再试')
        }else {
            // 创建一个a标签用于下载
            const link = document.createElement('a');
            link.href = URL.createObjectURL(response.data);
            link.download = downloadUrl.split('.png')[0]; // 设置下载的文件名
            link.click();
            // 释放内存
            URL.revokeObjectURL(link.href);
        }
    }
    const [publishLoading, setPublishLoading] = useState(false);
    const handlePublishColorCard = async () => {
        setPublishLoading(true);
        const res = await supabase.from('fillCard').update({
            public: true,
        }).eq('id', selectedCard);
        if(res.error){
            handleShowToast(true,'发布失败，请稍后重试')
        }else{
            handleShowToast(true,'发布成功，前往社区查看吧')
        }
        setShowPublishDialog(false);
        setPublishLoading(false);
    }
    return (
        <>
            {loading ? <div className={'width-100 flex-1 flex both-center'}>
                <LandLoading />
            </div> : (fillData && fillData?.length >0) ? <div className={'flex column gap-16'}>
                {fillData?.map(i =>  <div key={i.img_url} className={'relative flex items-center gap-12 p-12 border radius-8 border-box'}>
                    <div className={'relative hover-pop'}>
                        <img src={i.img_url} width={64}/>
                        <LandPop placement={'bottom'} content={<img src={i.img_url} width={200}/>}/>
                    </div>
                    <div className={'flex-1 flex gap-4'}>
                        {i.colors?.map((color) => <div key={color} className={'flex-1 flex column gap-8'}>
                            <div style={{
                                height: '8px',
                                backgroundColor: color
                            }}></div>
                            <div className={'fs-12 color-gray-4'}>{color}</div>
                        </div>)}
                    </div>
                    <LandDropdown
                        toggle={<LandButton type={'text'} size={'small'} icon={<Icon name={'more'} className={'rotate-90'} fill={'var(--color-text-3)'} />}/>}
                        placement={'center'}
                        dropClassName={'shadow-light'}
                        dropContent={
                            <div className={'flex column items-center justify-end'} style={{width:'84px'}}>
                                <LandButton type={'text'}
                                            icon={<Icon name={'download'}/>} text={'下载'} onClick={() =>handleDownloadColorCard?.(i.img_url)}></LandButton>
                                <LandButton type={'text'} icon={<Icon name={'next-step'} size={16} strokeWidth={3} />} text={'发布'} onClick={() => {
                                    setShowPublishDialog(true)
                                    setSelectedCard(i.id);
                                }}></LandButton>
                                <LandButton type={'text'} icon={<Icon name={'delete'} size={16} strokeWidth={3} />} text={'删除'} onClick={() => {
                                    setShowDeleteDialog(true);
                                    setSelectedCard(i.id);
                                }}></LandButton>
                            </div>
                        }
                    />
                </div>)}
            </div> : <div className={'width-100 flex-1 flex items-center justify-center'}>
                <LandState type={'empty'} title={<>暂无配色卡, <LandLink
                    onClick={() => navigate('/type=tools-colorFiller')}>前往制作</LandLink></>}/>
            </div>}
            {/*发布确认弹窗*/}
            <LandDialog
                title={'确认发布该配色卡到社区？'}
                show={showPublishDialog}
                onClose={() => setShowPublishDialog(false)}
                onCancel={() => setShowPublishDialog(false)}
                onSubmit={() => handlePublishColorCard()}
            >
                <LandAlert title={'色卡发布到社区后将成为公开配色卡，允许所有人查看、下载。'}/>
            </LandDialog>
            {/*删除确认弹窗*/}
            <LandDialog
                title={'确认删除该配色卡？'}
                show={showDeleteDialog}
                onClose={() => setShowDeleteDialog(false)}
                onCancel={() => setShowDeleteDialog(false)}
                onSubmit={() => handleDeleteColorCard()}
                submitLabel={publishLoading?'发布中...':'发布'}
            >
                <LandAlert type={'error'} title={'删除后不可恢复，请谨慎操作！'}/>
            </LandDialog>
            {toast && <LandMessage show={toast} text={toastText} />}
        </>
    )
}
export default FillCardList;