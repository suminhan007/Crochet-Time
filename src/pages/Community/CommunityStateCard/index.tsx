//@ts-nocheck
import React, {useEffect, useState} from "react";
import supabase from "../../../utils/supabse.ts";
import {
    Icon, LandAvatar,
    LandButton,
    LandLoading, LandMessage,
    LandState
} from "@suminhan/land-design";

const CommunityStateCard:React.FC = () => {
    const [loading,setLoading] = useState(true);
    const [communityStateCardData, setCommunityStateCardData] = useState<any[]>([]);
    const fetchLatestImage = async () => {
        const { data:communityData, error } = await supabase
            .from('graphicState')
            .select(`
                  id,
                img_url,
                title,
                description,
                likes,
                stars,
                created_at,
                user_id,
                  users (
                    id,
                    username,
                    sex,
                    avatar_url,
                    is_official
                  )
            `)

        if (error) {
            console.error('Error fetching image:', error);
        } else if (communityData && communityData.length > 0) {
            const { data: UrlData, error:UrlError } = await supabase
                .storage
                .from('CroKnitTime')
                .createSignedUrls(communityData?.map(i => `stateImages/${i.img_url}`), 60)
            if(UrlError){
                console.log(UrlError)
            }else{
                const { data: AvatarData, error:AvatarError } = await supabase.storage.from('CroKnitTime').createSignedUrls(communityData.map(i => `userAvatars/${i.users.avatar_url}`), 60)
                if(AvatarError){}else{
                    const resultData = communityData?.map((i,idx) => Object.assign(i, { img_url: UrlData[idx].signedUrl, user: Object.assign(i.users, {avatar_url: AvatarData[idx].signedUrl}) }));
                    console.log(resultData,communityData)
                    setCommunityStateCardData(resultData); // 更新图片 URL
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
        const downloadUrl =url.split('?token=')[0].split('CroKnitTime/stateImages/')[1];
        const response = await supabase.storage.from('CroKnitTime/stateImages').download(downloadUrl);
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
    return (
        <>
            {loading ? <div className={'width-100 height-100 flex-1 flex both-center'}>
                <LandLoading />
            </div> : (communityStateCardData && communityStateCardData?.length >0) ? <div className={'grid gap-24'} style={{gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))'}}>
                {communityStateCardData?.map(i =>  <div key={i.img_url} className={'flex column gap-8'}>
                    <img src={i.img_url} alt={i.img_url} width={'100%'} className={'radius-8 overflow-hidden'} style={{aspectRatio:'4/3',objectFit:'cover'}}/>
                    <div>{i.title}</div>
                    <div className={'flex items-center justify-between'}>
                        <div className={'flex items-center gap-4 fs-12 color-gray-3'}>
                            <LandAvatar imgUrl={i?.user?.avatar_url} size={40}/>
                            {i?.user?.username}
                            {i?.user?.is_official && <div style={{width:'12px',height:'12px'}} className={'flex both-center fs-12 bg-primary radius-8 color-white'}>v</div>}
                        </div>
                        <LandButton type={'text'}
                                    icon={<Icon name={'download'}/>} size={'small'} onClick={() =>handleDownloadColorCard?.(i.img_url)}></LandButton>
                    </div>
                </div>)}
            </div> : <div className={'width-100 height-100 flex-1 flex items-center justify-center'}>
                <LandState type={'empty'} title={<>暂无动态, 点击 [ + ] 发布吧</>}/>
            </div>}
            {toast && <LandMessage show={toast} text={toastText} />}
        </>
    )
}
export default CommunityStateCard;
