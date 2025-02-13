import {DrawerProps, LandDivider, LandDrawer, LandInput, LandUploader} from "@suminhan/land-design";
import React, {useState} from "react";
import styled from "styled-components";

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
    return <LandDrawer
        mask
        title={'发布动态'}
        size={'large'}
        cancelLabel={isEnglish ? 'Cancel' : '取消'}
        submitLabel={isEnglish ? 'Publish' : '发布'}
        placement={'bottom'}
        onSubmit={() => onPublish?.(imgUrl,title,desc)}
        {...restProps}
    >
        <StyledPublishStateDrawerContent className={'flex width-100'}>
            <div className={'flex-1 flex column gap-12'}>
                <LandUploader onUpload={url => setImgUrl(url)}>
                    {imgUrl && <img src={imgUrl} alt={imgUrl} width={'100%'} height={'100%'} style={{objectFit: 'contain'}}/>}
                </LandUploader>
                <div className={'flex column gap-8'}>
                    <LandInput placeholder={'输入标题（30字内）'} type={'transparent'} onChange={setTitle}/>
                    <textarea placeholder={'输入正文（200字内）'} onChange={e => setDesc?.(e.target.value)}/>
                </div>
            </div>
            <LandDivider direction={'column'}/>
            <div className={'flex-1'}></div>
        </StyledPublishStateDrawerContent>
    </LandDrawer>
}

const StyledPublishStateDrawerContent = styled.div`
    textarea{
        appearance: none;
        border: none;
    }
    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`
export default StateUploadDrawerContent;