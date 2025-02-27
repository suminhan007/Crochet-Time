import {
    Icon, LandAlert,
    LandButton,
    LandDialog,
    LandLink,
    LandLoading,
    LandMessage,
    LandState
} from "@suminhan/land-design";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import supabase from "../../utils/supabse.ts";

type Props = {
}
const ImgPixelCardList:React.FC<Props> = ({
}) => {
    const [pixelData,setPixelData] = useState<{id:string,img_url:string}[]>([]);
    const [loading,setLoading] = useState(true);
    const fetchLatestImage = async () => {
        const {data:{user}} = await supabase.auth.getUser();
        const userId = user?.id;
        const { data:ImgData, error } = await supabase
            .from('imgPixelCard') // 替换为你的表名
            .select('id,img_url')
            .eq('user_id',userId)
            .order('created_at', { ascending: false })// 按创建时间倒序排列

        if (error) {
            console.error('Error fetching image:', error);
        } else if (ImgData && ImgData.length > 0) {
            const { data: UrlData, error:UrlError } = await supabase
                .storage
                .from('CroKnitTime')
                .createSignedUrls(ImgData?.map(i => `imgPixelCards/${i.img_url}`), 60)
            if(UrlError){
                console.log(UrlError)
            }else{
                const imgData = ImgData?.map((i,idx) => Object.assign(i, { img_url: UrlData[idx].signedUrl}))
                setPixelData(imgData); // 更新图片 URL
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
        const response = await supabase.from('imgPixelCard').delete().eq('id',selectedCard);
        if(response.status<300 && response.status>100){
           window.location.reload()
        }else{
            handleShowToast(true,'删除失败')
        }
        setShowDeleteDialog(false);
    }
    const handleDownloadColorCard = async (url:string) => {
        const downloadUrl =url.split('?token=')[0].split('CroKnitTime/imgPixelCards/')[1];
        const response = await supabase.storage.from('CroKnitTime').download(`imgPixelCards/${downloadUrl}`);
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
    const [publishLoading,setPublishLoading] = useState(false);
    const handlePublishColorCard = async () => {
        setPublishLoading(true);
        const res = await supabase.from('imgPixelCard').update({
            public: true,
        }).eq('id', selectedCard);
        if(res.error){
            handleShowToast(true,'发布失败，请稍后重试')}else{
            handleShowToast(true,'发布成功，前往社区查看吧')
        }
        setShowPublishDialog(false);
        setPublishLoading(false);
    }
    return (
        <>
            {loading ? <div className={'width-100 flex-1 flex both-center'}>
                <LandLoading />
            </div> : (pixelData && pixelData?.length >0) ? <div className={'grid gap-16'} style={{gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))'}}>
                {pixelData?.map(i => <div key={i.img_url}
                                          className={'relative flex column gap-12 radius-8 border-box'} >
                    <img src={i.img_url} className={'radius-8 overflow-hidden bg-gray'} width={'100%'} style={{objectFit:'cover',aspectRatio:'1'}}/>
                    <div className={'flex items-center gap-12'}>
                        <LandButton size={'small'} type={'text'} icon={<Icon name={'download'}/>} onClick={()=>handleDownloadColorCard?.(i.img_url)} />
                        <LandButton size={'small'} type={'text'} icon={<Icon name={'upload'} size={16}/>} pop={'发布'} onClick={()=> {
                            setShowPublishDialog(true);
                            setSelectedCard(i.id)
                        }} />
                        <LandButton size={'small'} type={'text'} icon={<Icon name={'delete'} size={16}/>} pop={'删除'} onClick={()=> {
                            setShowDeleteDialog(true);
                            setSelectedCard(i.id)
                        }} />
                    </div>
                </div>)}
            </div> : <div className={'width-100 flex-1 flex items-center justify-center'}>
                <LandState type={'empty'} title={<>暂无像素图, <LandLink
                    onClick={() => navigate('/type=tools-pixelDrawer')}>前往生成</LandLink></>}/>
            </div>}
            {/*发布确认弹窗*/}
            <LandDialog
                title={'确认发布该像素图到社区？'}
                show={showPublishDialog}
                onClose={() => setShowPublishDialog(false)}
                onCancel={() => setShowPublishDialog(false)}
                onSubmit={() => handlePublishColorCard()}
            >
                <LandAlert title={'色卡发布到社区后将成为公开像素图，允许所有人查看、下载。'}/>
            </LandDialog>
            {/*删除确认弹窗*/}
            <LandDialog
                title={'确认删除该像素图？'}
                show={showDeleteDialog}
                onClose={() => setShowDeleteDialog(false)}
                onCancel={() => setShowDeleteDialog(false)}
                onSubmit={() => handleDeleteColorCard()}
                submitLabel={publishLoading?'删除中...':'删除'}
            >
                <LandAlert type={'error'} title={'删除后不可恢复，请谨慎操作！'}/>
            </LandDialog>
            {toast && <LandMessage show={toast} text={toastText} />}
        </>
    )
}
export default ImgPixelCardList;