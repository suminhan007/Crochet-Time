import {Icon, LandAvatar, LandButton} from "@suminhan/land-design";
import React, {useEffect,  useState} from "react";
import timeAgoTZ from "../../../utils/timeAgoTZ.ts";
import supabase from "../../../utils/supabse.ts";

type Props = {
    stateId: string;
    imgUrl?: string;
    title?: string;
    time?:string;
    username?: string;
    avatarUrl?: string;
    isOfficial?:boolean;
    like?:string;
    star?:string;
    onCardClick?: (option:string) => void;
}
const StateCard:React.FC<Props> = ({
                                       stateId,
    imgUrl,
    title,
                                       time,
    username,
    avatarUrl,
    isOfficial,
    like='0',
    star='0',
    onCardClick
                                   }) => {
    const [liked,setLiked]=useState<boolean>(false);
    const [stared,setstard]=useState<boolean>(false);
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
            const likedRes = await supabase.from('staredStateCard').select().eq('user_id',user?.id);
            if(likedRes.error) {
                return;
            }else{
                const ids = likedRes.data.map((i) => i.state_id);
                setstard(ids.length > 0 && ids.includes(stateId))
            }
        }else{
            return;
        }
    }
    useEffect(()=> {
        getLikeStatus(stateId);
        getStarStatus(stateId);
    },[])
    return (<div className={'flex column gap-8'}>
            <div className={'relative bg-gray radius-8'}>
                <img src={imgUrl} alt={imgUrl} width={'100%'} className={'radius-8 overflow-hidden'}
                     style={{maxHeight: '800px', minHeight: '100px', objectFit: 'cover'}}/>
            </div>
            <div className={'fs-14 fw-500 color-gray-2 text-line-2'}>{title}</div>
            <div className={'flex items-center justify-between'}>
                <div className={'flex items-center gap-4 fs-14 color-gray-3'}>
                    <LandAvatar imgUrl={avatarUrl} size={24}/>
                    <div className={'flex column gap-2'}>
                        <div className={'flex items-center gap-4'}>
                            {username}
                            {isOfficial && <div style={{width: '12px', height: '12px'}}
                                                className={'flex both-center fs-12 bg-primary fs-12 radius-8 color-white'}>v</div>}
                        </div>
                        {time && <div className={'fs-12 color-gray-4'}>{timeAgoTZ(time)}</div>}
                    </div>
                </div>
                <div className={'flex items-center gap-8 fs-12 color-gray-3'}>
                    <div className={'flex items-center gap-4'}>
                        <LandButton
                            type={'text'}
                            icon={<Icon name={'like'} size={16} strokeWidth={liked ? 0:3} fill={liked ? 'var(--color-red-4)':''}/>}
                            size={'small'}
                            onClick={() => onCardClick?.('like')}></LandButton>
                        {Number(like)>0 ? like : 0}
                    </div>
                    <div className={'flex items-center gap-4'}>
                        <LandButton
                            type={'text'}
                            icon={<Icon name={'star'} size={16} strokeWidth={stared ? 0:3} fill={stared ? 'var(--color-orange-4)':''}/>}
                            size={'small'}
                            onClick={() => onCardClick?.('star')}></LandButton>
                        {Number(star)>0 ? star : 0}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default StateCard;
