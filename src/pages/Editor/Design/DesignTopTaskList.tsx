import { Icon, LandButton } from "@suminhan/land-design";
import React from "react";
type Props = {
  data?: any[];
  onDelete?: (item: any) => void;
};
const DesignTopTaskList: React.FC<Props> = ({ data, onDelete }) => {
  return (
    <div className="flex gap-12 items-center height-100 overflow-auto">
      <div className="flex items-center px-8 border-right height-100 cursor-pointer hover:bg-gray transition">
        <Icon name="home" size={20} />
      </div>
      {data?.map((item, index) => (
        <div
          key={item.id ?? index}
          className="flex items-center gap-4 px-8 height-100 fs-12 color-gray-2 border-right"
        >
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
      ></LandButton>
    </div>
  );
};

export default DesignTopTaskList;
