import {
  Icon,
  LandContent,
  LandFlex,
  LandLoading,
  LandMenu,
  LandTitle,
} from "@suminhan/land-design";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

type Props = {
  data?: any[];
  isEnglish?: boolean;
};
const CourseList: React.FC<Props> = ({ data = [],isEnglish }) => {
  const loading = useMemo(() => !data || data?.length <= 0, [data]);
  const [open, setOpen] = useState<boolean>(true);
  const [activeCap, setActiveCap] = useState<string>("0");
  const [activeItm, setActiveItm] = useState<string>("1");

  const [mobile, setMobile] = useState<boolean>(false);
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.width <= 800) {
          setMobile(true);
        } else {
          setMobile(false);
        }
      }
    });
    observer.observe(document.body);
    return () => {
      observer.disconnect();
    };
  }, []);

  const curItm = useMemo(() => {
    if (data && data?.length > 0) {
      return data
        ?.filter((itm) => itm.cap_id === activeCap)[0]
        .contentMenuList?.filter((dropItm: any) => dropItm.id === activeItm)[0];
    }
  }, [activeItm, activeCap, data]);
  return (
    <LandContent className="relative flex-1 flex width-100">
      <div
        className={`absolute flex column gap-8 color-gray-3 fs-14 both-center width-100 height-100 bg-white ${
          loading ? "" : "opacity-0 events-none"
        } transition`}
        style={{ zIndex: 100 }}
      >
        <LandLoading size={24} color="var(--color-primary-6)" />
        <div>{isEnglish ? 'loading...':'努力加载中'}</div>
      </div>
      <StyledCourseMenu className={`relative ${open ? "open" : ""}`}>
        <LandMenu
          data={data?.map((itm) => ({
            key: itm.cap_id,
            title: isEnglish ? itm.enCap:itm.cap,
            dropData: itm?.contentMenuList?.map((dropItm: any) => ({
              key: dropItm.id,
              title: isEnglish ? (dropItm?.enTitle||dropItm.title):dropItm.title,
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
        {mobile && (
          <div
            className="toggle-arrow absolute flex items-center jusity-center border"
            onClick={() => setOpen(!open)}
          >
            <Icon
              name="arrow"
              className={`${open ? "rotate-90" : "-rotate-90"}`}
            />
          </div>
        )}
      </StyledCourseMenu>

      <div className="p-24 flex-1  height-100 overflow-auto scrollbar-none shrink-0">
        <LandFlex column gap={16} w="fit-content" style={{ margin: "0 auto" }}>
          <LandTitle title={isEnglish ? (curItm?.enTitle||curItm?.title):curItm?.title} type="h2" />
          <div className="flex column gap-12">
            {curItm?.des && <LandTitle title={isEnglish?(curItm?.enDes||curItm?.des):curItm?.des} type="p" />}
            {curItm?.imgList?.map((imgItm: any) => (
              <LandFlex column gap={8} style={{ maxWidth: "400px" }}>
                <LandTitle title={isEnglish ? (imgItm?.en_img_des||imgItm.img_des) : imgItm.img_des} type="p" />
                <img src={imgItm.img_src} width="100%" />
              </LandFlex>
            ))}
          </div>
        </LandFlex>
      </div>
    </LandContent>
  );
};

export const StyledCourseMenu = styled.div`
  transform: translateX(-100%);
  width: 0;
  transition: all var(--transition-15) linear;
  &.open {
    width: 148px;
    transform: translateX(0);
    .toggle-arrow {
      right: 0;
      border-radius: 12px;
    }
  }
  .toggle-arrow {
    bottom: 48px;
    right: -8px;
    transform: translate(50%, 0);
    width: 20px;
    height: 48px;
    background-color: var(--color-bg-white);
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
    border: 1px solid var(--color-border-3);
    z-index: 1;
  }
  @media screen and (max-width: 800px) {
    .land-menu-link {
      font-size: 12px;
    }
  }
`;
export default CourseList;
