import React, { CSSProperties, useMemo } from 'react'
import styled from 'styled-components'

type Props = {
    type?: 'text' | 'background' | 'border' | 'dark';
    data?: { value: number, label: string }[];
    active?: number;
    onClick?: (val: number) => void;
    style?: CSSProperties;
    className?: string;
}
const TabBar: React.FC<Props> = ({
    type = 'background',
    data,
    active = 1,
    onClick,
    style,
    className = ''
}) => {
    const theme = useMemo(() => {
        switch (type) {
            case 'text':
                return { class: '', activeClass: 'activeText' }
            case 'background':
                return { class: 'classBg', activeClass: 'activeBg' }
            case 'border':
                return { class: 'classBorder', activeClass: 'activeBorder' }
        }
    }, [type])
    return (
        <StyleTabWrap
            className={`StyleTabWrap flex ${theme?.class} ${className}`}
            style={style}
        >
            {data?.map((item, index) =>
                <StyleTabItem
                    key={index}
                    className={`px-16 py-8 radius-8 pointer color-gray-2 ${active === item.value ? theme?.activeClass : theme?.class}`}
                    onClick={() => onClick?.(item.value)}
                >{item.label}</StyleTabItem>
            )}
        </StyleTabWrap>
    )
}

const StyleTabWrap = styled.div`
    width: fit-content;
    border-radius: 10px;
    gap: 24px;
    &.classBg{
        padding: 8px;
        background-color: rgba(0,0,0,0.02);
    }
`
const StyleTabItem = styled.div`
    border:1px solid transparent;
    &.classBorder{
        border:1px solid #EDEFF2;
    }
    &.activeText{
        font-weight: 600;
    }
    &.activeBg{
        font-weight: 600;
        background-color: white;
    }
    &.activeBorder{
        font-weight: 600;
        color: white;
        background-color: #8b9efe;
    }
`
export default TabBar;
