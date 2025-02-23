//@ts-nocheck
import React, {useEffect, useState} from "react";
import supabase from "../../../utils/supabse.ts";
import {
    LandLoading, LandMessage,
    LandState
} from "@suminhan/land-design";
import StateCard from "./StateCard.tsx";
import StateCardDetailDialog from "./StateCardDetailDialog.tsx";

type Props = {
    isEnglish?:boolean;
}
const CommunityStateCard:React.FC<Props> = ({
                                                isEnglish
                                            }) => {
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
        const {data:{user}} = await supabase.auth.getUser();
        if(user){
            // 获取当前点赞数
            const currentRes = await supabase
                .from('graphicState')
                .select('likes')
                .eq('id', id)
                .single();

            if (currentRes.error) {
                console.error('Error fetching current counter value:', currentRes.error);
                return;
            }
            const currentLikes = currentRes.data.likes;

            const likedRes = await supabase.from('likedStateCard').select().eq('user_id',user?.id);
            if(likedRes.error || !likedRes.data) {
                return;
            }else{
                const ids = likedRes.data.map((i) => i.state_id);
                if(ids.length > 0 && ids.includes(id)){
                    // 赞过
                    const likeRes = await supabase.from('likedStateCard').delete().eq('state_id', id).eq('user_id',user?.id);
                    if(likeRes.error) {
                        return;
                    }else{
                        const res = await supabase.from('graphicState').update({
                            likes: `${Number(currentLikes) - 1}`,
                        }).eq('id',id);
                        if(res.error) return;
                    }
                }else{
                    // 加入点赞库
                    const likeRes = await supabase.from('likedStateCard').insert({
                        state_id: id,
                        user_id: user?.id,
                    })
                    if(likeRes.error) {
                        return;
                    }else{
                        const res = await supabase.from('graphicState').update({
                            likes: `${Number(currentLikes) + 1}`,
                        }).eq('id',id);
                        if(res.error) return;
                    }
                }
            }
        }else{
            handleShowToast(true,'请先登录')
        }
    }
    const handleStarStateCard = async (item: { id:string,img_url:string,title:string,description:string }) => {
        const {data:{user}} = await supabase.auth.getUser();
        if(user){
            // 获取当前点赞数
            const currentRes = await supabase
                .from('graphicState')
                .select('stars')
                .eq('id', item.id)
                .single();

            if (currentRes.error) {
                console.error('Error fetching current counter value:', currentRes.error);
                return;
            }
            const currentStars = currentRes.data.stars;

            const StaredRes = await supabase.from('staredCard').select().eq('user_id',user?.id);
            if(StaredRes.error || !StaredRes.data) {
                return;
            }else{
                const ids = StaredRes.data.map((i) => i.state_id);
                if(ids.length > 0 && ids.includes(item.id)){
                    const StarRes = await supabase.from('staredCard').delete().eq('card_id', item.id).eq('user_id',user?.id);
                    if(StarRes.error) {
                        return;
                    }else{
                        const res = await supabase.from('graphicState').update({
                            stars: `${Number(currentStars) - 1}`,
                        }).eq('id',item.id);
                        if(res.error) return;
                    }
                }else{
                    const StarRes = await supabase.from('staredCard').insert({
                        card_id: item.id,
                        user_id: user?.id,
                        img_url: item.img_url.split('/CroKnitTime/stateImages/')[1]?.split('?token=')[0],
                        title: item.title,
                        description: item.description,
                        type: 'graphic state/动态'
                    })
                    if(StarRes.error) {
                        return;
                    }else{
                        const res = await supabase.from('graphicState').update({
                            stars: `${Number(currentStars) + 1}`,
                        }).eq('id',item.id);
                        if(res.error) return;
                    }
                }
            }
        }else{
            handleShowToast(true,'请先登录')
        }
    }
    const [showDetailDialog,setShowDetailDialog] = useState(false);
    const [detailItem,setDetailItem] = useState({id:'',img_url:'',title:'',description:'',created_at:'',likes:'',stars:'',user:{username:'',avatar_url: ''}});
    return (
        <>
            {loading ? <div className={'width-100 height-100 flex-1 flex both-center'}>
                <LandLoading />
            </div> : (communityStateCardData && communityStateCardData?.length >0) ? <div className={'grid gap-24'} style={{gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))'}}>
                {communityStateCardData?.map(i =>  <StateCard
                    key={i.img_url}
                    isEnglish={isEnglish}
                    stateId={i.id}
                    imgUrl={i.img_url}
                    title={i.title}
                    time={i.created_at}
                    like={i.likes}
                    star={i.stars}
                    username={i?.user?.username}
                    avatarUrl={i.users.avatar_url}
                    isOfficial={i?.user?.is_official}
                    onCardClick={option => {
                        switch (option) {
                            case 'download': handleDownloadStateCard?.(i.img_url);break;
                            case 'like': handleLikeStateCard?.(i.id);break;
                            case 'star': handleStarStateCard?.(i);break;
                            case 'detail': {
                                setShowDetailDialog?.(true);
                                setDetailItem(i)
                            };break;
                            default: console.log(option);break;
                        }
                    }}
                />)}
            </div> : <div className={'width-100 height-100 flex-1 flex items-center justify-center'}>
                <LandState type={'empty'} title={isEnglish?<>no states, click the [+] button to publish!</>:<>暂无动态, 点击 [ + ] 发布吧</>}/>
            </div>}
            {toast && <LandMessage show={toast} text={toastText} />}
            <StateCardDetailDialog
                show={showDetailDialog}
                onClose={() => setShowDetailDialog(false)}
                data={detailItem}
                description={detailItem.description}
                onLikeClick={()=> handleLikeStateCard?.(detailItem)}
                onStarClick={()=> handleStarStateCard?.(detailItem)}
            />
        </>
    )
}
export default CommunityStateCard;
