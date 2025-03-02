import React from "react";
import CourseHomeItem from "./components/CourseHomeItem.tsx";
import {CourseHomeData} from "./mock.tsx";

type Props = {
isEnglish?: boolean;
}
const Course:React.FC<Props> = ({
isEnglish
                                }) => {
    return <div className={`relative flex column gap-24 pt-12 width-100`}>
        {
            CourseHomeData?.map((item, index) => <div key={item.id ?? index}>
                <CourseHomeItem data={item} isEnglish={isEnglish} />
            </div>)
        }
    </div>
}
export default Course;
