//@ts-nocheck
import React, {useEffect, useState} from "react";
import supabase from "../../../utils/supabse.ts";
import {
    LandLink,
    LandLoading, LandMessage,
    LandState
} from "@suminhan/land-design";
import {useNavigate} from "react-router-dom";

const CommunityColorCard:React.FC = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true);
    const [communityColorCardData, setCommunityColorCardData] = useState<any[]>([]);
    const fetchLatestImage = async () => {
        const { data:communityData, error } = await supabase
            .from('CommunityColorCard')
            .select(`
              user_id,
              card_id,
              users (
                id,
                username,
                sex
              ),
              colorFetchImageCollect (
                id,
                img_url,
                colors,
                description
              )
            `)

        if (error) {
            console.error('Error fetching image:', error);
        } else if (communityData && communityData.length > 0) {
            console.log(communityData);
            const { data: UrlData, error } = await supabase
                .storage
                .from('ColorCardCollect')
                .createSignedUrls(communityData?.map(i => i.colorFetchImageCollect.img_url), 60)
            if(error){

            }else{
                const imgData = communityData?.map((i,idx) => Object.assign(i, { img_url: UrlData[idx].signedUrl,user:i.users }));
                setCommunityColorCardData(imgData); // 更新图片 URL
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
            </div> : (communityColorCardData && communityColorCardData?.length >0) ? <div className={'grid gap-16'} style={{gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))'}}>
                {communityColorCardData?.map(i =>  <div key={i.img_url} className={'flex column gap-8'}>
                    <img src={i.img_url} alt={i.img_url} width={'100%'}/>
                    <div className={'flex'}>
                        {/*<LandAvatar name= size={30}/>*/}
                        <div className={'fs-12 color-gray-3'}>{i?.user?.username}</div>
                    </div>
                </div>)}
            </div> : <div className={'width-100 height-100 flex-1 flex items-center justify-center'}>
                <LandState type={'empty'} title={<>暂无公开色卡, <LandLink
                    onClick={() => navigate('/type=aids-colorPicker')}>前往制作</LandLink>或<LandLink
                    onClick={() => navigate('/type=repository')}>发布我的色卡</LandLink></>}/>
            </div>}
            {toast && <LandMessage show={toast} text={toastText} />}
        </>
    )
}
export default CommunityColorCard;
