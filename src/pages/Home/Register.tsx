import React, {useState} from "react";
import {LandDialog, LandInput, LandRadio, LandTitle} from "@suminhan/land-design";
import {useNavigate} from "react-router-dom";
import supabase from "../../utils/supabse.ts";

type Props = {

}

const Register:React.FC<Props> = ({

}) => {
    const navigate = useNavigate();
    const registerSexData = [
        {value: 'male', label: '男'},
        {value: 'female', label: '女'},
        {value: '', label: '神秘'},
    ]
    const [username, setUsername] = useState<string>('');
    const [sex, setSex] = useState<number|string>('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const register = async () => {
        try {
            const { data, error: signUpError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        username,
                        sex:String(sex),
                    }
                }
            });

            if (signUpError) {
                throw signUpError;
            }
            console.log(data);
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };
    return (<LandDialog
        mask
        show={true}
        onClose={() => navigate('/')}
        onCancel={() => navigate('/')}
        onSubmit={() => register()}
        submitLabel={'提交'}
        headerLeftComponent={<LandTitle type={'h2'} title={'注册'}/>}
    >
       <div className={'flex column gap-12'}>
            <LandInput width={'100%'} prefix={'昵称：'} onChange={val => setUsername(val)}/>
            <LandRadio data={registerSexData} checked={sex} onChange={item => setSex(item.value)}/>
            <LandInput width={'100%'} prefix={'邮箱：'} onChange={val => setEmail(val)}/>
            <LandInput width={'100%'} prefix={'密码：'} onChange={val => setPassword(val)}/>
        </div>
    </LandDialog>)
}
export default Register;
