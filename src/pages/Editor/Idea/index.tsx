import { LandImage, LandMenu } from "@suminhan/land-design";
import { useState } from "react";
import Masonry from "../components/Masonry";

type ideaDataType = {
  id: string;
  imgUrl?: string;
  desc?: string;
};
export default function Idea() {
  const [activeTab, setActiveTab] = useState<number | string>(2);
  //@ts-ignore
  const [data, setData] = useState<ideaDataType[]>([
    ...Array.from({ length: 20 }).map((_i, idx) => ({
      id: `${idx} + 1`,
      imgUrl: "https://picsum.photos/100",
    })),
  ]);
  return (
    <div className="flex-1 width-100">
      <div
        className="fixed flex justify-center width-100 bg-filter"
        style={{ zIndex: 2 }}
      >
        <LandMenu
          data={[
            { key: 1, title: "我的" },
            { key: 2, title: "推荐" },
            { key: 3, title: "线" },
            { key: 4, title: "色彩" },
            { key: 5, title: "玩偶" },
            { key: 6, title: "包包" },
          ]}
          active={activeTab}
          onChange={(item) => setActiveTab(item.key)}
          border={false}
        />
      </div>
      <div className="flex-1" style={{ paddingTop: "64px" }}>
        <Masonry>
          {data?.map((item, index) => (
            <div key={item.id ?? index} className="flex column shadow">
              <LandImage url={item.imgUrl} />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}
