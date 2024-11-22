import { Icon, LandButton } from "@suminhan/land-design";
import React from "react";
export enum TaskType {
  /** 图解 */
  GRAPH = "graph",
  /** 产品 */
  GOODS = "goods",
}
type Props = {
  data?: { id: string; title: string; type: TaskType }[];
  active?: string;
  onDelete?: (item: any) => void;
};
const DesignTopTaskList: React.FC<Props> = ({ data, active, onDelete }) => {
  return (
    <div className="flex items-center height-100 overflow-auto">
      <div className="flex items-center px-8 border-right height-100 cursor-pointer hover:bg-gray transition">
        <Icon
          name="home"
          size={18}
          fill="var(--color-text-3)"
          strokeWidth={3}
        />
      </div>
      {data?.map((item, index) => (
        <div
          key={item.id ?? index}
          className={`flex items-center gap-4 px-8 height-100 fs-12 border-right ${
            active === item.id ? "color-gray-2" : "color-gray-4"
          }`}
        >
          <div
            className={`flex items-center gap-4 ${
              active === item.id ? "color-primary" : ""
            }`}
          >
            {item.type === TaskType.GRAPH && <Icon name="log" size={16} />}
            {item.type === TaskType.GOODS && (
              <Icon name="commodity" size={16} />
            )}
          </div>
          {item.title}
          <Icon
            name="close"
            size={16}
            className="cursor-pointer"
            onClick={() => onDelete?.(item)}
          />
        </div>
      ))}
      <LandButton
        size="small"
        type="text"
        icon={<Icon name="add" />}
        className="ml-4"
      ></LandButton>
    </div>
  );
};

export default DesignTopTaskList;
