//@ts-nocheck
import React, { useState } from 'react'
import styled from 'styled-components'
// import TabBar from '../../components/TabBar'

type Props = {
}
const ColorFill: React.FC<Props> = ({
}) => {
    const [currentSvg, setCurrentSvg] = useState<any>(null);
    const [activeTab, setActiveTab] = useState<number>(1);
    return (
        <StyleContentWrap className='StyleContentWrap flex column items-center'>
            {/* <TabBar data={[{ value: 1, label: '1' }, { value: 2, label: '2' }]} active={activeTab} onClick={(val) => setActiveTab(val)} className='mt-24' />
            <StyleSvgContainer className='StyleSvgContainer flex both-center relative width-100 border radius-12 mt-16'>
                {currentSvg}
                <StyleControl className='absolute'>0</StyleControl>
            </StyleSvgContainer>
            <TabBar type='text' data={[{ value: 1, label: '1' }, { value: 2, label: '2' }]} active={activeTab} onClick={(val) => setActiveTab(val)} className='mt-24' /> */}
            <StyleColorPanel className='StyleColorPanel width-100 border flex-1 overflow-auto'>
                {
                    activeTab === 1 && <StyleSelectList className='StyleSelectList flex'>

                    </StyleSelectList>
                }
            </StyleColorPanel>
        </StyleContentWrap >
    )
}

const StyleContentWrap = styled.div`
    width: calc(100% - 48px);
    max-width: 960px;
    min-height: 100vh;
    margin: 0 auto;
`

const StyleSvgContainer = styled.div`
    min-width: 320px;
    height: auto;
    aspect-ratio: 4/3;
`
const StyleControl = styled.div`
    bottom: 12px;
    right: 12px;
`
const StyleColorPanel = styled.div`
    /* width: 48px; */
`

const StyleSelectList = styled.div`
    
`
export default ColorFill;