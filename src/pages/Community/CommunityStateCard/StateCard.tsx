import {Icon, LandAvatar, LandButton} from "@suminhan/land-design";
import React from "react";

type Props = {
    imgUrl?: string;
    title?: string;
    username?: string;
    avatarUrl?: string;
    isOfficial?:boolean;
    like?:string;
    star?:string;
    onCardClick?: (option:string) => void;
}
const StateCard:React.FC<Props> = ({
    imgUrl,
    title,
    username,
    avatarUrl,
    isOfficial,
    like='0',
    star='0',
    onCardClick
                                   }) => (<div className={'flex column gap-8'}>
        <div className={'relative bg-gray radius-8'}>
            <img src={imgUrl} alt={imgUrl} width={'100%'} className={'radius-8 overflow-hidden'}
                 style={{maxHeight: '800px', minHeight: '100px', objectFit: 'cover'}}/>
        </div>
        <div className={'fs-14 fw-500 color-gray-2 text-line-2'}>{title}</div>
        <div className={'flex items-center justify-between'}>
            <div className={'flex items-center gap-4 fs-12 color-gray-3'}>
                <LandAvatar imgUrl={avatarUrl} size={32}/>
                {username}
                {isOfficial && <div style={{width: '12px', height: '12px'}}
                                              className={'flex both-center fs-12 bg-primary radius-8 color-white'}>v</div>}
            </div>
            <div className={'flex items-center gap-8 fs-12 color-gray-3'}>
                <div className={'flex items-center gap-4'}>
                    <LandButton type={'text'}
                                icon={<Icon name={'like'} size={16}/>} size={'small'}
                                onClick={() => onCardClick?.('like')}></LandButton>
                    {like}
                </div>
                <div className={'flex items-center gap-4'}>
                    <LandButton type={'text'}
                                icon={<Icon name={'star'} size={16}/>} size={'small'}
                                onClick={() => onCardClick?.('star')}></LandButton>
                    {star}
                </div>
            </div>
        </div>
    </div>

)

export default StateCard;
