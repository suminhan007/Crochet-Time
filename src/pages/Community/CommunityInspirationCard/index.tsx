import React, {useEffect,  useState} from "react";
import supabase from "../../../utils/supabse.ts";
import {
    LandAlert,
    LandDialog,
    LandLoading, LandMessage,
    LandState
} from "@suminhan/land-design";

const CommunityInspirationCard:React.FC = () => {
    const [loading,setLoading] = useState(true);
    const [communityColorCardData, setCommunityInspirationCardData] = useState<any[]>([]);
    const fetchLatestImage = async () => {
        const { data:communityData, error } = await supabase
            .from('inspirationCard')
            .select('id, img_url')

        if (error) {
            console.error('Error fetching image:', error);
        } else if (communityData && communityData.length > 0) {
            const { data: UrlData, error:UrlError } = await supabase
                .storage
                .from('CroKnitTime')
                .createSignedUrls(communityData?.map(i => `inspirationCards/${i.img_url}`), 60)
            if(UrlError){}else{
                const imgData = communityData?.map((i,idx) => Object.assign(i, {
                    img_url: UrlData[idx].signedUrl
                }));
                setCommunityInspirationCardData(imgData); // 更新图片 URL
            }
        }
        setLoading(false);
    };

    // 初始化时获取最新图片
    useEffect(() => {
        setLoading(true);
        fetchLatestImage();
    }, []);


    const [toast, setToast] = useState<boolean>(false);
    const [toastText, setToastText] = useState<string>("");
    //@ts-ignore
    const handleShowToast = (show: boolean, text: string) => {
        setToastText(text);
        setToast(show);
        const timer = setTimeout(() => {
            setToast(false);
            clearTimeout(timer);
        }, 1000);
    };

    // const handleDownloadColorCard = async (url:string) => {
    //     const downloadUrl =url.split('?token=')[0].split('CroKnitTime/inspirationCards/')[1];
    //     const response = await supabase.storage.from('CroKnitTime/inspirationCards').download(downloadUrl);
    //     if(response.error){
    //         handleShowToast(true,'下载失败，请稍后再试')
    //     }else {
    //         // 创建一个a标签用于下载
    //         const link = document.createElement('a');
    //         link.href = URL.createObjectURL(response.data);
    //         link.download = downloadUrl.split('.png')[0]; // 设置下载的文件名
    //         link.click();
    //         // 释放内存
    //         URL.revokeObjectURL(link.href);
    //     }
    // }
    const [isVip, setIsVip] = useState<boolean>(false);
    const getUserLevel = async () => {
        const res = await supabase.auth.getUser();
        if(res.error){}else{
            if(Number(res.data.user.user_metadata.level) > 1){
                setIsVip(true)
            }
        }
    }
    useEffect(() => {
        getUserLevel();
    }, []);
    const [showDialog, setShowDialog] = useState(true);
    return (
        <div className={'relative width-100 height-100 flex-1 flex both-center'}>
            {/*会员查看*/}
            {communityColorCardData?.length>0 && <LandDialog show={showDialog} onClose={() => setShowDialog(false)} onSubmit={() => setShowDialog(false)} submitLabel={'知道了'}>
                <LandAlert type={'default'} title={'温馨提示：灵感内容将于2025年5月20日设置为【仅会员可见】'} direction={'column'}/>
            </LandDialog>}
            {(!isVip && false) ? <>
                <LandAlert type={'default'} title={'仅会员可见'}/>
            </> : <>
                {loading ? <>
                    <LandLoading />
                </> : (communityColorCardData && communityColorCardData?.length >0) ? <div className={'flex column gap-24 height-100 width-100'}>
                        <LandAlert type={'warn'} title={'图片均由AI生成，仅供参考！'}/>
                    <div className={'grid gap-24 height-100 overflow-auto'}
                         style={{gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))'}}>
                        {communityColorCardData?.map(i => <div key={i.id} className={'flex column gap-8'}>
                            <img src={i.img_url} alt={i.img_url} width={'100%'}
                                 className={'radius-8 overflow-hidden events-none'}
                                 style={{aspectRatio: '1', objectFit: 'cover'}}/>
                        </div>)}
                    </div>
                </div> : <>
                    <LandState type={'empty'} title={'暂无灵感内容，敬请期待'}/>
                </>}
            </>}
            {toast && <LandMessage show={toast} text={toastText}/>}
        </div>
    )
}
export default CommunityInspirationCard;
