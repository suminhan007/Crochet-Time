import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { IconHome, IconCourse, IconTool, IconAbout } from './Icon';

const data = [
    {id:1, name:'首页', subName:'Inspiration', path:'/home', icon: <IconHome/>},
    {id:2, name:'教程', subName:'Course', path:'/course', icon: <IconCourse/>},
    {id:3, name:'工具', subName:'Tools', path:'/tool', icon: <IconTool/>},
    {id:4, name:'关于', subName:'About', path:'/about', icon: <IconAbout/>}
]
type Props = {

}
const Navbar:React.FC<Props> = ({

}) => {
    const [navId, setNavId] = useState<number>(1);
    const [hideNav, setHideNav] = useState<boolean>(false);
    useEffect(() => {
        document.addEventListener('wheel',(e) => {
            if(e.deltaY > 0){
                setHideNav(true)
            }else{
                setHideNav(false)
            }
        })
    })
  return (
    <StyleNavWrap className={`StyleNavWrap px-24 flex items-center justify-around radius-24 ${hideNav ? 'hide':''}`}>
        {data.map(item =>
         <Link key={item.id} to={item.path}>
            <StyleNavItem 
                className={`StyleNavItem flex gap-8 ${navId === item.id ? 'active' : ''}`}
                onClick={() => {setNavId(item.id);console.log(navId);}}
            >
                {item.icon} {item.name} 
                <span className='fs-16'>{item.subName}</span>
            </StyleNavItem> 
         </Link>
        )}
    </StyleNavWrap>
  )
}

const StyleNavWrap = styled.div`
    width: calc(100% - 48px);
    max-width: 960px;
    position: fixed;
    top: 30px;
    left: 50%;
    transform: translate(-50%,0);
    height: 60px;
    background-color: rgba(255,255,255,0.6);
    backdrop-filter: blur(100px);
    transition: transform 0.2s;
    &.hide{
        transform: translate(-50%,-100px);
    }
    @media screen and (max-width:800px){
        top: unset;
        bottom: 24px;
        height: 80px;
        &.hide{
        transform: translate(-50%,0);
    }
    }
`

const StyleNavItem = styled.div`
    font-size: 20px;
    color: white;
    align-items: baseline;
    svg{
        display: none;
    }
    span{
        opacity: 0.8;
    }
    &.active{
        font-weight: 600;
    }
    @media screen and (max-width:800px){
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        color: #666;
        span{
            display: none;
        }
        svg{
           display: block;
            path,
            circle{
                fill: #DADADA;
            }
        }
        &.active{
            svg path,
            svg circle{
                    fill: #666;
                }
        }
    }
`
export default Navbar
