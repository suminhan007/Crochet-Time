import React, {useMemo, useState} from "react";
import {Icon, LandMessage} from "@suminhan/land-design";
import CommunityColorCard from "./CommunityColorCard";
import StateUploadDrawerContent from "./CommunityStateCard/StateUploadDrawerContent.tsx";
import supabase from "../../utils/supabse.ts";
import CommunityStateCard from "./CommunityStateCard";

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

    const [toast, setToast] = useState<boolean>(false);
    const [toastText, setToastText] = useState<string>("");

    const handleShowToast = (show: boolean, text: string) => {
        setToastText(text);
        setToast(show);
        const timer = setTimeout(() => {
            setToast(false);
            clearTimeout(timer);
        }, 1000);
    };
    const handleStatePublish = async (url:string,title?:string,desc?:string) => {
        if(!url) return;
        const blob = await fetch(url).then(res => res.blob());
        const fileName = `graphic-state-${Date.now()}.png`;
        const { data:ImgData, error:ImgError } = await supabase
            .storage
            .from('CroKnitTime/stateImages') // 替换为你的存储桶名称
            .upload(fileName, blob);

        if (ImgError) {
            console.error('Error uploading image:', ImgError);
        } else {
            const { error } = await supabase
                .from('graphicState') // 替换为你的素材库表名称
                .insert([{
                    img_url: ImgData?.path,
                    title: title,
                    description: desc,
                }]);

            if (error) {
                console.error('Error saving image to database:', error);
            } else {
                handleShowToast(true,'发布成功')
                setShowCreateStateDrawer(false);
            }
        }
    }
    return (<>
        <div className={'flex width-100 height-100 bg-gray'}>
            <div className={'height-100 flex column py-16 px-24'} style={{width: 'fit-content'}}>
                {newMenuData?.map((item: any, index: number) => <div key={item.key ?? index}
                                                                     className={`flex items-center gap-8 py-8 fs-14 cursor-pointer ${curTab === item.key ? 'fw-600 color-gray-2' : ' color-gray-3'}`}
                                                                     onClick={() => setCurTab(item.key)}>
                    {item.title}
                    {item.key === 'ckt' && <div className={'px-8 py-4 radius-4 color-gray-3 fs-12 bg-gray'}>{isEnglish? 'official':'官方'}</div>}
                    {item.key === 'state' &&
                        <div onClick={() => setShowCreateStateDrawer(true)}><Icon name={'add'} size={16} strokeWidth={4} /></div>
                    }
                </div>)}
            </div>
            <div className={'flex-1 height-100 p-16'}>
                <div className={'width-100 height-100 bg-white p-24 radius-12'}>
                    {curTab === 'state' && <CommunityStateCard/>}
                    {curTab === 'colorCard' && <CommunityColorCard/>}
                </div>
            </div>
        </div>
        <StateUploadDrawerContent
            isEnglish={isEnglish}
            show={showCreateStateDrawer}
            onClose={() => setShowCreateStateDrawer(false)}
            onCancel={() => setShowCreateStateDrawer(false)}
            onPublish={handleStatePublish}
        />
        {toast && <LandMessage show={toast} text={toastText} />}
    </>)
}
export default Community;
