import { useEffect, useState } from 'react';
import './App.css';
import './style/atomic.scss';
import './style/reset.scss';
import './style/variable.scss';
import { LandFlex, LandHeader } from "@suminhan/land-design";
import { Nav_Data } from "./pages/mock";
import { IconCTLogo } from "./components/Icon";
import CardList from "./pages/CardList";
import CourseList from "./pages/CourseList";
import ColorFill from "./pages/Tool/ColorFill";
import ImgColorPicker from "./pages/Tool/ImgColorPicker";
import styled from "styled-components";
import PixelDrawer from "./pages/Tool/PixelDrawer";

import { Route, Routes } from "react-router-dom";

import Editor from "./pages/Editor";
import axios from "axios";

function App() {
  const [curType, setCurType] = useState<number | string>(1);
  const [curPage, setCurPage] = useState<number | string>(1);
  const [navData, setNavData] = useState<any[]>(Nav_Data);
  useEffect(() => {
    const wrap = document.querySelector("#root") || document.body;
    const rect = wrap.getBoundingClientRect();
    if (rect.width > 800) {
      setNavData(
        Nav_Data.map((itm) => ({
          key: itm.key,
          title: itm.title,
          dropData: itm.dropData,
          open: false,
        }))
      );
    } else {
      setNavData(Nav_Data);
    }
  }, []);

  const [crochetCourseData, setCrochetCourseData] = useState<any[]>([]);
  const [knitCourseData, setKnitCourseData] = useState<any[]>([]);
  const [xcListData, setXcListData] = useState<any[]>([]);
  const [qcListData, setQcListData] = useState<any[]>([]);
  const [tjListData, setTjListData] = useState<any[]>([]);
  const [colorsFillPathData, setColorsFillPathData] = useState<any[]>([]);
  useEffect(() => {
    let fetchData = async () => {
      try {
        const response = await axios.get("./api/crochetCourseData.json");
        setCrochetCourseData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    switch (curPage) {
      case 1:
        fetchData = async () => {
          try {
            const response = await axios.get("./api/crochetCourseData.json");
            setCrochetCourseData(response.data.data);
          } catch (error) {
            console.log(error);
          }
        };
        break;
      case 2:
        fetchData = async () => {
          try {
            const response = await axios.get("./api/knitCourseData.json");
            setKnitCourseData(response.data.data);
          } catch (error) {
            console.log(error);
          }
        };
        break;
      case 11:
        fetchData = async () => {
          try {
            const response = await axios.get("./api/xcListData.json");
            setXcListData(response.data.data);
          } catch (error) {
            console.log(error);
          }
        };
        break;
      case 12:
        fetchData = async () => {
          try {
            const response = await axios.get("./api/qcListData.json");
            setQcListData(response.data.data);
          } catch (error) {
            console.log(error);
          }
        };
        break;
      case 22:
        fetchData = async () => {
          try {
            const response = await axios.get("./api/colorFIllPathData.json");
            setColorsFillPathData(response.data.data);
          } catch (error) {
            console.log(error);
          }
        };
        break;
      case 31:
        fetchData = async () => {
          try {
            const response = await axios.get("./api/tjListData.json");
            setTjListData(response.data.data);
          } catch (error) {
            console.log(error);
          }
        };
        break;
      default:
        break;
    }

    // 调用获取数据的函数
    fetchData();
  }, [curPage]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
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

              {curPage === 1 && <CourseList data={crochetCourseData} />}
              {curPage === 2 && <CourseList data={knitCourseData} />}

              {curPage === 11 && <CardList data={xcListData} />}
              {curPage === 12 && <CardList data={qcListData} />}

              {curPage === 21 && <ImgColorPicker />}
              {curPage === 22 && <ColorFill pathData={colorsFillPathData} />}
              {curPage === 23 && <PixelDrawer />}

              {curPage === 31 && <CardList data={tjListData} />}
            </LandFlex>
          }
        />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </>
  );
}

const StyledLandHeader = styled(LandHeader)`
  /* &.kjXciE {
    z-index: 100;
  }
  @media screen and (max-width: 800px) {
    .land-menu {
      display: none;
    }
    .jdrwKk .land-menu {
      display: flex;
    }
  } */
`;
export default App;

