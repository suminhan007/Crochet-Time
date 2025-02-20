import {Icon, LandButton, LandDivider, LandInput} from "@suminhan/land-design";
import React, {useEffect, useMemo, useState} from "react";
import styled from "styled-components";
import WorktopDraft from "./WorktopDraft";
import WorktopWool from "./WorktopWool";
import { useNavigate } from "react-router-dom";
import {CT_DESIGN_FILTER_SELECT_TYPE_DATA} from "../mock.ts";
import supabase from "../../../utils/supabse.ts";

type Props = {isEnglish?:boolean};
const WorktopPages: React.FC<Props> = ({}) => {
    // 自动拉取已保存数据
    const [lastestData,setLastestData] = useState<{id:string,project_name:string,project_type:string,edit_time:string,data:any[]}>();
    const getProjectDetailData = async () => {
        if(!projectId) return;
        const {data,error} = await supabase.from('CKTStudioTask').select().eq('id',projectId).single();
        if(error) {
            throw error;
        }else{
            setLastestData(data);
        }
    }
    useEffect(() => {
        getProjectDetailData();
    }, []);
  const navigate = useNavigate();
  const type = useMemo(
    () => window.location.hash.includes('project_id') ? window.location.hash?.split("studio/worktop?type=")[1].split('?project_id')[0] :window.location.hash?.split("studio/worktop?type=")[1],
    [window.location]
  );
  const title = useMemo(
    () =>
        CT_DESIGN_FILTER_SELECT_TYPE_DATA.filter((i) => i.value === type)[0]
        ?.label,
    [type]
  );
  const projectId = useMemo(() => window.location.hash?.includes('project_id') ? window.location.hash.split('?project_id=')[1]:undefined,[window.location])
  const showSaveButton = useMemo(() => type === 'draft'||type === 'wire',[type])

    // 修改文件名
  const [projectName, setProjectName] = useState<string>('');
    const [showNameInput, setShowNameInput] = useState<boolean>(false);
    useEffect(() => {
        if(lastestData?.project_name)
        setProjectName(lastestData?.project_name)
    }, [lastestData?.project_name]);
    // 保存配置数据: 具体数据在对应组件中操作
  const handleSaveProjectOption = async () => {
    const href = window.location.href;
          if(href.includes('project_id')){
              const projectId = href.split('project_id=')[1];
              const res = await supabase.from('CKTStudioTask').update({
                  project_name: projectName,
                  project_type: type,
                  edit_time: `${Date.now()}`,
              }).eq('id',projectId)
              if(res.error){}else{
                  setShowNameInput(false);
                  getProjectDetailData();
              }
          }
  }

  return (
    <StyledWorktop className="fixed left-0 top-0 flex column">
      <div
        className="flex items-center border-bottom px-12 bg-white shrink-0"
        style={{ height: "64px" }}
      >
        <div
          className="flex items-center cursosr-pointer fs-12 cursor-pointer"
          onClick={() => navigate('/type=studio')}
        >
          <Icon name="arrow" className="rotate-90" />
          返回
        </div>
        <LandDivider direction="column" lang="40%" margin={24} />
        <div className="flex items-center fs-16 fw-600">
          {title}：
            <div className={'relative fs-14 fw-600 flex items-center'} onClick={() => setShowNameInput(true)} style={{height:'36px'}}>
                {lastestData?.project_name}
               <div className={`absolute left-0 top-0 flex items-center gap-8 ${showNameInput ? '':'opacity-0 events-none'} transition`}>
                   <LandInput
                       width={120}
                       type="background"
                       placeholder={lastestData?.project_name||'Untitled'}
                       value={projectName}
                       onChange={(val) => {
                           setProjectName(val);
                       }}
                   />
                   <LandButton type={'text'} size={'small'} icon={<Icon name={'error'} strokeWidth={0}/>} onClick={(e) => {
                       e.stopPropagation();setShowNameInput(false); lastestData?.project_name ? setProjectName(lastestData?.project_name):setProjectName('')
                   }} />
                   <LandButton type={'text'} size={'small'} icon={<Icon name={'check'} strokeWidth={0}/>} onClick={e=>{e.stopPropagation();handleSaveProjectOption?.()}} className={`${(projectName !== lastestData?.project_name) ? '':'opacity-0 events-none'} transition`}/>
               </div>
            </div>
        </div>
          {showSaveButton && <LandButton type={'background'} status={'primary'} text={'保存作品'} icon={<Icon name={'save'}/>}
                       className="ml-auto" onClick={handleSaveProjectOption}/>}
      </div>
      <div className="flex-1 height-1">
        {type === "draft" && <WorktopDraft />}
        {type === "wool" && <WorktopWool />}
      </div>
    </StyledWorktop>
  );
};

const StyledWorktop = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1025;
`;

export default WorktopPages;
