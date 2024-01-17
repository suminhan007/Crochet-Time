import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Uploader from '../../components/Uploader'
import ImgColorPicke from '../../components/ImgColorPicke'

type Props = {

}
const ToolColorPicker:React.FC<Props> = ({

}) => {
    const [imgUrl, setImgUrl] = useState<string>('');
    const [colors, setColors] = useState<any>([]);
  return (
    <div>
        <StyleUploadBtn>
            <Uploader
                fileType='image/*'
                onUpload={(url) => setImgUrl(url)}
            />
        </StyleUploadBtn>
        <ImgColorPicke url={imgUrl} onChange={(colors) => setColors(colors)}/>
        <img src={imgUrl} className={`${imgUrl ? '' : 'opacity-0'}`} width='100%' alt="" />
        <div className='flex gap-12'>
        {
            colors?.map((item:any,index:number) =>
                <StyleColorItem 
                    key={index} 
                    className='StyleColorItem'
                    style={{background: 'rgba(' + item[0] + ')'}}
                ></StyleColorItem>
            )
        }
        </div>
    </div>
  )
}

const StyleUploadBtn = styled.div`
    
`

const StyleColorItem = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 10px;
`
export default ToolColorPicker;
