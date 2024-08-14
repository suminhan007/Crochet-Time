import { LandButton, LandContent, LandFlex, LandNumberInput, LandTitle, LandUploader } from '@suminhan/land-design';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { downloadHtmlAsImg } from '../../utils';
import { PageTitle } from '../../components/PageTitle';

type Props = {
}
const PixelDrawer: React.FC<Props> = ({
}) => {
  const pixelCanvasRef = useRef<HTMLDivElement>(null);
  const [currentPixel, setCurrentPixel] = useState<string>('');
  const [sizeX, setSizeX] = useState<number>(12);
  const [sizeY, setSizeY] = useState<number>(12);
  const defaultColorList = useMemo(() => Array.from({ length: sizeX }).map((_itemX, indexX) => Array.from({ length: sizeY }).map((_itemY, indexY) => ({ key: `${indexX}-${indexY}`, value: 'transparent' }))), [sizeX, sizeY]);
  const [colorList, setColorList] = useState<{ key: string, value: string }[][]>(defaultColorList);
  useEffect(() => {
    setColorList(defaultColorList);
  }, [sizeX, sizeY]);

  // 参考图
  const [imgUrl, setImgUrl] = useState<string>('');
  const imgRef = useRef<HTMLImageElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const [wrapRatio, setWrapRatio] = useState<number>(2);
  // 根据图片 size 处理色卡布局
  const [size, setSize] = useState<{ w: number, h: number, ratio: number }>({ w: 200, h: 200, ratio: 1 });
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
  }, [imgWrapRef]);
  return (
    <StyledPixelLandContent className="flex-1 flex column items-start gap-32 py-24 px-16 width-100">
      <div className='scrollbar-none' style={{ width: 'calc(100vw - 32px - 20px)', maxHeight: 'calc(100vh - 64px - 48px - 76px - 140px - 37px - 72px - 26px)', maxWidth: '800px', margin: '0 auto' }}>
        <div ref={pixelCanvasRef}
          className='flex flex-wrap'
          style={{
            width: `${sizeX * 16}px`,
            height: `${sizeY * 16}px`,
            margin: 'auto',
            background: imgUrl ? `url(${imgUrl}) center center/contain no-repeat` : 'unset'
          }}
        >
          {
            Array.from({ length: sizeX }).map((_itemX, indexX) => <div key={indexX} className='flex column' style={{ flexDirection: 'column-reverse' }}>
              {Array.from({ length: sizeY }).map((_itemY, indexY) => <StylePixelItem
                key={indexY}
                className={`relative transition ${currentPixel === `${indexX}-${indexY}` ? 'active' : ''} ${indexX === 0 ? 'first-column' : ''} ${indexY === 0 ? 'last-row' : ''}`}
                style={{ backgroundColor: colorList[indexX][indexY].value, }}
                onClick={() => setCurrentPixel(`${indexX}-${indexY}`)}
              // data-row={indexX === 0 ? sizeY - indexY : ''}
              // data-column={indexY === 0 ? indexX + 1 : ''}
              >
                <input type='color' className=' opacity-0' onChange={(e) => {
                  const newList = colorList.map((i) => (
                    i.map((j) => {
                      if (j.key === currentPixel) {
                        return { key: j.key, value: e.target.value };
                      } else {
                        return j;
                      }
                    })
                  ))
                  setColorList(newList);
                }} />
              </StylePixelItem>)}
            </div>)
          }
        </div>
      </div>

      <LandFlex column gap={8}>
        <PageTitle mainTitle='设置画布大小' mainInfo='画布大小范围为 4x4 - 48x48' />
        <LandFlex gap={16} bothCenter >
          <LandTitle title='宽:' type='p' /><LandNumberInput value={sizeX} onChange={(_e, val) => (val >= 4 && val <= 48) && setSizeX(val)} />
          <LandTitle title='高:' type='p' /><LandNumberInput value={sizeY} onChange={(_e, val) => (val >= 4 && val <= 48) && setSizeY(val)} />
        </LandFlex>
      </LandFlex>

      <LandFlex column gap={8}>
        <PageTitle mainTitle='导入参考图' />
        <LandFlex gap={16} bothCenter >
          <LandUploader
            fileType="image/*"
            height='100px'
            onUpload={(url) => setImgUrl(url)}
            desc="点击上传图片或将图片拖拽于此"
            className="radius-12"
            width='100%'
          >
            {imgUrl && <div ref={imgWrapRef} className="flex items-center justify-center width-100 height-100">
              <img ref={imgRef} src={imgUrl} className={`radius-8 ${size.ratio < wrapRatio ? 'height-100' : 'width-100'}`} />
            </div>}
          </LandUploader>
        </LandFlex>
      </LandFlex>

      <LandFlex justify='center' gap={12}>
        <LandButton text='清空画布' onClick={() => setColorList(defaultColorList)} />
        <LandButton text='立即下载' type='background' className='flex-1' onClick={() => {
          downloadHtmlAsImg(pixelCanvasRef.current, 'pixel-res', 1);
        }} />
      </LandFlex>
    </StyledPixelLandContent>
  )
}

const StyledPixelLandContent = styled(LandContent)`
  @media screen and (max-width: 800px){
    .land-uploader-desc{
      font-size: 12px;
    }
  }
`
const StylePixelItem = styled.label`
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    &::after{
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid var(--color-border-1);
      box-sizing: border-box;
    }
    &.active{
      &::after{
        border-color: var(--color-text-5);
        z-index: 1;
      }
    }
    input{
      width: 0px;
      height: 0px;
      inline-size: 0px;
      padding: 0;
    }
    /* &.first-column::before{
      content: attr(data-row);
      display: block;
      position: absolute;
      right: 100%;
      top: 0;
      transform: translateX(-8px);
      font-size: 12px;
        color: var(--color-text-4);
    }
    &.last-row::before{
      content: attr(data-column);
      display: block;
      position: absolute;
      left: 0;
      top: 100%;
      transform: translateY(8px);
      font-size: 12px;
        color: var(--color-text-4);
    } */
`
export default PixelDrawer;