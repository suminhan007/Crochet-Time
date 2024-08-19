import {
  Icon,
  LandButton,
  LandContent,
  LandFlex,
  LandNumberInput,
  LandSwitch,
  LandTitle,
  LandUploader,
} from "@suminhan/land-design";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { downloadHtmlAsImg } from "../../utils";
import { PageTitle } from "../../components/PageTitle";
import { IconDec } from "../../components/Icon";
import { StyledColorFillInput } from "./ColorFill";

type Props = {};
const PixelDrawer: React.FC<Props> = ({}) => {
  const pixelCanvasRef = useRef<HTMLDivElement>(null);
  // const [currentPixel, setCurrentPixel] = useState<string>("");
  const [sizeX, setSizeX] = useState<number>(12);
  const [sizeY, setSizeY] = useState<number>(12);
  const [square, setSquare] = useState<number>(16);
  const defaultColorList = useMemo(
    () =>
      Array.from({ length: sizeX }).map((_itemX, indexX) =>
        Array.from({ length: sizeY }).map((_itemY, indexY) => ({
          key: `${indexX}-${indexY}`,
          value: "transparent",
        }))
      ),
    [sizeX, sizeY]
  );
  const [colorList, setColorList] =
    useState<{ key: string; value: string }[][]>(defaultColorList);
  useEffect(() => {
    const newList = Array.from({ length: sizeX }).map((_itemX, indexX) =>
      Array.from({ length: sizeY }).map((_itemY, indexY) => ({
        key: `${indexX}-${indexY}`,
        value:
          colorList[indexX] && colorList[indexX][indexY]
            ? colorList[indexX][indexY].value
            : "transparent",
      }))
    );
    setColorList(newList);
  }, [sizeX, sizeY]);

  // 参考图
  const [imgUrl, setImgUrl] = useState<string>("");
  const imgRef = useRef<HTMLImageElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const [wrapRatio, setWrapRatio] = useState<number>(2);
  // 根据图片 size 处理色卡布局
  const [size, setSize] = useState<{ w: number; h: number; ratio: number }>({
    w: 200,
    h: 200,
    ratio: 1,
  });
  useEffect(() => {
    if (!imgRef.current) return;
    const img = imgRef.current.getBoundingClientRect();
    setSize({ w: img.width, h: img.height, ratio: img.width / img.height });
  }, [imgUrl, imgRef]);

  useEffect(() => {
    if (!imgWrapRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWrapRatio(entry.contentRect.width / entry.contentRect.height);
      }
    });
    observer.observe(imgWrapRef.current);
    return () => observer.disconnect();
  });
  const [color, setColor] = useState<string>("");
  const [useBg, setUseBg] = useState<boolean>(false);
  const handleDraw = (cur: string) => {
    const newList = colorList.map((i) =>
      i.map((j) => {
        if (j.key === cur) {
          return { key: j.key, value: color };
        } else {
          return j;
        }
      })
    );
    setColorList(newList);
  };
  return (
    <StyledPixelLandContent className="flex-1 flex column items-start gap-32 py-24 px-16 width-100 height-100 scrollbar-none">
      {/* 缩放画布 */}
      <div className="flex gap-12 width-100 justify-end">
        <div
          style={{ width: "20px", height: "20px" }}
          onClick={() => {
            if (square > 12) {
              let s = square - 4;
              setSquare(s);
            }
          }}
        >
          <IconDec fill="#999" size={20} />
        </div>
        <div
          style={{ width: "20px", height: "20px" }}
          onClick={() => {
            if (square < 32) {
              let s = square + 4;
              setSquare(s);
            }
          }}
        >
          <Icon name="add" stroke="#999" strokeWidth={2} size={20} />
        </div>
      </div>
      <div
        className="scrollbar-none"
        style={{
          width: "calc(100vw - 32px - 20px)",
          maxHeight:
            "calc(100vh - 64px - 48px - 76px - 140px - 37px - 72px - 26px)",
          minHeight: "192px",
          maxWidth: "800px",
          margin: "0 auto",
          overflow: "auto",
        }}
      >
        <div
          ref={pixelCanvasRef}
          className="flex flex-wrap"
          style={{
            width: `${sizeX * square}px`,
            height: `${sizeY * square}px`,
            margin: "auto",
            background:
              imgUrl && useBg
                ? `url(${imgUrl}) center center/contain no-repeat`
                : "unset",
          }}
        >
          {Array.from({ length: sizeX }).map((_itemX, indexX) => (
            <div
              key={indexX}
              className="flex column"
              style={{ flexDirection: "column-reverse" }}
            >
              {Array.from({ length: sizeY }).map((_itemY, indexY) => (
                <StylePixelItem
                  key={indexY}
                  className={`relative transition  ${
                    indexX === 0 ? "first-column" : ""
                  } ${indexY === 0 ? "last-row" : ""}`}
                  style={{
                    width: `${square}px`,
                    height: `${square}px`,
                    backgroundColor:
                      colorList[indexX] && colorList[indexX][indexY]
                        ? colorList[indexX][indexY].value
                        : "transparent",
                  }}
                  onTouchStart={() => {
                    handleDraw(`${indexX}-${indexY}`);
                  }}
                ></StylePixelItem>
              ))}
            </div>
          ))}
        </div>
      </div>
      <StyledColorFillInput
        className="flex items-center justify-center fs-12 color-gray-2 width-100 border radius-6 shrink-0"
        style={{
          background: color,
        }}
      >
        <input type="color" onChange={(e: any) => setColor?.(e.target.value)} />
      </StyledColorFillInput>

      <LandFlex column gap={8}>
        <PageTitle
          mainTitle="设置画布大小"
          mainInfo="画布大小范围为 4x4 - 48x48"
        />
        <LandFlex gap={16} bothCenter>
          <LandTitle title="宽:" type="p" />
          <LandNumberInput
            value={sizeX}
            onChange={(_e, val) => val >= 4 && val <= 48 && setSizeX(val)}
          />
          <LandTitle title="高:" type="p" />
          <LandNumberInput
            value={sizeY}
            onChange={(_e, val) => val >= 4 && val <= 48 && setSizeY(val)}
          />
        </LandFlex>
      </LandFlex>
      <LandFlex column gap={8}>
        <PageTitle mainTitle="导入参考图" />
        <LandSwitch checked={useBg} onChange={() => setUseBg(!useBg)} />
        <LandFlex
          gap={16}
          bothCenter
          className="overflow-hidden"
          style={{ height: useBg ? "100px" : "0px" }}
        >
          <LandUploader
            fileType="image/*"
            height="100px"
            onUpload={(url) => setImgUrl(url)}
            desc="点击上传图片或将图片拖拽于此"
            className="radius-12"
            width="100%"
          >
            {imgUrl && (
              <div
                ref={imgWrapRef}
                className="flex items-center justify-center width-100 height-100"
              >
                <img
                  ref={imgRef}
                  src={imgUrl}
                  className={`radius-8 ${
                    size.ratio < wrapRatio ? "height-100" : "width-100"
                  }`}
                />
              </div>
            )}
          </LandUploader>
        </LandFlex>
      </LandFlex>
      <LandFlex justify="center" gap={12}>
        <LandButton
          text="清空画布"
          onClick={() => setColorList(defaultColorList)}
        />
        <LandButton
          text="立即下载"
          type="background"
          className="flex-1"
          style={{ maxWidth: "200px" }}
          onClick={() => {
            downloadHtmlAsImg(pixelCanvasRef.current, "pixel-res", 3);
          }}
        />
      </LandFlex>
    </StyledPixelLandContent>
  );
};

const StyledPixelLandContent = styled(LandContent)`
  @media screen and (max-width: 800px) {
    .land-uploader-desc {
      font-size: 12px;
    }
  }
`;
const StylePixelItem = styled.div`
  box-sizing: border-box;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid var(--color-border-1);
    box-sizing: border-box;
    z-index: 0;
  }
  &.active {
    &::after {
      border-color: var(--color-text-5);
      z-index: 1;
    }
  }

  input {
    width: 0px;
    height: 0px;
    inline-size: 0px;
    padding: 0;
  }
`;
export default PixelDrawer;
