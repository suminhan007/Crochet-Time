import { LandAvatar} from "@suminhan/land-design";
import React from "react";
import timeAgoTZ from "../../../utils/timeAgoTZ.ts";
import StateLikeStarButtons from "./StateLikeStarButtons.tsx";

type Props = {
    isEnglish?: boolean;
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
                                       isEnglish,
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
    return (<div className={'flex column gap-8 cursor-pointer'} onClick={() => onCardClick?.('detail')}>
            <div className={'relative bg-gray radius-8'}>
                <img src={imgUrl} alt={imgUrl} width={'100%'} className={'radius-8 overflow-hidden'}
                     style={{maxHeight: '800px', minHeight: '100px', objectFit: 'cover'}}/>
            </div>
            <div className={'fs-14 fw-500 color-gray-2 text-line-2'}>{title}</div>
            <div className={'flex items-end justify-between'}>
                <div className={'flex items-center gap-4 fs-14 color-gray-3'}>
                    <LandAvatar imgUrl={avatarUrl} size={24}/>
                    <div className={'flex column gap-2'}>
                        <div className={'flex items-center gap-4'}>
                            {username}
                            {isOfficial && <div style={{width: '12px', height: '12px'}}
                                                className={'flex both-center fs-12 bg-primary fs-12 radius-8 color-white'}>v</div>}
                        </div>
                        {time && <div className={'fs-12 color-gray-4'}>{timeAgoTZ(time,isEnglish)}</div>}
                    </div>
                </div>
                <StateLikeStarButtons
                    stateId={stateId}
                    likesCount={like}
                    starsCount={star}
                    onLikeClick={()=> onCardClick?.('like')}
                    onStarClick={() => onCardClick?.('star')}
                />
            </div>
        </div>

    )
}

export default StateCard;
