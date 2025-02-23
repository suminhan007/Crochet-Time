import React from "react";
import {DialogProps, LandAvatar, LandDialog} from "@suminhan/land-design";
import timeAgoTZ from "../../../utils/timeAgoTZ.ts";
import StateLikeStarButtons from "./StateLikeStarButtons.tsx";

type Props = {
    data:{id:'',img_url:'',title:'',description:'',created_at:'',likes:'',stars:'',user:{username:'',avatar_url: ''}};
    liked?:boolean;
    stared?:boolean;
    onLikeClick?: () => void;
    onStarClick?: () => void;
    likesCount?:string;
    starsCount?:string;
} & DialogProps
const StateCardDetailDialog:React.FC<Props> = ({
    data,
                                                   liked,
                                                   stared,
                                                   onLikeClick,
                                                   onStarClick,
                                                   likesCount,
                                                   starsCount,
    ...restProps
}) => {
    return <LandDialog mask size={'large'} bodyStyle={{height:'60vh'}} {...restProps} >
        <div className={'flex gap-24 height-100'}>
            <div className={'flex-1 p-12 height-100 bg-gray'}>
                <img src={data?.img_url} width={'100%'} height={'100%'} style={{objectFit:'contain'}}/>
            </div>
            <div className={'flex-1 flex column gap-12'}>
                <div className={'flex items-center gap-8'}>
                    <LandAvatar imgUrl={data?.user?.avatar_url} size={32}/>
                    <div className={'fs-14 color-gray-2'}>{data?.user?.username}</div>
                </div>
                {data?.title&&<div className={'fs-16 color-gray-2'}>{data?.title}</div>}
                {data?.description&&<div className={'fs-14 color-gray-3 overflow-auto'} style={{maxHeight:'40%'}}>{data?.description}</div>}
                {data?.created_at && <div className={'fs-12 color-gray-4'}>{timeAgoTZ(data?.created_at)}</div>}
                <StateLikeStarButtons
                    stateId={data?.id}
                    likesCount={data?.likes}
                    starsCount={data?.stars}
                    onLikeClick={()=> onLikeClick?.()}
                    onStarClick={() => onStarClick?.()}
                />
            </div>
        </div>
    </LandDialog>
}
export default StateCardDetailDialog;