import React, {useMemo} from "react";
import CourseHomeItem from "./components/CourseHomeItem.tsx";
import {CourseHomeData, CourseHomeDataEn} from "./mock.tsx";

type Props = {
isEnglish?: boolean;
}
const Course:React.FC<Props> = ({
isEnglish
                                }) => {
    const data = useMemo(() => isEnglish ? CourseHomeDataEn : CourseHomeData, [isEnglish])
    return <div className={`relative flex column gap-32 width-100`} style={{paddingTop: '64px'}}>
        {
            data?.map((item, index) => <div key={item.id ?? index}>
                <CourseHomeItem data={item} />
            </div>)
        }
    </div>
}
export default Course;
