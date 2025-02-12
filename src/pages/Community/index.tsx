import React, {useMemo, useState} from "react";
import {Icon, LandButton, LandDrawer} from "@suminhan/land-design";
import CommunityColorCard from "./CommunityColorCard";

const menuData = [
    {key: 'ckt',title:'官方'},
    {key: 'follows',title:'关注'},
    {key: 'state',title: '动态'},
    {key: 'colorCard',title:'色卡'}
]
const enMenuData = [
    {key: 'ckt',title:'CKT'},
    {key: 'follows',title:'Follows'},
    {key: 'state',title: 'State'},
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
    const [showCreateStateDrawer,setShowCreateStateDrawer] = useState(false);
    const handleStatePublish = () => {

    }
    return (<>
        <div className={'flex width-100 height-100 bg-gray'}>
            <div className={'height-100 flex column py-16 px-24'} style={{width: 'fit-content'}}>
                {newMenuData?.map((item: any, index: number) => <div key={item.key ?? index}
                                                                     className={`flex items-center gap-8 py-8 fs-14 cursor-pointer ${curTab === item.key ? 'fw-600 color-gray-2' : ' color-gray-3'}`}
                                                                     onClick={() => setCurTab(item.key)}>
                    {item.title}
                    {item.key === 'state' &&
                        <div onClick={() => setShowCreateStateDrawer(true)}><Icon name={'add'} size={16} strokeWidth={4} /></div>
                    }
                </div>)}
            </div>
            <div className={'flex-1 height-100 p-16'}>
                <div className={'width-100 height-100 bg-white p-24 radius-12'}>
                    {curTab === 'colorCard' && <CommunityColorCard/>}
                </div>
            </div>
        </div>
        <LandDrawer
            show={showCreateStateDrawer}
            mask
            title={'发布动态'}
            size={'large'}
            onClose={() => setShowCreateStateDrawer(false)}
            onCancel={() => setShowCreateStateDrawer(false)}
            placement={'bottom'}
            cancelLabel={isEnglish ? 'Cancel' : '取消'}
            submitLabel={isEnglish ? 'Publish' : '发布'}
            onSubmit={handleStatePublish}
        >

        </LandDrawer>
    </>)
}
export default Community;
