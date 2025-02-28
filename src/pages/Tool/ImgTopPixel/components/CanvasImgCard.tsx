import {Icon, LandButton, LandLoading} from "@suminhan/land-design";
import React from "react";

type Props = {
    src?:string;
    desc?:string;

    showGrid?:boolean;
    widthCount?:number;
    heightCount?:number;

    loading?:boolean;
    onPreview?: () => void;
    onDownload?: () => void;
    onSave?: () => void;
}
const CanvasImgCard:React.FC<Props> = ({
    src,
                                           desc,
    loading,
                                           showGrid,
    widthCount=1,
    heightCount=1,
    onPreview,
    onDownload,
    onSave,
}) => {
    return <>
        <div className={`relative width-100 ${src ? '':'bg-gray'}`}  style={{aspectRatio: '1'}}>
            <img src={src} width={'100%'} height={'100%'}
                 className={`object-contain ${src ? 'cursor-zoom-in' : 'opacity-0'}`}
                 onClick={onPreview}/>
            <div
                className={`absolute top-0 left-0 width-100 height-100 flex both-center transition ${loading ? '' : 'opacity-0 events-none'}`}
                style={{zIndex: 1}}>
                <LandLoading/>
            </div>
            {/*网格线*/}
            {src && showGrid && <div className={'absolute width-100 height-100 top-0 left-0 events-none'} style={{zIndex: 1}}>
                <div className={'absolute width-100 height-100 flex justify-around'}>
                    {
                        Array.from({length: widthCount}).map((_, i) => <div key={i} className={'height-100 bg-gray'}
                                                                            style={{width: '0.5px'}}></div>)
                    }
                </div>
                <div className={'absolute width-100 height-100 flex column justify-around'}>
                    {
                        Array.from({length: heightCount}).map((_, j) => <div key={j} className={'width-100 bg-gray'}
                                                                             style={{height: '0.5px'}}></div>)
                    }
                </div>
                </div>
                }
            </div>
                <p>{desc}</p>
        {src && <div className={'flex items-center gap-12'}>
            <LandButton type={'background'}
                        onClick={onDownload}
                        icon={<Icon name={'download'} size={16}/>}></LandButton>
            <LandButton type={'background'} status={'primary'}
                        onClick={onSave}>保存到仓库</LandButton>
        </div>}
    </>
}
export default CanvasImgCard;