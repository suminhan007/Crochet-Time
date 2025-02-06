import {useEffect, useState} from 'react';
import './style/index.less';
import './style/reset.less';
import './style/atomic.less';
import './style/variable.less';
import {Icon, LandHeader} from "@suminhan/land-design";
import {ColorFill_Path_List_Data, English_Nav_Data, Nav_Data} from "./pages/mock";
import { IconCTLogo } from "./components/Icon";
import CardList from "./pages/CardList";
import CourseList from "./pages/CourseList";
import ColorFill from "./pages/Tool/ColorFill";
import ImgColorPicker from "./pages/Tool/ImgColorPicker";
import PixelDrawer from "./pages/Tool/PixelDrawer";
import {Route, Routes, useNavigate} from "react-router-dom";
import axios from "axios";

function App (){
  const navigate = useNavigate();
  const [language, setLanguage] = useState<string>('en');
  const [navData,setNavData] = useState<any[]>(language==='en' ? English_Nav_Data :Nav_Data);
  useEffect(() => {
    language==='en' ? setNavData(English_Nav_Data):setNavData(Nav_Data);
  }, [language]);
  const [active, setActive] = useState<string>("course-crochet");
  const [dropActive, setDropActive] = useState<string>("course-crochet");
  useEffect(() => {
    const href = window.location.href.split('/type=');
    if(href.length>=2){
      const targetHref = href[1]?.split('/type=')[0];
      setDropActive(targetHref);
    }
  }, [window.location.href]);
  useEffect(() => {
    const wrap = document.querySelector("#root") || document.body;
    const rect = wrap.getBoundingClientRect();
    const data = language==='en' ? English_Nav_Data : Nav_Data;
    if (rect.width <= 768) {
      setNavData(
        data.map((itm) => ({
          key: itm.key,
          title: itm.title,
          dropData: itm.dropData,
          open: open,
        }))
      );
    } else {
      setNavData(data);
    }
  }, []);

  const [crochetCourseData, setCrochetCourseData] = useState<any[]>([]);
  const [knitCourseData, setKnitCourseData] = useState<any[]>([]);
  const [xcListData, setXcListData] = useState<any[]>([]);
  const [qcListData, setQcListData] = useState<any[]>([]);
  const [tjListData, setTjListData] = useState<any[]>([]);
  // const [colorsFillPathData, setColorsFillPathData] = useState<any[]>([]);
  useEffect(() => {
    let fetchData = async () => {
      try {
        const response = await axios.get("./api/crochetCourseData.json");
        setCrochetCourseData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    switch (dropActive) {
      case 'course-crochet':
        fetchData = async () => {
          try {
            const response = await axios.get("./api/crochetCourseData.json");
            setCrochetCourseData(response.data.data);
          } catch (error) {
            console.log(error);
          }
        };
        break;
      case 'course-knit':
        fetchData = async () => {
          try {
            const response = await axios.get("./api/knitCourseData.json");
            setKnitCourseData(response.data.data);
          } catch (error) {
            console.log(error);
          }
        };
        break;
      case 'wire':
        fetchData = async () => {
          try {
            const response = await axios.get("./api/xcListData.json");
            setXcListData(response.data.data);
          } catch (error) {
            console.log(error);
          }
        };
        break;
      case 'tool':
        fetchData = async () => {
          try {
            const response = await axios.get("./api/qcListData.json");
            setQcListData(response.data.data);
          } catch (error) {
            console.log(error);
          }
        };
        break;
      case 'pattern':
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
  }, [dropActive]);

  return (
    <>
        <LandHeader
            fixed
            logo={<IconCTLogo />}
            menuProps={{
              data: navData,
              active: active,
              onChange: (item) => {
                setActive(item.key);
                setDropActive(item.key);
                navigate(`/type=${item.key}`);
              },
              onDropChange: (dropItem,parentItem) => {
                setActive(parentItem.key);
                setDropActive(dropItem.key);
                navigate(`/type=${dropItem.key}`);
              },
              dropProps: {
                direction: "column",
                active: dropActive,
                theme: {activeBg: "var(--color-bg-2)",lineColor: "transparent",}
              },
            }}
            rightComponent={<button
                className={'flex items-center gap-4 px-12 py-4 fs-12 color-gray-3 cursor-pointer no-wrap border radius-24'}
                onClick={() => {
                  if (language === 'en') {
                    setLanguage('zh');
                  } else {
                    setLanguage('en');
                  }
                  navigate(`/type=${dropActive}`);
                }}
            >
              {language==='en' ? '中文':'English'}<Icon name='sort' size={12} strokeWidth={3} className={'rotate-90'}/>
        </button>}
            align="end"
            className="relative"
        />
       <div className={'height-100vh overflow-auto'} style={{paddingTop: '88px'}}>
         <Routes>
           <Route path="/" element={<CourseList data={crochetCourseData} isEnglish={language==='en'}/>} />
           <Route path="/type=course-crochet" element={<CourseList data={crochetCourseData} isEnglish={language==='en'}/>} />
           <Route path="/type=course-knit" element={<CardList data={knitCourseData} isEnglish={language==='en'}/>} />

           <Route path='/type=wire' element={<CardList data={xcListData} isEnglish={language==='en'}/>}/>
           <Route path='/type=tool' element={<CardList data={qcListData} isEnglish={language==='en'}/>}/>

           <Route path='/type=color-picker' element={<ImgColorPicker isEnglish={language==='en'}/>}/>
           <Route path='/type=color-fill' element={<ColorFill pathData={ColorFill_Path_List_Data} isEnglish={language==='en'}/>}/>
           <Route path='/type=pixel-drawer' element={<PixelDrawer isEnglish={language==='en'}/>}/>

           <Route path='/type=pattern' element={<CardList data={tjListData} isEnglish={language==='en'}/>}/>


         </Routes>
       </div>
    </>
  );
}

export default App;

