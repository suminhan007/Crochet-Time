import React, { useEffect, useState } from "react";
import CardListComponent from "./utils/CardListComponent";
import { fetchFillCardData } from "../../utils/FetchUtils";
import { FillCard } from "../../utils/types";

const FillCardList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [fillData, setFillData] = useState<FillCard[]>([]);

  useEffect(() => {
    fetchFillCardData(setFillData, setLoading);
  }, []);

  // FillCard doesn't need any special rendering for the info section
  const renderCardInfo = () => null;

  return (
    <CardListComponent
      loading={loading}
      cardData={fillData}
      emptyStateText="暂无填色卡"
      createLink="/type=tools-fillDrawer"
      downloadFolderPath="fillCards"
      tableName="fillCard"
      renderCardInfo={renderCardInfo}
      publishDialogTitle="确认发布该填色卡到社区？"
      publishDialogContent="填色卡发布到社区后将成为公开填色卡，允许所有人查看、下载。"
      deleteDialogTitle="确认删除该填色卡？"
      deleteDialogContent="删除后不可恢复，请谨慎操作！"
    />
  );
};

export default FillCardList;