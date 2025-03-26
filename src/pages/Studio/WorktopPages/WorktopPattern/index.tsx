import React, {Fragment, useCallback, useEffect, useMemo, useRef, useState} from "react";
import SubmitButton from "../components/SubmitButton.tsx";
import styled from "styled-components";
import {Icon, LandButton, LandDialog, LandDivider, LandInput, LandMessage, LandSwitch} from "@suminhan/land-design";
import supabase from "../../../../utils/supabse.ts";
import html2canvas from "html2canvas";

type Props = {
    isEnglish?: boolean;
    title?: string;
}
const WorktopPattern:React.FC<Props> = ({
                                            isEnglish,
                                            title
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
        {id:'1',title:'第 1 部分',values:'',nums: '',edited:false},
    ]
    const [data,setData] = useState<{id:string,title:string,values:string,nums:string,edited:boolean}[]>(initData);
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
    const [cur, setCur] = useState('1');
    const curItem = useMemo(() => data?.filter(i=>i.id===cur)[0], [data,cur]);
    const addPartDisabled = useMemo(() => !data[data?.length-1].values, [data]);
    const handleAddPart = () => {
        if(addPartDisabled) return;
        const newData = [...data,{id:`${data?.length+1}`,title:`第 ${data?.length+1} 部分`,values: '',nums:'',edited:false}];
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
    const [showPreviewDialog,setShowPreviewDialog] = useState(false);
    const [saveLoading,setSaveLoading] = useState(false);
    const previewContentRef = useRef<HTMLDivElement>(null);
    async function saveImageToDatabase(imagePath:any) {
        const {data:{user}} = await supabase.auth.getUser();
        if(user){
            const { data, error } = await supabase
                .from('patternCard') // 替换为你的素材库表名称
                .insert([{
                    img_url: imagePath,
                    user_id: user.id,
                    name:title
                }]);

            if (error) {
                console.error('Error saving image to database:', error);
                setSaveLoading(false);
            } else {
                console.log('Image saved to database:', data);
                handleShowToast(true,'保存成功，前往仓库查看');
                setSaveLoading(false);
            }
        }
    }
    async function uploadImageToSupabase(imageData:any) {
        const blob = await fetch(imageData).then(res => res.blob());
        const fileName = `pattern-${Date.now()}.png`;
        const { data, error } = await supabase
            .storage
            .from('CroKnitTime/patternCards') // 替换为你的存储桶名称
            .upload(fileName, blob);

        if (error) {
            console.error('Error uploading image:', error);
            setSaveLoading(false)
        } else {
            saveImageToDatabase(data.path); // 将图片路径保存到素材库表中
        }
    }

    const handleSavePatternImg = async  () => {
        setSaveLoading(true)
        if(!previewContentRef.current) return;
        const {data:{user}} = await supabase.auth.getUser();
        if(!user) return;
        html2canvas(previewContentRef.current,{
            scale: 3,
            useCORS: true,
        }).then(canvas => {
            const image = canvas.toDataURL('image/png');
            uploadImageToSupabase(image);
        });
    }
    function calculateExpression(input:string) {
        // 定义字母对应的值
        const valueMap = {
            'x': 1, 'X': 1,
            'v': 2, 'V': 2,
            'w': 3, 'W': 3,
            'a': 1, 'A': 1,
            'ch': 1, 'CH': 1
        };

        // 解析单个表达式（数字+字母或字母组合）
        function parseSingle(expr:string) {
            // 如果是数字，直接返回
            if (/^\d+$/.test(expr)) {
                return parseInt(expr, 10);
            }

            // 如果是字母或字母组合，返回对应的值
            if (valueMap[expr]) {
                return valueMap[expr];
            }

            // 如果是其他字母，返回 1
            if (/^[a-zA-Z]+$/.test(expr)) {
                return 1;
            }

            // 如果是数字+字母的组合
            const match = expr.match(/^(\d+)([a-zA-Z]+)$/);
            if (match) {
                const num = parseInt(match[1], 10);
                const letter = match[2];
                const value = valueMap[letter] || 1; // 如果字母不在映射中，默认为 1
                return num * value;
            }

            // 如果无法解析，返回 0
            return 0;
        }

        // 解析整个表达式
        function parse(expr:string) {
            // 去掉空格
            expr = expr.replace(/\s+/g, '');

            // 如果表达式是括号内的内容，递归解析
            if (expr.startsWith('(') && expr.endsWith(')')) {
                return parse(expr.slice(1, -1));
            }

            // 如果表达式包含括号，先解析括号内的内容
            const bracketMatch = expr.match(/\(([^()]+)\)/);
            if (bracketMatch) {
                const insideBracket = bracketMatch[1];
                const outsideBefore = expr.slice(0, bracketMatch.index);
                const outsideAfter = expr.slice(bracketMatch.index + bracketMatch[0].length);
                return parse(outsideBefore + parse(insideBracket) + outsideAfter);
            }

            // 如果表达式是多个部分的组合（如 "2X3V"），按顺序解析并相加
            const parts = expr.split(/(\d+[a-zA-Z]+|[a-zA-Z]+)/).filter(Boolean);
            return parts.reduce((sum:string, part:string) => sum + parseSingle(part), 0);
        }

        // 将输入字符串按空格分割成多个表达式，分别解析后相加
        const expressions = input.split(/\s+/);
        return expressions.reduce((sum, expr) => sum + parse(expr), 0);
    }

    const [showStich,setShowStich] = useState(false);
    const getInitNums = useCallback(() => {
        return curItem?.values?.split('\n').map(item => calculateExpression(item)).join('\n');
    },[cur])
    const [curLine,setCurLine] = useState(-1);
    const updateLineNumber = (e:any) =>{
        const text = e.target.value;
        const cursorPos = e.target.selectionStart;

        // 获取光标前的文本，并按换行符分割成行数组
        const textBeforeCursor = text.substring(0, cursorPos);
        const lines = textBeforeCursor.split('\n');

        // 当前行号 = 行数组的长度
        setCurLine(lines.length-1);
    }
    useEffect(() => {
        if(curItem?.edited) return;
        const newData = data?.map(i =>i.id===cur ? Object.assign(i,{nums: getInitNums()}):i)
        setData(newData);
    }, [cur,showStich]);

    const [autoSave, setAutoSave] = useState(false);
    useEffect(() => {
        if(!autoSave) return;
        const saveTimer = setTimeout(() => {
            handleSave()
        }, 10000)
        return () => clearTimeout(saveTimer);
    }, [autoSave]);
    return <>
        <div className="relative flex px-24 pb-24 width-100 height-100 bg-gray border-box">
            <div className={'flex column width-100 bg-white radius-12 p-24'}>
                <div className={'flex-1 height-1 flex column p-12 fs-14 color-gray-2 bg-gray radius-8'}>
                    <div className={'flex items-center justify-between gap-8'}>
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
                        <LandSwitch
                            label={'显示针数'}
                            checkedLabel={'显示针数'}
                            className={'ml-auto'}
                            info={'开启后会自动计算每行针数，支持手动修改'}
                            popProps={{placement:'bottom',style:{maxWidth:'120px'}}}
                            onChange={() => setShowStich(!showStich)}
                        />
                    </div>
                    <div className={'relative flex gap-8 mt-12 height-100'}>
                        <div className={'flex column fs-14 color-gray-4'} style={{width: '40px'}}>
                            {Array.from({length: curItem?.values?.split('\n').length}).map((_i, idx) => <div>R{idx + 1}: </div>)}
                        </div>
                        <StyledInput
                            className={'pattern-line-input fs-14'}
                            placeholder={`请输入 ${curItem?.title} 的图解内容`}
                            value={curItem?.values}
                            onChange={e => handleInputChange?.(e.target.value, e)}
                        />
                        <div className={`flex ml-auto height-100 ${showStich ? '' : 'opacity-0 events-none'}`}>
                            <StyleNumInput
                                value={curItem.nums}
                                onFocus={updateLineNumber}
                                onClick={updateLineNumber}
                                onKeyDown={updateLineNumber}
                                onBlur={()=>setCurLine(-1)}
                                onChange={e=>{
                                const newData = data?.map((i) => i.id===cur ? Object.assign(i,{nums: e.target.value,edited:true}):i);
                                setData(newData);
                            }}/>
                        </div>
                        <div className={`absolute top-0 left-0 flex column events-none ${showStich ? '':'opacity-0'} transition`} style={{paddingLeft: '48px',width:'calc(100% - 72px)'}}>
                            {curItem.values?.split('\n').map((numItm,numIdx) => <div key={numIdx} className={'flex gap-24'}>
                                <div className={'opacity-0'}>{numItm}</div>
                                <div className={'flex-1 width-1 flex items-center gap-24 color-gray-4'}>
                                    <div className={'flex-1 width-1 border-dash'} style={{borderColor: numIdx === curLine ? 'var(--color-primary-6)':'',transform:'translateY(1px)'}}></div>

                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
                <div className={'mt-12 flex justify-end'}><LandButton onClick={() => setShowPreviewDialog(true)}>预览
                    保存</LandButton></div>
            </div>
        </div>
        <SubmitButton loading={saving} label={saving ? '' : isEnglish?'Save Pattern':'保存图解'} disabled={saveDisabled} onClick={handleSave}/>
        <LandSwitch checked={autoSave} onChange={()=>setAutoSave(!autoSave)} label={'自动保存'} checkedLabel={'自动保存'}/>
        {toast && <LandMessage show={toast} text={toastText} />}
        <LandDialog
            mask
            show={showPreviewDialog}
            onClose={()=>setShowPreviewDialog(false)}
            onSubmit={() => handleSavePatternImg()}
            submitLabel={saveLoading ? '保存中...':'保存到仓库'}
            bodyStyle={{maxHeight: '70vh',padding: '0'}}
            bodyClassName={'overflow-auto'}
        >
           <div ref={previewContentRef} className={'flex column gap-12 p-24'}>
               {data.map((itm) => <div key={itm.id} className={'flex column gap-4'}>
                   <div className={'fw-600 fs-14 color-gray-2'}>{itm.title}</div>
                   <div className={'relative flex gap-12 fs-14'}>
                       <div className={'color-gray-4'}>
                           {Array.from({length: itm?.values.split('\n').length}).map((_i, idx1) => <div
                               key={idx1}>R{idx1 + 1}</div>)}
                       </div>
                       <div className={'flex column color-gray-2'}>
                           {itm.values?.split('\n').map((itm2, idx2) => <div key={idx2}>{itm2}</div>)}
                       </div>
                       <div className={'ml-auto fs-14 color-gray-4'}>{itm.nums?.split('\n').map((itm3, idx3) => <div key={idx3}>{itm3}</div>)}</div>
                       <div className={'absolute top-0 left-0 flex column pr-12 width-100 events-none'}
                            style={{paddingLeft: '24px',paddingRight: '32px'}}>
                           {itm.values?.split('\n').map((numItm, numIdx) => <div key={numIdx}
                                                                                     className={'flex gap-24'}>
                               <div className={'opacity-0'}>{numItm}</div>
                               <div className={'flex-1 width-1 flex items-center gap-24 color-gray-4'}>
                                   <div className={'flex-1 width-1 border-dash'}
                                        style={{transform: 'translateY(1px)'}}></div>
                               </div>
                           </div>)}
                       </div>
                   </div>
               </div>)}
           </div>
        </LandDialog>
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
    &:active {
        border: none;
        outline: none;
    }
`
const StyleNumInput = styled.textarea`
    width: 4em;
    font-size: 14px;
    line-height: 22px;
    height: 100%;
    color: var(--color-text-5);
    appearance: none;
    border: none;
    background-color: transparent;
    outline: none;
    resize: none;
    &:focus,
    &:focus-within{
        border: none;
        outline: none;
        background-color: transparent;
    }
`
export default WorktopPattern