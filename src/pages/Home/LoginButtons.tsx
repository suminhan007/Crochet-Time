import {useNavigate} from "react-router-dom";
import React from "react";
import {LandButton} from "@suminhan/land-design";
type Props = {
    isEnglish?: boolean;
}
const LoginButtons: React.FC<Props> = ({
                                           isEnglish
                                       }) => {
    const navigate = useNavigate();
    return (<div className='flex items-center gap-12'>
        <LandButton type={'background'} onClick={() => {navigate('/register');}} style={{display:'flex'}}>{isEnglish ? 'sign up': '注册'}</LandButton>
        <LandButton type={'background'} status={'primary'} style={{display:'flex'}} onClick={() => {navigate('/login');}}>{isEnglish ? 'sign in':'登录'}</LandButton>
    </div>)
}
export default LoginButtons;