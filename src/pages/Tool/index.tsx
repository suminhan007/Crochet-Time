import React from 'react'
import styled from 'styled-components'

type Props = {

}
const Tool:React.FC<Props> = ({

}) => {
  return (
    <StyleToolWrap className="StyleToolWrap width-100">
        {/* banner */}
        <StyleBannerWrap></StyleBannerWrap>
    </StyleToolWrap>
  )
}

const StyleToolWrap = styled.div`
    min-height: 100vh;
`

const StyleBannerWrap = styled.div`
    height: 320px;
    background-color: aliceblue;
`
export default Tool
