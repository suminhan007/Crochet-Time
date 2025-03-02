import React from "react";
import {Icon, LandButton} from "@suminhan/land-design";

type Props = {
    label?:string;
    disabled?:boolean;
    onClick?:()=>void;
}
const SubmitButton:React.FC<Props> = ({
                                          label='保存作品',disabled,

                                          onClick
                                      }) => {
    return <LandButton
        type={'background'}
        status={'primary'}
        text={label}
        icon={<Icon name={'save'}/>}
        className="ml-auto"
        disabled={disabled}
        onClick={onClick}
        style={{position:'fixed',top:'14px',right:'24px',zIndex: 1025}}
    />
}
export default SubmitButton;