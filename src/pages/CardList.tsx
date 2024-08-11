import {
  Icon,
  LandContent,
  LandFlex,
  LandImg,
  LandTitle,
} from "@suminhan/land-design";
import React, { useEffect, useMemo, useState } from "react";
import { StyledCourseMenu } from "./CourseList";

type Props = {
  data?: any[];
};
const CardList: React.FC<Props> = ({ data = [] }) => {
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
    <LandContent className="flex-1 flex width-100">
      <StyledCourseMenu className={`relative ${open ? "open" : ""}`}>
        <div className="height-100 width-100 overflow-auto">
          <div className="flex column gap-12 px-12 py-24 height-100 width-100">
            {data?.map((item, index) => (
              <div
                key={item.id ?? index}
                className="flex column items-center justify-center gap-8 bg-gray radius-12 cursor-pointer"
                style={{ aspectRatio: 1, flexShrink: 0 }}
                onClick={() => setActiveItm(item.id)}
              >
                <LandImg
                  url={item.img}
                  style={{ width: "64px" }}
                  className="radius-8"
                />
                <div className="fs-14">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
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
          <LandTitle title={curItm.title} type="h2" />
          <LandFlex gap={12} className="p-12 bg-gray radius-8" w="100%">
            {curItm.img && (
              <LandImg
                url={curItm.img}
                style={{ width: "50%" }}
                className="radius-8"
              />
            )}
            {curItm.desc && (
              <div className="fs-12 color-gray-3">{curItm.desc}</div>
            )}
          </LandFlex>
          {curItm.detail && <img src={curItm.detail} width="100%" />}
          {curItm.detailList?.length > 0 && (
            <div className="flex column gap-12">
              {curItm.detailList?.map((imgItm: any) => (
                <LandFlex column gap={8}>
                  <LandTitle title={imgItm.desc} type="p" />
                  <LandImg url={imgItm.img} className="width-100 radius-8" />
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
