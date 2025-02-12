import React, {useEffect, useState} from "react";
import {LandAlert, LandDialog, LandInput, LandRadio, LandTitle, LandUploader} from "@suminhan/land-design";
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
    const [avatar, setAvatar] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [sex, setSex] = useState<number|string>('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authing, setAuthing] = useState(false);
    const createUser = async (avatar:string) => {
        try {
            const { data, error: signUpError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        avatar_url: avatar,
                        username,
                        sex:String(sex),
                        level: '1',
                        coins:0,
                    },
                    emailRedirectTo:'http://localhost:5173/',
                }
            });

            if (signUpError) {
                throw signUpError;
            }else{
                const {error: createUserError} = await supabase.from('users').insert({
                    id: data.user?.id,
                    avatar_url: avatar,
                    email,
                    password,
                    username,
                    sex:String(sex),
                    level: '1',
                    coins:0,
                })
                if(createUserError){
                }else{
                    console.log(data);
                    setAuthing(true);
                }
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    }
    const register = async () => {
        // 上传头像
        if(avatar){
            const blob = await fetch(avatar).then(res => res.blob());
            const fileName = `user-avatar-${Date.now()}.png`;
            const { data:OriginData, error } = await supabase
                .storage
                .from('ColorCardCollect/avatars') // 替换为你的存储桶名称
                .upload(fileName, blob);
            if (error) {
                console.error('Error uploading image:', error);
            } else {
                createUser(OriginData?.path);
            }
        }else{
            createUser('');
        }
    };
    const handleLogined = async () => {
        const {data: {user}} = await supabase.auth.getUser();
        if(user) {
            navigate('/');
        }
    }
    useEffect(() => {
        handleLogined();
    }, []);
    return (<LandDialog
        mask
        show={true}
        onClose={() => navigate('/')}
        onCancel={() => navigate('/')}
        onSubmit={() => register()}
        submitLabel={'提交'}
        headerLeftComponent={<LandTitle type={'h2'} title={'注册'}/>}
    >
       <div className={'relative flex column gap-12'}>
           <LandUploader width={'64px'} height={'64px'} className={'mx-auto radius-100'} onUpload={url => setAvatar(url)} style={{padding:'0px',borderRadius:'100%',overflow:'hidden'}}>
               {avatar && <img width={'100%'} height={'100%'} src={avatar} style={{objectFit: 'cover'}}/>}
           </LandUploader>
            <LandInput width={'100%'} prefix={'昵称：'} onChange={val => setUsername(val)}/>
            <LandRadio data={registerSexData} checked={sex} onChange={item => setSex(item.value)}/>
            <LandInput width={'100%'} prefix={'邮箱：'} onChange={val => setEmail(val)}/>
            <LandInput inputType={'password'} width={'100%'} prefix={'密码：'} onChange={val => setPassword(val)}/>
           <div className={`absolute width-100 height-100 top-0 left-0 flex both-center ${authing ? '':'opacity-0 events-none'} transition`} style={{backgroundColor: 'rgba(255,255,255,0.8)'}}>
               <LandAlert title={'注册信息提交成功，请前往邮箱进行验证。'}/>
           </div>
        </div>
    </LandDialog>)
}
export default Register;
