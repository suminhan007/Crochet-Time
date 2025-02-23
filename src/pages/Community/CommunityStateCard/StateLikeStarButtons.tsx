import React, {useEffect, useState} from "react";
import {Icon, LandButton} from "@suminhan/land-design";
import supabase from "../../../utils/supabse.ts";

type Props = {
    stateId: string;
    onLikeClick?: () => void;
    onStarClick?: () => void;
    likesCount?:string;
    starsCount?:string;
}
const StateLikeStarButtons:React.FC<Props> = ({
    stateId,
    onLikeClick,
    onStarClick,
    likesCount,
    starsCount

                                              }) => {
    const [liked,setLiked]=useState<boolean>(false);
    const [stared,setStared]=useState<boolean>(false);
    const getLikeStatus = async (stateId:string) => {
        const {data:{user}} = await supabase.auth.getUser();
        if(user){
            const likedRes = await supabase.from('likedStateCard').select().eq('user_id',user?.id);
            if(likedRes.error) {
                return;
            }else{
                const ids = likedRes.data.map((i) => i.state_id);
                setLiked(ids.length > 0 && ids.includes(stateId))
            }
        }else{
            return;
        }
    }
    const getStarStatus = async (stateId:string) => {
        const {data:{user}} = await supabase.auth.getUser();
        if(user){
            const likedRes = await supabase.from('staredCard').select().eq('user_id',user?.id);
            if(likedRes.error) {
                return;
            }else{
                const ids = likedRes.data.map((i) => i.card_id);
                setStared(ids.length > 0 && ids.includes(stateId))
            }
        }else{
            return;
        }
    }
    useEffect(()=> {
        getLikeStatus(stateId);
        getStarStatus(stateId);
    },[])
    return <div className={'flex items-center gap-8 fs-12 color-gray-3'}>
        <div className={'flex items-center gap-4'}>
            <LandButton
                type={'text'}
                icon={<Icon name={'like'} size={16} strokeWidth={liked ? 0 : 3}
                            fill={liked ? 'var(--color-red-4)' : ''}/>}
                size={'small'}
                onClick={(e) => {
                    e.stopPropagation();
                    onLikeClick?.()
                }}></LandButton>
            {Number(likesCount) > 0 ? likesCount : 0}
        </div>
        <div className={'flex items-center gap-4'}>
            <LandButton
                type={'text'}
                icon={<Icon name={'star'} size={16} strokeWidth={stared ? 0 : 3}
                            fill={stared ? 'var(--color-orange-4)' : ''}/>}
                size={'small'}
                onClick={(e) => {
                    e.stopPropagation();
                    onStarClick?.()
                }}></LandButton>
            {Number(starsCount) > 0 ? starsCount : 0}
        </div>
    </div>
}
export default StateLikeStarButtons;