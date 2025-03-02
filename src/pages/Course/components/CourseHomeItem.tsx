import React from 'react'
import CourseHomeBook from "./CourseHomeBook.tsx";

export type HomeDataItemType = {
    id: string,
    title?: string,
    title_en?:string,
    desc?: string;
    desc_en?:string,
    color?: string,
    cards: {
        id: string,
        title?: string,
        title_en?: string,
        desc?: string,
        desc_en?: string,
        href?:string,
        target?:string;
        details?:string|React.ReactNode;
        details_en?:string;
    }[]
}
type Props = {
    data?: HomeDataItemType;
    isEnglish?: boolean;
}

const CourseHomeItem: React.FC<Props> = ({
                                           data,
    isEnglish
                                       }) => {
    return (
        <div className='mx-auto flex column width-100'>
            <div className='flex column width-100 gap-8 px-24 border-box' style={{maxWidth:'1200px',marginInline:'auto'}}>
                <div className='fs-24 fw-600 color-gray-2'>{isEnglish ? data?.title_en:data?.title}</div>
                <div className='fs-14 color-gray-4'>{isEnglish?data?.desc_en:data?.desc}</div>
            </div>
            <div className='flex width-100 border-box py-24 scrollbar-none' style={{paddingInline: 'calc((100vw - 1200px) / 2)'}}>

                <div className='flex px-24 gap-24'>
                    {
                        data?.cards?.map((item, index) => <CourseHomeBook key={item.id??index} item={item} isEnglish={isEnglish} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default CourseHomeItem;
