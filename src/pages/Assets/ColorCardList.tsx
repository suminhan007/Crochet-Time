import {Icon, LandButton, LandLink, LandLoading, LandState} from "@suminhan/land-design";
import React from "react";
import {useNavigate} from "react-router-dom";

type Props = {
    loading: boolean;
    data?: string[];
}
const ColorCardList:React.FC<Props> = ({
    loading,
    data,
}) => {
    const navigate = useNavigate();
    return (
        <>
            {loading ? <>
                <LandLoading />
            </> : (data && data?.length >0) ? <div className={'width-100 height-100 '}>
                {data?.map(i => <div
                    key={i}
                >
                        <img src={i} width={300}/>
                    <div className={'flex items-center'}>
                        <LandButton type={'text'} text={'下载'} icon={<Icon name={'download'} />}></LandButton>
                        <LandButton type={'text'} text={'删除'} icon={<Icon name={'delete'} size={16} strokeWidth={3}/>}></LandButton>
                    </div>
                </div>)}
            </div> : <LandState type={'empty'} title={<>暂无色卡, <LandLink onClick={() => navigate('/type=aids-colorPicker')}>前往制作</LandLink></>}/>}
        </>
    )
}
export default ColorCardList;