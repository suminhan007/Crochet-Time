import {Icon, LandDivider} from "@suminhan/land-design";
import React from "react";
import {useNavigate} from "react-router-dom";
type Props = {
    title?:string;
    isEnglish?: boolean;
    backHref?:string;
}
const CourseHeader:React.FC<Props> = ({
                                          title,
                                          isEnglish,
                                          backHref='/type=course'
                                      }) => {
    const navigate = useNavigate();
    return <div
        className="flex items-center border-bottom px-12 bg-white shrink-0"
        style={{height: "64px"}}
    >
        <div
            className="flex items-center cursosr-pointer fs-12 cursor-pointer"
            onClick={() => navigate(backHref)}
        >
            <Icon name="arrow" className="rotate-90"/>
            {isEnglish?'Back':'返回'}
        </div>
        {title && <LandDivider direction="column" lang="40%" margin={24}/>}
        <div className="flex items-center fs-16 fw-600">
            {title}
        </div>
    </div>
}
export default CourseHeader;