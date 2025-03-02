import React, {Fragment, useCallback, useEffect, useMemo, useState} from "react";
import SubmitButton from "../components/SubmitButton.tsx";
import styled from "styled-components";
import {Icon, LandButton, LandDivider, LandInput, LandPop} from "@suminhan/land-design";
import supabase from "../../../../utils/supabse.ts";

type Props = {
    isEnglish?: boolean;
}
const WorktopPattern:React.FC<Props> = ({
                                            isEnglish
                                        }) => {
    const initData = [
        {id:'1',title:'第 1 部分',values: [{id:'1-1',value:''}]}
    ]
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
    }, []);
    const [data,setData] = useState(initData);
    const [cur, setCur] = useState('1');
    const curItem = useMemo(() => data?.filter(i=>i.id===cur)[0], [data,cur]);
    const addPartDisabled = useMemo(() => !data[data?.length-1].values?.some(i=>i.value), [data]);
    const handleAddPart = () => {
        if(addPartDisabled) return;
        const newData = [...data,{id:`${data?.length+1}`,title:`第 ${data?.length+1} 部分`,values: [{id:`${data?.length+1}-1`,value:''}]}]
        setData(newData);
        setCur(`${data?.length+1}`);
    }
    const handleInputChange = useCallback((val:string,id:string)=>{
        const newData = data?.map((i) => i.id===cur ? Object.assign(i,{values:i.values?.map((j) => j.id===id ? Object.assign(j, {value:val}):j)}):i);
        setData(newData);
    },[cur])
    const [focusId, setFocusId] = useState('');
    const focusEmpty = useMemo(() => focusId ? !data?.filter(i=>i.id===cur)[0].values?.filter(j=>j.id===focusId)[0]?.value : true,[cur, focusId,data]);
    useEffect(() => {
        document.body.addEventListener('keydown', e => {
            if(!focusId || focusEmpty || focusId !== `${curItem.id}-${curItem?.values?.length}`) return;
            if(e.code === 'Enter'){
                const newData = data?.map(((i)=> cur===i.id ? Object.assign(i, {values: [...i.values, {id:`${curItem.id}-${curItem?.values?.length+1}`,value: ''}]}):i));
                setData(newData)
            }
        })
    })
    const saveDisabled = useMemo(() => !data?.some(i=>i.values?.some(j=>j.value)),[data])
    const handleSave = async () => {
            const res = await supabase.from('CKTStudioTask').update({
                edit_time: `${Date.now()}`,
                data: data
            }).eq('id',projectId)
            if(res.error){}else{
                getData();
            }
    }
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
                                onDoubleClick={(e) => e.stopPropagation()}
                            >
                                {headItem.title}
                                <div className={`absolute width-100 opacity-0 transition`} style={{left:'-12px',top:'50%',transform:'translateY(-50%)'}}>
                                    <LandInput width={'calc(100% + 24px)'} type={'background'} style={{fontSize:'16px'}} placeholder={headItem.title}/>
                                </div>
                            </div>
                        </Fragment>)}
                        <LandButton size={'small'} type={'transparent'} disabled={addPartDisabled} icon={<Icon name={'add'} strokeWidth={3}/>} pop={addPartDisabled ? isEnglish ? 'New sections can be added after typing':'输入内容后可添加新部分':isEnglish?'Click to add new part':'点击添加新的部分'} onClick={handleAddPart}/>
                    </div>
                    <div className={'flex column gap-8 mt-12'}>
                        {curItem?.values?.map((item: { id:string,value:string }, index:number) => <div key={index} className={'flex items-center gap-8 fs-14 color-gray-2'} >
                                <span className={'color-gray-4'}>R{index + 1}:</span>
                                <StyledInput
                                    placeholder={'请输入（输入内容后按回车键增加行）'}
                                    value={item.value}
                                    onFocus={() => setFocusId(item.id)}
                                    onBlur={() => setFocusId('')}
                                    onChange={e=>handleInputChange?.(e.target.value,item.id)}
                                />
                            </div>
                        )}
                    </div>
                        </div>
                    </div>
        </div>
        <SubmitButton label={isEnglish?'Save Pattern':'保存图解'} disabled={saveDisabled} onClick={handleSave}/>
    </>
}
const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    &:focus,
    &:focus-within,
    &:focus-visible,
    &:active{
        border: none;
        outline: none;
    }
`
export default WorktopPattern