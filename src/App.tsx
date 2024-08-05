import { useState } from 'react';
import './App.css';
import './style/atomic.scss';
import './style/reset.scss';
import './style/variable.scss';
import {  LandFlex, LandHeader, LandTitle } from '@suminhan/land-design';
import Course from './pages/Course';
import Tool from './pages/Tool';
import styled from 'styled-components';

function App() {
  const [curPage, setCurPage] = useState<number|string>('crochet');
  return (
      <StyledLayout column className='height-100'>
        <LandHeader
        name={<LandTitle title='Crochet Time'/>}
        logo={<img src='./LOGO.png' alt='织作时光' width={48}/>}
        menuProps={{
          data: [
            {key:'crochet', title:'图解教程',open:true,dropData: [{key: 'crochet',title:'钩针'},{key: 'knit',title:'棒针'}]},
            {key:2, title:'线材器材'},
            {key:3, title:'配色器'}
          ],
          active: curPage,
          onChange: item => setCurPage(item.key),
          dropProps:{
            direction:'column'
          },
          theme: {
            lineColor: 'inherit',
            activeBg: 'var(--color-bg-2)'
          }
        }}
        align='end'
        />
        
          {curPage === 'crochet' && <Course/>}
          {curPage === 3 && <Tool/>}
      </StyledLayout>
  )
}

const StyledLayout = styled(LandFlex)`
  @media screen and (max-width:800px) {
    .land-header .land-header-logo .land-title,
    .land-header .land-header-logo .land-divider{
      display: none;
    }
    .land-menu-drop-wrap.open .land-menu-drop {
    padding: 0;
    .land-menu{
      position: static;
      border: none;
      padding: 0;
    }
  }
  }
`
export default App
