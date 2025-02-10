//@ts-nocheck
import { useEffect, useState} from 'react';
import './style/index.less';
import './style/reset.less';
import './style/atomic.less';
import './style/variable.less';
import {
  LandHeader,
  LandSelect
} from "@suminhan/land-design";
import { ColorFill_Path_List_Data, English_Nav_Data, Nav_Data } from "./pages/mock";
import { IconCTLogo } from "./components/Icon";
import CardList from "./pages/CardList";
import CourseList from "./pages/CourseList";
import ColorFill from "./pages/Tool/ColorFill";
import ImgColorPicker from "./pages/Tool/ImgColorPicker";
import PixelDrawer from "./pages/Tool/PixelDrawer";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import Register from "./pages/Home/Register.tsx";
import Login from "./pages/Home/Login.tsx";
import UserAvatar from "./pages/Home/./UserAvatar.tsx";
import LoginButtons from "./pages/Home/LoginButtons.tsx";
import {User} from "@supabase/supabase-js";
import Assets from "./pages/Assets";
import supabase from "./utils/supabse.ts";

function App() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<string>('en');
  const [navData, setNavData] = useState<any[]>(language === 'en' ? English_Nav_Data : Nav_Data);
  useEffect(() => {
    language === 'en' ? setNavData(English_Nav_Data) : setNavData(Nav_Data);
  }, [language]);
  const [active, setActive] = useState<string>("course");
  const [dropActive, setDropActive] = useState<string>("crochet");
  useEffect(() => {
    if(!window.location.href.includes('type=')) return;
    const href = window.location.href.split('type=')[1]?.split('-');
    if (href?.length >= 2) {
      setDropActive(href[1]);
      setActive(href[0]);
    }else{
      setDropActive(href[0]);
      setActive(href[0]);
    }
  }, [window.location.href]);
  useEffect(() => {
    const wrap = document.querySelector("#root") || document.body;
    const rect = wrap.getBoundingClientRect();
    const data = language === 'en' ? English_Nav_Data : Nav_Data;
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
      case 'crochet':
        fetchData = async () => {
          try {
            const response = await axios.get("./api/crochetCourseData.json");
            setCrochetCourseData(response.data.data);
          } catch (error) {
            console.log(error);
          }
        };
        break;
      case 'knit':
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

  const languageSelectData = [
    { value: 'en', label: 'English' },
    { value: 'zh', label: '中文' },
  ]

  const [user,setUser] = useState<User>();
  const getUser = async () => {
    const {data: {user}} = await supabase.auth.getUser();
    if(user) {
      setUser(user)
    }
  }
  useEffect(() => {
    getUser()
  }, []);

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
            // const targetDropKey = navData.filter((itm) => itm.key === item.key)[0]?.dropData[0]?.key;
            const targetItem = navData.filter((itm) => itm.key === item.key)[0];
            if(targetItem?.dropData) {
              const targetDropKey = targetItem?.dropData[0]?.key;
              setDropActive(targetDropKey);
              navigate(`type=${item.key}-${targetDropKey}`);
            }
            else {
              setDropActive(item.key);
              navigate(`type=${item.key}`);
            }
          },
          onDropChange: (dropItem, parentItem) => {
            setActive(parentItem.key);
            setDropActive(dropItem.key);
            navigate(`type=${parentItem.key}-${dropItem.key}`);
          },
          dropProps: {
            direction: "column",
            active: dropActive,
            theme: { activeBg: "var(--color-bg-2)", lineColor: "transparent", }
          },
        }}
        rightComponent={
          <div className='flex items-center gap-12'>
            <LandSelect type={'transparent'} data={languageSelectData} onChange={item => setLanguage(item.value)}
                        selected={language}/>
            {user ? <UserAvatar username={user?.user_metadata.username} onLogoutSuccess={() => setUser(undefined)} onDeleteSuccess={() => setUser(undefined)}/> : <LoginButtons/>}
          </div>
        }
        align="center"
        className="relative"
      />
      <div className={'height-100vh overflow-auto'} style={{ paddingTop: '64px' }}>
        <Routes>
          <Route path="/" element={<CourseList data={crochetCourseData} isEnglish={language === 'en'} />} />
          <Route path="type=course-crochet" element={<CourseList data={crochetCourseData} isEnglish={language === 'en'} />} />
          <Route path="type=course-knit" element={<CardList data={knitCourseData} isEnglish={language === 'en'} />} />

          <Route path='type=basic-wire' element={<CardList data={xcListData} isEnglish={language === 'en'} />} />
          <Route path='type=basic-tool' element={<CardList data={qcListData} isEnglish={language === 'en'} />} />

          <Route path='type=aids-colorPicker' element={<ImgColorPicker isEnglish={language === 'en'} />} />
          <Route path='type=aids-colorFill' element={<ColorFill pathData={ColorFill_Path_List_Data} isEnglish={language === 'en'} />} />
          <Route path='type=aids-pixelDrawer' element={<PixelDrawer isEnglish={language === 'en'} />} />

          <Route path='type=pattern' element={<CardList data={tjListData} isEnglish={language === 'en'} />} />

          <Route path={'type=assets'} element={<Assets/>}/>

          <Route path={'register'} element={<Register/>}/>
          <Route path={'login'} element={<Login onLogined={user => setUser(user)} />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

