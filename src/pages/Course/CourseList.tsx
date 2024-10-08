//@ts-nocheck
import {
  Icon,
  LandContent,
  LandFlex,
  LandImage,
  LandMenu,
  LandTitle,
} from "@suminhan/land-design";
import React, { useEffect, useMemo, useState } from "react";
import { Crochet_Course_Data } from "../mock";
import styled from "styled-components";

type Props = {
  data?: any[];
};
const CourseList: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(true);
  const [activeCap, setActiveCap] = useState<number | string>("0");
  const [activeItm, setActiveItm] = useState<number | string>("1");
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  }, []);

  const curItm = useMemo(() => {
    return Crochet_Course_Data.filter(
      (itm) => itm.cap_id === activeCap
    )[0].contentMenuList.filter((dropItm) => dropItm.id === activeItm)[0];
  }, [activeItm, activeCap]);
  return (
    <LandContent className="flex-1 flex width-100">
      <StyledCourseMenu className={`relative ${open ? "open" : ""}`}>
        <LandMenu
          data={Crochet_Course_Data.map((itm) => ({
            key: itm.cap_id,
            title: itm.cap,
            dropData: itm.contentMenuList.map((dropItm) => ({
              key: dropItm.id,
              title: dropItm.title,
            })),
            open: true,
          }))}
          direction="column"
          active={activeCap}
          onChange={(item) => {
            setActiveCap(item.key);
            setActiveItm(`${Number(item.key) * 10 + 1}`);
          }}
          dropProps={{
            direction: "column",
            active: activeItm,
          }}
          onDropChange={(dropItem, item) => {
            setActiveCap(item.key);
            setActiveItm(dropItem.key);
          }}
          theme={{
            activeBg: "var(--color-bg-3)",
            lineColor: "inherit",
          }}
          className="pt-24 height-100 border-right overflow-auto scrollbar-none"
        />
        <div
          className="toggle-arrow absolute flex items-center justify-center border cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Icon name="arrow" />
        </div>
      </StyledCourseMenu>
      <div className="p-24 flex-1  height-100 overflow-auto scrollbar-none shrink-0">
        <LandFlex column gap={16} w="fit-content" style={{ margin: "0 auto" }}>
          <LandTitle title={curItm.title} type="h2" />
          <div className="flex column gap-12">
            {curItm.des && <LandTitle title={curItm.des} type="p" />}
            {curItm.imgList?.map((imgItm) => (
              <LandFlex column gap={8}>
                <LandTitle title={imgItm.img_des} type="p" />
                <LandImage src={imgItm.img_src} ratio={1} />
              </LandFlex>
            ))}
          </div>
        </LandFlex>
      </div>
    </LandContent>
  );
};

const StyledCourseMenu = styled.div`
  transform: translateX(-100%);
  width: 0;
  transition: all var(--transition-15) linear;
  &.open {
    width: 160px;
    transform: translateX(0);
    .toggle-arrow {
      right: 0;
      svg {
        transform: rotate(90deg);
      }
    }
  }
  .toggle-arrow {
    top: 50%;
    right: -6px;
    transform: translate(50%, -50%);
    width: 24px;
    height: 48px;
    background-color: var(--color-bg-white);
    border-radius: 12px;
    border: 1px solid var(--color-border-3);
    z-index: 1;
    transition: transform var(--transition-15) linear;
    svg {
      transform: rotate(-90deg) translateY(4px);
    }
  }
`;
export default CourseList;
