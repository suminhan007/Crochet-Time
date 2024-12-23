import {
  Icon,
  LandDivider,
} from "@suminhan/land-design";
import { useMemo } from "react";
import { DESIGN_HOME_FILTER_SELECT_TYPE_DATA } from "../../mock";
import styled from "styled-components";
import WorktopDraft from "./WorktopDraft";
import WorktopWool from "./WorktopWool";
import { useNavigate } from "react-router-dom";

type Props = {
};
const WorktopPages: React.FC<Props> = ({ }) => {
  const navigate = useNavigate();
  const type = useMemo(() => window.location.hash?.split('=')[1], [window.location]);
  const title = useMemo(() => DESIGN_HOME_FILTER_SELECT_TYPE_DATA.filter(i => i.value === type)[0]?.label, [type]);
  return (
    <StyledWorktop className="flex column">
      <div className="flex items-center border-bottom px-12 shrink-0" style={{ height: '64px' }}>
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/editor')}>
          <Icon name="arrow" className="rotate-90" />
          返回
        </div>
        <LandDivider direction="column" lang="40%" margin={24} />
        <div className="fs-16 fw-600">{title}</div>
      </div>
      <div className="flex-1 height-1">
        {type === 'draft' && <WorktopDraft />}
        {type === 'wool' && <WorktopWool />}
      </div>
    </StyledWorktop>
  );
};

const StyledWorktop = styled.div`
  width: 100vw;
  height: 100vh;
`


export default WorktopPages;
