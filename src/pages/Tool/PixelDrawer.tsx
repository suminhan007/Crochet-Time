//@ts-nocheck
import {
    Icon,
    LandButton,
    LandContent, LandDivider,
    LandFlex,
    LandNumberInput,
    LandSlider,
    LandSwitch,
    LandTitle,
    LandUploader,
} from "@suminhan/land-design";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { downloadHtmlAsImg } from "../../utils";
import { PageTitle } from "../../components/PageTitle";
import { IconDec } from "../../components/Icon";
import { StyledColorFillInput } from "./ColorFill";
import supabase from "../../utils/supabse.ts";
import html2canvas from "html2canvas";

type Props = {isEnglish?: boolean};
const PixelDrawer: React.FC<Props> = ({ isEnglish}) => {
  const pixelCanvasRef = useRef<HTMLDivElement>(null);
  const [sizeX, setSizeX] = useState<number>(16);
  const [sizeY, setSizeY] = useState<number>(16);
  const [square, setSquare] = useState<number>(24);
  const [bgColor, setBgColor] = useState<string>("");
  const defaultColorList = useMemo(
    () =>
      Array.from({ length: sizeX }).map((_itemX, indexX) =>
        Array.from({ length: sizeY }).map((_itemY, indexY) => ({
          key: `${indexX}-${indexY}`,
          value: bgColor,
          bg: true,
        }))
      ),
    [sizeX, sizeY, bgColor]
  );
  const [colorList, setColorList] =
    useState<{ key: string; value: string; bg: boolean }[][]>(defaultColorList);

  // 参考图
  const [imgUrl, setImgUrl] = useState<string>("");
  const imgRef = useRef<HTMLImageElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const [wrapRatio, setWrapRatio] = useState<number>(2);
  // 根据图片 size 处理色卡布局
  const [size, setSize] = useState<{ w: number; h: number; ratio: number }>({
    w: 200,
    h: 200,
    ratio: 1,
  });
  useEffect(() => {
    if (!imgRef.current) return;
    const img = imgRef.current.getBoundingClientRect();
    setSize({ w: img.width, h: img.height, ratio: img.width / img.height });
  }, [imgUrl, imgRef]);

  useEffect(() => {
    if (!imgWrapRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWrapRatio(entry.contentRect.width / entry.contentRect.height);
      }
    });
    observer.observe(imgWrapRef.current);
    return () => observer.disconnect();
  });
  const [color, setColor] = useState<string>("#333");
  const [useBg, setUseBg] = useState<boolean>(false);
  // 绘制
    const [isDrawing, setIsDrawing] = useState(false);
  const handleDraw = (cur: string) => {
      if(!isDrawing)return;
    const newList = colorList.map((i) =>
      i.map((j) => {
        if (j.key === cur) {
          return { key: j.key, value: color, bg: false };
        } else {
          return j;
        }
      })
    );
    setColorList(newList);
  };

  //换底色
  const handleBgChange = (bg: string) => {
    setBgColor?.(bg);
    const newList = colorList.map((i) =>
      i.map((j) => {
        if (j.bg) {
          return { key: j.key, value: bg, bg: j.bg };
        } else {
          return j;
        }
      })
    );
    setColorList(newList);
  };

  // 增加行列
  const handleSizeChange = (x: number, y: number) => {
    const newList: any[][] = Array.from({ length: x }).map((_itemX, indexX) =>
      Array.from({ length: y }).map((itemY, indexY) => {
        if (colorList[indexX] && colorList[indexX][indexY]) {
          return colorList[indexX][indexY];
        } else {
          return { key: indexX + "-" + indexY, value: bgColor, bg: true };
        }
      })
    );
    setColorList(newList);
  };

  const [usePattern, setUsePattern] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(1);

    async function saveImageToDatabase(imagePath:any,index:number,origin:string) {
        const {data:{user}} = await supabase.auth.getUser();
        if(user){
            const { data, error } = await supabase
                .from('pixelCard') // 替换为你的素材库表名称
                .insert([{
                    img_url: imagePath,
                    user_id: user.id,
                    size: `${sizeX}x${sizeY}`,
                }]);

            if (error) {
                console.error('Error saving image to database:', error);
            } else {
                console.log('Image saved to database:', data);
                handleShowToast(true,'保存成功，前往仓库查看')
            }
        }
    }
    async function uploadImageToSupabase(imageData:any,index:number,origin:string) {
        const blob = await fetch(imageData).then(res => res.blob());
        const fileName = `pixel-card-${Date.now()}.png`;
        const { data, error } = await supabase
            .storage
            .from('CroKnitTime/pixelCards') // 替换为你的存储桶名称
            .upload(fileName, blob);

        if (error) {
            console.error('Error uploading image:', error);
        } else {
            saveImageToDatabase(data.path); // 将图片路径保存到素材库表中
        }
    }

    const savePixelCard = async  () => {
        if(!pixelCanvasRef.current) return;
        const {data:{user}} = await supabase.auth.getUser();
        if(!user) {
            handleShowToast(true, '请先登录')
            return;
        }
        html2canvas(pixelCanvasRef.current,{
            scale: 3,
            useCORS: true,
        }).then(canvas => {
            const image = canvas.toDataURL('image/png');
            uploadImageToSupabase(image);
        });
    }
    const [eraser,setEraser] = useState<boolean>(false);
    const [lastColors,setLastColors] = useState<string>(color);
  return (
      <StyledPixelLandContent
          className="flex-1 flex items-start gap-32 py-24 px-16 width-100 height-100 scrollbar-none">
          <div className={'flex column gap-24 height-100 shrink-0 no-wrap'} style={{maxWidth:'208px'}}>
              <div className="flex column gap-12">
                  <PageTitle mainTitle={isEnglish ? 'Brush Color' : "画笔"}/>
                  <div className={'flex gap-8'}>
                      <StyledColorFillInput
                          className="relative flex items-center justify-center fs-12 color-gray-2 flex-1 border radius-6 shrink-0"
                          style={{
                              background: color,
                          }}
                      >
                          <input
                              type="color"
                              onChange={(e: any) => {
                                  setColor?.(e.target.value);
                              }}
                          />
                      </StyledColorFillInput>
                      <LandButton
                          icon={<Icon name={'clear-formate'} size={16} strokeWidth={3}/>}
                          onClick={() => {
                              if(eraser) {
                                  setEraser(false);
                                  setColor(lastColors);
                              }else {
                                  setEraser(true);
                                  setLastColors(color);
                                  setColor('white');
                              }
                          }}
                          className='shrink-0' status={eraser?'primary':'default'} type={'background'}/>
                  </div>
              </div>
              <div className="flex column gap-12">
                  <PageTitle mainTitle={isEnglish ? 'Canvas BackgroundColor' : "画布"}/>
                  <StyledColorFillInput
                      className="relative flex items-center justify-center fs-12 color-gray-2 width-100 border radius-6 shrink-0"
                      style={{
                          background: bgColor,
                      }}
                  >
                      <input
                          type="color"
                          onChange={(e: any) => handleBgChange?.(e.target.value)}
                      />
                  </StyledColorFillInput>
              </div>
              <LandFlex column>
                  <div className="flex items-center gap-8">
                      <PageTitle mainTitle={isEnglish ? 'Brush Pattern' : "画笔图样"}/>
                      <LandSwitch
                          checked={usePattern}
                          onChange={() => setUsePattern(!usePattern)}
                      />
                  </div>
              </LandFlex>

              <LandFlex column gap={8}>
                  <PageTitle mainTitle={isEnglish ? 'Canvas Opacity' : "画布透明度"}/>
                  <LandSlider
                      max={1}
                      step={0.1}
                      value={opacity}
                      onChange={(val) => setOpacity(val)}
                      height={16}
                      suffix={`${(opacity) * 100}%`}
                  />
              </LandFlex>

              <LandFlex column gap={8}>
                  <PageTitle
                      mainTitle={isEnglish ? 'Setting the canvas size' : "设置画布大小"}
                      mainInfo={isEnglish ? 'Canvas size range of 4x4 - 48x48' : "画布大小范围为 4x4 - 48x48"}
                  />
                  <LandFlex gap={16} column bothCenter>
                      <LandFlex bothCenter gap={8}>
                          <LandTitle title={isEnglish ? 'width:' : "宽:"} type="p"/>
                          <LandNumberInput
                              value={sizeX}
                              max={48}
                              min={4}
                              onChange={(val) => {
                                  setSizeX(Number(val));
                                  handleSizeChange(val, sizeY);
                              }}
                          />
                      </LandFlex>
                      <LandFlex bothCenter gap={8}>
                          <LandTitle title={isEnglish ? 'height:' : "高:"} type="p"/>
                          <LandNumberInput
                              value={sizeY}
                              max={48}
                              min={4}
                              onChange={(val) => {
                                  setSizeY(Number(val));
                                  handleSizeChange(sizeX, val);
                              }}
                          />
                      </LandFlex>
                  </LandFlex>
              </LandFlex>
              <LandFlex column gap={8}>
                  <div className="flex items-center gap-8">
                      <PageTitle mainTitle={isEnglish ? 'Import Reference Image' : "导入参考图"}/>
                      <LandSwitch
                          checked={useBg}
                          onChange={() => {
                              setUseBg(!useBg);
                              setBgColor("transparent");
                              handleBgChange("transparent");
                          }}
                      />
                  </div>
                  <LandFlex
                      gap={16}
                      bothCenter
                      className="overflow-hidden"
                      style={{height: useBg ? "100px" : "0px"}}
                  >
                      <LandUploader
                          fileType="image/*"
                          height="100px"
                          onUpload={(url) => setImgUrl(url)}
                          desc={isEnglish ? 'Click to upload an image or drag and drop an image here' : "点击上传图片或将图片拖拽于此"}
                          className="radius-12"
                          width="100%"
                      >
                          {imgUrl && (
                              <div
                                  ref={imgWrapRef}
                                  className="flex items-center justify-center width-100 height-100"
                              >
                                  <img
                                      ref={imgRef}
                                      src={imgUrl}
                                      className={`radius-8 ${size.ratio < wrapRatio ? "height-100" : "width-100"
                                      }`}
                                  />
                              </div>
                          )}
                      </LandUploader>
                  </LandFlex>
              </LandFlex>
              <LandFlex justify="center" gap={12} className={'flex-1 pt-20'} align="end">
                  <LandButton
                      pop={isEnglish ? 'Clear Canvas' : "清空画布"}
                      icon={<Icon name="clear-formate" size={16} strokeWidth={3}/>}
                      type="background"
                      onClick={() => setColorList(defaultColorList)}
                  />
                  <LandButton
                      pop={isEnglish ? 'Download' : "下载到本地"}
                      icon={<Icon name="download"/>}
                      type="background"
                      onClick={() => {
                          downloadHtmlAsImg(pixelCanvasRef.current, "pixel-res", 3);
                      }}
                  />
                  <LandButton
                      text={isEnglish ? 'Save' : "保存到仓库"}
                      type="background"
                      status={'primary'}
                      className={'flex-1'}
                      onClick={savePixelCard}
                  />
              </LandFlex>
          </div>
          <div className={'flex-1 width-1 flex column items-end gap-12 height-100'}>
              <div
                  className="flex-1 flex both-center width-100 scrollbar-none"
              >
                  <div
                      ref={pixelCanvasRef}
                      className="flex flex-wrap"
                      style={{
                          width: `${sizeX * 16}px`,
                          height: `${sizeY * 16}px`,
                          margin: "auto",
                          background:
                              imgUrl && useBg
                                  ? `url(${imgUrl}) center center/contain no-repeat`
                                  : "unset",
                          transform: `scale(${square / 16})`,
                      }}
                  >
                      {Array.from({length: sizeX}).map((_itemX, indexX) => (
                          <div
                              key={indexX}
                              className="flex column"
                              style={{flexDirection: "column-reverse"}}
                          >
                              {Array.from({length: sizeY}).map((_itemY, indexY) => (
                                  <StylePixelItem
                                      key={indexY}
                                      className={`relative flex bth-center transition  ${indexX === 0 ? "first-column" : ""
                                      } ${indexY === 0 ? "last-row" : ""}`}
                                      style={{
                                          width: `${16}px`,
                                          height: `${16}px`,
                                          backgroundColor: usePattern
                                              ? "transparent"
                                              : colorList[indexX] && colorList[indexX][indexY]
                                                  ? colorList[indexX][indexY].value
                                                  : "transparent",
                                          opacity: opacity,
                                      }}
                                      onClick={() => {
                                          handleDraw(`${indexX}-${indexY}`);
                                      }}
                                      onMouseDown={() => setIsDrawing(true)}
                                      onMouseUp={() => setIsDrawing(false)}
                                      onMouseMove={(e) => {
                                          e.preventDefault();
                                          handleDraw(`${indexX}-${indexY}`)
                                      }}
                                  >
                                      {usePattern && (
                                          <svg
                                              width={16}
                                              height={16}
                                              viewBox="0 0 26 26"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                          >
                                              <g clipPath="url(#clip0_1839_1504)">
                                                  <path
                                                      d="M22.2461 6.19674C22.3286 6.24439 22.8633 6.74219 22.6946 8.64468C22.542 10.366 21.826 12.6146 20.499 14.9131C19.1719 17.2116 17.5826 18.956 16.1682 19.9488C14.605 21.0461 13.9065 20.8319 13.824 20.7843C13.7414 20.7366 13.2067 20.2388 13.3754 18.3363C13.528 16.6151 14.244 14.3664 15.571 12.0679C16.8981 9.76942 18.4874 8.02504 19.9018 7.03224C21.4651 5.93491 22.1635 6.14909 22.2461 6.19674Z"
                                                      stroke={
                                                          colorList[indexX] && colorList[indexX][indexY]
                                                              ? colorList[indexX][indexY].value
                                                              : "transparent"
                                                      }
                                                      strokeWidth="4"
                                                  />
                                                  <path
                                                      d="M12.6177 20.7422C12.5352 20.7898 11.8367 21.004 10.2734 19.9067C8.85907 18.9139 7.26971 17.1695 5.94267 14.871C4.61562 12.5725 3.89962 10.3238 3.74701 8.60256C3.57833 6.70008 4.11305 6.20227 4.19558 6.15463C4.27811 6.10698 4.97658 5.8928 6.53984 6.99012C7.9542 7.98293 9.54356 9.7273 10.8706 12.0258C12.1977 14.3243 12.9137 16.5729 13.0663 18.2942C13.2349 20.1967 12.7002 20.6945 12.6177 20.7422Z"
                                                      stroke={
                                                          colorList[indexX] && colorList[indexX][indexY]
                                                              ? colorList[indexX][indexY].value
                                                              : "transparent"
                                                      }
                                                      strokeWidth="4"
                                                  />
                                              </g>
                                              <defs>
                                                  <clipPath id="clip0_1839_1504">
                                                      <rect width={26} height={26} fill="white"/>
                                                  </clipPath>
                                              </defs>
                                          </svg>
                                      )}
                                  </StylePixelItem>
                              ))}
                          </div>
                      ))}
                  </div>
              </div>
              {/* 缩放画布 */}
              <div className="flex gap-12 width-100 justify-end" style={{maxWidth: '200px'}}>
                  <LandButton
                      icon={<IconDec fill="#999" size={20}/>}
                      type={'text'}
                      disabled={square===12}
                      className={'shrink-0'}
                      size={'small'}
                      onClick={() => {
                      if (square > 12) {
                          let s = square - 4;
                          setSquare(s);
                      }
                  }}/>
                  <LandSlider
                      height={8}
                      value={square}
                      onChange={val => setSquare(val)}
                      min={12}
                      max={32}
                      step={1}
                  />
                  <LandButton
                      icon={<Icon name="add" stroke="#999" strokeWidth={2} size={20}/>}
                      disabled={square===32}
                      type={'text'}
                      className={'shrink-0'}
                      size={'small'}
                      onClick={() => {
                          if (square < 32) {
                              let s = square + 4;
                              setSquare(s);
                          }
                      }}
                  />
              </div>
          </div>
      </StyledPixelLandContent>
  );
};

const StyledPixelLandContent = styled(LandContent)`
    max-width: 1200px;
    margin-inline: auto;
    box-sizing: border-box;

    h3 {
        font-size: 14px;
    }

    .land-numberInput-arrow svg {
        width: 18px;
        height: 18px;
    }

    @media screen and (max-width: 800px) {
        .land-uploader-desc {
            font-size: 12px;
        }
    }
`;
const StylePixelItem = styled.div`
    box-sizing: border-box;

    &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid var(--color-border-1);
        box-sizing: border-box;
        z-index: 0;
    }

    &.active {
        &::after {
            border-color: var(--color-text-5);
            z-index: 1;
        }
    }

    input {
        width: 0;
        height: 0;
        inline-size: 0;
        padding: 0;
    }
`;
export default PixelDrawer;
