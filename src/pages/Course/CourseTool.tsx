import React, {useMemo, useState} from "react";
import styled from "styled-components";
import CourseHeader from "./components/CourseHeader.tsx";
import {ToolTypeData} from "./mock.tsx";

type Props = {
    isEnglish?: boolean;
}

const CourseTool:React.FC<Props> = ({
                                        isEnglish
                                    }) => {
    const [cur,setCur]= useState<string>('');
    const curItem = useMemo(() => ToolTypeData?.filter(i =>i.id===cur)[0],[cur])
    return <StyledCourseInnerPage className="fixed left-0 top-0 flex column bg-white">
        <CourseHeader isEnglish={isEnglish} title={'编织工具与配材'}/>
        <div className={'content width-100 flex-1 flex column pt-32'}>
            <div className={'content-flex flex-1 relative flex gap-24 mt-24 px-24 height-100'}>
                <div className={'flex-1 flex both-center'}>
                    <div className={'flex flex-wrap justify-center gap-16 height-fit-content'}>
                        {
                            ToolTypeData?.map((item, index) => (<div
                                key={item.img_url ?? index}
                                className={`tool-item flex both-center p-8 radius-50 cursor-pointer ${cur === item.id ? 'border-primary' : 'border'} transition overflow-hidden`}
                                style={{transform: `scale(${item.frequency / 8})`}}
                                onClick={() => setCur(item.id)}
                            >
                                <img src={item.img_url} width={'100%'} className={'object-contain'}/>
                            </div>))
                        }
                    </div>
                </div>
                <div className={'flex-1 pb-24'}>
                    <div className={'flex column p-24 gap-12 width-100 height-100 bg-gray radius-12 overflow-auto'}>
                        {curItem?.title && <div className={'fs-20 fw-500 color-gray-2'}>{curItem.title}</div>}
                        {curItem?.desc && <div className={'fs-14 color-gray-4'}>{curItem.desc}</div>}
                        {curItem?.detailList && <div>
                            {curItem.detailList?.map((itm,idx) => <div key={idx} className={'flex column gap-8 color-gray-4 fs-14'}>
                                {itm.img_url && <img src={itm.img_url} width={'100%'}/>}
                                {itm?.desc && <div>{itm?.desc}</div>}
                            </div>)}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    </StyledCourseInnerPage>
}

const StyledCourseInnerPage = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 1025;

    .content {
        max-width: 1200px;
        margin-inline: auto;
    }

    .tool-item {
        width: 100px;
        aspect-ratio: 1;
    }

    @media (max-width: 800px) {
        .content-flex {
            flex-direction: column;
        }
    }
`
export default CourseTool;