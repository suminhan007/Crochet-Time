import React, {useEffect, useMemo, useState} from "react";
import {Icon, LandMessage} from "@suminhan/land-design";
import CommunityColorCard from "./CommunityColorCard";
import StateUploadDrawerContent from "./CommunityStateCard/StateUploadDrawerContent.tsx";
import supabase from "../../utils/supabse.ts";
import CommunityStateCard from "./CommunityStateCard";
import CommunityPixelCard from "./CommunityPixelCard";
import CommunityFillCard from "./CommunityFillCard";
import CommunityInspirationCard from "./CommunityInspirationCard";
import CommunityCKTCard from "./CommunityCKTCard";
import CommunityImgPixelCard from "./CommunityImgPixelCard";
import {useNavigate} from "react-router-dom";

const menuData = [
    {key: 'ckt',title:'CKT'},
    {key: 'state',title: '动态'},
    {key: 'inspiration',title:'灵感'},
    {key: 'publicAssets', title: '公开素材',dropData:[
            {key: 'colorCard',title:'色卡'},
            {key: 'fillCard',title:'配色卡'},
            {key: 'pixelCard',title:'像素卡'},
            {key: 'imgPixelCard',title:'像素图'}
        ]},
]
const enMenuData = [
    {key: 'ckt',title:'CKT'},
    {key: 'state',title: 'State'},
    {key: 'inspiration',title:'Inspiration'},
    {key: 'publicAssets', title: 'public Assets',dropData:[
            {key: 'colorCard',title:'ColorCard'},
            {key: 'fillCard',title:'ColorFillCard'},
            {key: 'imgPixelCard',title:'Img Pixel Card'}
        ]}
]
type Props = {
    isEnglish?:boolean;
    user?: {id:string,userName:string};
}
const Community:React.FC<Props> = ({
                                     isEnglish,
                                       user
                                 }) => {
    const navigate = useNavigate();
    const newMenuData = useMemo(() => isEnglish ? enMenuData : menuData, [isEnglish]);
    const [curTab, setCurTab] = useState('state');
    useEffect(() => {
        if(!window.location.href.includes('communityType=')) return;
        const href = window.location.href.split('communityType=')[1];
        if (href?.length >= 2) {
            setCurTab(href);
        }
    }, [window.location.href]);
    const [showCreateStateDrawer,setShowCreateStateDrawer] = useState(false);
    const [showCreateOfficialStateDrawer,setShowCreateOfficialStateDrawer] = useState(false);

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

    const handleOfficialStatePublish = async (url:string,title?:string,desc?:string) => {
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

    const [firstIn,setFirstIn] = useState(true);
    return (<>
        <div className={'flex width-100 height-100 bg-gray'}>
            <div className={'height-100 flex column pb-16 px-24'} style={{width: 'fit-content'}}>
                {newMenuData?.map((item: any, index: number) => <div key={item.key ?? index}
                                                                     className={`flex column gap-8 py-8 fs-14 cursor-pointer ${curTab === item.key ? 'fw-600 color-gray-2' : ' color-gray-3'}`}
                                                                     onClick={() => {
                                                                         if(item.dropData) {
                                                                             navigate(`?communityType=${item.dropData[0].key}`)
                                                                             setCurTab(item.dropData[0].key)
                                                                         }else {
                                                                             navigate(`?communityType=${item.key}`)
                                                                             setCurTab(item.key)
                                                                         }
                                                                         if(item.key === 'inspiration')setFirstIn(false)
                                                                     }}>
                    <div className={'flex items-center gap-8'}>
                        {item.title}
                        {item.key === 'ckt' && <div className={'flex items-center gap-4 px-4 radius-4 color-gray-4 fw-400 fs-12 bg-gray'}>{isEnglish? 'store':'商店'}
                            {user?.id === '82758977-37d6-4917-9220-fe25e3064e08' &&
                                <div onClick={() => setShowCreateOfficialStateDrawer(true)}><Icon name={'add'} size={16}
                                                                                                  strokeWidth={4}/></div>}
                        </div>}
                        {item.key === 'state' &&
                            <div onClick={() => setShowCreateStateDrawer(true)} className={'p-2 bg-dark color-white radius-4 flex both-center'}><Icon name={'add'} size={14} strokeWidth={4} /></div>
                        }
                    </div>
                    {item.dropData && <div className={'ml-16'}>{item.dropData?.map((itm:{key:string,title:string}) => <div
                        key={itm.key}
                        className={`py-8 ${curTab === itm.key ? 'fw-600 color-gray-2' : ' color-gray-3'}`}
                        onClick={(e) => {
                            setCurTab(itm.key);
                            e.stopPropagation()
                        }}
                    >{itm.title}</div>)}</div>}
                </div>)}
            </div>
            <div className={'flex-1 height-100 pr-16 pb-16'}>
                <div className={'width-100 height-100 bg-white p-24 radius-12'}>
                    {curTab === 'ckt' && <CommunityCKTCard/>}
                    {curTab === 'state' && <CommunityStateCard isEnglish={isEnglish}/>}
                    {curTab === 'inspiration' && <CommunityInspirationCard isEnglish={isEnglish} firstIn={firstIn}/>}
                    {curTab === 'colorCard' && <CommunityColorCard/>}
                    {curTab === 'fillCard' && <CommunityFillCard/>}
                    {curTab === 'pixelCard' && <CommunityPixelCard/>}
                    {curTab === 'imgPixelCard' && <CommunityImgPixelCard/>}
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
        <StateUploadDrawerContent
            isEnglish={isEnglish}
            show={showCreateOfficialStateDrawer}
            onClose={() => setShowCreateOfficialStateDrawer(false)}
            onCancel={() => setShowCreateOfficialStateDrawer(false)}
            onPublish={handleOfficialStatePublish}
        />
        {toast && <LandMessage show={toast} text={toastText} />}
    </>)
}
export default Community;
