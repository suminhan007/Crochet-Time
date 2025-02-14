import {useNavigate} from "react-router-dom";
import React from "react";
type Props = {
    isEnglish?: boolean;
}
const LoginButtons: React.FC<Props> = ({
                                           isEnglish
                                       }) => {
    const navigate = useNavigate();
    return (<div className='flex items-center gap-12'>
        <a className='fs-14 color-white bg-primary px-12 py-4 radius-4 cursor-pointer no-wrap'
           onClick={() => {
               navigate('/register');
           }}>{isEnglish ? 'sign up': '注册'}</a>
        <a className='fs-14 color-gray-3 hover:bg-gray px-12 py-4 radius-4 cursor-pointer transition no-wrap'
           onClick={() => {
               navigate('/login');
           }}>{isEnglish ? 'sign in':'登录'}</a>
    </div>)
}
export default LoginButtons;