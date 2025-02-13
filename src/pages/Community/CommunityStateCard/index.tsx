//@ts-nocheck
import React, {useEffect, useState} from "react";
import supabase from "../../../utils/supabse.ts";
import {
    LandLoading, LandMessage,
    LandState
} from "@suminhan/land-design";
import StateCard from "./StateCard.tsx";

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
    const handleShowToast = (show: boolean, text: string) => {
        setToastText(text);
        setToast(show);
        const timer = setTimeout(() => {
            setToast(false);
            clearTimeout(timer);
        }, 1000);
    };

    const handleDownloadStateCard = async (url:string) => {
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

    const handleLikeStateCard = async (id:string) => {
        // const {data:{user}} = await supabase.auth.getUser();
        // const likedRes = await supabase.from('likedStateCard').select('id').eq('user_id',user.id);
        // if(likedRes.error)return;
        // const ids = likedRes.data.map((i) => i.id);
        // if(ids.length > 0 && ids.includes(id)){
        //     // 赞过
        // }
        // const { data: currentData, error: fetchError } = await supabase
        //     .from('graphicState')
        //     .select('likes')
        //     .eq('id', id)
        //     .single();
        //
        // if (fetchError) {
        //     console.error('Error fetching current counter value:', fetchError);
        //     return;
        // }
        //
        // const currentLikes = currentData.counter;
        // const res = await supabase.from('graphicState').update({
        //     likes: `${Number(currentLikes) + 1}`,
        // }).eq('id',id);
        // if(res.error) return;
    }
    const handleStarStateCard = async (id:string) => {}
    return (
        <>
            {loading ? <div className={'width-100 height-100 flex-1 flex both-center'}>
                <LandLoading />
            </div> : (communityStateCardData && communityStateCardData?.length >0) ? <div className={'grid gap-24'} style={{gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))'}}>
                {communityStateCardData?.map(i =>  <StateCard
                    key={i.img_url}
                    imgUrl={i.img_url}
                    title={i.title}
                    username={i?.user?.username}
                    avatarUrl={i.users.avatar_url}
                    isOfficial={i?.user?.is_official}
                    onCardClick={option => {
                        switch (option) {
                            case 'download': handleDownloadStateCard?.(i.img_url);break;
                            case 'like': handleLikeStateCard?.(i.id);break;
                            case 'star': handleStarStateCard?.(i.id);break;
                            default: console.log(option);break;
                        }
                    }}
                />)}
            </div> : <div className={'width-100 height-100 flex-1 flex items-center justify-center'}>
                <LandState type={'empty'} title={<>暂无动态, 点击 [ + ] 发布吧</>}/>
            </div>}
            {toast && <LandMessage show={toast} text={toastText} />}
        </>
    )
}
export default CommunityStateCard;
