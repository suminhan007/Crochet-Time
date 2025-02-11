//@ts-nocheck
import React, {useEffect, useState} from "react";
import supabase from "../../../utils/supabse.ts";
import {
    Icon,
    LandButton,
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
                description,
                origin_img_url
              )
            `)

        if (error) {
            console.error('Error fetching image:', error);
        } else if (communityData && communityData.length > 0) {
            const { data: OriginUrlData, error } = await supabase
                .storage
                .from('ColorCardCollect')
                .createSignedUrls(communityData?.map(i => i.colorFetchImageCollect.origin_img_url), 60)
            if(error){

            }else{
                const { data: UrlData, error:UrlError } = await supabase
                    .storage
                    .from('ColorCardCollect')
                    .createSignedUrls(communityData?.map(i => i.colorFetchImageCollect.img_url), 60)
                if(UrlError){}else{
                    const imgData = communityData?.map((i,idx) => Object.assign(i, { img_url: UrlData[idx].signedUrl,origin_img_url: OriginUrlData[idx].signedUrl, user:i.users }));
                    setCommunityColorCardData(imgData); // 更新图片 URL
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
        const downloadUrl =url.split('?token=')[0].split('ColorCardCollect/')[1];
        const response = await supabase.storage.from('ColorCardCollect').download(downloadUrl);
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
            </div> : (communityColorCardData && communityColorCardData?.length >0) ? <div className={'grid gap-24'} style={{gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))'}}>
                {communityColorCardData?.map(i =>  <div key={i.origin_img_url} className={'flex column gap-8'}>
                    <img src={i.origin_img_url} alt={i.origin_img_url} width={'100%'} className={'radius-8 overflow-hidden'} style={{aspectRatio:'4/3',objectFit:'cover'}}/>
                    <div className={'flex gap-4'}>
                        {
                            i.colorFetchImageCollect?.colors?.map((color:{id:string,value:string}) => <div key={color.id} className={'flex-1'} style={{backgroundColor:color.value,height:'12px'}}></div>)
                        }
                    </div>
                    <div className={'flex items-center justify-between'}>
                        <div className={'fs-12 color-gray-3'}>{i?.user?.username}</div>
                        <LandButton type={'text'}
                                    icon={<Icon name={'download'}/>} size={'small'} onClick={() =>handleDownloadColorCard?.(i.img_url)}></LandButton>
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
