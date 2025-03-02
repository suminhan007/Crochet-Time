import React, {useEffect, useState} from "react";
import {Icon, LandAffixContainer} from "@suminhan/land-design";
import supabase from "../../../utils/supabse.ts";

type Props = {
    id: string;
    img_url: string;
    onPreview?:()=>void;
    className?:string;
}
const InspirationCard:React.FC<Props> = ({
    id,
    img_url,
    onPreview,
    className=''
}) => {
    const [stared, setStarred] = useState<boolean>(false);
    const getStaredStatus = async () => {
        const StaredRes = await supabase.from('staredCard').select();
        if(StaredRes.error || !StaredRes.data) {
            return;
        }else {
            const ids = StaredRes.data.map((i) => i.card_id);
            (ids.length > 0 && ids.includes(id))&&console.log(ids.length > 0 && ids.includes(id))
            setStarred(ids.length > 0 && ids.includes(id))
        }
    }
    useEffect(() => {
        getStaredStatus();
    },[id])

    const handleStar = async () => {
        const {data:{user}} = await supabase.auth.getUser();
        if(user){
            const StaredRes = await supabase.from('staredCard').select().eq('user_id',user?.id);
            if(StaredRes.error || !StaredRes.data) {
                return;
            }else{
                const ids = StaredRes.data.map((i) => i.card_id);
                if(ids.length > 0 && ids.includes(id)){
                    await supabase.from('staredCard').delete().eq('card_id', id).eq('user_id',user?.id);
                }else{
                    await supabase.from('staredCard').insert({
                        card_id: id,
                        user_id: user?.id,
                        img_url: img_url.split('/CroKnitTime/inspirationCards/')[1]?.split('?token=')[0],
                        type: 'inspirationCards'
                    })

                }
                getStaredStatus()
            }
        }
    }
    return <LandAffixContainer
        key={id}
        className={`flex column gap-8 ${className}`}
        onClick={() => onPreview?.()}
        rtOption={{
            content: <Icon name={'star'} size={20} strokeWidth={0} fill={stared ? 'var(--color-orange-4)':'var(--color-text-light)'}/>,
            hoverShow: !stared,
            className:'cursor-pointer',
            custom: true,
            onClick: () => handleStar?.()
        }}
    >
        <img src={img_url} alt={''} width={'100%'}
             className={'radius-8 overflow-hidden'}
             style={{aspectRatio: '1', objectFit: 'cover'}}
        />
    </LandAffixContainer>
}
export default InspirationCard;