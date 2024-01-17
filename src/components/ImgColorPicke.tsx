import React, {useState, useEffect, useRef} from 'react'

type Props = {
    url?:string;
    onChange?:(colors:any) => void;
}
const ImgColorPicke:React.FC<Props> = ({
    url='',
    onChange
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const analyzeImageData = (imageData:any) => {
        let data:any = imageData;
        let rgbCounts:any = {};
        for (let i = 0; i < data.length; i += 12) { // 每4个元素代表一个像素（R, G, B, A）
          let r = data[i];
          let g = data[i + 1];
          let b = data[i + 2];
          // 将RGB组合成一个键，并计数
          let rgbKey = `${r},${g},${b}`;
          rgbCounts[rgbKey] = (rgbCounts[rgbKey] || 0) + 1;
        }
        // 排序并获取出现次数最多的前10个RGB值
        let sortedRgbCounts = Object.entries(rgbCounts).sort((a:any, b:any) => b[1] - a[1]);
        let top10RgbValues = sortedRgbCounts.slice(0, 4);
        // 输出或处理结果
        console.log(top10RgbValues);
        return top10RgbValues;
      }

    const [imageColor, setImageColor] = useState("");
    useEffect(() => {
    if (!canvasRef.current || !url) return;

    // 创建2D渲染上下文
    const ctx = canvasRef.current.getContext("2d");
    // 加载图片
    const img = new Image();
    img.crossOrigin = "anonymous"; // 处理跨域问题
    img.src = url;
    img.onload = () => {
        // 设置canvas尺寸与图片相同
        canvasRef.current.width = img.width;
        canvasRef.current.height = 480;

        // 将图片绘制到canvas上
        ctx?.drawImage(img, 0, 0, img.width, img.height);

        // 获取图片的像素数据
        const imageData = ctx?.getImageData(0, 0, img.width, img.height).data;
        // 处理像素数据
        setImageColor( analyzeImageData(imageData));
        onChange?.(imageColor)
    };
    // 图片加载失败时设置为空字符串
    img.onerror = () => setImageColor("");
    }, [url]);
  return (
        <canvas className='none' ref={canvasRef}/>
  )
}

export default ImgColorPicke;
