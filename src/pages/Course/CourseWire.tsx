import React, {useMemo, useState} from "react";
import styled from "styled-components";
import CourseHeader from "./components/CourseHeader.tsx";
import {YarnTypeData} from "./mock.tsx";
import {IconCrochet, IconKnit} from "../../components/Icon.tsx";
import {LandTable} from "@suminhan/land-design";

type Props = {
    isEnglish?: boolean;
}

const CourseWire:React.FC<Props> = ({
                                        isEnglish
                                    }) => {
    const [cur, setCur] = useState<string>('1')
    const curItem = useMemo(() => YarnTypeData?.filter(i => i.id === cur)[0],[cur])
    return <StyledCourseInnerPage className="fixed left-0 top-0 flex column bg-white">
        <CourseHeader isEnglish={isEnglish} title={'纱线种类及特性'}/>
        <div className={'content width-100 flex-1 height-1 flex column gap-24 py-24 border-box'}>
            <div className={'flex-1 flex column gap-24 height-1'}>
                    {/*雷达图：透气性、价格、稀有度*/}
                <div className={'width-100vw px-24 overflow-auto'} style={{height:'132px'}}>
                    <div className={'flex gap-12 items-center mx-auto'}>
                        {
                            YarnTypeData?.map((item,index) => <div key={item.id??index} className={'flex column gap-8 items-center fs-12 color-gray-3 cursor-pointer'} onClick={() => setCur(item.id)}>
                                {isEnglish?item.label?.split('??')[1]:item.label?.split('??')[0]}
                                <div className={'radius-50 overflow-hidden bg-gray'} style={{width:'100px',aspectRatio:'1',transform: cur===item.id ? '':'scale(0.7)',transformOrigin: 'top center',transition:'transform 0.2s ease-in-out'}}>
                                    {item.img_url && <img src={item.img_url} width={'100%'} height={'100%'} className={'object-cover'}/>}
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className={'details flex-1 height-1 flex px-24 width-100 mx-auto overflow-auto'}  style={{maxWidth:'1248px'}}>
                    <div className={'flex-1 flex column gap-12 height-100 bg-gray radius-12 p-24 shrink-0'}>
                        <div
                            className={'fs-20 fw-600'}>{isEnglish ? curItem?.label?.split('??')[1] : curItem?.label?.split('??')[0]}
                            {curItem?.nickname&&<span className={'fs-12 color-gray-4 ml-4 fw-400'}>（{isEnglish ? curItem?.nickname?.split('??')[1] : curItem?.nickname?.split('??')[0]}）</span>}
                        </div>
                        <div className={'fs-14 color-gray-2'}><span
                            className={'color-gray-4'}>原材料：</span>{isEnglish ? curItem?.material?.split('??')[1] : curItem?.material?.split('??')[0]}
                        </div>
                        <div className={'fs-14 color-gray-2'}><span
                            className={'color-gray-4'}>产地：</span>{isEnglish ? curItem?.origin?.split('??')[1] : curItem?.origin?.split('??')[0]}
                        </div>
                        <div className={'fs-14 color-gray-2'}><span
                            className={'color-gray-4'}>物理特性：</span>{isEnglish ? curItem?.physical_properties?.split('??')[1] : curItem?.physical_properties?.split('??')[0]}
                        </div>
                        <div className={'fs-14 color-gray-2'}><span
                            className={'color-gray-4'}>使用特性：</span>{isEnglish ? curItem?.usage_features?.split('??')[1] : curItem?.usage_features?.split('??')[0]}
                        </div>
                        <div className={'fs-14 color-gray-2'}><span
                            className={'color-gray-4'}>使用场景或人群：</span>{isEnglish ? curItem?.applicable?.split('??')[1] : curItem?.applicable?.split('??')[0]}
                        </div>
                        <div className={'fs-14 color-gray-2'}><span
                            className={'color-gray-4'}>保养与清洗：</span>{isEnglish ? curItem?.maintainance?.split('??')[1] : curItem?.maintainance?.split('??')[0]}
                        </div>
                        <div className={'fs-14 color-gray-2'}><span
                            className={'color-gray-4'}>环保性：</span>{isEnglish ? curItem?.sustainability?.split('??')[1] : curItem?.sustainability?.split('??')[0]}
                        </div>
                        <div className={'flex gap-8 items-center'}>
                            {curItem?.types?.map((typeItm,typeIdx) => <div key={typeIdx} className={'px-12 py-4 fs-12 color-gray-3 border radius-4'}>{isEnglish ? typeItm?.split('??')[1] : typeItm?.split('??')[0]}</div>)}
                        </div>
                        <LandTable
                            titleData={[
                                {title:'优点',value:'advantages'},
                                {title:'缺点',value:'disadvantages'}
                            ]}
                            data={[
                                {col1:isEnglish ? curItem?.advantages?.split('??')[1] : curItem?.advantages?.split('??')[0],col2:isEnglish ? curItem?.disadvantages?.split('??')[1] : curItem?.disadvantages?.split('??')[0]}
                            ]}
                        />
                        <div className={'flex justify-between items-center'}>
                            {curItem.crochet_size && <div className={'flex gap-8 items-center fs-12 color-gray-2 mt-12'}>
                                <IconCrochet fill={'var(--color-bg-1)'}/>
                                {curItem.crochet_size}
                            </div>}
                            {curItem.knit_size && <div className={'flex gap-8 items-center fs-12 color-gray-2'}>
                                <IconKnit fill={'var(--color-bg-1)'}/>
                                {curItem.knit_size}
                            </div>}
                        </div>
                        <div
                            className={'fs-14 color-gray-4 mt-12'}>{isEnglish ? curItem?.details?.split('??')[1] : curItem?.details?.split('??')[0]}
                        </div>
                    </div>
                    <div className={'flex-1 flex both-center p-24'}>
                        <div className={'relative'}>
                            <svg className="radar-chart" width="300" height="300" viewBox="0 0 100 100">
                                <rect x={0} y={0} width={100} height={100} stroke={'var(--color-border-2)'}
                                      strokeWidth={1} fill={'none'}/>
                                <rect x={10} y={10} width={80} height={80} stroke={'var(--color-border-1)'}
                                      strokeWidth={1} fill={'none'}/>
                                <rect x={20} y={20} width={60} height={60} stroke={'var(--color-border-1)'}
                                      strokeWidth={1} fill={'none'}/>
                                <rect x={30} y={30} width={40} height={40} stroke={'var(--color-border-1)'}
                                      strokeWidth={1} fill={'none'}/>
                                <rect x={40} y={40} width={20} height={20} stroke={'var(--color-border-1)'}
                                      strokeWidth={1} fill={'none'}/>
                                <polygon
                                    points={`${50 - curItem.datas[0]},${50 - curItem.datas[0]} ${curItem.datas[1] + 50},${50 - curItem.datas[1]} ${curItem.datas[2] + 50},${curItem.datas[2] + 50} ${50 - curItem.datas[3]},${curItem.datas[3] + 50} ${50 - curItem.datas[0]},${50 - curItem.datas[0]}`}
                                    fill="var(--color-primary-2)"
                                    strokeLinejoin={'round'}
                                    opacity={0.5}
                                />
                                <rect x={50 - curItem.datas[0] - 3} y={50 - curItem.datas[0] - 3} width={6} height={6}
                                      rx={4} fill={'var(--color-primary-6)'}/>
                                <rect x={curItem.datas[1] + 50 - 3} y={50 - curItem.datas[1] - 3} width={6} height={6}
                                      rx={4} fill={'var(--color-primary-6)'}/>
                                <rect x={curItem.datas[2] + 50 - 3} y={curItem.datas[2] + 50 - 3} width={6} height={6}
                                      rx={4} fill={'var(--color-primary-6)'}/>
                                <rect x={50 - curItem.datas[3] - 3} y={50 + curItem.datas[3] - 3} width={6} height={6}
                                      rx={4} fill={'var(--color-primary-6)'}/>
                            </svg>
                            <div className={'absolute fs-14 color-gray-3 no-wrap'}
                                 style={{right: '100%', bottom: '100%'}}>价格友好
                            </div>
                            <div className={'absolute fs-14 color-gray-3 no-wrap'}
                                 style={{left: '100%', bottom: '100%'}}>新手友好
                            </div>
                            <div className={'absolute fs-14 color-gray-3 no-wrap'}
                                 style={{left: '100%', top: '100%'}}>环保性
                            </div>
                            <div className={'absolute fs-14 color-gray-3 no-wrap'}
                                 style={{right: '100%', top: '100%'}}>使用频率
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </StyledCourseInnerPage>
}

export const StyledCourseInnerPage = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 1025;

    .content {
        max-width: 1200px;
        margin-inline: auto;
    }
    @media (max-width: 800px) {
        .details{
            flex-direction: column-reverse;
            gap: 32px;
        }
    }
`
export default CourseWire;
