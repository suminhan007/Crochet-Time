// @ts-nocheck
import {
  Icon,
  LandAffixContainer,
  LandContent,
  LandFlex,
  LandGrid,
  LandTitle,
  gridType,
} from "@suminhan/land-design";
import React, { useMemo, useState } from "react";
import { ColorFill_Color_List_Data } from "../mock";
import styled from "styled-components";
import { downloadHtmlAsImg } from "../../utils";

type Props = {
  pathData?: { id: number; img: string; path: string[]; numPath: string[] }[];
};
const ColorFill: React.FC<Props> = ({ pathData = [] }) => {
  /** 当前选中的样式 */
  const [currentSvgId, setCurrentSvgId] = useState<number>(1);
  const currentSvg = useMemo(
    () => pathData.filter((itm) => itm.id === currentSvgId)[0],
    [currentSvgId]
  );
  /** 当前选中的path */
  const [currentPathId, setCurrentPathId] = useState<number>(1);
  const [colorList, setColorList] = useState<string[]>(
    Array.from({ length: currentSvg.path?.length }).map(
      () => "var(--color-bg-3)"
    )
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

  return (
    <StyledLandContent className="flex-1 flex column items-start gap-32 p-24 width-100">
      <LandAffixContainer
        className="flex both-center width-100 ratio-1"
        content={
          <Icon
            name="download"
            size={32}
            stroke="var(--color-text-4)"
            onClick={() => {
              const node = document.querySelector(".colorFill-svg");
              downloadHtmlAsImg(node, `crochet-time-color-fill-res`);
            }}
          />
        }
        placement="rb"
        gap={12}
      >
        <svg
          width="100%"
          viewBox="0 0 220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="colorFill-svg radius-8"
          onClick={() => setCurrentPathId(0)}
        >
          <rect width="220" height="220" fill="var(--color-bg-1)" />
          {currentSvg.path?.map((item, index) => (
            <path
              key={index}
              d={item}
              fill={colorList[index] || "var(--color-bg-3)"}
              stroke={
                index + 1 === currentPathId ? "var(--color-primary-6)" : "white"
              }
              className="transition-15"
              onClick={(e: React.UIEvent) => {
                e.stopPropagation();
                setCurrentPathId(index + 1);
              }}
            />
          ))}
          {currentSvg.numPath?.map((item2, index2) => (
            <>
              {colorList[index2] === "var(--color-bg-3)" && (
                <path key={index2} d={item2} fill="white" />
              )}
            </>
          ))}
        </svg>
      </LandAffixContainer>
      {/* 样式 */}
      <LandFlex>
        {pathData.map((item3, index3) => (
          <div
            key={index3}
            onClick={() => {
              setCurrentSvgId(item3.id);
              /** 是否清空colorList */
            }}
          >
            <img src={item3.img} width={100} />
          </div>
        ))}
      </LandFlex>
      {/* 颜色 */}
      <LandFlex
        className="flex-1 flex flex-column"
        style={{ overflow: "auto" }}
      >
        {ColorFill_Color_List_Data.map((item) => (
          <LandFlex key={item.id} column gap={12}>
            <LandTitle
              title={item.title}
              type="h3"
              style={{ margin: "0 auto" }}
            />
            <LandGrid
              type={gridType.ColumnFit}
              autoSize={48}
              className="width-100"
            >
              {item.colors?.map((c) => (
                <div
                  key={c.id}
                  className={`flex items-center justify-center fs-8 color-white border radius-50 ratio-1 ${
                    isWhite(c.value) ? "border" : ""
                  }`}
                  style={{ backgroundColor: c.value }}
                  onClick={() => handleColorClick?.(c.value)}
                >
                  {c.name}
                </div>
              ))}
            </LandGrid>
          </LandFlex>
        ))}
      </LandFlex>
    </StyledLandContent>
  );
};

const StyledLandContent = styled(LandContent)`
  overflow: auto;
  @media screen and (max-width: 800px) {
    gap: 16px;
  }
`;

export default ColorFill;
