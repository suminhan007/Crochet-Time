import React from "react";
import styled from "styled-components";

type Props = {
    item?:any;
    isEnglish?: boolean;
}
const CourseHomeBook:React.FC<Props> = ({
                                            item,
    isEnglish,
                                        }) => <StyledHomeListItem
        className={'relative flex justify-end cursor-pointer'}
        // onMouseEnter={()=>setOpen(true)}
        // onMouseLeave={()=>setOpen(false)}
        isEnglish={isEnglish}
    >
        <div className={'relative height-100'} style={{width: '200px'}}>
            {/*封面*/}
            <div className={'cover absolute top-0 left-0 width-100 height-100'}>
                <div className={'cover-content absolute width-100 height-100 top-0 left-0'}
                     style={{backgroundColor: 'var(--color-primary-6)', opacity: 0.2}}></div>
                <div className={'cover-text px-12 text-center flex column gap-12 items-center'} style={{color: 'var(--color-primary-6)'}}>
                    <div className={'cover-title fw-500'}>{isEnglish?item.title_en:item.title}</div>
                    {item?.desc && <div className={'cover-desc flex justify-end fs-12'}
                                        style={{color: 'var(--color-primary-6)', opacity: 0.5}}>{isEnglish?item?.desc_en:item?.desc}</div>}
                </div>
                <div className={'cover-left absolute top-0 left-0 height-100'}
                     style={{backgroundColor: 'var(--color-primary-6)', opacity: 0.2}}></div>
            </div>
            {/*内页*/}
            <div className={'inner-page right absolute left-0 flex column gap-12 items-center p-24 border-box bg-white'}>
                <div className={'inner-details color-gray-3 overflow-auto'}>{isEnglish?item?.details_en:item.details}</div>
                {item.href&&<a className={'flex both-center px-12 fs-14 cursor-pointer no-wrap'} style={{backgroundColor: 'var(--color-primary-6)'}}
                               href={item.href} target={item.target ?? '_self'}>{isEnglish ?'check the details':'查看详情'}</a>}
            </div>
            {/*背后封面*/}
            <div className={'cover-back absolute left-0 top-0 width-100 height-100'}
                 style={{backgroundColor: 'var(--color-primary-6)', opacity: 0.2}}>
            </div>
            <div className={'cover-back-left absolute top-0 left-0 height-100'}
                 style={{backgroundColor: 'var(--color-primary-6)', opacity: 0.2}}></div>
        </div>
    </StyledHomeListItem>
const StyledHomeListItem = styled.div<{
    color?: string;
    isEnglish?: boolean;
}>`
  width: 200px;
  height: 240px;
  border: ${props => `2px solid ${props.color}`};
  transition: width 800ms ease-in-out;
  user-select: none;

  .cover {
    top: 0;
    transition: transform 800ms ease-in-out;
    transform-origin: left center;
    z-index: 1;
    .cover-content{
      transition: border-radius 800ms ease-in-out;
      border-radius: 4px 13px 13px 4px;
      overflow: hidden;
    }

    .cover-text {
      margin-left: auto;
      width: 92%;
      margin-top: 20%;
    }
    .cover-title{
      font-size: ${props => props.isEnglish ? '18px':'20px'};
    }
  }
  .cover  .cover-left, 
  .cover-back-left{
    width: 10%;
    border-radius: 4px 0 0 4px;
    transition: border-radius 800ms ease-in-out;
    pointer-events: none;
  }
  .inner-page{
    top: 2px;
    width: calc(100% - 2px);
    height: calc(100% - 4px);
    border-radius: 0 12px 12px 0;
    z-index: 0;
    .inner-details{
      text-indent: 2em;
        font-size: ${props => props.isEnglish ? '12px':'14px'};
      line-height: 1.5em;
    }
    a{
      appearance: none;
      border: none;
      outline: none;
      width: fit-content;
      height: 28px;
      margin-top: auto;
      color: white;
      border-radius: 4px;
      transition: transform .2s linear;
      &:hover{
        transform: scale(1.1);
      }
    }
    &::before{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 12px;
      background-color: white;
      transition: opacity 600ms ease-in-out;
      backdrop-filter: blur(4px);
      pointer-events: none;
    }
  }
  .cover-back{
    transition: border-radius 800ms ease-in-out;
    border-radius: 4px 13px 13px 4px;
    z-index: -2;
    pointer-events: none;
}
  .cover-back-left{
    z-index: -2;
    pointer-events: none;
  }
  &:hover{
    width: 400px;
    .cover{
      transform: perspective(1000px) rotateY(-180deg);
    }
    .cover-content,
    .cover-back{
      border-radius: 0 16px 16px 0;
    }
    .cover .cover-left,
    .cover-back-left{
      border-radius: 0;
    }
    .inner-page::before{
      opacity: 0;
      transition-delay: 200ms;
    }
  }
`
export default CourseHomeBook;
