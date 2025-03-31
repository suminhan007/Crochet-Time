import React, { useEffect, useMemo, useState } from "react";
import { Icon, LandAvatar, LandButton, LandLoading } from "@suminhan/land-design";
import supabase from "../../../utils/supabse.ts";

type Props = {
  id: string;
  img_url: string;
  origin_img_url?: string;
  username?: string;
  avatar_url?: string;
  isOfficial?: boolean;
  colors?: { id: string, value: string }[];
  onDownloadClick?: () => void;
  onDownloadFail?: () => void;
  onDownloadSuccess?: () => void;
  onPreview?: () => void;
}
const ColorCard: React.FC<Props> = ({
  id,
  img_url,
  origin_img_url,
  avatar_url,
  username,
  isOfficial,
  colors,
  onDownloadFail,
  onDownloadSuccess,
  onPreview,
}) => {
  const [downloadLoading, setDownloadLoading] = useState(false);
  const handleDownloadColorCard = async (url?: string) => {
    if (!url) return;
    setDownloadLoading(true);
    const downloadUrl = url.split('?token=')[0].split('CroKnitTime/colorCards/')[1];
    const response = await supabase.storage.from('CroKnitTime/colorCards').download(downloadUrl);
    if (response.error) {
      onDownloadFail?.()
      setDownloadLoading(false)
    } else {
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
  const [stared, setStarred] = useState<boolean>(false);
  const [starLoading, setStarLoading] = useState<boolean>(false);
  const [cancelStarLoading, setCancelStarLoading] = useState<boolean>(false);
  const getStaredStatus = async () => {
    const StaredRes = await supabase.from('staredCard').select();
    if (StaredRes.error || !StaredRes.data) {
      return;
    } else {
      const ids = StaredRes.data.map((i) => i.card_id);
      (ids.length > 0 && ids.includes(id)) && console.log(ids.length > 0 && ids.includes(id))
      setStarred(ids.length > 0 && ids.includes(id))
    }
  }
  useEffect(() => {
    getStaredStatus();
  }, [id])
  const handleStarColorCard = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const StaredRes = await supabase.from('staredCard').select().eq('user_id', user?.id);
      if (StaredRes.error || !StaredRes.data) {
        return;
      } else {
        const ids = StaredRes.data.map((i) => i.card_id);
        if (ids.length > 0 && ids.includes(id)) {
          setCancelStarLoading(true)
          const cancelRes = await supabase.from('staredCard').delete().eq('card_id', id).eq('user_id', user?.id);
          if (cancelRes.error) { } else {
            setCancelStarLoading(false);
          }
        } else {
          setStarLoading(true);
          const res = await supabase.from('staredCard').insert({
            card_id: id,
            user_id: user?.id,
            img_url: img_url.split('/CroKnitTime/colorCards/')[1]?.split('?token=')[0],
            type: 'colorCards'
          })
          if (res.error) { } else {
            setStarLoading(false)
          }

        }
        getStaredStatus();
        setCancelStarLoading(false);
      }
    }
  }
  const downloadPop = useMemo(() => {
    return <div className={'flex column gap-8 items-center'}>
      <img src={img_url} width={'120px'} />
      {downloadLoading ? '下载中...' : '下载原色卡'}
    </div>
  }, [downloadLoading, img_url])

  return <div className={'flex column gap-8'}>
    <div style={{ aspectRatio: '4/3' }} className={`width-100 radius-8 overflow-hidden ${onPreview ? 'cursor-zoom-in' : ''}`} onClick={onPreview}>
      <img src={origin_img_url} alt={origin_img_url} width={'100%'} height={'100%'}
        className={'events-none'} style={{ objectFit: 'cover' }} />
    </div>
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
        <LandAvatar imgUrl={avatar_url} size={24} />
        {username}
        {isOfficial && <div style={{ width: '12px', height: '12px' }}
          className={'flex both-center fs-12 bg-primary radius-8 color-white'}>v</div>}
      </div>
      <div className={'flex items-center gap-8'}>
        <LandButton type={'text'}
          pop={cancelStarLoading ? '取消收藏中...' : starLoading ? '收藏中...' : stared ? '取消收藏原色卡' : '收藏原色卡'}
          disabled={starLoading}
          icon={(starLoading || cancelStarLoading) ? <LandLoading size={16} /> : <Icon name={'star'} size={18} strokeWidth={0} fill={stared ? 'var(--color-orange-4)' : 'var(--color-border-3)'} />}
          size={'small'} onClick={() => handleStarColorCard?.()}></LandButton>
        <LandButton type={'text'}
          pop={downloadPop}
          disabled={downloadLoading}
          icon={downloadLoading ? <LandLoading size={16} /> : <Icon name={'download'} size={16} />}
          size={'small'} onClick={() => handleDownloadColorCard?.(img_url)}></LandButton>
      </div>
    </div>
  </div>
}
export default ColorCard;
