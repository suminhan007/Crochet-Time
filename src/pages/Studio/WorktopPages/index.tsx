import {Icon, LandButton, LandDivider, LandInput} from "@suminhan/land-design";
import { useMemo, useState } from "react";
import styled from "styled-components";
import WorktopDraft from "./WorktopDraft";
import WorktopWool from "./WorktopWool";
import { useNavigate } from "react-router-dom";
import {CT_DESIGN_FILTER_SELECT_TYPE_DATA} from "../mock.ts";
import supabase from "../../../utils/supabse.ts";

type Props = {};
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

  const [projectName, setProjectName] = useState<string>();

  const handleSaveProject = async () => {
    const href = window.location.href;
      if(href.includes('project_id')){
        const projectId = href.split('project_id')[1];
          await supabase.from('CKTStudioTask').update({
              project_name: projectName,
              project_type: type,
              edit_time: Date.now(),
          }).eq('id',projectId)
      }else{
          // 新项目
          const res = await supabase.from('CKTStudioTask').insert([{
              project_name: projectName,
              project_type: type,
              edit_time: Date.now(),
          }])
          if(res.status < 300 && res.status >100){
              console.log('保存成功')
          }else{
              console.log('失败',res)
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
            value={projectName}
            onChange={(val) => setProjectName(val)}
          />
        </div>
          <LandButton type={'background'} status={'primary'} text={'保存作品'} icon={<Icon name={'save'}/>} className="ml-auto" onClick={handleSaveProject}/>
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
