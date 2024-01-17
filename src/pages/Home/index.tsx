import React from 'react'
import styled from 'styled-components'

type Props = {}
const Home:React.FC<Props> = ({

}) => {
    
  return (
    <StyleHomeWrap className='StyleHomeWrap width-100'>
        {/* banner */}
        <StyleBannerWrap className='StyleBannerWrap overflow-hidden'>
            
        </StyleBannerWrap>
        <div className='width-100 flex gap-8'>
        </div>
       
    </StyleHomeWrap>
  )
}

const StyleHomeWrap = styled.div`
    min-height: 100vh;
`

const StyleBannerWrap = styled.div`
    height: 480px;
`
export default Home
