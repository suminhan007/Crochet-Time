import React, {useMemo} from "react";
import {English_Tool_Data, Tool_Data} from "../mock.ts";
import {LandLink,Icon} from "@suminhan/land-design";
import {useNavigate} from "react-router-dom";

type Props = {
    isEnglish: boolean,
}
const Tools:React.FC<Props> = ({
                                   isEnglish
}) => {
    const navigate = useNavigate();
    const getIcon = (key:string)=>{
        switch (key) {
            case 'colorPicker': return <Icon name='color-picker' size={18} stroke='var(--color-gray-3)' strokeWidth={3}/>;break;
            case 'colorFill': return <Icon name='color-picker' size={18} stroke='var(--color-gray-3)' strokeWidth={3}/>;break;
            case 'pixelDrawer': return <Icon name='color-picker' size={18} stroke='var(--color-gray-3)' strokeWidth={3}/>;break;
            case 'imgToPixel':return <Icon name='color-picker' size={18} stroke='var(--color-gray-3)' strokeWidth={3}/>;break;
            default: return null;
        }
    }
    const data = useMemo(() => isEnglish ? English_Tool_Data:Tool_Data,[isEnglish])
    return <div className={'px-16 pb-16 width-100 height-100 bg-gray'}>
        <div className={'flex items-center justify-center p-24 width-100 height-100 radius-12 bg-white'}>
            <div className={'grid gap-12 width-100'}
                 style={{gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',maxWidth:'1248px'}}>
                {data?.map((item, index) => <div key={item.key ?? index}
                                                 className={'relative flex column justify-between gap-12 p-24 items-center border radius-8 hover-translate-y-4 transition cursor-default'}>
                    {getIcon(item.key)}
                    <div className={'fs-14 fw-600 color-primary-5'}>{item.title}</div>
                    {item.desc && <div className={'fs-12 color-gray-3 text-center'}>{item.desc}</div>}
                    <LandLink className={'flex items-center gap-4'} status={'primary'} onClick={() => navigate(`/type=tools-${item.key}`)}>{isEnglish?'Go Start':'立即前往'}</LandLink>
                    {item.ai && <div className={'absolute py-4 px-8 bg-primary color-white fs-12 fw-600'} style={{top:-1,right:'12px',borderBottomLeftRadius:'8px',borderBottomRightRadius:'8px'}}>AI</div>}
                </div>)}
            </div>
        </div>
    </div>
}
export default Tools;