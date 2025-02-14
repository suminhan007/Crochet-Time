import React, {useState} from "react";
import {Icon, LandCheckBox, LandSwitch} from "@suminhan/land-design";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const wireFilterCheckData = [
    {value: '1', label:'新手'},
    {value: '2', label:'label2'}
]

type Props = {
    isEnglish?: boolean;
}

const CourseWire:React.FC<Props> = ({
                                        isEnglish
                                    }) => {
    const navigate = useNavigate();
    const [inOrderChecked,setInOrderChecked] = useState<boolean>(false);
    return <StyledCourseInnerPage className="fixed left-0 top-0 flex column p-24 bg-white">
        <div
            className="flex items-center width-100 cursosr-pointer fs-14 cursor-pointer"
            onClick={() => navigate('/type=course')}
        >
            <Icon name="arrow" className="rotate-90"/>
            {isEnglish ? 'Back':'返回'}
        </div>
        <div className={'content width-100 flex-1 flex column'}>
            <div className={'flex justify-between'}>
                <LandCheckBox data={wireFilterCheckData}/>
                <LandSwitch label={'InOder'} checked={inOrderChecked} onChange={setInOrderChecked}/>
            </div>
            <div className={'flex-1'}>
                    {/*雷达图：透气性、价格、稀有度*/}
                    {/*发展史时间轴*/}
            </div>
        </div>
    </StyledCourseInnerPage>
}

const StyledCourseInnerPage = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 1025;
    .content{
        max-width: 1200px;
        margin-inline: auto;
    }
`
export default CourseWire;
