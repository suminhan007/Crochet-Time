//@ts-nocheck
import React, {useEffect, useMemo, useState} from "react";
import {
    Icon,
    LandAvatar,
    LandDrawer, LandInput,
    LandLoading,
    LandMenu, LandState, LandUploader,
} from "@suminhan/land-design";
import supabase from "../../utils/supabse.ts";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import timeAgoTZ from "../../utils/timeAgoTZ.ts";
import Loading from "../../components/Loading.tsx";

const userOptionMenuData = [
    {key:'publish',title:'发布',},
    {key:'star',title:'收藏',}
]
type Props = {
    isEnglish?: boolean,
    avatar?:string;
    username: string;
    email?:string;
    coins?:number;
    onLogoutSuccess: () => void;
    onUpdateUserSuccess: () => void;
}
const UserAvatar: React.FC<Props> = ({
                                         isEnglish,
                                         avatar,
                                   username,
                                         email,
                                         // coins=0,
                                         onLogoutSuccess,
                                         onUpdateUserSuccess,
                        }) => {
    const navigate = useNavigate();
    const isMobile = useMemo(() => document.body.clientWidth < 768, []);
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
    const [userOptionMenu,setUserOptionMenu] = useState<string>('publish');
    const [starLoading,setStarLoading] = useState<boolean>(true);
    const [publishLoading,setPublishLoading] = useState<boolean>(false);
    const [userMenuStarData,setUserMenuStarData] = useState<{id:string,img_url:string,title?:string,description?:string,card_id,type:string,users:{username:string,avatar_url:string}}[]>([]);
    const [userMenuPublishData,setUserMenuPublishData] = useState<{id:string,created_at:string,img_url:string,title?:string,description?:string}[]>([]);
    // 修改用户昵称
    const onUpdateUsername = async () => {
        if(newUsername == username || !newUsername) setShowUpdateUsername(false);
        const {data:{user}} = await supabase.auth.getUser();
        if(user){
            const {error} = await supabase.auth.updateUser({
                data:{username: newUsername || username}
            })
            if(error){
            }else{
                const {error: TableError} = await supabase.from('users').update({username: newUsername ?? username}).eq('id',user.id)
                if(TableError){
                    console.log('修改失败',TableError)
                }else{
                    // window.location.reload();
                    onUpdateUserSuccess?.()
                }
            }
        }
        setShowUpdateUsername(false);
    }
    const handleUpdateUserAvatar = async (url:string) => {
        if(!url)return;
        setNewAvatar(url);
        const blob = await fetch(url).then(res => res.blob());
        const fileName = `user-avatar-${Date.now()}.png`;
        const {data:AvatarData,error} = await supabase.storage.from('CroKnitTime/userAvatars') // 替换为你的存储桶名称
            .upload(fileName, blob);
        if(error){}else{
            const {error} = await supabase.auth.updateUser({
                data:{avatar_url: AvatarData?.path}
            })
            if(error){

            }else{
                const {error:TableError} = await supabase.from('users').update({avatar_url: AvatarData?.path})
                if(TableError){}else{
                    // window.location.reload();
                    onUpdateUserSuccess?.()
                }
            }
        }
    }
    const getStarData = async () => {
        const {data:{user}} = await supabase.auth.getUser();
        if(user){
            const {data:data,error} =await supabase.from('staredCard').select(`
                id,
                card_id,
                img_url,
                title,
                description,
                type,
                user_id,
                users (
                    username,
                    avatar_url
                )
            `).eq('user_id',user.id);
            if(error){
                return;
            }else{
                const { data: UrlData, error:UrlError } = await supabase
                    .storage
                    .from('CroKnitTime')
                    .createSignedUrls(data?.map(i => `${i.type}/${i.img_url}`), 60)
                if(UrlError){
                    console.log(UrlError)
                }else{
                    const { data: UserData, error:UserError } = await supabase
                        .storage
                        .from('CroKnitTime')
                        .createSignedUrls(data?.map(i => `userAvatars/${i.users.avatar_url}`), 60)
                        if(UserError){}else{
                            const resultData = data?.map((i,idx) => Object.assign(i, {img_url: UrlData[idx].signedUrl,users: Object.assign(i.users, {avatar_url: UserData[idx].signedUrl}) }));
                            setUserMenuStarData(resultData);
                            setStarLoading(false)
                        }
                }
            }
        }
    }
    const getPublishData = async () => {
        const {data:{user}} = await supabase.auth.getUser();
        if(user){
            const {data:data,error} =await supabase.from('graphicState').select('id, created_at,img_url, title, description').eq('user_id',user.id);
            if(error){
                return;
            }else{
                const { data: UrlData, error:UrlError } = await supabase
                    .storage
                    .from('CroKnitTime')
                    .createSignedUrls(data?.map(i => `stateImages/${i.img_url}`), 60)
                if(UrlError){
                    console.log(UrlError)
                }else{
                    const resultData = data?.map((i,idx) => Object.assign(i, {img_url: UrlData[idx].signedUrl }));
                    setUserMenuPublishData(resultData);
                }
            }
        }
    }
    useEffect(() => {
        getPublishData();
        userOptionMenu === 'star' && getStarData();
    }, [userOptionMenu]);
    const getType = (type:string) => {
        switch (type) {
            case 'stateImages': return isEnglish ? 'state':'动态';break;
            case 'inspirationCards': return isEnglish ? 'inspiration':'灵感';break;
            case 'colorCards': return isEnglish ? 'color card':'色卡';break;
            case 'fillCards': return isEnglish ? 'fill card':'配色卡';break;
            case 'pixelCards': return isEnglish ? 'pixel card':'像素卡';break
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
                mask
                size={isMobile ? 'large' : 'small'}
                show={showUserDetail}
                onClose={() => setShowUserDetail(false)}
                footerComponent={null}
                contentClassName={'width-100'}
                wrapClassName={'ct-header-drawer'}
                placement={isMobile ? 'bottom' : 'right'}
                bodyClassName={'flex-1 flex column'}
                bodyStyle={{paddingInline:'0'}}
            >
                <div className={'flex column items-center width-100 px-24'}>
                    <div className={'flex items-center gap-8 fs-14 color-gray-2 cursor-pointer width-100 shrink-0'}>
                        <LandUploader style={{padding: '0', borderRadius: '100%'}} width={'40px'} height={'40px'}
                                      onUpload={url => handleUpdateUserAvatar?.(url)}>
                            {loading ? <LandLoading size={16} color={'var(--color-primary-6)'}/> :
                                <img src={newAvatar || avatar} width={'40px'} height={'40px'}
                                     style={{borderRadius: '100%', objectFit: 'cover'}}/>}
                        </LandUploader>
                        <div className={'flex-1 flex column'}>
                            <div className={'relative flex items-center gap-8 fs-16'}>
                                {username}
                                <div
                                    className={`absolute top-0 left-0 bg-white border ${showUpdateUsername ? '' : 'opacity-0 events-none'} transition`}
                                    style={{width: 'calc(100% - 24px)'}}><LandInput type={'transparent'}
                                                                                    placeholder={username}
                                                                                    onChange={(val) => setNewUsername(val)}/>
                                </div>
                                {!showUpdateUsername ? <Icon name={'edit'} size={16} strokeWidth={3}
                                                             onClick={() => setShowUpdateUsername(true)}/> :
                                    <div className={'flex both-center p-4 radius-4 hover:bg-gray ml-auto'}
                                         onClick={onUpdateUsername}><Icon name={'check'} fill={'var(--color-text-2)'}
                                                                          size={12} strokeWidth={0}/></div>}
                            </div>
                            <span className={'fs-12 color-gray-4'}>{email}</span>
                        </div>
                    </div>
                </div>

                    <div className={'flex column items-center px-24 width-100 mt-24 border-bottom'} style={{height: '40px'}}>
                        <LandMenu data={userOptionMenuData} active={userOptionMenu}
                                  onChange={item => setUserOptionMenu(item.key)} border={false}/></div>
                <div className={'width-100 flex-1 px-24 overflow-auto'}>
                    {userOptionMenu === 'star' && <>
                    {starLoading ? <Loading/> : userMenuStarData?.length>0 ? <div className={'grid gap-12 width-100 py-24'}
                          style={{gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))'}}>
                        {userMenuStarData?.map((starItem, starIndex) => <div key={starItem?.id ?? starIndex}
                                                                             className={'flex column gap-8'}>
                            <div className={'width-100 radius-8 overflow-hidden'} style={{aspectRatio: 1}}>
                                <img src={starItem?.img_url} width={'100%'}/></div>
                            <div className={'flex justify-between'}>
                                <div className={'flex gap-8 items-center'}>
                                    <LandAvatar imgUrl={starItem?.users.avatar_url} size={24}/>
                                    <div className={'fs-12 color-gray-2'}>{starItem.users.username}</div>
                                </div>
                                {starItem.type && <div
                                    className={'fit-content fs-10 color-gray-3 bg-gray py-4 px-8 radius-12'}>{getType(starItem.type)}</div>}
                            </div>
                        </div>)}
                    </div>: <div className={'width-100 height-100 flex both-center'}>
                        <LandState type={'empty'} title={'暂无收藏内容'}/>
                    </div>}</>}
                    {userOptionMenu === 'publish' &&<div className={'grid gap-12 width-100 py-24'}
                                                      style={{gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))'}}>
                        {userMenuPublishData?.map((publishItem, publishIndex) => <div key={publishItem?.id ?? publishIndex}
                                                                             className={'flex column gap-8'}>
                            <div className={'width-100 radius-8 overflow-hidden'} style={{aspectRatio: 1}}>
                                <img src={publishItem?.img_url} width={'100%'}/></div>
                            <div className={'flex gap-8 items-center fs-10 color-gray-4 no-wrap'}>
                                <div className={'ellipsis fs-12 color-gray-2'}>{publishItem?.title}</div>
                                {timeAgoTZ(publishItem?.created_at)}
                            </div>
                        </div>)}
                    </div>}
                </div>
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