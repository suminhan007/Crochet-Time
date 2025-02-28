import React, {useEffect, useState} from "react";
import {Icon, LandAvatar, LandButton, LandLoading} from "@suminhan/land-design";
import supabase from "../../../utils/supabse.ts";

type Props = {
    item:{id:string,img_url:string,is_puzzle:boolean,user:{username:string,avatar_url:string,is_official?:boolean}};
}
const PixelCard:React.FC<Props> = ({
                                       item
}) => {
    const [stared, setStarred] = useState<boolean>(false);
    const [starLoading, setStarLoading] = useState<boolean>(false);
    const getStaredStatus = async () => {
        const StaredRes = await supabase.from('staredCard').select();
        if (StaredRes.error || !StaredRes.data) {
            return;
        } else {
            const ids = StaredRes.data.map((i) => i.card_id);
            (ids.length > 0 && ids.includes(item.id)) && console.log(ids.length > 0 && ids.includes(item.id))
            setStarred(ids.length > 0 && ids.includes(item.id))
        }
    }
    useEffect(() => {
        getStaredStatus();
    }, [item.id])
    const handleStarColorCard = async () => {
        setStarLoading(true);
        const {data: {user}} = await supabase.auth.getUser();
        if (user) {
            const StaredRes = await supabase.from('staredCard').select().eq('user_id', user?.id);
            if (StaredRes.error || !StaredRes.data) {
                return;
            } else {
                const ids = StaredRes.data.map((i) => i.card_id);
                if (ids.length > 0 && ids.includes(item.id)) {
                    const cancelRes = await supabase.from('staredCard').delete().eq('card_id', item.id).eq('user_id', user?.id);
                    if (cancelRes.error) {
                    }else{
                        setStarLoading(false)
                    }
                } else {
                    const res = await supabase.from('staredCard').insert({
                        card_id: item.id,
                        user_id: user?.id,
                        img_url: item.img_url.split('/CroKnitTime/imgPixelCards/')[1]?.split('?token=')[0],
                        type: 'imgPixelCards'
                    })
                    if (res.error) {
                    } else {
                        setStarLoading(false)
                    }

                }
                getStaredStatus();
            }
        }
    }

    return <div  className={'flex column gap-8'}>
        <img src={item.img_url} alt={item.img_url} width={'100%'} className={'radius-8 overflow-hidden events-none'}
             style={{aspectRatio: '1', objectFit: item.is_puzzle ? 'contain':'cover'}}/>
        <div className={'flex items-center justify-between'}>
            <div className={'flex items-center gap-4 fs-12 color-gray-3'}>
                <LandAvatar imgUrl={item?.user?.avatar_url} size={24}/>
                {item?.user?.username}
                {item?.user?.is_official && <div style={{width: '12px', height: '12px'}}
                                              className={'flex both-center fs-12 bg-primary radius-8 color-white'}>v</div>}
            </div>
            <LandButton type={'text'}
                        disabled={starLoading}
                        icon={starLoading ? <LandLoading size={16}/> :
                            <Icon name={'star'} size={18} strokeWidth={0}
                                  fill={stared ? 'var(--color-orange-4)' : 'var(--color-border-3)'}/>}
                        size={'small'} onClick={() => handleStarColorCard?.()}></LandButton>
        </div>
    </div>
}
export default PixelCard;