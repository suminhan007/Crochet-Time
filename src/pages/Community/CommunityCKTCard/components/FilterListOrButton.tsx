import styled from "styled-components";
import {LandButton, LandCheckBox, LandDropdown} from "@suminhan/land-design";

type Props = {

}
const FilterListOrButton:React.FC<Props> = ({

}) => {
    return <StyledFilterListOrButton>
            <LandCheckBox className={'filter-list'}/>
        <LandDropdown
            toggle={<LandButton>分类</LandButton>}
        />
    </StyledFilterListOrButton>
}
const StyledFilterListOrButton = styled.div`
    .land-dropdown-toggle {
        display: none;
    }
    @media screen and (max-width: 767px){
        .land-dropdown-toggle {
            display: block;
        } 
        .filter-list{
            display: none;
        }
    }
`
export default FilterListOrButton;
