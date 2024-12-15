import { LandMenu } from "@suminhan/land-design";
import { useState } from "react";
import { STORE_NAV_DATA } from "../mock";
import AssetsDraft from "./AssetsDraft";
import AssetsPattern from "./AssetsPattern";
import AssetsDesignSketch from "./AssetsDesignSketch";

export default function StoreHouse() {
  const [activeTab, setActiveTab] = useState<string | number>("sketch");
  const [activeDropTab, setActiveDropTab] = useState<string | number>("design");
  return (
    <div className="flex-1 flex width-100 overflow-auto">
      <LandMenu
        data={STORE_NAV_DATA}
        direction="column"
        onDropChange={(item, parentItem) => {
          setActiveTab(parentItem.key);
          setActiveDropTab(item.key);
        }}
        active={activeTab}
        dropProps={{
          active: activeDropTab,
          theme: { lineColor: "transparent" },
        }}
        theme={{
          activeColor: "var(--color-primary-6)",
          lineColor: "transparent",
        }}
        className="pt-12 shrink-0"
        style={{ width: "120px" }}
      />
      <div className="flex-1 p-24" style={{ width: "1%" }}>
        {activeDropTab === "draft" && <AssetsDraft />}
        {activeDropTab === "design" && <AssetsDesignSketch />}
        {activeDropTab === "pattern" && <AssetsPattern />}
      </div>
    </div>
  );
}
