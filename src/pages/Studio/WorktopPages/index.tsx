import {Icon, LandButton, LandDivider, LandInput, LandMessage} from "@suminhan/land-design";
import React, {useEffect, useMemo, useState} from "react";
import styled from "styled-components";
import WorktopDraft from "./WorktopDraft";
import WorktopWool from "./WorktopWool";
import { useNavigate } from "react-router-dom";
import {CT_DESIGN_FILTER_SELECT_TYPE_DATA} from "../mock.ts";
import supabase from "../../../utils/supabse.ts";

type Props = {isEnglish?:boolean};
const WorktopPages: React.FC<Props> = ({}) => {
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
  const showSaveButton = useMemo(() => type === 'wire',[type])

  const [projectName, setProjectName] = useState<string>();

    //提示信息
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
    const [projectData,setProjectData] = useState<any[]>([]);
  const handleSaveProject = async () => {
      const {data:{user}} = await supabase.auth.getUser();
    const href = window.location.href;
      if(href.includes('project_id')){
        const projectId = href.split('project_id')[1];
          await supabase.from('CKTStudioTask').update({
              project_name: projectName,
              project_type: type,
              edit_time: `${Date.now()}`,
              data: projectData
          }).eq('id',projectId)
      }else{
          // 新项目
          const res = await supabase.from('CKTStudioTask').insert([{
              project_name: projectName,
              project_type: type,
              edit_time: `${Date.now()}`,
              data: projectData
          }]).eq('user_id', user?.id)
          if(res.status < 300 && res.status >100){
              handleShowToast(true,'保存成功')
          }else{
              handleShowToast(true,'保存失败')
          }
      }
  }
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
  return (
    <StyledWorktop className="fixed left-0 top-0 flex column">
      <div
        className="flex items-center border-bottom px-12 bg-white shrink-0"
        style={{ height: "64px" }}
      >
        <div
          className="flex items-center cursosr-pointer fs-14 cursor-pointer"
          onClick={() => navigate('/type=studio')}
        >
          <Icon name="arrow" className="rotate-90" />
          返回
        </div>
        <LandDivider direction="column" lang="40%" margin={24} />
        <div className="flex items-center fs-16 fw-600">
          {title}：
          <LandInput
            type="transparent"
            placeholder={lastestData?.project_name||'Untitled'}
            value={projectName}
            onChange={(val) => {
                setProjectName(val);
                handleSaveProject();
            }}
          />
        </div>
          {showSaveButton && <LandButton type={'background'} status={'primary'} text={'保存作品'} icon={<Icon name={'save'}/>}
                       className="ml-auto" onClick={handleSaveProject}/>}
      </div>
      <div className="flex-1 height-1">
        {type === "draft" && <WorktopDraft data={lastestData?.data} onDrawEnd={data=> {
            setProjectData(data);
            handleSaveProject?.()
        }} />}
        {type === "wool" && <WorktopWool />}
      </div>
        {toast && <LandMessage show={toast} text={toastText} />}
    </StyledWorktop>
  );
};

const StyledWorktop = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1025;
`;

export default WorktopPages;
