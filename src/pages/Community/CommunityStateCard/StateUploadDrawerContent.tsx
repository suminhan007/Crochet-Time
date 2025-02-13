import {DrawerProps, Icon, LandDivider, LandDrawer, LandInput, LandUploader} from "@suminhan/land-design";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import StateCard from "./StateCard.tsx";
import supabase from "../../../utils/supabse.ts";

type Props = {
    isEnglish?: boolean,
    onPublish?: (img:string,title?:string,desc?: string) => void;
} & DrawerProps;
const StateUploadDrawerContent:React.FC<Props> = ({
                                                      isEnglish,
                                                      onPublish,
    ...restProps
                                                  }) => {
    const [imgUrl, setImgUrl] = useState("");
    const [title, setTitle] = useState<string>("");
    const [desc, setDesc] = useState<string>("");

    const [user,setUser] = useState<any>();
    const getUser = async () => {
        const {data: {user}} = await supabase.auth.getUser();
        if(user) {
            const { data: UrlData, error:UrlError } = await supabase
                .storage
                .from('CroKnitTime')
                .createSignedUrl(`userAvatars/${user.user_metadata?.avatar_url}`, 60)
            if(UrlError){}else {
                const resultData = Object.assign(user.user_metadata,{avatar_url:UrlData.signedUrl});
                setUser(resultData)
            }
        }
    }
    useEffect(() => {
        getUser()
    }, []);
    return <LandDrawer
        mask
        title={'发布动态'}
        size={'large'}
        cancelLabel={isEnglish ? 'Cancel' : '取消'}
        submitLabel={isEnglish ? 'Save & Publish' : '保存并发布'}
        placement={'bottom'}
        onSubmit={() => onPublish?.(imgUrl,title,desc)}
        bodyStyle={{padding: '0'}}
        {...restProps}
    >
        <StyledPublishStateDrawerContent className={'flex width-100 height-100'}>
            <div className={'flex-1 flex column gap-12 p-24 overflow-auto'}>
                <LandUploader onUpload={url => setImgUrl(url)}>
                    {imgUrl && <img src={imgUrl} alt={imgUrl} width={'100%'} height={'100%'} style={{objectFit: 'contain'}}/>}
                </LandUploader>
                <div className={'flex-1 flex column gap-8'}>
                    <LandInput placeholder={'输入标题（30字内）'} type={'transparent'} onChange={setTitle}/>
                    <div className={'flex-1 relative'} style={{paddingBottom:'44px'}}>
                        <textarea placeholder={'输入正文'} onChange={e => setDesc?.(e.target.value)}/>
                        <div className={'absolute textarea-value-num flex items-center gap-4 fs-12 color-gray-4'}>
                            <div onClick={() => setDesc('')} style={{height:'16px'}}><Icon name={'error-fill'} size={16}/></div>
                            {desc?.length} / 200
                        </div>
                    </div>
                </div>
            </div>
            <LandDivider direction={'column'}/>
            <div className={'flex-1 flex column height-100 p-24'}>
                <div className={'fs-14 color-gray-4'}>效果预览：</div>
                <div className={'flex-1 flex both-center'} style={{maxWidth: '320px'}}>
                    <StateCard
                        imgUrl={imgUrl}
                        title={title}
                        username={user?.user_metadata?.username}
                        avatarUrl={user?.user_metadata?.avatar_url}
                        isOfficial={user?.email === 'suumhan@163.com'}
                    />
                </div>
            </div>
        </StyledPublishStateDrawerContent>
    </LandDrawer>
}

const StyledPublishStateDrawerContent = styled.div`
    textarea{
        appearance: none;
        border: none;
        height: 100%;
        resize: none;
    }
    .textarea-value-num{
        bottom: 12px;
        right: 12px;
    }
    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`
export default StateUploadDrawerContent;