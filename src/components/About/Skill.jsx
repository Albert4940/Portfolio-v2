import styled from "styled-components";
import { useColor } from "../../utils/hooks";

//change name into stack
//Put .NET Stcak
const SkillH3 = styled.h3`
    margin: 1rem auto;
`
const SkillContainer = styled.div`
background: ${({colors}) => colors ? colors.secondary : ""};
  padding: 2rem;
  border-radius: 5px;
  text-align: center;
  transition: transform 0.3s ease-out;
  &:hover{
    transform: translateY(-5px);
  }
`
const LIStyle = {
display: "flex",
alignItems: "center",
justifyContent:"center",
margin:"10px auto",

}

const Skill = ({skill}) => {
    const colors = useColor();
    return(
        <SkillContainer key={skill.title} colors={colors}>
            <SkillH3>
             {skill.title}
            </SkillH3>
            <ul >
              {
                skill.technologies.map((item,index) => (
                  <li key={index} style={LIStyle}>{item.icon}{item.name}</li>
                ))
              }
            </ul>
        </SkillContainer>
    )
}
export default Skill;