import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Uploader from '../../components/Uploader'
import ImgColorPicker from '../../components/ImgColorPicker'
import PopOver from '../../components/PopOver'
import Button from '../../components/Button'
import Toast from '../../components/Toast'

type Props = {

}
const ToolColorPicker: React.FC<Props> = ({

}) => {
    const [imgUrl, setImgUrl] = useState<string>('');
    const [colors, setColors] = useState<any>([]);
    const convertRgbToHex = (rgb: string) => {
        let arr: string[] = rgb.slice(0, rgb.length).split(",");
        console.log(rgb, arr);

        let hexColor: string = '#';
        for (let i = 0; i < arr.length; i++) {
            let t = Number(arr[i]).toString(16);
            if (t == '0') {
                t = t + '0'
            }
            hexColor += t;
        }
        return hexColor;
    }
    const [colorArr, setColorArr] = useState<any>([]);
    useEffect(() => {
        let arr: { id: number, value: string }[] = []
        colors?.map((item: any, index: number) => {
            arr.push({
                id: index + 1,
                value: convertRgbToHex(item[0]),
            })
        })
        setColorArr(arr);
        console.log(colorArr);

    }, [colors])
    const handleChangeColor = (e: any, id: number) => {
        colorArr.splice(id - 1, 1, { id: id, value: e.target.value });
        setColorArr(colorArr);
    }

    //提示信息
    const [toast, setToast] = useState<boolean>(false);
    const [toastText, setToastText] = useState<string>('');
    const handleShowToast = (show: boolean, text: string) => {
        setToastText(text);
        setToast(show);
        const timer = setTimeout(() => {
            setToast(false);
            clearTimeout(timer);
        }, 1000);
    }
    return (
        <StyleColorPickerWrap className='StyleColorPickerWrap flex column items-center'>
            <StyleUploadBtn className='StyleUploadBtn hover-translate-y-4 transition mt-48'>
                <Uploader
                    fileType='image/*'
                    component={<div className='color-gray-3'>上传图片</div>}
                    onUpload={(url) => setImgUrl(url)}
                />
            </StyleUploadBtn>
            <img src={imgUrl} className='radius-12 mt-32 border' width='100%' alt="" />
            {colorArr && <div className='flex justify-around items-center mt-16 px-24 py-12 bg-gray radius-12 width-100' >
                {
                    colorArr?.map((item: any) =>
                        <div className='flex column both-center gap-4'>
                            <StyleColorItem
                                key={item.id}
                                className='StyleColorItem relative width-100 pointer'
                            >
                                <input type="color" value={item.value} onChange={(e) => handleChangeColor(e, item.id)} />
                            </StyleColorItem>
                            <div className='fs-12 color-gray-2' onClick={(e: any) => navigator.clipboard.writeText(e.target?.innerText)}>{item.value}</div>
                        </div>
                    )
                }
                {
                    colorArr && <StyleAddColorBtn
                        className='StyleAddColorBtn flex both-center relative border radius-50 pointer'
                    >
                        <div className='absolute'>+</div>
                        <input type="color" className='opacity-0 pointer' onChange={(e) => setColorArr([...colorArr, { id: colorArr.length + 1, value: e.target.value }])} />
                    </StyleAddColorBtn>
                }
            </div>}

            <ImgColorPicker
                className='mt-16'
                url={imgUrl}
                colorLength={6}
                onChange={(colors) => imgUrl ? setColors(colors) : handleShowToast(true, '请先上传图片～')}
            />
            <Toast text={toastText} show={toast} />
        </StyleColorPickerWrap>
    )
}

const StyleColorPickerWrap = styled.div`
    width: calc(100% - 48px);
    max-width: 960px;
    min-height: 100vh;
    margin: 0 auto;
`

const StyleUploadBtn = styled.div`
    width: 160px;
`
const StyleColorItem = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 8px;
    &.color{
        border-radius: 24px;
    }
    &:hover{
        .StylePop{
            opacity: 1;
        }
    }
`

const StyleAddColorBtn = styled.div`
    width: 48px;
    height: 48px;
`
export default ToolColorPicker;
