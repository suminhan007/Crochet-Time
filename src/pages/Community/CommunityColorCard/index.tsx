//@ts-nocheck
import React, {useEffect, useState} from "react";
import supabase from "../../../utils/supabse.ts";
import {
    LandLink,
    LandLoading, LandMessage,
    LandState
} from "@suminhan/land-design";
import {useNavigate} from "react-router-dom";
import ColorCard from "./ColorCard.tsx";

const CommunityColorCard:React.FC = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true);
    const [communityColorCardData, setCommunityColorCardData] = useState<any[]>([]);
    const fetchLatestImage = async () => {
        const { data:communityData, error } = await supabase
            .from('colorCard')
            .select(`
                id,
                img_url,
                colors,
                description,
                origin_img_url,
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
            const { data: OriginUrlData, error } = await supabase
                .storage
                .from('CroKnitTime')
                .createSignedUrls(communityData?.map(i => `colorCards/${i.origin_img_url}`), 60)
            if(error){

            }else{
                const { data: UrlData, error:UrlError } = await supabase
                    .storage
                    .from('CroKnitTime')
                    .createSignedUrls(communityData?.map(i => `colorCards/${i.img_url}`), 60)
                if(UrlError){}else{
                   const { data: AvatarData, error:AvatarError } = await supabase.storage.from('CroKnitTime').createSignedUrls(communityData.map(i => `userAvatars/${i.users.avatar_url}`), 60)
                    if(AvatarError){}else{
                        const imgData = communityData?.map((i,idx) => Object.assign(i, {
                            img_url: UrlData[idx].signedUrl,
                            origin_img_url: OriginUrlData[idx].signedUrl,
                            user: Object.assign(i.users, {avatar_url: AvatarData[idx].signedUrl})
                        }));
                        setCommunityColorCardData(imgData); // 更新图片 URL
                    }
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

    return (
        <>
            {loading ? <div className={'width-100 height-100 flex-1 flex both-center'}>
                <LandLoading />
            </div> : (communityColorCardData && communityColorCardData?.length >0) ? <div className={'grid gap-24'} style={{gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))'}}>
                {communityColorCardData?.map(i =>  <ColorCard
                    key={i.origin_img_url}
                    origin_img_url={i.origin_img_url}
                    img_url={i.img_url}
                    username={i?.users?.username}
                    avatar_url={i?.user?.avatar_url}
                    isOfficial={i?.user?.is_official}
                    colors={i.colors}
                    onDownloadFail={() => handleShowToast(true,'下载失败，请稍后再试')}
                    onDownloadSuccess={() => handleShowToast(true,'下载成功，请前往电脑文件夹中查看')}
                />)}
            </div> : <div className={'width-100 height-100 flex-1 flex items-center justify-center'}>
                <LandState type={'empty'} title={<>暂无公开色卡, <LandLink
                    onClick={() => navigate('/type=tools-colorPicker')}>前往制作</LandLink>或<LandLink
                    onClick={() => navigate('/type=repository?assetsType=color-card')}>发布我的色卡</LandLink></>}/>
            </div>}
            {toast && <LandMessage show={toast} text={toastText} />}
        </>
    )
}
export default CommunityColorCard;
