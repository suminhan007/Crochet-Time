import {
  Icon,
  LandContent,
  LandFlex,
  LandLoading,
  LandTitle,
} from "@suminhan/land-design";
import React, { useEffect, useMemo, useState } from "react";
import { StyledCourseMenu } from "./CourseList";

type Props = {
  data?: any[];
};
const CardList: React.FC<Props> = ({ data = [] }) => {
  const loading = useMemo(() => !data || data?.length <= 0, [data]);
  const [open, setOpen] = useState<boolean>(true);
  const [mobile, setMobile] = useState<boolean>(false);
  const [activeItm, setActiveItm] = useState<number>(1);
  const curItm = useMemo(() => {
    return data?.filter((itm) => itm.id === activeItm)[0];
  }, [activeItm, data]);
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
  return (
    <LandContent className="relative flex-1 flex width-100">
      <div
        className={`absolute flex column gap-8 color-gray-3 fs-14 both-center width-100 height-100 bg-white ${
          loading ? "" : "opacity-0 events-none"
        } transition`}
        style={{ zIndex: 100 }}
      >
        <LandLoading size={24} color="var(--color-primary-6)" />
        <div>努力加载中</div>
      </div>
      <StyledCourseMenu className={`relative ${open ? "open" : ""}`}>
        <div className="height-100 width-100 overflow-auto pb-24">
          <div className="flex column gap-12 px-12 py-24 height-100 width-100">
            {data?.map((item, index) => (
              <div
                key={item.id ?? index}
                className="flex column items-center justify-center gap-8 py-12 w-fit-content bg-gray radius-12 cursor-pointer"
                style={{ flexShrink: 0 }}
                onClick={() => setActiveItm(item.id)}
              >
                <img
                  src={item.img}
                  className="radius-8 overflow-hidden"
                  style={{ width: "64px", height: "64px" }}
                />
                <div className="fs-14 color-gray-3">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
        {mobile && (
          <div
            className="toggle-arrow absolute flex items-center justify-center border"
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
        <LandFlex
          column
          gap={16}
          w="fit-content"
          style={{ maxWidth: "400px", margin: "0 auto" }}
        >
          <LandTitle title={curItm?.title} type="h2" />
          <LandFlex column gap={12} className="p-12 bg-gray radius-8" w="100%">
            {curItm?.img && (
              <img
                src={curItm?.img}
                style={{ width: "100%" }}
                className="width-50 radius-8 shrink-0"
              />
            )}
            {curItm?.desc && (
              <div className="fs-12 color-gray-3">{curItm?.desc}</div>
            )}
          </LandFlex>
          {curItm?.detail && <img src={curItm?.detail} width="100%" />}
          {curItm?.detailList?.length > 0 && (
            <div className="flex column gap-12">
              {curItm?.detailList?.map((imgItm: any) => (
                <LandFlex column gap={8}>
                  {imgItm.desc && <LandTitle title={imgItm.desc} type="p" />}
                  {imgItm.img && (
                    <img
                      src={imgItm.img}
                      style={{ width: "100%" }}
                      className="width-100 radius-8 overflow-hidden"
                    />
                  )}
                </LandFlex>
              ))}
            </div>
          )}
        </LandFlex>
      </div>
    </LandContent>
  );
};

export default CardList;
