import React, { CSSProperties } from 'react'
import styled from 'styled-components'

type Props = {
    children?: React.ReactNode;
    style?: CSSProperties;
    className?: string;
}
const PopOver: React.FC<Props> = ({
    children,
    style,
    className = ''
}) => {
    return (
        <StylePop className={`StylePop flex absolute fs-12 color-gray-2 transition ${className}`} style={style}>
            <div className='px-12 py-8'>{children}</div>
            <StylePopArrow className='StylePopArrow absolute'></StylePopArrow>
        </StylePop>
    )
}

const StylePop = styled.div`
    top: -50%;
    left: 50%;
    width: fit-content;
    transform: translate(-50%,-80%);
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.05), 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
    opacity: 0;
`

const StylePopArrow = styled.div`
    position: absolute;
    top: 100%;
    left: 50%;
    width: 12px;
    height: 12px;
    border-radius: 2px;
    background-color: white;
    transform: rotate(45deg) translateX(-80%);
    transform-origin: center center;
`
export default PopOver;