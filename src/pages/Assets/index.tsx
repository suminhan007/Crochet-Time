import React, {useEffect, useMemo, useState} from "react";
import {LandMenu} from "@suminhan/land-design";
import {Assets_Menu_Data, EN_Assets_Menu_Data} from './mock.ts';
import ColorCardList from "./ColorCardList.tsx";
import PixelCardList from "./PixelCardList.tsx";
import FillCardList from "./FillCardList.tsx";
import {useNavigate} from "react-router-dom";
import ImgPixelCardList from "./ImgPixelCardList.tsx";
import PatternList from "./PatternList.tsx";

type Props = {
    isEnglish?:boolean;
}
const Assets:React.FC<Props> = ({
                                    isEnglish
}) => {
    const newMenuData = useMemo(() => isEnglish ? EN_Assets_Menu_Data:Assets_Menu_Data,[isEnglish])
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
         <div className={'px-16'}>
             <LandMenu
                 data={newMenuData}
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
         <div className={'flex-1 pr-16 pb-16 height-100'}>
             <div className={'flex column width-100 height-100 p-24 bg-white radius-12'}>
                 {menu === 'pattern' && <PatternList/>}
                 {menu === 'colorCard' && <ColorCardList/>}
                 {menu === 'fillCard' && <FillCardList />}
                 {menu === 'pixelCard' && <PixelCardList />}
                 {menu === 'imgPixelCard' && <ImgPixelCardList />}
             </div>
         </div>
     </div>
 )
}

export default Assets;
