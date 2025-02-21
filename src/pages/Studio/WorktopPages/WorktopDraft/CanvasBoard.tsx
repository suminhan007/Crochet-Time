import React, { useRef, useState, useEffect, MouseEvent, WheelEvent } from 'react';

interface Point {
  x: number;
  y: number;
}

export interface Path {
  path: Point[];
  color: string;
  width: number;
}
type Props = {
  strokeColor?: string;
  lineWidth?: number;
  ratio?: number;
  canvasClassName?: string;
  drawEnd?: (data: Path[]) => void;
  initData?: Path[];
}

const CanvasBoard: React.FC<Props> = ({
  strokeColor = '#000',
  lineWidth = 2,
  ratio = 1,
  canvasClassName = '',
  drawEnd,
                                        initData=[]
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [paths, setPaths] = useState<Path[]>(initData);
  const [currentPath, setCurrentPath] = useState<Point[]>([]);
  const initDraw = (data:Path[]) => {
    data?.map((i) => {
      setCurrentPath([...currentPath,{x: i.path[0].x,y:i.path[0].y}]);
      i.path?.map((j,jdx) => {
        const x = j.x;
        const y = j.y;
        setCurrentPath([...currentPath, { x: x, y: y }]);
        const canvas = canvasRef.current;
        if (canvas) {
          const context = canvas.getContext("2d");
          if (context) {
            context.strokeStyle = strokeColor;
            context.lineWidth = lineWidth;
            context.beginPath();
            context.moveTo(
                currentPath[jdx - 1]?.x,
                currentPath[jdx - 1]?.y
            );
            context.lineTo(x, y);
            context.stroke();
          }
        }
      })
      setPaths((prevPaths) => [
        ...prevPaths,
        { path: currentPath, color: strokeColor, width: lineWidth },
      ]);
      setCurrentPath([]);
    })
  }
  useEffect(() => {
    if(initData?.length<=0)return;
    const newData = initData?.filter(i => i.path?.length > 0);
   if(newData.length<=0)return;
   initDraw(newData)
  }, [initData]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        context.lineJoin = "round";
        context.lineCap = "round";
      }
    }
  }, []);

  const startDrawing = (x:number,y:number) => {
    setIsDrawing(true);
    setCurrentPath([{ x: x, y: y }]);
  };

  const draw = (x:number,y:number) => {
    if (!isDrawing) return;
    setCurrentPath((prevPath) => [...prevPath, { x: x, y: y }]);
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        context.strokeStyle = strokeColor;
        context.lineWidth = lineWidth;
        context.beginPath();
        context.moveTo(
          currentPath[currentPath.length - 1].x,
          currentPath[currentPath.length - 1].y
        );
        context.lineTo(x, y);
        context.stroke();
      }
    }
  };

  const endDrawing = () => {
    setIsDrawing(false);
    setPaths((prevPaths) => [
      ...prevPaths,
      { path: currentPath, color: strokeColor, width: lineWidth },
    ]);
    setCurrentPath([]);
    drawEnd?.(paths?.filter(i => i.path?.length > 0));
  };

  // 缩放逻辑
  const [width, setWidth] = useState<number>(1000);
  const [scale, setScale] = useState<number>(1);
  useEffect(() => {
    const callback: ResizeObserverCallback = (entries) => {
      if (scale !== 1) return;
      entries.forEach((entry) => {
        const width = entry.contentRect.width - 360 - 48;
        const height = entry.contentRect.height - 64 - 48;
        if (width / height < ratio) {
          setWidth(width);
        }
      });
    };
    const observer = new ResizeObserver(callback);
    observer.observe(document.body);
    return () => observer.disconnect();
  }, []);

  const [isCtrlPressed, setIsCtrlPressed] = useState<boolean>(false);
  useEffect(() => {
    const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    document.body.addEventListener("keydown", (event) => {
      const keyRight = isMac ? event.key === "Meta" : event.key === "Control";
      if (keyRight) {
        setIsCtrlPressed(true);
      }
    });
    document.body.addEventListener("keyup", () => {
      setIsCtrlPressed(false);
    });
  }, []);
  const handleWheel = (event: WheelEvent<HTMLCanvasElement>) => {
    event.preventDefault();
    if (isCtrlPressed) {
      const newScale = scale + event.deltaY * -0.01;
      setScale(Math.min(Math.max(0.5, newScale), 3));
    }
  };
  return (
    <div
      className="flex both-center"
      style={{ width: width * 0.65 * scale, height: width * 0.65 * scale }}
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={width * ratio}
        onMouseDown={(event: MouseEvent<HTMLCanvasElement>) =>startDrawing?.(event.nativeEvent.offsetX,event.nativeEvent.offsetY)}
        onMouseMove={(event: MouseEvent<HTMLCanvasElement>) => draw?.(event.nativeEvent.offsetX,event.nativeEvent.offsetY)}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
        onWheel={handleWheel}
        className={`${canvasClassName} bg-white`}
        style={{ transform: `scale(${0.65 * scale})` }}
      />
    </div>
  );
};

export default CanvasBoard;