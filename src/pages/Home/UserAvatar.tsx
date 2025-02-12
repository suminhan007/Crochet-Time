import React, { useState} from "react";
import {
    Icon,
    LandAvatar,
    LandDivider,
    LandDrawer, LandInput,
    LandLoading,
    LandMenu, LandUploader,
} from "@suminhan/land-design";
import supabase from "../../utils/supabse.ts";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const userOptionMenuData = [
    {key:'publish',title:'发布',},
    {key:'star',title:'收藏',}
]
type Props = {
    avatar?:string;
    username: string;
    email?:string;
    coins?:number;
    onLogoutSuccess: () => void;
    onUpdateUserSuccess: () => void;
}
const UserAvatar: React.FC<Props> = ({
                                         avatar,
                                   username,
                                         email,
                                         // coins=0,
                                         onLogoutSuccess,
                                         onUpdateUserSuccess,
                        }) => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState<boolean>(false);
    const onLogout = async () => {
        const {error} = await  supabase.auth.signOut();
        if(error){
            setLoading(false);
            throw error;
        }else{
            setLoading(false);
            onLogoutSuccess?.()
        }
    }

    const [showUserDetail, setShowUserDetail] = useState<boolean>(false);

    const [showUpdateUsername, setShowUpdateUsername] = useState(false);
    const [newAvatar, setNewAvatar] = useState<string>('');
    const [newUsername, setNewUsername] = useState<string>('');
    // 修改用户昵称
    const onUpdateUsername = async () => {
        if(newUsername == username || !newUsername) setShowUpdateUsername(false);
        const {error} = await supabase.auth.updateUser({
            data:{username: newUsername || username}
        })
        if(error){

        }else{
            await supabase.from('users').update({username: newUsername ?? username})
            if(error){}else{
                // window.location.reload();
                onUpdateUserSuccess?.()
            }
        }
        setShowUpdateUsername(false);
    }
    const handleUpdateUserAvatar = async (url:string) => {
        if(!url)return;
        setNewAvatar(url);
        const blob = await fetch(url).then(res => res.blob());
        const fileName = `user-avatar-${Date.now()}.png`;
        const {data:AvatarData,error} = await supabase.storage.from('ColorCardCollect/avatars') // 替换为你的存储桶名称
            .upload(fileName, blob);
        if(error){}else{
            const {error} = await supabase.auth.updateUser({
                data:{avatar_url: AvatarData?.path}
            })
            if(error){

            }else{
                await supabase.from('users').update({avatar_url: AvatarData?.path})
                if(error){}else{
                    // window.location.reload();
                    onUpdateUserSuccess?.()
                }
            }
        }
    }
    return (
        <>
            <StyledUserAvatar className={'relative'}>
                <div className={'flex items-center gap-8 fs-14 color-gray-2 cursor-pointer'}
                     onClick={() => setShowUserDetail(true)}>
                    <LandAvatar imgUrl={loading ? undefined : avatar} size={40} content={loading ?
                        <LandLoading size={16} color={'var(--color-primary-6)'}/> : undefined}/>
                    <div className={'flex column'}>
                        {username}
                        <span className={'fs-12 color-gray-4'}>{email}</span>
                    </div>
                </div>
                <div className={'user-drop absolute flex column top-100 left-0 pt-12'}>
                    <div className={'flex column p-4 bg-white radius-8 shadow-light border'}>
                        <a onClick={() => navigate('/login')}
                           className={'px-12 py-8 fs-14 color-gray-2 hover:bg-gray transition cursor-pointer no-wrap'}>切换账号</a>
                        <a onClick={() => {

                            setLoading(true);
                            onLogout?.()
                        }}
                           className={'px-12 py-8 fs-14 color-gray-2 hover:bg-gray transition cursor-pointer no-wrap'}>退出登录</a>
                    </div>
                </div>
            </StyledUserAvatar>
            {/*个人中心*/}
            <LandDrawer
                size={'small'}
                show={showUserDetail}
                onClose={() => setShowUserDetail(false)}
                footerComponent={null}
                contentClassName={'width-100'}
                wrapClassName={'ct-header-drawer'}
            >
                <div className={'flex justify-between items-center width-100'}>
                    <div className={'flex items-center gap-8 fs-14 color-gray-2 cursor-pointer width-100'}>
                        <LandUploader style={{padding:'0',borderRadius:'100%'}} width={'40px'} height={'40px'} onUpload={url => handleUpdateUserAvatar?.(url)}>
                            {loading ? <LandLoading size={16} color={'var(--color-primary-6)'}/> : <img src={newAvatar || avatar} width={'40px'} height={'40px'} style={{borderRadius:'100%',objectFit:'cover'}} />}
                        </LandUploader>
                        <div className={'flex-1 flex column'}>
                            <div className={'relative flex items-center gap-8 fs-16'}>
                                {username}
                                <div className={`absolute top-0 left-0 bg-white border ${showUpdateUsername ? '':'opacity-0 events-none'} transition`} style={{width:'calc(100% - 24px)'}}><LandInput type={'transparent'} placeholder={username} onChange={(val) => setNewUsername(val)}/></div>
                                {!showUpdateUsername ? <Icon name={'edit'} size={16} strokeWidth={3} onClick={() => setShowUpdateUsername(true)}/> : <div className={'flex both-center p-4 radius-4 hover:bg-gray ml-auto'} onClick={onUpdateUsername}><Icon name={'check'} fill={'var(--color-text-2)'} size={12} strokeWidth={0} /></div>}
                            </div>
                            <span className={'fs-12 color-gray-4'}>{email}</span>
                        </div>
                    </div>
                </div>
                <div className={'flex-1'}>
                    <div className={'flex justify-center width-100 mt-24 border-bottom'} style={{height: '40px'}}>
                        <LandMenu data={userOptionMenuData} border={false}/></div>

                </div>
                <LandDivider/>
                {/*<div>*/}
                {/*    <LandButton type={'text'} icon={<Icon name={'setting'} size={18} strokeWidth={3}/>}*/}
                {/*                style={{display: 'flex'}}/>*/}
                {/*</div>*/}
            </LandDrawer>
        </>
    )
}

const StyledUserAvatar = styled.div`
    .user-drop {
        opacity: 0;
        transform: scaleY(0.9);
        pointer-events: none;
        transition: opacity var(--transition-15) ease-in-out, transform var(--transition-15) ease-in-out;
        transform-origin: top center;
        }
    &:hover{
        .user-drop{
            opacity: 1;
            transform: scaleY(1);
            pointer-events: auto;
        }
    }
`
export default UserAvatar;