//@ts-nocheck
import { LandSelect } from "@suminhan/land-design";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export default function AssetsDesignSketch() {
  const [data, setData] = useState<any[]>([]);
  const loading = useMemo(() => !data || data?.length <= 0, [data]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./api/editor/designData.json");
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex column gap-24 width-100 height-100">
      <div className="flex gap-12">
        <LandSelect />
      </div>
      <div className="flex-1 relative flex column gap-16">
        <div
          className={`absolute width-100 height-100 bg-white ${
            loading ? "" : "opacity-0 events-none"
          } transition`}
        ></div>
        {data?.map((item, index) => (
          <div
            key={item.id ?? index}
            className="relative flex gap-12 px-12 pb-12 pt-24 radius-8 border"
            style={{ height: "200px", width: "fit-content", maxWidth: "100%" }}
          >
            <p
              className="absolute top-0 left-0 fs-16 color-gray-2 fw-500 ellipsis bg-white px-12"
              style={{ transform: "translate(20px,-50%)" }}
            >
              {item.name}
            </p>
            <div className="flex p-12 items-center height-100 ratio-1 border">
              <div className="flex column gap-8 fs-14 color-gray-3">
                {Object.keys(item.details)?.map((keyItem, keyIndex) => (
                  <div key={keyIndex}>{keyItem}：</div>
                ))}
              </div>
              <div className="flex column gap-8 fs-14 color-gray-2 fw-500">
                {Object.values(item.details)?.map(
                  (valueItem: string, valueIndex: number) => (
                    <div key={valueIndex}>{valueItem}</div>
                  )
                )}
              </div>
            </div>
            <div className="flex gap-12 height-100">
              {item.imgs?.map((i: string, idx: number) => (
                <div key={idx} className="height-100">
                  <img src={i} height="100%" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
