import React, { useRef, useState, useEffect, MouseEvent, WheelEvent } from 'react';

interface Point {
  x: number;
  y: number;
}

interface Path {
  path: Point[];
  color: string;
  width: number;
}
type Props = {
  strokeColor?: string;
  lineWidth?: number;
  ratio?: number;
}

const CanvasBoard: React.FC<Props> = ({
  strokeColor = '#000',
  lineWidth = 2,
  ratio = 1
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [paths, setPaths] = useState<Path[]>([]);
  const [currentPath, setCurrentPath] = useState<Point[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        context.lineJoin = 'round';
        context.lineCap = 'round';
      }
    }
  }, []);

  const startDrawing = (event: MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setIsDrawing(true);
    setCurrentPath([{ x: offsetX, y: offsetY }]);
  };

  const draw = (event: MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = event.nativeEvent;
    setCurrentPath((prevPath) => [...prevPath, { x: offsetX, y: offsetY }]);
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        context.strokeStyle = strokeColor;
        context.lineWidth = lineWidth;
        context.beginPath();
        context.moveTo(currentPath[currentPath.length - 1].x, currentPath[currentPath.length - 1].y);
        context.lineTo(offsetX, offsetY);
        context.stroke();
      }
    }
  };

  const endDrawing = () => {
    setIsDrawing(false);
    setPaths((prevPaths) => [...prevPaths, { path: currentPath, color: strokeColor, width: lineWidth }]);
    setCurrentPath([]);
  };

  // 缩放逻辑
  const [width, setWidth] = useState<number>(1000);
  const [scale, setScale] = useState<number>(1);
  useEffect(() => {
    const callback: ResizeObserverCallback = entries => {
      if (scale !== 1) return;
      entries.forEach(entry => {
        const width = entry.contentRect.width - 360 - 48;
        const height = entry.contentRect.height - 64 - 48;
        if (width / height < ratio) {
          setWidth(width);
        }
      })
    }
    const observer = new ResizeObserver(callback);
    observer.observe(document.body);
    return () => observer.disconnect();
  }, [])

  const [isCtrlPressed, setIsCtrlPressed] = useState<boolean>(false);
  useEffect(() => {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    document.body.addEventListener('keydown', event => {
      const keyRight = isMac ? event.key === 'Meta' : event.key === 'Control';
      if (keyRight) {
        setIsCtrlPressed(true);
      }
    })
    document.body.addEventListener('keyup', () => {
      setIsCtrlPressed(false);
    })
  }, [])
  const handleWheel = (event: WheelEvent<HTMLCanvasElement>) => {
    event.preventDefault();
    if (isCtrlPressed) {
      const newScale = scale + event.deltaY * -0.01;
      setScale(Math.min(Math.max(0.5, newScale), 3));
    }
  };

  return (
    <div className='flex both-center' style={{ width: width * 0.8 * scale, height: width * 0.8 * scale }}>
      <canvas
        ref={canvasRef}
        width={width}
        height={width * ratio}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
        onWheel={handleWheel}
        className='bg-white'
        style={{ transform: `scale(${0.8 * scale})` }}
      />
    </div>
  );
};

export default CanvasBoard;