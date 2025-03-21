import React, { useCallback, useEffect, useMemo, useState } from "react";
import CanvasBoard, { Path } from "./CanvasBoard.tsx";
import {
  gridType,
  Icon,
  LandColorPicker,
  LandFlex,
  LandGrid,
  LandMenu,
  LandNumberInput,
} from "@suminhan/land-design";
import { hexToRgba } from "../../../../../../craft-design-studio/src/hooks/hexToRgba.ts";
import supabase from "../../../../utils/supabse.ts";
import isWhite from "../../../../utils/isWhite.ts";

type LayerType = {
  layer_id: string;
  layer_name: string;
  path_data?: Path[];
};

const Brush_Type_Data = [
  {
    id: "default",
    name: "默认",
    style: { height: "2px", backgroundColor: "#000", borderRadius: "2px" },
  },
  {
    id: "highlight",
    name: "高亮笔",
    style: {
      height: "12px",
      backgroundColor: "rgba(51, 184, 237, 0.36)",
      borderRadius: "6px",
    },
  },
];

type Props = {
}
const WorktopDraft: React.FC<Props> = ({}) => {
  //@ts-ignore
  const [colorData, setColorData] = useState<
    { id: string; title: string; colors: { value: string; name: string }[] }[]
  >([]);
  const [brushColor, setBrushColor] = useState<string>("#000");
  const [brushWidth, setBrushWidth] = useState<number>(2);
  const [widthRange, setWidthRange] = useState<{ min: number; max: number }>({
    min: 1,
    max: 20,
  });
  const [activeBrush, setActiveBrush] = useState<string>("default");

  const [activeColorTab, setActiveColorTab] = useState<string>(
    "gift-2mm"
  );

  // 换画笔
  useEffect(() => {
    switch (activeBrush) {
      case "default": {
        setWidthRange({ min: 1, max: 20 });
        setBrushWidth(2);
        break;
      }
      case "highlight": {
        setWidthRange({ min: 6, max: 32 });
        setBrushWidth(12);
        setBrushColor("rgba(51, 184, 237, 0.36)");
        break;
      }
      default:
        break;
    }
  }, [activeBrush]);

  // 颜色转换
  const handleColorChange = useCallback(
    (color: string) => {
      if (activeBrush === "default") {
        setBrushColor(color);
      }
      if (activeBrush === "highlight") {
        setBrushColor(hexToRgba(color, 0.36));
      }
    },
    [activeBrush]
  );

  // 图层
  const [layers, setLayers] = useState<LayerType[]>([{ layer_id: "1", layer_name: "1",path_data:[] }]);
  const [activeLayer, setActiveLayer] = useState<string>("1");
  // 最大图层
  const layerAddDisabled = useMemo(() => layers?.length >= 20, [layers]);

  const updateDraftData = async (data:LayerType[]) => {
    const href = window.location.href;
    if(href.includes('project_id')){
      const projectId = href.split('project_id=')[1];
      await supabase.from('CKTStudioTask').update({
        edit_time: `${Date.now()}`,
        data: data
      }).eq('id',projectId)
    }
  }
  const handleDrawEnd = (idx: number, data?: Path[]) => {
    if(!data || data?.length<=0) return;
    const boards = document.querySelectorAll(".draft-canvas-board");
    const previewBoards = document.querySelectorAll(
      ".draft-canvas-board-preview"
    );
    const mainCanvas = boards[idx] as HTMLCanvasElement;
    const previewCanvas = previewBoards[idx] as HTMLCanvasElement;

    if (mainCanvas && previewCanvas) {
      const previewContext = previewCanvas.getContext("2d");
      if (previewContext) {
        previewContext.clearRect(
          0,
          0,
          previewCanvas.width,
          previewCanvas.height
        );
        previewContext.drawImage(
          mainCanvas,
          0,
          0,
          previewCanvas.width,
          previewCanvas.height
        );
      }
    }
    const newLayerData = layers?.map((i, index) =>
      index === idx ? Object.assign(i, { path_data: data }) : i
    );
    setLayers(newLayerData);
    updateDraftData?.(newLayerData)
  };

  const getInitData = async () => {
    const href = window.location.href;
    if(href.includes('project_id')){
      const projectId = href.split('project_id=')[1];
      const {data,error} = await supabase.from('CKTStudioTask').select().eq('id', projectId).single()
      if(error){}else{
        setLayers(data.data)
      }
    }
  }
  useEffect(() => {
    getInitData();
  }, []);
  return (
    <div className="relative flex width-100 height-100 bg-gray">
      {/* 左边图层区域 */}
      <div
        style={{ width: "120px" }}
        className="flex column gap-12 py-24 pl-24 height-100 shrink-0 overflow-auto scrollbar-none"
      >
        {layers?.map((layersItem, layersIndex) => (
          <div
            key={layersItem.layer_id ?? layersIndex}
            className="flex column items-center gap-4 width-100 fs-12 color-gray-3"
            onClick={() => setActiveLayer(layersItem.layer_id)}
          >
            <div
              className={`width-100 bg-white radius-12 ${
                activeLayer === layersItem.layer_id ? "border-primary" : ""
              } transition`}
              style={{ aspectRatio: 1 }}
            >
              <canvas
                className="draft-canvas-board-preview"
                width={96}
                height={96}
              ></canvas>
            </div>
            {layersItem.layer_name}
          </div>
        ))}
        <div
          className={`flex both-center border ratio-1 radius-12 width-100 hover:bg-gray ${
            layerAddDisabled ? "events-none" : "cursor-pointer"
          } transition`}
          onClick={
            layerAddDisabled
              ? undefined
              : () =>{
              const newLayers = [
                ...layers,
                {
                  layer_id: `${layers?.length + 1}`,
                  layer_name: `${layers?.length + 1}`,
                  path_data: []
                },
              ]
                  setLayers(newLayers);
                  updateDraftData(newLayers);
            }
          }
        >
          <Icon name="add" />
        </div>
      </div>

      {/* 中间画布区域 */}
      <div className="relative flex-1 width-1 height-100 flex both-center overflow-auto">
        {layers?.map((i, idx) => (
          <div
            key={idx}
            className={`${
              activeLayer === i.layer_id
                ? ""
                : "absolute top-0 left-0 opacity-0 events-none"
            }`}
          >
            <CanvasBoard
              strokeColor={brushColor}
              lineWidth={brushWidth}
              drawEnd={(data) => handleDrawEnd(idx, data)}
              canvasClassName="draft-canvas-board"
              initData={layers?.filter(itm => itm.layer_id === activeLayer)[0]?.path_data}
            />
          </div>
        ))}
        <div className="absolute"></div>
      </div>

      {/* 右边配置区域 */}
      <div
        style={{ width: "240px" }}
        className="flex column gap-24 py-24 px-12 height-100 bg-white shrink-0 overflow-auto"
      >
        <LandFlex column gap={12}>
          <div className="fs-14 fw-600">画笔粗细</div>
          <LandNumberInput
            min={widthRange.min}
            max={widthRange.max}
            width="100%"
            value={brushWidth}
            onChange={(val) => setBrushWidth(val)}
          />
        </LandFlex>
        <LandFlex column gap={12}>
          <div className="fs-14 fw-600">画笔颜色</div>
          <LandColorPicker
            style={{ width: "100%" }}
            className="radius-4"
            value={brushColor}
            onChange={(color) => handleColorChange?.(color)}
          />
          {Boolean(colorData?.length) ?? (
            <>
              <div
                className="overflow-auto width-100 mt-12 shrink-0 scrollbar-none"
                style={{ height: "48px" }}
              >
                <LandMenu
                  data={colorData?.map((item) => ({
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
                  maxHeight: 232,
                }}
              >
                {colorData
                  ?.filter((i) => i.id === activeColorTab)[0]
                  ?.colors?.map((c) => (
                    <div
                      key={c.value}
                      className="flex column gap-4 items-center fs-12 color-gray-4"
                    >
                      <div
                        className={`width-100 border radius-50 ratio-1 shrink-0 ${
                          isWhite(c.value) ? "border" : ""
                        }`}
                        style={{ backgroundColor: c.value }}
                        onClick={() => handleColorChange?.(c.value)}
                      ></div>
                      <p className="width-100 ellipsis" title={c.name}>
                        {c.name}
                      </p>
                    </div>
                  ))}
              </div>
            </>
          )}
        </LandFlex>
        <LandFlex column gap={12}>
          <div className="fs-14 fw-600">笔刷</div>
          <LandGrid
            className="width-100"
            type={gridType.ColumnRepeat}
            repeatNum={3}
          >
            {Brush_Type_Data?.map((brushItem, brushIndex) => (
              <div
                key={brushItem.id ?? brushIndex}
                className="flex column justify-center gap-8"
                onClick={() => setActiveBrush(brushItem.id)}
              >
                <div
                  className={`flex both-center ratio-1 bg-gray radius-8 ${
                    brushItem.id === activeBrush ? "border-primary" : ""
                  }`}
                >
                  <div style={{ width: "50%", ...brushItem.style }}></div>
                </div>
                <div className="fs-12 color-gray-3 text-center">
                  {brushItem.name}
                </div>
              </div>
            ))}
          </LandGrid>
        </LandFlex>
      </div>
    </div>
  );
};

export default WorktopDraft;
