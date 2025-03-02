import React from "react";
import styled from "styled-components";
import {Icon} from "@suminhan/land-design";

type Props = {
    show?:boolean;
    img_url?: string,
    img_url2?: string,
    onClose?:() => void,
}
const ImgPreview:React.FC<Props> = ({
                                        show,
    img_url,
                                        img_url2,
    onClose,
}) => {
    return <StyledImgPreviewWrap className={`fixed top-0 left-0 flex gap-24 ${show ? 'show':''}`}>
        <img src={img_url} alt={img_url} className={'flex-1 width-1'} height={'100%'} />
        {img_url2 && <img src={img_url2} alt={img_url2} className={'flex-1 width-1'} height={'100%'}/>}
        <div onClick={onClose} className={'absolute close-icon cursor-pointer'}>
            <Icon name={'close'} stroke={'#999'} size={32}/>
        </div>
    </StyledImgPreviewWrap>
}
const StyledImgPreviewWrap = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 10%;
    background-color: rgba(0,0,0,0.9);
    backdrop-filter: blur(5px);
    z-index: 1025;
    opacity: 0;
    pointer-events: none;
    &.show{
        opacity: 1;
        pointer-events: auto;
        transition: opacity var(--transition-15) linear;
    }
    img{
        object-fit: contain;
        pointer-events: none;
    }
    .close-icon{
        top: 24px;
        right: 24px;
    }
`
export default ImgPreview;
