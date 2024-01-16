import React,{useState, useRef, useEffect} from 'react'
import styled from 'styled-components'

type Props = {}
const Home:React.FC<Props> = ({

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
    const useImageColor = (imageUrl:string) => {
        const [imageColor, setImageColor] = useState("");
        useEffect(() => {
          if (!canvasRef.current || !imageUrl) return;
      
          // 创建2D渲染上下文
          const ctx = canvasRef.current.getContext("2d");
          // 加载图片
          const img = new Image();
          img.crossOrigin = "anonymous"; // 处理跨域问题
          img.src = imageUrl;
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
          };
          // 图片加载失败时设置为空字符串
          img.onerror = () => setImageColor("");
        }, [imageUrl]);
        return imageColor;
      };
        
  const imageColor = useImageColor('/src/assets/images/banner.png');
  const [bannerColor,setBannerColor] = useState<any>();
  useEffect(() => {
    // 当parentRef.current指向一个实际存在的DOM元素并且imageColor有值时，
    // 将这个DOM元素的背景色设置为图片的主要颜色
   imageColor && setBannerColor(imageColor);
  }, [imageColor]);
  return (
    <StyleHomeWrap className='StyleHomeWrap width-100'>
        {/* banner */}
        <StyleBannerWrap className='StyleBannerWrap overflow-hidden'>
            <canvas ref={canvasRef}/>
        </StyleBannerWrap>
        <div className='width-100 flex gap-8'>
        {bannerColor?.map((item:any) =>
                <div className='radius-12' style={{width:'32px',height:'32px',background: 'rgba('+item+')'}}></div>    
         )}
        </div>
       
    </StyleHomeWrap>
  )
}

const StyleHomeWrap = styled.div`
    min-height: 100vh;
`

const StyleBannerWrap = styled.div`
    height: 480px;
`
export default Home
