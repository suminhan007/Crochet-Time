import React from "react";
import {Icon, LandButton, LandLoading} from "@suminhan/land-design";

type Props = {
    label?:string;
    disabled?:boolean;
    onClick?:()=>void;
    loading?:boolean;
}
const SubmitButton:React.FC<Props> = ({
                                          label='保存作品',disabled,

                                          onClick,
    loading
                                      }) => {
    return <LandButton
        type={'background'}
        status={'primary'}
        text={label}
        icon={loading?<LandLoading size={16} color={'white'}/>:<Icon name={'save'}/>}
        className="ml-auto"
        disabled={disabled}
        onClick={onClick}
        style={{width:'120px',position:'fixed',top:'14px',right:'24px',zIndex: 1025}}
    />
}
export default SubmitButton;