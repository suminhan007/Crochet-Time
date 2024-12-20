// import { LandMenu } from "@suminhan/land-design";
import { useEffect, useState } from "react";
import Masonry from "../components/Masonry";
import axios from "axios";

export default function Idea() {
  // const [activeTab, setActiveTab] = useState<number | string>(2);
  const [data, setData] = useState<any[]>([]);
  // const Loading = useMemo(() => !data || data?.length <= 0, [data]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./api/ideaDataRecommend.json");
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    // 调用获取数据的函数
    fetchData();
  }, []);
  return (
    <div className="flex-1 width-100 overflow-auto">
      {/* <div
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
          className="bg-filter"
        />
      </div> */}
      <div className="flex-1 p-24" style={{ paddingTop: "64px" }}>
        <Masonry options={{ column: 4, gap: 16 }} isEnd>
          {data?.map((item, index) => (
            <div
              key={item.id ?? index}
              className="flex column gap-8 border width-100 radius-24"
              style={{
                height: "fit-content",
                breakInside: "avoid",
              }}
            >
              <img src={item?.url} width="100%" height="auto" />
              {item?.desc && (
                <p className="px-12 pb-12  ellipsis fs-14 color-gray-3">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}
