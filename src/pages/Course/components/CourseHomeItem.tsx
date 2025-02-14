import React from 'react'
import CourseHomeBook from "./CourseHomeBook.tsx";

export type HomeDataItemType = {
    id: string,
    title?: string,
    desc?: string;
    color?: string,
    cards: {
        id: string,
        title?: string,
        desc?: string,
        href?:string,
        target?:string;
        details?:string|React.ReactNode;
    }[]
}
type Props = {
    data?: HomeDataItemType;
}

const CourseHomeItem: React.FC<Props> = ({
                                           data,
                                       }) => {
    return (
        <div className='mx-auto flex column width-100'>
            <div className='flex column width-100 gap-8 px-24 border-box' style={{maxWidth:'1200px',marginInline:'auto'}}>
                <div className='fs-24 fw-600 color-gray-2'>{data?.title}</div>
                <div className='fs-14 color-gray-4'>{data?.desc}</div>
            </div>
            <div className='flex width-100 border-box scrollbar-none' style={{paddingBlock:'32px',paddingInline: 'calc((100vw - 1200px) / 2)'}}>

                <div className='flex px-24' style={{gap:'24px'}}>
                    {
                        data?.cards?.map((item, index) => <CourseHomeBook key={item.id??index} item={item}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default CourseHomeItem;
