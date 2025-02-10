import {useNavigate} from "react-router-dom";
import React from "react";

const LoginButtons: React.FC = () => {
    const navigate = useNavigate();
    return (<div className='flex items-center gap-12'>
        <a className='fs-14 color-white bg-primary px-12 py-4 radius-4 cursor-pointer no-wrap'
           onClick={() => {
               navigate('/register');
           }}>注册</a>
        <a className='fs-14 color-gray-3 hover:bg-gray px-12 py-4 radius-4 cursor-pointer transition no-wrap'
           onClick={() => {
               navigate('/login');
           }}>登录</a>
    </div>)
}
export default LoginButtons;