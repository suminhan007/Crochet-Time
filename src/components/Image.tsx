import { Icon, LandLoading } from "@suminhan/land-design";
import React, { useEffect, useRef, useState, CSSProperties } from "react";

export type ImageProps = {
  /* 图片地址 */
  url?: string;
  /* 组件级 class */
  className?: string;
  /* 图片 class */
  imgClassName?: string;
  /* 组件级 style */
  style?: CSSProperties;
  /* 图片 style */
  imgStyle?: CSSProperties;
  /* 比例 */
  ratio?: number;
};

const Image: React.FC<ImageProps> = ({
  url,
  className,
  imgClassName,
  imgStyle,
  style,
  ratio = 1 / 1,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgLoading, setImgLoading] = useState<boolean>(true);
  const [loadDefaultImg, setLoadDefaultImg] = useState<boolean>(false);
  // 判断是否加载
  useEffect(() => {
    const imageElement = imgRef.current;
    const handleLoad = () => {
      setImgLoading(false);
    };
    const handleError = () => {
      setImgLoading(false);
      setLoadDefaultImg(true);
    };
    if (!imageElement) return;
    if (imageElement.complete) {
      setImgLoading(false);
    }
    imageElement?.addEventListener("load", handleLoad);
    imageElement?.addEventListener("error", handleError);
    return () => {
      imageElement?.removeEventListener("load", handleLoad);
      imageElement?.removeEventListener("error", handleError);
    };
  }, []);
  return (
    <div
      className={`relative flex items-center justify-center ${
        imgLoading || loadDefaultImg ? "bg-gray radius-6 overflow-hidden" : ""
      } ${className}`}
      style={{
        aspectRatio: imgLoading || loadDefaultImg ? `${ratio}` : "auto",
        ...style,
      }}
    >
      {imgLoading && (
        <LandLoading
          color="var(--color-text-4)"
          size={28}
          style={{ position: "absolute", transform: "translate(-50%,-50%)" }}
        />
      )}
      {loadDefaultImg ? (
        <Icon name="error-fill" fill="var(--color-red-03)" />
      ) : (
        <img
          ref={imgRef}
          src={url}
          alt=""
          className={imgClassName}
          style={{ zIndex: "1", ...imgStyle }}
        />
      )}
    </div>
  );
};

export default Image;
