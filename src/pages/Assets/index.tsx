import React, { useState} from "react";
import {LandMenu} from "@suminhan/land-design";
import {Assets_Menu_Data} from './mock.ts';
import ColorCardList from "./ColorCardList.tsx";
import PixelCardList from "./PixelCardList.tsx";
import FillCardList from "./FillCardList.tsx";

type Props = {

}
const Assets:React.FC<Props> = ({

}) => {
    const [menu, setMenu] = useState<string>('color_card');

 return (
     <div className={'flex width-100 height-100 bg-gray'}>
         <div className={'p-16'}>
             <LandMenu
                 data={Assets_Menu_Data}
                 active={menu}
                 onChange={item => setMenu(item.key)}
                 direction={'column'}
                 theme={{
                     lineColor:'transparent',
                 }}
                 border={false}
                style={{height:'fit-content'}}
             />
         </div>
         <div className={'flex-1 pr-16 py-16 height-100'}>
             <div className={'flex column width-100 height-100 p-24 bg-white radius-12'}>
                 {menu === 'color_card' && <ColorCardList/>}
                 {menu === 'fill_card' && <FillCardList />}
                 {menu === 'pixel_card' && <PixelCardList />}
             </div>
         </div>
     </div>
 )
}

export default Assets;
