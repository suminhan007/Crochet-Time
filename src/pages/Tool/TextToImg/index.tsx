import CourseHeader from "../../Course/components/CourseHeader.tsx";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import AgentTextarea from "./AgentTextarea.tsx";
import AgentScrollLayout from "./AgentScrollLayout.tsx";
import UserItem from "./UserItem.tsx";
import ServerItem from "./ServerItem.tsx";

type Props = {
    isEnglish: boolean,
}
const TextToImg:React.FC<Props> = ({
    isEnglish,
                                   }) => {
    const [innerContent,setInnerContent] = useState<React.ReactNode[]>([]);
    const [answering,setAnswering] = useState<boolean>(false);
    useEffect(() => {
        if(answering){
            setTimeout(() => {
                setInnerContent([...innerContent, <ServerItem message={<div className={'flex column'}>
                    一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字111
                    <div style={{marginTop: '600px'}}>一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字222</div>
                    <div style={{marginTop: '600px'}}>一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字一些测试文字333</div>
                </div>}/>]);
                setAnswering(false);
            },1000);
            setTimeout(() => {
                const scroller = document.querySelector('.ckt-agent-scroll-layout');
                scroller?.scrollTo({
                    top: scroller?.scrollHeight,
                    behavior: 'smooth',
                })
            },1100)
        }
    },[answering])
    return <div className={'fixed top-0 left-0 flex column pb-24 width-100 height-100 bg-white'} style={{zIndex: 1024}}>
        <CourseHeader title={''} isEnglish={isEnglish} backHref={'/type=tools'}/>
        <StyledLandContent className="flex-1 height-1 flex column items-start width-100 mx-auto px-24 border-box">
            <AgentScrollLayout>
                {innerContent}
            </AgentScrollLayout>
            <AgentTextarea onSend={() => {
                setInnerContent([...innerContent, <UserItem message={'问了一个问题'}/>]);
                setAnswering(true);
                setTimeout(() => {
                    const scroller = document.querySelector('.ckt-agent-scroll-layout');
                    scroller?.scrollTo({
                        top: scroller?.scrollHeight,
                        behavior: 'smooth',
                    })
                },500)
            }}/>
        </StyledLandContent>
    </div>
            }

const StyledLandContent = styled.div`
    max-width: 848px;
`
export default TextToImg;
