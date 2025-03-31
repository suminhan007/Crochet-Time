import React, { useEffect, useState } from "react";
import CardListComponent from "./utils/CardListComponent";
import { fetchImgPixelCardData } from "../../utils/FetchUtils";
import { ImgPixelCard } from "../../utils/types";

const ImgPixelCardList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [imgPixelData, setImgPixelData] = useState<ImgPixelCard[]>([]);

  useEffect(() => {
    fetchImgPixelCardData(setImgPixelData, setLoading);
  }, []);

  // ImgPixelCard doesn't need any special rendering for the info section
  const renderCardInfo = () => null;

  return (
    <CardListComponent
      loading={loading}
      cardData={imgPixelData}
      emptyStateText="暂无图片像素卡"
      createLink="/type=tools-imgPixelDrawer"
      downloadFolderPath="imgPixelCards"
      tableName="imgPixelCard"
      renderCardInfo={renderCardInfo}
      publishDialogTitle="确认发布该图片像素卡到社区？"
      publishDialogContent="图片像素卡发布到社区后将成为公开图片像素卡，允许所有人查看、下载。"
      deleteDialogTitle="确认删除该图片像素卡？"
      deleteDialogContent="删除后不可恢复，请谨慎操作！"
    />
  );
};

export default ImgPixelCardList;