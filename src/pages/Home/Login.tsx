import React, {useState} from "react";
import {LandAlert, LandDialog, LandInput, LandLoading, LandTitle} from "@suminhan/land-design";
import {useNavigate} from "react-router-dom";
import supabase from "../../utils/supabse.ts";
import {User} from "@supabase/supabase-js";

type Props = {
    onLogined?: (user:User) => void;
}

const Login_bak:React.FC<Props> = ({
                                   onLogined
}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginLoading, setLoginLoading] = useState(false);
    const [error,setError] = useState<boolean>();
    const login = async () => {
        setError(false);
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            console.error('登录失败:', error);
            setError(true);
            setLoginLoading(false);
        } else {
            onLogined?.(data.user);
            navigate('/');
            setLoginLoading(false);
        }
    };
    return (<LandDialog
        mask
        show={true}
        onClose={() => navigate('/')}
        onCancel={() => navigate('/')}
        onSubmit={() => {
            setLoginLoading(true);
            login();
        }}
        submitLabel={'提交'}
        headerLeftComponent={<LandTitle type={'h2'} title={'登录'}/>}
    >
        {loginLoading ? <div style={{height:'84px'}} className={'flex column both-center gap-4 fs-14 color-gray-4'}>
            <LandLoading/>
            登录中...
        </div>:<div className={`flex column gap-12 ${loginLoading ? 'events-none' : ''}`}>
            <LandInput type={'background'} width={'100%'} prefix={'邮箱：'} autocomplete name={'email'} onChange={val => {
                setError(false);
                setEmail(val)
            }}/>
            <LandInput type={'background'} inputType={'password'} width={'100%'} prefix={'密码：'} autocomplete name={'password'} onChange={val => {
                setError(false);
                setPassword(val)
            }}/>
            {error && <LandAlert type={'fail'} title={'账号或密码输入错误'}/>}
        </div>}
    </LandDialog>)
}
export default Login_bak;
