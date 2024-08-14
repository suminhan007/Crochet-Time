import { useEffect, useState } from 'react';
import './App.css';
import './style/atomic.scss';
import './style/reset.scss';
import './style/variable.scss';
import { LandFlex, LandHeader } from "@suminhan/land-design";
import {
  ColorFill_Path_List_Data,
  Crochet_Course_Data,
  Nav_Data,
  QC_List_Data,
  TJ_List_Data,
  XC_List_Data,
} from "./pages/mock";
import { IconCTLogo } from "./components/Icon";
import CardList from "./pages/CardList";
import CourseList from "./pages/CourseList";
import ColorFill from "./pages/Tool/ColorFill";
import ImgColorPicker from "./pages/Tool/ImgColorPicker";
import styled from 'styled-components';

function App() {
  const [curType, setCurType] = useState<number | string>(22);
  const [curPage, setCurPage] = useState<number | string>(22);
  const [navData, setNavData] = useState<any[]>(Nav_Data);
  useEffect(() => {
    const wrap = document.querySelector('#root') || document.body;
    const rect = wrap.getBoundingClientRect();
    if (rect.width > 800) {
      setNavData(Nav_Data.map(itm => ({ key: itm.key, title: itm.title, dropData: itm.dropData, open: false })));
    } else {
      setNavData(Nav_Data);
    }
  }, []);
  return (
    <LandFlex column className="height-100">
      <StyledLandHeader
        logo={<IconCTLogo />}
        menuProps={{
          data: navData,
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
        className="relative"
      />

      {curPage === 1 && <CourseList data={Crochet_Course_Data} />}
      {curPage === 2 && <CourseList data={Crochet_Course_Data} />}

      {curPage === 11 && <CardList data={XC_List_Data} />}
      {curPage === 12 && <CardList data={QC_List_Data} />}

      {curPage === 21 && <ImgColorPicker />}
      {curPage === 22 && <ColorFill pathData={ColorFill_Path_List_Data} />}

      {curPage === 31 && <CardList data={TJ_List_Data} />}
    </LandFlex>
  );
}

const StyledLandHeader = styled(LandHeader)`
  @media screen and (max-width: 800px){
    .land-menu{
      display: none;
    }
    .jdrwKk .land-menu{
      display: flex;
    }
    /* .ixqGrc .land-menu-drop-wrap.open .land-menu-link{
      padding-left: 12px;
    }
    .land-menu,
    .land-menu-drop-wrap,
    .land-menu-link {
      pointer-events: none;
    }
    .jdrwKk{
      .land-menu,
      .land-menu-drop-wrap,
    .land-menu-link {
      pointer-events: all;
    }
    } */
  }
`
export default App;

