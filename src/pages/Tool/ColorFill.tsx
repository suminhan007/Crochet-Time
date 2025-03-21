//@ts-nocheck
import {
  Icon,
  LandContent,
  LandFlex,
  LandLoading,
  LandMenu, LandMessage,
  LandTitle,
} from "@suminhan/land-design";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { downloadHtmlAsImg } from "../../utils";
import axios from "axios";
import { ColorFill_Color_List_Data } from "../mock";
import supabase from "../../utils/supabse.ts";
import html2canvas from "html2canvas";
import CourseHeader from "../Course/components/CourseHeader.tsx";

type Props = {
  pathData?: { id: number; img: string; path: string[] }[];
  isEnglish?: boolean;
};
const ColorFill: React.FC<Props> = ({ pathData = [],isEnglish }) => {
  const styleLoading = useMemo(
    () => !pathData || pathData?.length <= 0,
    [pathData]
  );
  const [colorsData, setColorsData] = useState<any[]>([]);
  const colorsLoading = useMemo(
    () => !colorsData || colorsData?.length <= 0,
    [colorsData]
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./api/colorsData.json");
        setColorsData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    // 调用获取数据的函数
    fetchData();
  }, []);

  const newPathData = useMemo(() => {
    if (location.hash.includes("#/suumhan")) {
      return pathData;
    } else {
      return pathData?.filter((i) => !i.private);
    }
  }, [window.location, pathData]);
  /** 当前选中的样式 */
  const [currentSvgId, setCurrentSvgId] = useState<number>(1);
  const currentSvg = useMemo(
    () => newPathData?.filter((itm) => itm.id === currentSvgId)[0],
    [currentSvgId, newPathData]
  );
  /** 当前选中的path */
  const [currentPathId, setCurrentPathId] = useState<number>(0);
  const [colorList, setColorList] = useState<string[]>(
    Array.from({ length: currentSvg?.path?.length }).map(() => "#DDDDDD")
  );
  /** 选择颜色 */
  const handleColorClick = (color: string) => {
    const resColorList = colorList?.map((itm, idx) =>
      idx + 1 === currentPathId ? color : itm
    );
    setColorList(resColorList);
  };

  const isWhite = (value: string) => {
    if (
      value === "white" ||
      value === "#fff" ||
      value === "#FFF" ||
      value === "#ffffff" ||
      value === "#FFFFFF"
    ) {
      return true;
    } else {
      return false;
    }
  };
  const colorFillRef = useRef<HTMLOrSVGElement>(null);

  const [activeTab, setActiveTab] = useState<string | number>("style");
  const [activeColorTab, setActiveColorTab] = useState<string>("gift-2mm");
  const menuData = useMemo(() => isEnglish ? [
    { key: "style", title: "style" },
    { key: "colors", title: "color" },
  ]:[
    { key: "style", title: "款式" },
    { key: "colors", title: "颜色" },
  ],[isEnglish])

  //提示信息
  const [toast, setToast] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>("");

  const handleShowToast = (show: boolean, text: string) => {
    setToastText(text);
    setToast(show);
    const timer = setTimeout(() => {
      setToast(false);
      clearTimeout(timer);
    }, 1000);
  };
  async function saveImageToDatabase(imagePath:any) {
    const {data:{user}} = await supabase.auth.getUser();
    if(user){
      const { data, error } = await supabase
          .from('fillCard') // 替换为你的素材库表名称
          .insert([{
            img_url: imagePath,
            user_id: user.id,
            colors: colorList
          }]);

      if (error) {
        console.error('Error saving image to database:', error);
      } else {
        console.log('Image saved to database:', data);
        handleShowToast(true,'保存成功，前往仓库查看')
      }
    }
  }
  async function uploadImageToSupabase(imageData:any) {
    const blob = await fetch(imageData).then(res => res.blob());
    const fileName = `color-fill-card-${Date.now()}.png`;
    const { data, error } = await supabase
        .storage
        .from('CroKnitTime/fillCards') // 替换为你的存储桶名称
        .upload(fileName, blob);

    if (error) {
      console.error('Error uploading image:', error);
    } else {
      saveImageToDatabase(data.path); // 将图片路径保存到素材库表中
    }
  }

  const saveFillCard = async  () => {
    if(!colorFillRef.current) return;
    const {data:{user}} = await supabase.auth.getUser();
    if(!user) {
      handleShowToast(true, '请先登录')
      return;
    }
    html2canvas(colorFillRef.current,{
      scale: 3,
      useCORS: true,
    }).then(canvas => {
      const image = canvas.toDataURL('image/png');
      uploadImageToSupabase(image);
    });
  }
  return (
     <div className={'fixed top-0 left-0 flex column width-100 height-100 bg-white'} style={{zIndex: 1024}}>
       <CourseHeader title={'配色'} isEnglish={isEnglish} backHref={'/type=tools'}/>
       <StyledLandContent className="flex-1 flex items-start gap-32 width-100">
         <div className="canvas-container flex column items-center gap-12">
           <div className="canvas-area relative flex gap-12 mx-auto">
             <div ref={colorFillRef} className="relative height-100 ratio-1">
               <svg
                   width="100%"
                   viewBox="0 0 220 220"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                   className="radius-8 bg-gray"
                   onClick={() => setCurrentPathId(0)}
               >
                 {currentSvg?.path?.map((item, index) => (
                     <path
                         key={index}
                         d={item}
                         fill={colorList[index] || "var(--color-bg-3)"}
                         fillRule="evenodd"
                         clipRule="evenodd"
                         stroke={
                           index + 1 === currentPathId
                               ? "var(--color-text-3)"
                               : colorList[index] !== "#DDDDDD"
                                   ? colorList[index]
                                   : "#999"
                         }
                         className="transition"
                         onClick={(e: React.UIEvent) => {
                           e.stopPropagation();
                           setCurrentPathId(index + 1);
                         }}
                     />
                 ))}
               </svg>
             </div>
             <div
                 className="absolute"
                 style={{bottom: "12px", right: "12px"}}
                 onClick={() => {
                   setCurrentPathId(0);
                   downloadHtmlAsImg(
                       colorFillRef.current,
                       `crochet-time-color-fill-res`,
                       3
                   );
                 }}
             >
               <Icon name="download" stroke="var(--color-text-4)" size={20}/>
             </div>
             <div
                 className="absolute"
                 style={{bottom: "40px", right: "12px"}}
                 onClick={() => {
                   setCurrentPathId(0);
                   saveFillCard()
                 }}
             >
               <Icon name="file" stroke="var(--color-text-4)" size={20}/>
             </div>
           </div>
         </div>

         <div className="options-panel">
           <div className="flex justify-center width-100">
             <LandMenu
                 border={false}
                 data={menuData}
                 active={activeTab}
                 onChange={(item) => setActiveTab(item.key)}
                 style={{height: "64px"}}
             />
           </div>
           <div className="relative flex-1 flex column height-1 width-100 overflow-auto">
             {activeTab === "style" && (
                 <div
                     className="style-grid-container grid gap-8 width-100 scrollbar-none"
                     style={{
                       gridTemplateColumns: "repeat(auto-fill, minmax(120px,1fr))",
                     }}
                 >
                   <div
                       className={`absolute flex column gap-8 color-gray-3 fs-14 both-center width-100 height-100 bg-white ${styleLoading ? "" : "opacity-0 events-none"
                       } transition`}
                       style={{ zIndex: 100 }}
                   >
                     <LandLoading size={24} color="var(--color-primary-6)" />
                     <div>{isEnglish ? 'styles loading...': '款式加载中'}</div>
                   </div>
                   {newPathData?.map((item3, index3) => (
                       <div
                           key={index3}
                           onClick={() => {
                             setCurrentSvgId(item3.id);
                             /** 是否清空colorList */
                           }}
                           className={`flex items-center justify-center p-16 radius-6 ratio-1 shrink-0 ${currentSvgId === item3.id ? "border-primary" : "border"
                           }`}
                       >
                         <img
                             src={item3.img}
                             width="100%"
                             style={{ maxWidth: "100px", aspectRatio: 1 }}
                         />
                       </div >
                   ))}
                 </div >
             )}
             {
                 activeTab === "colors" && (
                     <>
                       <div
                           className={`absolute flex column gap-8 color-gray-3 fs-14 both-center width-100 height-100 bg-white ${false ? "" : "opacity-0 events-none"
                           } transition`}
                           style={{ zIndex: 100 }}
                       >
                         <LandLoading size={24} color="var(--color-primary-6)" />
                         <div>{isEnglish ? 'colors list loading...': '颜色列表加载中'}</div>
                       </div>
                       {/* 颜色 */}
                       <StyledColorFillInput className="flex items-center justify-center fs-12 color-gray-2 width-100 border radius-8">
                         <input
                             type="color"
                             onChange={(e: any) => handleColorClick?.(e.target.value)}
                         />
                         {isEnglish ? 'Custom colors': '自定义颜色'}
                       </StyledColorFillInput>
                       <div
                           className="flex-1 flex column width-100"
                           style={{ overflow: "auto" }}
                       >
                         <div
                             className="overflow-auto mt-12 shrink-0"
                             style={{ height: "48px" }}
                         >
                           <LandMenu
                               data={colorsData?.map((item) => ({
                                 key: item.id,
                                 title: item.title,
                               }))}
                               active={activeColorTab}
                               onChange={(item) => setActiveColorTab(item.key)}
                           />
                         </div>
                         <div
                             className="grid width-100 gap-8 pt-12 overflow-auto pb-24"
                             style={{
                               gridTemplateColumns: "repeat(auto-fill, minmax(36px,1fr))",
                             }}
                         >
                           {colorsData
                               ?.filter((i) => i.id === activeColorTab)[0]
                               ?.colors?.map((c) => (
                                   <div
                                       key={c.id}
                                       className="flex column gap-4 items-center fs-12 color-gray-4"
                                   >
                                     <div
                                         className={`width-100 border radius-50 ratio-1 shrink-0 ${isWhite(c.value) ? "border" : ""
                                         }`}
                                         style={{ backgroundColor: c.value }}
                                         onClick={() => handleColorClick?.(c.value)}
                                     ></div>
                                     <p className="width-100 ellipsis">{c.name}</p>
                                   </div>
                               ))}
                         </div>
                       </div>
                     </>
                 )
             }
           </div >
         </div >
         {toast && <LandMessage show={toast} text={toastText} />}
       </StyledLandContent >
     </div>
  );
};

const StyledLandContent = styled.div`
  .canvas-container {
    flex: 2;
    padding: 24px;
    height: 100%;
    border-right: 1px solid var(--color-border-2);
  }
  .canvas-area {
    width: 100%;
    max-width: 400px;
    height: auto;
    aspect-ratio: 1;
    margin: auto;
  }
  .options-panel {
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-inline: 24px;
    height: 100%;
  }
  @media screen and (max-width: 1024px) {
    padding-top: 32px;
    padding-inline: 16px;
    flex-direction: column;
    gap: 16px;
    .canvas-container {
      padding: 0px;
      flex: unset;
      border-right: none;
      margin-inline: auto;
      height: auto;
    }
    .canvas-area {
      height: 300px;
      margin: unset;
    }
    path {
      -webkit-tap-highlight-color: transparent;
    }
    .options-panel {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-inline: 0px;
      width: 100%;
      height: 1%;
    }
  }
`;

export const StyledColorFillInput = styled.label`
  height: 36px;
  input {
    width: 0px;
    height: 0px;
    opacity: 0;
  }
`;
export default ColorFill;
