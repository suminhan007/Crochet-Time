import { LandSelect } from "@suminhan/land-design";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export default function AssetsPattern() {
  const [data, setData] = useState<any[]>([]);
  const loading = useMemo(() => !data || data?.length <= 0, [data]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./api/editor/patternData.json");
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
      <div
        className="relative grid gap-16"
        style={{ gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))" }}
      >
        <div
          className={`absolute width-0 height-0 bg-white ${
            loading ? "" : "opacity-0 events-none"
          } transition`}
        ></div>
        {[
          {
            id: "格纹双面包",
            name: "格纹双面包",
            labels: ["手机包"],
            details: "",
          },
        ]?.map((item, index) => (
          <div
            key={item.id ?? index}
            className="flex column gap-8 justify-center"
            style={{ aspectRatio: "3/4" }}
          >
            <div className="flex-1 bg-gray radius-8"></div>
            <p className="fs-12 color-gray-3 ellipsis">{item.name}</p>
            {item.labels && (
              <div className="flex flex-wrap gap-8">
                {item.labels?.map((i, idx) => (
                  <div
                    key={idx}
                    className="px-8 fs-12 color-gray-4 radius-6 border"
                  >
                    {i}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
