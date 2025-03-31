//@ts-nocheck
import React, { useEffect, useState } from "react";
import {
  LandLink,
  LandLoading, LandMessage,
  LandState
} from "@suminhan/land-design";
import { useNavigate } from "react-router-dom";
import ColorCard from "./ColorCard.tsx";
import ImgPreview from "../../../components/ImgPreivew.tsx";
import { CommunityColorCard as CommunityColorCardType } from "../types";
import { fetchCommunityCardData } from "../utils";
import { COMMUNITY_TABLES, STORAGE_PATHS } from "../constants";

const CommunityColorCard: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [communityColorCardData, setCommunityColorCardData] = useState<CommunityColorCardType[]>([]);
  const [toast, setToast] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    fetchCommunityCardData(
      COMMUNITY_TABLES.COLOR_CARD,
      `
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
            `,
      STORAGE_PATHS.COLOR_CARDS,
      setCommunityColorCardData,
      setLoading
    );
  }, []);

  const handleShowToastMessage = (show: boolean, text: string) => {
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
      </div> : (communityColorCardData && communityColorCardData?.length > 0) ? <div className={'grid gap-24 p-24'} style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))' }}>
        {communityColorCardData?.map(i => <ColorCard
          key={i.origin_img_url}
          id={i.id}
          origin_img_url={i.origin_img_url}
          img_url={i.img_url}
          username={i?.users?.username}
          avatar_url={i?.users?.avatar_url}
          isOfficial={i?.users?.is_official}
          colors={i.colors}
          onDownloadFail={() => handleShowToastMessage(true, '下载失败，请稍后再试')}
          onDownloadSuccess={() => handleShowToastMessage(true, '下载成功，请前往电脑文件夹中查看')}
          onPreview={() => setPreviewUrl(i.img_url)}
        />)}
      </div> : <div className={'width-100 height-100 flex-1 flex items-center justify-center'}>
        <LandState type={'empty'} title={<>暂无公开色卡, <LandLink
          onClick={() => navigate('/type=tools-colorPicker')}>前往制作</LandLink>或<LandLink
            onClick={() => navigate('/type=repository?assetsType=color-card')}>发布我的色卡</LandLink></>} />
      </div>}
      {toast && <LandMessage show={toast} text={toastText} />}
      <ImgPreview show={Boolean(previewUrl)} img_url={previewUrl} onClose={() => setPreviewUrl('')} />
    </>
  )
}
export default CommunityColorCard;
