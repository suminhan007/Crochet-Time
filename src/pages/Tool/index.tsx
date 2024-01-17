import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ToolListData = [
  {id:1,name:'配色板',icon:<>icon1</>,path:'/color-fill'},
  {id:2,name:'图片取色器',icon:<>icon1</>,path:'/color-picker'},
  {id:3,name:'配色板',icon:<>icon1</>,path:'/color-fill'},
  {id:4,name:'配色板',icon:<>icon1</>,path:'/color-fill'},
  {id:5,name:'配色板',icon:<>icon1</>,path:'/color-fill'},
  {id:6,name:'配色板',icon:<>icon1</>,path:'/color-fill'},
]
type Props = {

}
const Tool:React.FC<Props> = ({

}) => {
  return (
    <StyleToolWrap className="StyleToolWrap width-100">
        {/* banner */}
        <StyleBannerWrap className='StyleBannerWrap width-100 gap-24'>
          <div className='grid width-100 gap-12 px-24' style={{gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))'}}>
          {ToolListData.map(item =>
          <Link to={item.path} key={item.id}><StyleToolItem className='StyleToolItem flex both-center color-white radius-12 '>{item.name}</StyleToolItem>          </Link>
          )}
          </div>
        </StyleBannerWrap>
    </StyleToolWrap>
  )
}

const StyleToolWrap = styled.div`
    min-height: 100vh;
`

const StyleBannerWrap = styled.div`
    height: 320px;
    background: url('/src/assets/images/banner.png') center center / contain;
`

const StyleToolItem = styled.div`
  background-color: rgba(255,255,255,0.4);
  backdrop-filter: blur(20px);
  height:72px;
`
export default Tool
