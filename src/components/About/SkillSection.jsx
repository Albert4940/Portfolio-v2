import styled from "styled-components"
import GridStyle from "../../utils/style/GridStyle"
import Skill from "./Skill";
//change into ListSkill
import { skills } from "../../data";
import { useScreenSize } from "../../utils/hooks";

const SkillSectionConatainer = styled.div`
    margin: 0 6rem;
`
const SkillH2 = styled.h2`
    margin: 6rem auto;
`

const SkillGrid = GridStyle();

const SkillSection = () => {
    const {isDeviceMobile} = useScreenSize()
    return(
        <SkillSectionConatainer>
            <SkillH2>
                Skills
            </SkillH2>
            <SkillGrid isDeviceMobile={isDeviceMobile}>
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