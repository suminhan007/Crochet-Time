import React from "react";
import CourseHomeItem from "./components/CourseHomeItem.tsx";
import {CourseHomeData} from "./mock.tsx";

type Props = {

}
const Course:React.FC<Props> = ({

                                }) => {
    return <div className={`relative flex column gap-32 width-100`} style={{paddingTop: '64px'}}>
        {
            CourseHomeData?.map((item, index) => <div key={item.id ?? index}>
                <CourseHomeItem data={item}/>
            </div>)
        }
    </div>
}
export default Course;
