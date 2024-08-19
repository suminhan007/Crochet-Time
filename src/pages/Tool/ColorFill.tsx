//@ts-nocheck
import {
  Icon,
  LandAffixContainer,
  LandButton,
  LandContent,
  LandFlex,
  LandTitle,
} from "@suminhan/land-design";
import React, { useMemo, useRef, useState } from "react";
import { ColorFill_Color_List_Data } from "../mock";
import styled from "styled-components";
import { downloadHtmlAsImg } from "../../utils";

type Props = {
  pathData?: { id: number; img: string; path: string[] }[];
};
const ColorFill: React.FC<Props> = ({ pathData = [] }) => {
  /** 当前选中的样式 */
  const [currentSvgId, setCurrentSvgId] = useState<number>(1);
  const currentSvg = useMemo(
    () => pathData.filter((itm) => itm.id === currentSvgId)[0],
    [currentSvgId]
  );
  /** 当前选中的path */
  const [currentPathId, setCurrentPathId] = useState<number>(0);
  const [colorList, setColorList] = useState<string[]>(
    Array.from({ length: currentSvg.path?.length }).map(() => "#DDDDDD")
  );
  /** 选择颜色 */
  const handleColorClick = (color: string) => {
    const resColorList = colorList?.map((itm, idx) =>
      idx + 1 === currentPathId ? color : itm
    );
    setColorList(resColorList);
  };

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
  const colorFillRef = useRef<HTMLOrSVGElement>(null);
  return (
    <StyledLandContent className="flex-1 flex column items-start gap-32 pt-24 px-16 width-100">
      <div className="flex column items-center gap-12 width-100">
        <div
          className="relative flex gap-12 mx-auto"
          style={{ height: "260px" }}
        >
          {/* 样式 */}
          <div
            className="flex column gap-8 height-100 scrollbar-none"
            style={{ width: "72px" }}
          >
            {pathData.map((item3, index3) => (
              <div
                key={index3}
                onClick={() => {
                  setCurrentSvgId(item3.id);
                  /** 是否清空colorList */
                }}
                className={`flex items-center justify-center radius-6 ratio-1 shrink-0 ${
                  currentSvgId === item3.id ? "border-primary" : "border"
                }`}
                style={{ width: "72px" }}
              >
                <img src={item3.img} width={58} />
              </div>
            ))}
          </div>
          <div ref={colorFillRef} className="relative height-100 ratio-1">
            <svg
              width="100%"
              viewBox="0 0 220 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="radius-8 bg-gray"
              onClick={() => setCurrentPathId(0)}
            >
              {currentSvg.path?.map((item, index) => (
                <path
                  key={index}
                  d={item}
                  fill={colorList[index] || "var(--color-bg-3)"}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  stroke={
                    index + 1 === currentPathId
                      ? "var(--color-text-3)"
                      : colorList[index] !== "#DDDDDD"
                      ? colorList[index]
                      : "#999"
                  }
                  className="transition"
                  onClick={(e: React.UIEvent) => {
                    e.stopPropagation();
                    setCurrentPathId(index + 1);
                  }}
                />
              ))}
            </svg>
          </div>
          <div
            className="absolute"
            style={{ bottom: "12px", right: "12px" }}
            onClick={() => {
              setCurrentPathId(0);
              downloadHtmlAsImg(
                colorFillRef.current,
                `crochet-time-color-fill-res`,
                3
              );
            }}
          >
            <Icon name="download" stroke="var(--color-text-4)" size={20} />
          </div>
        </div>
      </div>

      {/* 颜色 */}
      <StyledColorFillInput className="flex items-center justify-center fs-12 color-gray-2 width-100 border radius-8">
        <input
          type="color"
          onChange={(e: any) => handleColorClick?.(e.target.value)}
        />
        自定义颜色
      </StyledColorFillInput>
      <div
        className="flex-1 flex column width-100 pb-24"
        style={{ overflow: "auto" }}
      >
        {ColorFill_Color_List_Data.map((item) => (
          <LandFlex key={item.id} column>
            <LandTitle
              title={`【${item.title}】`}
              type="p"
              style={{ margin: "12px auto" }}
            />
            <div
              className="grid width-100 gap-8"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(36px,1fr))",
              }}
            >
              {item.colors?.map((c) => (
                <div
                  key={c.id}
                  className="flex column gap-4 items-center fs-12 color-gray-4"
                >
                  <div
                    className={`width-100 border radius-50 ratio-1 shrink-0 ${
                      isWhite(c.value) ? "border" : ""
                    }`}
                    style={{ backgroundColor: c.value }}
                    onClick={() => handleColorClick?.(c.value)}
                  ></div>
                  {/* {c.name} */}
                </div>
              ))}
            </div>
          </LandFlex>
        ))}
      </div>
    </StyledLandContent>
  );
};

const StyledLandContent = styled(LandContent)`
  overflow: auto;
  @media screen and (max-width: 800px) {
    gap: 16px;
    path {
      -webkit-tap-highlight-color: transparent;
    }
  }
`;

export const StyledColorFillInput = styled.label`
  height: 36px;
  input {
    width: 0px;
    height: 0px;
    opacity: 0;
  }
`;
export default ColorFill;
