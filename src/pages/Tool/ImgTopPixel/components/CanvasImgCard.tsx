import {Icon, LandButton, LandLoading} from "@suminhan/land-design";
import React from "react";
import styled from "styled-components";

type Props = {
    src?:string;
    desc?:string;

    showGrid?:boolean;
    width?:number;
    height?:number;
    pixelSize?:number;

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
                                           width=1,
                                           height=1,
                                           pixelSize=1,
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
                <div className={'absolute  height-100 flex justify-between'} style={{width: `calc(100% - ${width%pixelSize}px)`}}>
                    {
                        Array.from({length: Math.ceil(width/pixelSize)}).map((_, i) => <StyledVDivider key={i} className={'flex-1 border height-100 shrink-0'}></StyledVDivider>)
                    }
                </div>
                <div className={'absolute width-100  flex column justify-between'} style={{height: `calc(100% - ${height%pixelSize}px)`}}>
                    {
                        Array.from({length: Math.ceil(height/pixelSize)}).map((_, j) => <StyledHDivider key={j} className={'flex-1 border width-100 shrink-0'}></StyledHDivider>)
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

const StyledVDivider = styled.div`  
    &:not(:first-child) {
        margin-left: -1px;
    }
`

const StyledHDivider = styled.div`  
    &:not(:first-child) {
        margin-top: -1px;
    }
`
export default CanvasImgCard;