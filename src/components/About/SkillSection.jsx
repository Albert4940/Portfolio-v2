import styled from "styled-components"
import GridStyle from "../../utils/style/GridStyle"
import Skill from "./Skill";
import colors from "../../utils/style/colors"
//change into ListSkill
import { skills } from "../../utils/data/skills";

const SkillSectionConatainer = styled.div`
    margin: 0 6rem;
    color:${colors.primaryBlue};
`
const SkillH2 = styled.h2`
    margin: 6rem auto;
`

const SkillGrid = GridStyle();

const SkillSection = () => {
    return(
        <SkillSectionConatainer>
            <SkillH2>
                Skills
            </SkillH2>
            <SkillGrid>
                {
                    skills.map((item, index) => 
                        (<Skill key={`${item.name}-${index}`} skill={item}/>)
                    )
                }
            </SkillGrid>
        </SkillSectionConatainer>
    )
}

export default SkillSection;