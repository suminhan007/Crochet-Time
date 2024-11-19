import React from "react";
type Props = {
  data?: any[];
};
const DesignLeftTaskList: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex column gap-12 overflow-auto">
      {data?.map((item, index) => (
        <div key={item.id ?? index}></div>
      ))}
    </div>
  );
};

export default DesignLeftTaskList;
