import React, {useState} from "react";
import {LandDialog, LandInput,  LandTitle} from "@suminhan/land-design";
import {useNavigate} from "react-router-dom";
import supabase from "../../utils/supabse.ts";

type Props = {

}

const Register:React.FC<Props> = ({

}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginLoading, setLoginLoading] = useState(false);
    const login = async () => {
        setLoginLoading(true)
        const {  error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            console.error('登录失败:', error);
            setLoginLoading(false);
        } else {
            const {data:croknitUsers,error:selectError} = await supabase.from('croknitUsers').select('username');
            if(selectError){
                console.error('登录失败:', error);
            }else{
                setLoginLoading(false);
                navigate('/');
                return {username:croknitUsers[0].username};
            }
        }
    };
    return (<LandDialog
        mask
        show={true}
        onClose={() => navigate('/')}
        onCancel={() => navigate('/')}
        onSubmit={() => login()}
        submitLabel={'提交'}
        headerLeftComponent={<LandTitle type={'h2'} title={'登录'}/>}
    >
       <div className={`flex column gap-12 ${loginLoading ? 'events-none':''}`}>
            <LandInput width={'100%'} prefix={'邮箱：'} onChange={val => setEmail(val)}/>
            <LandInput width={'100%'} prefix={'密码：'} onChange={val => setPassword(val)}/>
        </div>
    </LandDialog>)
}
export default Register;
