import React, { useEffect, useState } from "react";
import CardListComponent from "./utils/CardListComponent";
import { fetchPixelCardData } from "../../utils/FetchUtils";
import { PixelCard } from "../../utils/types";

const PixelCardList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pixelData, setPixelData] = useState<PixelCard[]>([]);

  useEffect(() => {
    fetchPixelCardData(setPixelData, setLoading);
  }, []);

  const renderCardInfo = (item: PixelCard) => (
    <>{item.size}</>
  );

  return (
    <CardListComponent
      loading={loading}
      cardData={pixelData}
      emptyStateText="暂无像素卡"
      createLink="/type=tools-pixelDrawer"
      downloadFolderPath="pixelCards"
      tableName="pixelCard"
      renderCardInfo={renderCardInfo}
      publishDialogTitle="确认发布该像素卡到社区？"
      publishDialogContent="像素卡发布到社区后将成为公开像素卡，允许所有人查看、下载。"
      deleteDialogTitle="确认删除该像素卡？"
      deleteDialogContent="删除后不可恢复，请谨慎操作！"
    />
  );
};

export default PixelCardList;