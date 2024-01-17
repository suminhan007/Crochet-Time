import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Select from '../../components/Select'

type Props = {
}
const PixelDrawer: React.FC<Props> = ({
}) => {
    const [size, setSize] = useState<number>(8);
    const [data, setData] = useState<{ id: number, value: string }[]>([]);
    // useEffect(() => {
    //     setData([])
    //     // Array.from({ length: size * size }).map((_item: any, index: number) =>
    //         data.push({
    //             id: index + 1,
    //             value: '#DADADA'
    //         })
    //     )
    // })
    const [selectPixel, setSelectPixel] = useState<any>([]);
    return (
        <StyleContentWrap>
            <StylePixelList
                className='StylePixelList flex flex-wrap'
                style={{ width: size * 48 }}
            >
                {
                    data.map((item: any) =>
                        <StylePixelItem><input type="color" value={item.value} onChange={(e: any) => console.log(e.target.value)} /></StylePixelItem>
                    )
                }
            </StylePixelList>
        </StyleContentWrap>
    )
}

const StyleContentWrap = styled.div`
    width: calc(100% - 48px);
    max-width: 960px;
    min-height: 100vh;
`

const StylePixelList = styled.div`
    
`
const StylePixelItem = styled.div`
    width: 48px;
    height: 48px;
`
export default PixelDrawer;