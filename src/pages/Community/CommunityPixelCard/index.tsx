//@ts-nocheck
import React, { useEffect, useState } from "react";
import {
  LandLink,
  LandLoading,
  LandMessage,
  LandState
} from "@suminhan/land-design";
import { useNavigate } from "react-router-dom";
import PixelCard from "./PixelCard.tsx";
import ImgPreview from "../../../components/ImgPreivew.tsx";
import { CommunityPixelCard as CommunityPixelCardType } from "../types";
import { fetchCommunityCardData } from "../utils";
import { COMMUNITY_TABLES, STORAGE_PATHS } from "../constants";

const CommunityPixelCard: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [communityPixelCardData, setCommunityPixelCardData] = useState<CommunityPixelCardType[]>([]);
  const [toast, setToast] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    fetchCommunityCardData(
      COMMUNITY_TABLES.PIXEL_CARD,
      `
                id,
                img_url,
                size,
                user_id,
                users (
                    id,
                    username,
                    sex,
                    is_official,
                    avatar_url
                )
            `,
      STORAGE_PATHS.PIXEL_CARDS,
      setCommunityPixelCardData,
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
      </div> : (communityPixelCardData && communityPixelCardData?.length > 0) ? <div className={'grid gap-24 p-24'} style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))' }}>
        {communityPixelCardData?.map(i => <PixelCard key={i.id} id={i.id} img_url={i.img_url} size={i.size} username={i?.users?.username} avatar_url={i?.users?.avatar_url} isOfficial={i?.users?.is_official} onDownloadFail={() => handleShowToastMessage(true, '下载失败，请稍后再试')} onDownloadSuccess={() => handleShowToastMessage(true, '下载成功，请前往电脑文件夹中查看')} onPreview={() => setPreviewUrl(i.img_url)} />)}
      </div> : <div className={'width-100 height-100 flex-1 flex items-center justify-center'}>
        <LandState type={'empty'} title={<>暂无公开像素卡, <LandLink
          onClick={() => navigate('/type=tools-pixelDrawer')}>前往制作</LandLink>或<LandLink
            onClick={() => navigate('/type=repository?assetsType=pixel-card')}>发布我的像素卡</LandLink></>} />
      </div>}
      {toast && <LandMessage show={toast} text={toastText} />}
      <ImgPreview show={Boolean(previewUrl)} img_url={previewUrl} onClose={() => setPreviewUrl('')} />
    </>
  )
}
export default CommunityPixelCard;
