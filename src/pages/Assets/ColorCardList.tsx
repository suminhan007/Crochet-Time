import React, { useEffect, useState } from "react";
import CardListComponent from "./utils/CardListComponent";
import { fetchColorCardData } from "../../utils/FetchUtils";
import { ColorCard } from "../../utils/types";

const ColorCardList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [colorData, setColorData] = useState<ColorCard[]>([]);

  useEffect(() => {
    fetchColorCardData(setColorData, setLoading);
  }, []);

  const renderCardInfo = (item: ColorCard) => (
    <>
      {item.colors?.map((color) => (
        <div key={color.id} className={'flex-1 flex column gap-8'}>
          <div style={{
            height: '8px',
            backgroundColor: color.value
          }}></div>
          <div className={'fs-12 color-gray-4'}>{color.value}</div>
        </div>
      ))}
    </>
  );

  return (
    <CardListComponent
      loading={loading}
      cardData={colorData}
      emptyStateText="暂无色卡"
      createLink="/type=tools-colorPicker"
      downloadFolderPath="colorCards"
      tableName="colorCard"
      renderCardInfo={renderCardInfo}
      publishDialogTitle="确认发布该色卡到社区？"
      publishDialogContent="色卡发布到社区后将成为公开色卡，允许所有人查看、下载，发布后不可撤回。"
      deleteDialogTitle="确认删除该色卡？"
      deleteDialogContent="删除后不可恢复，已发布色卡也会随之删除，请谨慎操作！"
      grid={false}
    />
  );
};

export default ColorCardList;