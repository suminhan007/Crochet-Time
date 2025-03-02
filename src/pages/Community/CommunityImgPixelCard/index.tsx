//@ts-nocheck
import React, {useEffect, useState} from "react";
import supabase from "../../../utils/supabse.ts";
import {
    Icon, LandAvatar,
    LandButton,
    LandLink,
    LandLoading, LandMessage,
    LandState
} from "@suminhan/land-design";
import {useNavigate} from "react-router-dom";
import PixelCard from "./PixelCard.tsx";
import ImgPreview from "../../../components/ImgPreivew.tsx";

const CommunityPixelCard:React.FC = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true);
    const [communityColorCardData, setCommunityPixelCardData] = useState<any[]>([]);
    const fetchLatestImage = async () => {
        const { data:communityData, error } = await supabase
            .from('imgPixelCard')
            .select(`
                id,
                img_url,
              user_id,
              users (
                id,
                username,
                sex,
                is_official,
                avatar_url
              )
            `).eq('public', true)

        if (error) {
            console.error('Error fetching image:', error);
        } else if (communityData && communityData.length > 0) {
            const { data: UrlData, error:UrlError } = await supabase
                .storage
                .from('CroKnitTime')
                .createSignedUrls(communityData?.map(i => `imgPixelCards/${i.img_url}`), 60)
            if(UrlError){}else{
                const { data: AvatarData, error:AvatarError } = await supabase.storage.from('CroKnitTime').createSignedUrls(communityData.map(i => `userAvatars/${i.users.avatar_url}`), 60)
                if(AvatarError){}else{
                    const imgData = communityData?.map((i,idx) => Object.assign(i, {
                        img_url: UrlData[idx].signedUrl,
                        user: Object.assign(i.users, {avatar_url: AvatarData[idx].signedUrl})
                    }));
                    setCommunityPixelCardData(imgData); // 更新图片 URL
                }
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

    const handleDownloadColorCard = async (url:string) => {
        const downloadUrl =url.split('?token=')[0].split('CroKnitTime/imgPixelCards/')[1];
        const response = await supabase.storage.from('CroKnitTime/imgPixelCards').download(downloadUrl);
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
    const [previewUrl, setPreviewUrl] = useState('');
    return (
        <>
            {loading ? <div className={'width-100 height-100 flex-1 flex both-center'}>
                <LandLoading />
            </div> : (communityColorCardData && communityColorCardData?.length >0) ? <div className={'grid gap-24'} style={{gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))'}}>
                {communityColorCardData?.map(i =>  <PixelCard key={i.id} item={i} onPreview={()=>setPreviewUrl(i.img_url)}/>)}
            </div> : <div className={'width-100 height-100 flex-1 flex items-center justify-center'}>
                <LandState type={'empty'} title={<>暂无公开像素图, <LandLink
                    onClick={() => navigate('/type=tools-pixelDrawer')}>前往制作</LandLink>或<LandLink
                    onClick={() => navigate('/type=repository?assetsType=pixel-card')}>发布我的像素图</LandLink></>}/>
            </div>}
            {toast && <LandMessage show={toast} text={toastText} />}
            <ImgPreview show={Boolean(previewUrl)} img_url={previewUrl} onClose={()=>setPreviewUrl('')}/>
        </>
    )
}
export default CommunityPixelCard;
