import React from "react";
import CourseHeader from "./components/CourseHeader.tsx";
import {StyledCourseInnerPage} from "./CourseWire.tsx";
import {LandTimeline} from "@suminhan/land-design";

const historyData = [
    {title: '1820年',subTitle:'111'},
    {title: '2',subTitle:'222'}
]
type Props = {
    isEnglish?:boolean;
}
const CourseHistory:React.FC<Props> = ({
                                           isEnglish
                                       }) => {
    return <StyledCourseInnerPage className="fixed left-0 top-0 flex column bg-white">
        <CourseHeader isEnglish={isEnglish} title={'编织发展史'}/>
        <div className={'content width-100 flex-1 flex column both-center gap-24 py-24 border-box'}>
            <LandTimeline data={historyData} direction={'row'}/>
        </div>
    </StyledCourseInnerPage>
}
export default CourseHistory;