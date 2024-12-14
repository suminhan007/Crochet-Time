import { LandFlex, LandHeader } from "@suminhan/land-design";
import { useState } from "react";
import Idea from "./Idea";
import Design from "./Design";
import StoreHouse from "./StoreHouse";
export default function Editor() {
  const [activePage, setActivePage] = useState<number | string>(2);
  return (
    <LandFlex column className="relative height-100">
      <LandHeader
        name={<div className="fs-20 fw-500"></div>}
        menuProps={{
          data: [
            { key: 1, title: "灵感" },
            { key: 2, title: "工作台" },
            { key: 3, title: "仓库" },
          ],
          active: activePage,
          onChange: (item) => setActivePage(item.key),
        }}
        align="center"
      />
      {activePage === 1 && <Idea />}
      {activePage === 2 && <Design />}
      {activePage === 3 && <StoreHouse />}
    </LandFlex>
  );
}
