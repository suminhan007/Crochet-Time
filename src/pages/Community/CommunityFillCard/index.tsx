//@ts-nocheck
import React, { useEffect, useState } from "react";
import {
  LandLink,
  LandLoading, LandMessage,
  LandState
} from "@suminhan/land-design";
import { useNavigate } from "react-router-dom";
import FillCard from "./FillCard.tsx";
import ImgPreview from "../../../components/ImgPreivew.tsx";
import { CommunityFillCard as CommunityFillCardType } from "../types";
import { fetchCommunityCardData } from "../utils";
import { COMMUNITY_TABLES, STORAGE_PATHS } from "../constants";

const CommunityFillCard: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [communityFillCardData, setCommunityFillCardData] = useState<CommunityFillCardType[]>([]);
  const [toast, setToast] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    fetchCommunityCardData(
      COMMUNITY_TABLES.FILL_CARD,
      `
                id,
                img_url,
                user_id,
                users (
                    id,
                    username,
                    sex,
                    is_official,
                    avatar_url
                )
            `,
      STORAGE_PATHS.FILL_CARDS,
      setCommunityFillCardData,
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
      </div> : (communityFillCardData && communityFillCardData?.length > 0) ? <div className={'grid gap-24 p-24'} style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))' }}>
        {communityFillCardData?.map(i => <FillCard key={i.id} id={i.id} img_url={i.img_url} username={i?.users?.username} avatar_url={i?.users?.avatar_url} isOfficial={i?.users?.is_official} onDownloadFail={() => handleShowToastMessage(true, '下载失败，请稍后再试')} onDownloadSuccess={() => handleShowToastMessage(true, '下载成功，请前往电脑文件夹中查看')} onPreview={() => setPreviewUrl(i.img_url)} />
        )}
      </div> : <div className={'width-100 height-100 flex-1 flex items-center justify-center'}>
        <LandState type={'empty'} title={<>暂无公开配色卡, <LandLink
          onClick={() => navigate('/type=tools-fillDrawer')}>前往制作</LandLink>或<LandLink
            onClick={() => navigate('/type=repository?assetsType=fill-card')}>发布我的配色卡</LandLink></>} />
      </div>}
      {toast && <LandMessage show={toast} text={toastText} />}
      <ImgPreview show={Boolean(previewUrl)} img_url={previewUrl} onClose={() => setPreviewUrl('')} />
    </>
  )
}
export default CommunityFillCard;
