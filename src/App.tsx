//@ts-nocheck
import { useEffect, useState} from 'react';
import './style/index.less';
import './style/reset.less';
import './style/atomic.less';
import './style/variable.less';
import {
  LandHeader
} from "@suminhan/land-design";
import { ColorFill_Path_List_Data, English_Nav_Data, Nav_Data } from "./pages/mock";
import Course from "./pages/Course";
import CardList from "./pages/Course/CardList.tsx";
import CourseList from "./pages/Course/CourseList.tsx";
import Tools from './pages/Tool';
import ColorFill from "./pages/Tool/ColorFill";
import ImgColorPicker from "./pages/Tool/ImgColorPicker";
import PixelDrawer from "./pages/Tool/PixelDrawer";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import Register from "./pages/Home/Register.tsx";
import Login from "./pages/Home/Login.tsx";
import UserAvatar from "./pages/Home/./UserAvatar.tsx";
import LoginButtons from "./pages/Home/LoginButtons.tsx";
import Assets from "./pages/Assets";
import supabase from "./utils/supabse.ts";
import Community from "./pages/Community";
import Studio from "./pages/Studio";
import WorktopPages from "./pages/Studio/WorktopPages";
import CourseWire from "./pages/Course/CourseWire.tsx";
import CourseTool from "./pages/Course/CourseTool.tsx";
import ImgToPixel from "./pages/Tool/ImgTopPixel/ImgToPixel.tsx";
import CourseHistory from "./pages/Course/CourseHistory.tsx";
import TextToImg from "./pages/Tool/TextToImg";
import ImgToImg from "./pages/Tool/ImgToImg";

function App() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<string>('en');
  // 自动识别语音
  useEffect(() => {
    const nav = window.navigator;
    const lang = nav.language || nav.userLanguage || nav.systemLanguage || 'en';
    lang.toLowerCase() !== 'zh-cn' ? setLanguage('en'):setLanguage('zh-cn');
  }, []);
  const [navData, setNavData] = useState<any[]>(language === 'en' ? English_Nav_Data : Nav_Data);
  useEffect(() => {
    language === 'en' ? setNavData(English_Nav_Data) : setNavData(Nav_Data);
  }, [language]);
  const [active, setActive] = useState<string>("community");
  const [dropActive, setDropActive] = useState<string>("");
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
  // const [xcListData, setXcListData] = useState<any[]>([]);
  // const [qcListData, setQcListData] = useState<any[]>([]);
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
        // case 'wire':
        //   fetchData = async () => {
        //     try {
        //       const response = await axios.get("./api/xcListData.json");
        //       setXcListData(response.data.data);
        //     } catch (error) {
        //       console.log(error);
        //     }
        //   };
        //   break;
        // case 'tool':
        //   fetchData = async () => {
        //     try {
        //       const response = await axios.get("./api/qcListData.json");
        //       setQcListData(response.data.data);
        //     } catch (error) {
        //       console.log(error);
        //     }
        //   };
        //   break;
      default:
        break;
    }

    // 调用获取数据的函数
    fetchData();
  }, [dropActive]);

  const [user,setUser] = useState<any>();
  const getUser = async () => {
    const {data: {user}} = await supabase.auth.getUser();
    if(user) {
      const { data: UrlData, error:UrlError } = await supabase
          .storage
          .from('CroKnitTime/userAvatars')
          .createSignedUrl(user.user_metadata?.avatar_url, 60)
      if(UrlError){}else {
        const resultData = Object.assign(user.user_metadata,{avatar_url:UrlData.signedUrl});
        setUser(resultData)
      }
    }
  }
  useEffect(() => {
    getUser()
  }, []);

  return (
      <>
        <LandHeader
            fixed
            logo={<img src={'./ckt_logo.png'} height={32} onClick={() => navigate('/')}/>}
            menuProps={{
              data: navData,
              active: active,
              onChange: (item) => {
                setActive(item.key);
                navigate(`type=${item.key}`);
              },
              onDropChange: (dropItem, parentItem) => {
                setActive(parentItem.key);
                setDropActive(dropItem.key);
                navigate(`type=${parentItem.key}-${dropItem.key}`);
              },
              theme: {hoverBg: 'transparent',lineColor:'transparent'},
              dropProps: {
                direction: "column",
                active: dropActive,
                theme: { activeBg: "var(--color-bg-2)", lineColor: "transparent"}
              },
            }}
            rightComponent={
              <div className='flex items-center gap-12'>
                {/*<LandSelect type={'transparent'} data={languageSelectData} onChange={item => setLanguage(item.value)}*/}
                {/*            selected={language}/>*/}
                {user ? <UserAvatar
                    isEnglish={language === 'en'}
                    avatar={user?.avatar_url}
                    username={user?.username}
                    email={user?.email}
                    coins={user?.coins}
                    onLogoutSuccess={() => setUser(undefined)}
                    onUpdateUserSuccess={() =>getUser()}
                /> : <LoginButtons isEnglish={language === 'en'}/>}
              </div>
            }
            mobileSize={1052}
            align="center"
            className="relative"
            style={{backgroundColor: (active === 'course'||active === 'studio') ? '':'var(--color-bg-1)',whitespace:'no-wrap'}}
            borderBottom={false}
        />
        <div className={'height-100vh overflow-auto'} style={{ paddingTop: '64px' }}>
          <Routes>
            <Route path="/" element={<Community isEnglish={language === 'en'} user={user}/>} />
            <Route path="/type=community" element={<Community isEnglish={language === 'en'} user={user}/>} />

            {/*教程*/}
            <Route path={'type=course'} element={<Course isEnglish={language ==='en'}/>}/>
            <Route path="type=course-crochet" element={<CourseList data={crochetCourseData} isEnglish={language === 'en'} />} />
            <Route path="type=course-crochet" element={<CourseList data={crochetCourseData} isEnglish={language === 'en'} />} />
            <Route path="type=course-knit" element={<CardList data={knitCourseData} isEnglish={language === 'en'} />} />

            <Route path='type=course-wire' element={<CourseWire isEnglish={language === 'en'} />} />
            <Route path='type=course-tool' element={<CourseTool isEnglish={language === 'en'} />} />
            <Route path='type=course-history' element={<CourseHistory isEnglish={language === 'en'} />} />

            {/*工作台*/}
            <Route path='type=studio' element={<Studio isEnglish={language === 'en'} />} />
            <Route path='type=studio/worktop' element={<WorktopPages isEnglish={language === 'en'} />} />

            {/*工具*/}
            <Route path='type=tools' element={<Tools isEnglish={language === 'en'} />} />
            <Route path='type=tools-colorPicker' element={<ImgColorPicker isEnglish={language === 'en'} />} />
            <Route path='type=tools-colorFill' element={<ColorFill pathData={ColorFill_Path_List_Data} isEnglish={language === 'en'} />} />
            <Route path='type=tools-pixelDrawer' element={<PixelDrawer isEnglish={language === 'en'} />} />
            <Route path='type=tools-imgToPixel' element={<ImgToPixel isEnglish={language === 'en'} />} />
            <Route path='type=tools-text2img' element={<TextToImg isEnglish={language === 'en'} />} />
            <Route path='type=tools-img2img' element={<ImgToImg isEnglish={language === 'en'} />} />

            {/*资产*/}
            <Route path={'type=repository'} element={<Assets isEnglish={language === 'en'} />}/>

            {/*注册&登录*/}
            <Route path={'register'} element={<Register/>}/>
            <Route path={'login'} element={<Login onLogined={user => setUser(user)} />}/>
          </Routes>
        </div>
      </>
  );
}

export default App;

