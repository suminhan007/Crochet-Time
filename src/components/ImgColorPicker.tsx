import React, { useState, useEffect, useRef } from 'react'
import Button from './Button';

type Props = {
  url?: string;
  colorLength?: number;
  onChange?: (colors: any) => void;
  className?: string;
}
const ImgColorPicker: React.FC<Props> = ({
  url = '',
  colorLength = 4,
  onChange,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  /** 分析图片数据 */
  const analyzeImageData = (imageData: any) => {
    let data: any = imageData;
    let rgbCounts: any = {};
    for (let i = 0; i < data.length; i += 8) { // 每4个元素代表一个像素（R, G, B, A）
      let r = data[i];
      let g = data[i + 1];
      let b = data[i + 2];
      // 将RGB组合成一个键，并计数
      let rgbKey = `${r},${g},${b}`;
      rgbCounts[rgbKey] = (rgbCounts[rgbKey] || 0) + 1;
    }
    // 排序并获取出现次数最多的RGB值
    let sortedRgbCounts = Object.entries(rgbCounts).sort((a: any, b: any) => b[1] - a[1]);
    let topRgbValues = sortedRgbCounts.slice(0, colorLength);
    // 输出或处理结果
    return topRgbValues;
  }

  const [imageColor, setImageColor] = useState<[string, unknown][]>([]);
  /** 将图片绘制在canvas上*/
  const getImgData = (url: string) => {
    if (!canvasRef.current || !url) return;
    const ctx = canvasRef.current.getContext("2d");
    const img = new Image(); // 加载图片
    img.crossOrigin = "anonymous"; // 处理跨域问题
    img.src = url;
    img.onload = () => {
      // 设置canvas尺寸与图片相同
      if (canvasRef.current) {
        canvasRef.current.width = img.width;
        canvasRef.current.height = img.height;
      }

      // 将图片绘制到canvas上
      ctx?.drawImage(img, 0, 0, img.width, img.height);

      // 获取图片的像素数据
      const imageData = ctx?.getImageData(0, 0, img.width, img.height).data;
      // 处理像素数据
      setImageColor(analyzeImageData(imageData));
    };
    // 图片加载失败时设置为空字符串
    img.onerror = () => setImageColor([]);
  }
  useEffect(() => {
    onChange?.(imageColor)
  }, [imageColor])
  return (
    <div className={className}>
      <canvas className='none' ref={canvasRef} />
      <Button text='提取颜色' onClick={() => { getImgData(url); onChange?.(imageColor) }} />
    </div>
  )
}

export default ImgColorPicker;
