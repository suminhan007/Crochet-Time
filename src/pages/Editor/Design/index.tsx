import { Icon, LandButton, LandSelect } from "@suminhan/land-design";
import {
  DESIGN_HOME_FILTER_SELECT_TYPE_DATA,
  DESIGN_HOME_WORKS_DATA,
} from "../mock";
import { useState } from "react";
import { WorksType } from "./type";
import styled from "styled-components";
import WorktopPages from "./WorktopPages";

const Design: React.FC<{}> = ({}) => {
  //@ts-ignore
  const [data, setData] = useState<any[]>(DESIGN_HOME_WORKS_DATA);
  const getTypeIcon = (type: string) => {
    switch (type) {
      case WorksType.Draft:
        return (
          <Icon
            name="pen"
            size={18}
            strokeWidth={3}
            stroke="var(--color-tag-8)"
          />
        );
        break;
      case WorksType.Design:
        return (
          <Icon
            name="formatting-brush"
            size={18}
            stroke="var(--color-tag-4)"
            strokeWidth={3}
          />
        );
        break;
      case WorksType.Pattern:
        return <Icon name="text-file" size={18} stroke="var(--color-tag-5)" />;
        break;
      case WorksType.Product:
        return <Icon name="commodity" size={18} stroke="var(--color-tag-2)" />;
        break;
      case WorksType.Material:
        return <Icon name="folder" size={18} stroke="var(--color-tag-6)" />;
        break;
      case WorksType.Wool:
        return (
          <Icon
            name="inner-shadow-down"
            size={18}
            stroke="var(--color-tag-10)"
            strokeWidth={4}
          />
        );
        break;
      case WorksType.Course:
        return <Icon name="list-view" size={18} stroke="var(--color-tag-1)" />;
        break;
      case WorksType.Vlog:
        return (
          <Icon
            name="camera"
            size={18}
            strokeWidth={4}
            stroke="var(--color-tag-9)"
          />
        );
        break;
      default:
        return null;
        break;
    }
  };
  const [title, setTitle] = useState<string>("");
  return (
    <div className="flex-1 flex column items-center gap-24 width-100 overflow-auto p-32">
      <div
        className="flex justify-between width-100"
        style={{ maxWidth: "1200px" }}
      >
        <div className="flex gap-12">
          <LandSelect
            placeholder="作品类型"
            width={120}
            data={DESIGN_HOME_FILTER_SELECT_TYPE_DATA}
          />
          <LandSelect placeholder="排序方式" width={120} />
        </div>
        <StyledNewButton className="relative">
          <LandButton
            type="background"
            status="primary"
            icon={<Icon name="add" strokeWidth={4} />}
            text="新建作品"
          />
          <div
            className="drop-container absolute pt-8 width-100 transition"
            style={{ top: "100%", zIndex: 1 }}
          >
            <div className="width-100 border bg-white radius-8 py-12">
              {DESIGN_HOME_FILTER_SELECT_TYPE_DATA?.filter(
                (_i, idx) => idx > 0
              )?.map((item, index) => (
                <div
                  key={item.value ?? index}
                  className="flex items-center gap-4 px-12 py-8 cursor-pointer hover:bg-gray transition"
                  onClick={() => setTitle(item.label)}
                >
                  {getTypeIcon(item.value)}
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </StyledNewButton>
      </div>
      <div
        className="grid gap-16 width-100"
        style={{
          maxWidth: "1200px",
          gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
        }}
      >
        {data?.map((item, index) => (
          <div
            key={item.id ?? index}
            className="flex column gap-8 hover-translate-y-4 transition cursor-pointer"
          >
            <div className="width-100 ratio-1 bg-gray radius-12"></div>
            <div className="flex items-center gap-8 fs-14 color-gray-1 fw-500">
              {getTypeIcon(item.type)}
              {item.name}
            </div>
            <div className="fs-12 color-gray-4">{item.date}</div>
          </div>
        ))}
      </div>
      <WorktopPages show={Boolean(title)} title={title} />
    </div>
  );
};

const StyledNewButton = styled.div`
  .drop-container {
    opacity: 0;
    pointer-events: none;
  }
  &:hover {
    .drop-container {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;
export default Design;
