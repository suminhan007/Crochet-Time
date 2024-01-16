import React from 'react'
import styled from 'styled-components'

type Props = {

}
const Course:React.FC<Props> = ({

}) => {
  return (
    <StyleCourseWrap className="StyleCourseWrap width-100">
        {/* banner */}
        <StyleBannerWrap></StyleBannerWrap>
    </StyleCourseWrap>
  )
}

const StyleCourseWrap = styled.div`
    min-height: 100vh;
`

const StyleBannerWrap = styled.div`
    height: 320px;
    background-color: aliceblue;
`
export default Course
