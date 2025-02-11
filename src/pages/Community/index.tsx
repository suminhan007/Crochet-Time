import React, {useMemo, useState} from "react";
import {LandMenu} from "@suminhan/land-design";
import CommunityColorCard from "./CommunityColorCard";

const menuData = [
    {key: 'ckt',title:'官方'},
    {key: 'follows',title:'关注'},
    {key: 'state',title:'动态'},
    {key: 'colorCard',title:'色卡'}
]
const enMenuData = [
    {key: 'ckt',title:'CKT'},
    {key: 'follows',title:'Follows'},
    {key: 'state',title:'State'},
    {key: 'colorCard',title:'ColorCard'}
]
type Props = {
    isEnglish?:boolean;
}
const Community:React.FC<Props> = ({
                                     isEnglish
                                 }) => {
    const newMenuData = useMemo(() => isEnglish ? enMenuData : menuData, [enMenuData]);
    const [curTab, setCurTab] = useState('state');
    return (<div className={'flex width-100 height-100 bg-gray'}>
        <div className={'height-100 flex justify-center py-16 px-24'} style={{width:'fit-content'}}>
            <LandMenu direction={'column'} data={newMenuData} border={false} active={curTab} onChange={item => setCurTab(item.key)} theme={{lineColor:'transparent'}}/>
        </div>
        <div className={'flex-1 height-100 p-16'}>
            <div className={'width-100 height-100 bg-white p-24 radius-12'}>
                {curTab === 'colorCard' && <CommunityColorCard/>}
            </div>
        </div>
    </div>)
}
export default Community;
