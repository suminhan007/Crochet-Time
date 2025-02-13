import React, {useEffect, useState} from "react";
import {LandMenu} from "@suminhan/land-design";
import {Assets_Menu_Data} from './mock.ts';
import ColorCardList from "./ColorCardList.tsx";
import PixelCardList from "./PixelCardList.tsx";
import FillCardList from "./FillCardList.tsx";
import {useNavigate} from "react-router-dom";

type Props = {

}
const Assets:React.FC<Props> = ({

}) => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState<string>('colorCard');
    useEffect(() => {
        if(!window.location.href.includes('assetsType=')) return;
        const href = window.location.href.split('assetsType=')[1];
        if (href?.length >= 2) {
            setMenu(href);
        }
    }, [window.location.href]);

 return (
     <div className={'flex width-100 height-100 bg-gray'}>
         <div className={'p-16'}>
             <LandMenu
                 data={Assets_Menu_Data}
                 dropProps={{
                     active:menu,
                     theme: {
                         lineColor:'transparent',
                    }
                 }}
                onDropChange={(item) => {
                    setMenu(item.key);
                    navigate(`?assetsType=${item.key}`);
                }}
                 theme={{
                     lineColor:'transparent',
                 }}
                 direction={'column'}
                 border={false}
                style={{height:'fit-content'}}
             />
         </div>
         <div className={'flex-1 pr-16 py-16 height-100'}>
             <div className={'flex column width-100 height-100 p-24 bg-white radius-12'}>
                 {menu === 'colorCard' && <ColorCardList/>}
                 {menu === 'fillCard' && <FillCardList />}
                 {menu === 'pixelCard' && <PixelCardList />}
             </div>
         </div>
     </div>
 )
}

export default Assets;
