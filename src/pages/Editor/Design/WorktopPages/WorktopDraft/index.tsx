import React, { useState } from "react";
import CanvasBoard from "./CanvasBoard";
import { gridType, LandColorPicker, LandFlex, LandGrid, LandMenu, LandNumberInput } from "@suminhan/land-design";
import { ColorFill_Color_List_Data } from "../../../../mock";

const WorktopDraft: React.FC<{}> = ({ }) => {
  const [brushColor, setBrushColor] = useState<string>('#000');
  const [brushWidth, setBrushWidth] = useState<number>(2);

  const [activeColorTab, setActiveColorTab] = useState<string | number>("gift-2mm");
  const isWhite = (value: string) => {
    if (
      value === "white" ||
      value === "#fff" ||
      value === "#FFF" ||
      value === "#ffffff" ||
      value === "#FFFFFF"
    ) {
      return true;
    } else {
      return false;
    }
  };
  return <div className="relative flex width-100 height-100 bg-gray">
    {/* 左边图层区域 */}
    <div style={{ width: '120px' }} className="flex column py-24 pl-24 height-100 shrink-0"></div>

    {/* 中间画布区域 */}
    <div className="flex-1 width-1 height-100 flex both-center overflow-auto">
      <CanvasBoard strokeColor={brushColor} lineWidth={brushWidth} />
    </div>

    {/* 右边配置区域 */}
    <div style={{ width: '240px' }} className="flex column gap-24 py-24 px-12 height-100 border-left bg-white shrink-0">
      <LandFlex column gap={12}>
        <div className="fs-14 fw-600">画笔粗细</div>
        <LandNumberInput width='100%' value={brushWidth} onChange={val => setBrushWidth(val)} />
      </LandFlex>
      <LandFlex column gap={12}>
        <div className="fs-14 fw-600">画笔颜色</div>
        <LandColorPicker style={{ width: '100%' }} className="radius-4" value={brushColor} onChange={color => setBrushColor(color)} />
        <div
          className="overflow-auto width-100 mt-12 shrink-0 scrollbar-none"
          style={{ height: "48px" }}
        >
          <LandMenu
            data={ColorFill_Color_List_Data?.map((item) => ({
              key: item.id,
              title: item.title,
            }))}
            active={activeColorTab}
            onChange={(item) => setActiveColorTab(item.key)}
          />
        </div>
        <div
          className="grid width-100 gap-8 pt-12 overflow-auto pb-24"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(24px,1fr))",
            maxHeight: 232
          }}
        >
          {ColorFill_Color_List_Data
            ?.filter((i) => i.id === activeColorTab)[0]
            ?.colors?.map((c) => (
              <div
                key={c.value}
                className="flex column gap-4 items-center fs-12 color-gray-4"
              >
                <div
                  className={`width-100 border radius-50 ratio-1 shrink-0 ${isWhite(c.value) ? "border" : ""
                    }`}
                  style={{ backgroundColor: c.value }}
                  onClick={() => setBrushColor?.(c.value)}
                ></div>
                <p className="width-100 ellipsis" title={c.name}>{c.name}</p>
              </div>
            ))}
        </div>
      </LandFlex>
      <LandFlex column gap={12}>
        <div className="fs-14 fw-600">笔刷</div>
        <LandGrid className="width-100" type={gridType.RowRepeat} repeatNum={3}>
          <div className="ratio-1 bg-gray"></div>
          <div className="ratio-1 bg-gray"></div>
        </LandGrid>
      </LandFlex>
    </div>
  </div>;
};

export default WorktopDraft;
