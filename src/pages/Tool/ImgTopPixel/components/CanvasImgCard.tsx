import { Icon, LandButton, LandLoading } from "@suminhan/land-design";
import React from "react";

type Props = {
  src?: string;
  desc?: string;
  loading?: boolean;
  onPreview?: () => void;
  onDownload?: () => void;
  onSave?: () => void;
}
const CanvasImgCard: React.FC<Props> = ({
  src,
  desc,
  loading,
  onPreview,
  onDownload,
  onSave,
}) => {
  return <>
    <div className={`relative width-100 ${src ? '' : 'bg-gray'}`} style={{ aspectRatio: '1' }}>
      <img src={src} width={'100%'} height={'100%'}
        className={`object-contain ${src ? 'cursor-zoom-in' : 'opacity-0'}`}
        onClick={onPreview} />
      <div
        className={`absolute top-0 left-0 width-100 height-100 flex both-center transition ${loading ? '' : 'opacity-0 events-none'}`}
        style={{ zIndex: 1 }}>
        <LandLoading />
      </div>
    </div>
    <p>{desc}</p>
    {src && <div className={'flex items-center gap-12'}>
      <LandButton type={'background'}
        onClick={onDownload}
        icon={<Icon name={'download'} size={16} />}></LandButton>
      <LandButton type={'background'} status={'primary'}
        onClick={onSave}>保存到仓库</LandButton>
    </div>}
  </>
}

export default CanvasImgCard;