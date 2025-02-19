import React, {useState} from "react";
import {Icon, LandAvatar, LandButton, LandLoading} from "@suminhan/land-design";
import supabase from "../../../utils/supabse.ts";

type Props = {
    img_url?:string;
    origin_img_url?:string;
    username?:string;
    avatar_url?:string;
    isOfficial?:boolean;
    colors?:{id:string,value:string}[];
    onDownloadClick?: () => void;
    onDownloadFail?: () => void;
    onDownloadSuccess?: () => void;
}
const ColorCard:React.FC<Props> = ({
                                       img_url,
                                       origin_img_url,
                                       avatar_url,
                                       username,
                                       isOfficial,
                                       colors,
                                       onDownloadFail,
    onDownloadSuccess,
                                   }) => {
    const [downloadLoading, setDownloadLoading] = useState(false);
    const handleDownloadColorCard = async (url?:string) => {
        if(!url) return;
        setDownloadLoading(true);
        const downloadUrl =url.split('?token=')[0].split('CroKnitTime/colorCards/')[1];
        const response = await supabase.storage.from('CroKnitTime/colorCards').download(downloadUrl);
        if(response.error){
            onDownloadFail?.()
            setDownloadLoading(false)
        }else {
            // 创建一个a标签用于下载
            const link = document.createElement('a');
            link.href = URL.createObjectURL(response.data);
            link.download = downloadUrl.split('.png')[0]; // 设置下载的文件名
            link.click();
            // 释放内存
            URL.revokeObjectURL(link.href);
            setDownloadLoading(false);
            onDownloadSuccess?.()
        }
    }
    return <div className={'flex column gap-8'}>
        <img src={origin_img_url} alt={origin_img_url} width={'100%'}
             className={'radius-8 overflow-hidden events-none'} style={{aspectRatio: '4/3', objectFit: 'cover'}}/>
        <div className={'flex gap-4'}>
            {
                colors?.map((color: { id: string, value: string }) => <div key={color.id} className={'flex-1'}
                                                                              style={{
                                                                                  backgroundColor: color.value,
                                                                                  height: '12px'
                                                                              }}></div>)
            }
        </div>
        <div className={'flex items-center justify-between'}>
            <div className={'flex items-center gap-4 fs-12 color-gray-3'}>
                <LandAvatar imgUrl={avatar_url} size={24}/>
                {username}
                {isOfficial && <div style={{width: '12px', height: '12px'}}
                                              className={'flex both-center fs-12 bg-primary radius-8 color-white'}>v</div>}
            </div>
            <LandButton type={'text'}
                        pop={downloadLoading?'下载中...':'下载原色卡'}
                        disabled={downloadLoading}
                        icon={downloadLoading ? <LandLoading size={16}/> : <Icon name={'download'}/>}
                        size={'small'} onClick={() => handleDownloadColorCard?.(img_url)}></LandButton>
        </div>
    </div>
}
export default ColorCard;
