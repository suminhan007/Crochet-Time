import { LandContent, LandFlex } from "@suminhan/land-design";
import React, { useMemo, useState } from "react";
import { ColorFill_Path_List_Data } from "../mock";

type Props = {};
const ColorFill: React.FC<Props> = ({}) => {
  const [currentSvgId, setCurrentSvgId] = useState<number>(1);
  const currentSvg = useMemo(
    () => ColorFill_Path_List_Data.filter((itm) => itm.id === currentSvgId)[0],
    [currentSvgId]
  );

  return (
    <LandContent className="flex-1 flex column items-start gap-32 px-24 pt-32 pb-24 width-100 overflow-auto">
      <LandFlex bothCenter>
        <svg
          width="220"
          height="220"
          viewBox="0 0 220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="radius-8"
        >
          <rect width="220" height="220" fill="var(--color-bg-1)" />
          {currentSvg.path?.map((item, index) => (
            <path key={index} d={item} fill="gray" stroke="white" />
          ))}
          {currentSvg.numPath?.map((item2, index2) => (
            <path key={index2} d={item2} fill="white" />
          ))}
        </svg>
      </LandFlex>
      <LandFlex>
        {ColorFill_Path_List_Data.map((item3, index3) => (
          <div key={index3} onClick={() => setCurrentSvgId(item3.id)}>
            <img src={item3.img} width={100} />
          </div>
        ))}
      </LandFlex>
    </LandContent>
  );
};

export default ColorFill;
