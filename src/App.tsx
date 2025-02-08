import { useEffect, useState} from 'react';
import './style/index.less';
import './style/reset.less';
import './style/atomic.less';
import './style/variable.less';
import {
  LandAvatar, LandButton,
  LandDialog, LandDropdown,
  LandHeader,
  LandInput,
  LandLoading,
  LandMenu, LandPop,
  LandRadio,
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
    if(window.location.href.split('#/').length>=2){
      const singleHref = window.location.href.split('#/')[1];
      if(singleHref === 'register'||singleHref === 'login'){
        setShowDialog(singleHref)
      }else{
        setShowDialog('')
      }
    }
    const href = window.location.href.split('type=')[1]?.split('-');
    if (href?.length >= 2) {
      setDropActive(href[1]);
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

  const [showDialog,setShowDialog] = useState<string>('');
  const registerMenuData = [
    {key: 'register', title:'注册'},
    {key: 'login', title:'登录'}
  ]
  const registerSexData = [
    {value: 'male', label: '男'},
    {value: 'female', label: '女'},
    {value: '', label: '神秘'},
  ]
  const [username, setUsername] = useState<string>('');
  const [sex, setSex] = useState<number|string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user,setUser] = useState<{ username:string }>();
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const login = async () => {
    setLoginLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.error('登录失败:', error);
      setLoginLoading(false);
    } else {
      const {data:croknitUsers,error:selectError} = await supabase.from('croknitUsers').select('username');
      if(selectError){
        console.error('登录失败:', error);
      }else{
        setLoginLoading(false);
        setUser({username:croknitUsers[0].username});
        console.log(data,croknitUsers)
        setShowDialog('');
        navigate('/')
      }
    }
  };
  const register = async () => {
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) {
        throw signUpError;
      }
      const {  error: profileError } = await supabase
          .from('croknitUsers')
          .insert([
            {
              id: data.user?.id,
              email,
              username,
              sex:String(sex),
            },
          ]);

      if (profileError) {
        throw profileError;
      }
      console.log(data.user);
      login();
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

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
            const targetDropKey = navData.filter((itm) => itm.key === item.key)[0]?.dropData[0]?.key;
            setDropActive(targetDropKey);
            navigate(`type=${item.key}-${targetDropKey}`);
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
            {user ? <div className={'relative hover-pop cursor-pointer'}>{user.username}
              <LandPop placement={'bottom'} content={<a>退出登录</a>}/>
            </div> : <div className='flex items-center gap-12'>
              <a className='fs-14 color-white bg-primary px-12 py-4 radius-4 cursor-pointer'
                 onClick={() => {
                   setShowDialog('register');
                   navigate('register');
                 }}>注册</a>
              <a className='fs-14 color-gray-3 hover:bg-gray px-12 py-4 radius-4 cursor-pointer transition'
                 onClick={() => {
                   setShowDialog('login');
                   navigate('login');
                 }}>登录</a>
            </div>}
          </div>
        }
        align="end"
        className="relative"
      />
      <div className={'height-100vh overflow-auto'} style={{ paddingTop: '88px' }}>
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

        </Routes>
      </div>
      <LandDialog
          mask
          show={Boolean(showDialog)}
          onClose={() => setShowDialog('')}
          onCancel={() => setShowDialog('')}
          onSubmit={() => showDialog === 'register' ? register():login()}
          submitLabel={'提交'}
          headerLeftComponent={<LandMenu data={registerMenuData} active={showDialog} onChange={item => setShowDialog(item.key)} border={false}/>}
      >
        {loginLoading ? <div style={{height:'164px'}} className={'flex column both-center gap-8'}>
          <LandLoading/>
          {showDialog === 'register' ? '自动登录中...' : '登录中...'}
        </div>:<div className={'flex column gap-12'}>
          <LandInput width={'100%'} prefix={'昵称：'} onChange={val => setUsername(val)}/>
          <LandRadio data={registerSexData} checked={sex} onChange={item => setSex(item.value)}/>
          <LandInput width={'100%'} prefix={'邮箱：'} onChange={val => setEmail(val)}/>
          <LandInput width={'100%'} prefix={'密码：'} onChange={val => setPassword(val)}/>
        </div>}
      </LandDialog>
    </>
  );
}

export default App;

