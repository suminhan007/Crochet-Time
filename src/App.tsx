import { useState } from 'react';
import './App.css';
import './style/atomic.scss';
import './style/reset.scss';
import './style/variable.scss';
import { LandFlex, LandHeader, LandTitle } from "@suminhan/land-design";
import styled from "styled-components";
import {
  Crochet_Course_Data,
  QC_List_Data,
  TJ_List_Data,
  XC_List_Data,
} from "./pages/mock";
import { IconCTLogo } from "./components/Icon";
import CardList from "./pages/CardList";
import CourseList from "./pages/CourseList";
import ColorFill from "./pages/Tool/ColorFill";
import ImgColorPicker from "./pages/Tool/ImgColorPicker";

function App() {
  const [curType, setCurType] = useState<number | string>(22);
  const [curPage, setCurPage] = useState<number | string>(22);
  return (
    <StyledLayout column className="height-100">
      <LandHeader
        name={<LandTitle title="Crochet Time" />}
        logo={<IconCTLogo />}
        menuProps={{
          data: [
            {
              key: 11,
              title: "基础知识",
              open: true,
              dropData: [
                { key: 11, title: "线材" },
                { key: 12, title: "器材" },
              ],
            },
            {
              key: 1,
              title: "插图教程",
              open: true,
              dropData: [
                { key: 1, title: "钩针" },
                { key: 2, title: "棒针" },
              ],
            },
            {
              key: 21,
              title: "工具",
              open: true,
              dropData: [
                { key: 21, title: "取色" },
                { key: 22, title: "配色" },
              ],
            },
            { key: 31, title: "图解" },
          ],
          active: curType,
          onChange: (item) => {
            setCurPage(item.key);
            setCurType(item.key);
          },
          onDropChange: (dropItem, item) => {
            setCurPage(dropItem.key);
            setCurType(item.key);
          },
          dropProps: {
            direction: "column",
            active: curPage,
          },
          theme: {
            lineColor: "inherit",
            activeBg: "var(--color-bg-2)",
          },
        }}
        align="end"
      />

      {curPage === 1 && <CourseList data={Crochet_Course_Data} />}
      {curPage === 2 && <CourseList data={Crochet_Course_Data} />}

      {curPage === 11 && <CardList data={XC_List_Data} />}
      {curPage === 12 && <CardList data={QC_List_Data} />}

      {curPage === 21 && <ImgColorPicker />}
      {curPage === 22 && <ColorFill />}

      {curPage === 31 && <CardList data={TJ_List_Data} />}
    </StyledLayout>
  );
}

const StyledLayout = styled(LandFlex)`
  @media screen and (max-width:800px) {
    .land-header .land-header-logo .land-title,
    .land-header .land-header-logo .land-divider{
      display: none;
    }
    .land-menu-drop-wrap.open .land-menu-drop {
    padding: 0;
    .land-menu{
      position: static;
      border: none;
      padding: 0;
    }
  }
  }
`
export default App
