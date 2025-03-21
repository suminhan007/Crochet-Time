import React, {Fragment, useEffect, useMemo, useState} from "react";
import SubmitButton from "../components/SubmitButton.tsx";
import styled from "styled-components";
import {Icon, LandButton, LandDivider, LandInput,  LandMessage} from "@suminhan/land-design";
import supabase from "../../../../utils/supabse.ts";

type Props = {
    isEnglish?: boolean;
}
const WorktopPattern:React.FC<Props> = ({
                                            isEnglish
                                        }) => {
    const [toast, setToast] = useState<boolean>(false);
    const [toastText, setToastText] = useState<string>("");

    const handleShowToast = (show: boolean, text: string) => {
        setToastText(text);
        setToast(show);
        const timer = setTimeout(() => {
            setToast(false);
            clearTimeout(timer);
        }, 1000);
    };
    const initData = [
        {id:'1',title:'第 1 部分',values:''}
    ]
    const [data,setData] = useState(initData);
    const projectId = useMemo(() => window.location.hash?.includes('project_id') ? window.location.hash.split('?project_id=')[1]:undefined,[window.location])
    const getData = async () => {
        const {data,error} = await supabase.from('CKTStudioTask').select().eq('id',projectId).single();
        if(error) {
            throw error;
        }else{
            if(data.data.length > 0){
                setData(data.data);
            }else{
                setData(initData)
            }
        }
    }
    useEffect(() => {
        getData()
        console.log('getData')
    }, []);
    const [cur, setCur] = useState('1');
    const curItem = useMemo(() => data?.filter(i=>i.id===cur)[0], [data,cur]);
    const addPartDisabled = useMemo(() => !data[data?.length-1].values, [data]);
    const handleAddPart = () => {
        if(addPartDisabled) return;
        const newData = [...data,{id:`${data?.length+1}`,title:`第 ${data?.length+1} 部分`,values: ''}]
        setData(newData);
        setCur(`${data?.length+1}`);
    }
    const handleInputChange = (val:string,e:any)=>{
        e.stopPropagation();
        const newData = data?.map((i) => i.id===cur ? Object.assign(i,{values: val}):i);
        setData(newData);
    }
    const [saving, setSaving] = useState(false);
    const saveDisabled = useMemo(() => saving || !data?.some(i=>i.values),[saving,data])
    const handleSave = async () => {
        setSaving(true)
            const res = await supabase.from('CKTStudioTask').update({
                edit_time: Date.now(),
                data: data
            }).eq('id',projectId)
            if(res.error){setSaving(false)}else{
                getData();
                handleShowToast(true, '保存成功');
                setSaving(false)
            }
    }
    const [titleInputId,setTitleInputId] = useState('')
    const handleTitleChange = async(val:string) =>{
        if(!val||data?.filter(i=>i.id===titleInputId)[0].title === val)return
        const newData = data?.map(i=>i.id===titleInputId ? Object.assign(i,{title: val}) : i);
        setData(newData);
    }
    const lines = useMemo(() => curItem?.values.split('\n').length, [curItem?.values]);
    return <>
        <div className="relative flex p-24 width-100 height-100 bg-gray border-box">
            <div className={'flex column width-100 bg-white radius-12 p-24'}>
                <div className={'flex-1 height-1 flex column p-12 fs-14 color-gray-2 bg-gray radius-8'}>
                    <div className={'flex items-center gap-8'}>
                        {data?.map((headItem,headIndex) => <Fragment key={headIndex}>
                            {headIndex>0 && <LandDivider direction={'column'} margin={8} lang={'16px'}/>}
                            <div
                                className={`relative fs-16 fw-600 ${cur === headItem.id ? 'color-gray-2':'color-gray-4'} cursor-pointer`}
                                onClick={() => setCur(headItem.id)}
                                onDoubleClick={(e) => {
                                    e.stopPropagation();
                                    setTitleInputId(headItem.id)
                                }}
                            >
                                {headItem.title}
                                <div className={`absolute left-0 width-100 bg-gray transition ${titleInputId === headItem.id ? '':'opacity-0 events-none'}`} style={{top:'50%',transform:'translateY(-50%)'}}>
                                    <LandInput
                                        type={'transparent'}
                                        style={{fontSize:'16px'}}
                                        placeholder={headItem.title}
                                        onBlur={() => setTitleInputId((''))}
                                        onChange={handleTitleChange}
                                    />
                                </div>
                            </div>
                        </Fragment>)}
                        <LandButton size={'small'} type={'transparent'} disabled={addPartDisabled} icon={<Icon name={'add'} strokeWidth={3}/>} pop={addPartDisabled ? isEnglish ? 'New sections can be added after typing':'输入内容后可添加新部分':isEnglish?'Click to add new part':'点击添加新的部分'} onClick={handleAddPart}/>
                    </div>
                    <div className={'flex gap-8 mt-12 height-100'}>
                        <div className={'flex column fs-14 color-gray-4'}>
                            {Array.from({length: lines}).map((_i,idx) => <div>R{idx+1}: </div>)}
                        </div>
                        <StyledInput
                            className={'pattern-line-input fs-14'}
                            placeholder={`请输入 ${curItem?.title} 的图解内容`}
                            value={curItem?.values}
                            onChange={e=>handleInputChange?.(e.target.value,e)}
                        />
                    </div>
                        </div>
                    </div>
        </div>
        <SubmitButton loading={saving} label={saving ? '': isEnglish?'Save Pattern':'保存图解'} disabled={saveDisabled} onClick={handleSave}/>
        {toast && <LandMessage show={toast} text={toastText} />}
    </>
}
const StyledInput = styled.textarea`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    resize: none;
    &:focus,
    &:focus-within,
    &:focus-visible,
    &:active{
        border: none;
        outline: none;
    }
`
export default WorktopPattern