import React from "react";
import {LandAffixContainer, LandBadge, LandFlex, LandSelect} from "@suminhan/land-design";
import FilterListOrButton from "./components/FilterListOrButton.tsx";

type Props = {

}
const CommunityCKTCard:React.FC<Props> = ({

}) => {
    const topData = ['','','','',''];
    const getTopBg = (num: number) => {
        switch (num) {
            case 1: return 'var(--color-red-6)';break;
            case 2: return 'var(--color-orange-6)';break;
            case 3: return 'var(--color-orange-3)';break;
            default: return 'var(--color-primary-6)';break;
        }
    }
    return <div className={'flex-1 flex column gap-16 height-100 width-100'}>
       <LandFlex style={{height:'240px'}}>
           {/*活动：swiper*/}
           <div className={'flex-1 height-100 bg-gray radius-12'}>

           </div>
           <div className={'flex-1'}>

           </div>
       </LandFlex>
        <LandFlex gap={20} className={'overflow-auto py-12 shrink-0'}>
            {topData?.map((topItm: any, topIdx: number) => <LandAffixContainer
                key={topIdx}
                rtOption={topIdx<3? {
                    content: <div className={'flex both-center ratio-1 fs-12 fw-500 radius-50 color-white'}
                                  style={{backgroundColor: getTopBg(topIdx + 1), width: '24px'}}>{topIdx + 1}</div>,
                    custom: true,
                    gap: -8
                }:undefined}
            >
                <div className={'ratio-1 radius-5 border'} style={{width:'80px'}}>{topItm}</div>
            </LandAffixContainer>)}
        </LandFlex>
        <LandFlex justify={'space-between'} align={'end'}>
            <div className={'flex gap-12 items-center'}>
                <LandSelect/>
                <LandSelect/>
            </div>
            <FilterListOrButton/>
        </LandFlex>
        <div className={'grid gap-12 overflow-auto'} style={{gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))'}}>
            {Array.from({length: 24}).map((_item: any, index: number) => <div key={index} className={'bg-gray radius-12 ratio-1'}>
                {index}</div>)}
        </div>
    </div>
}
export default CommunityCKTCard;