import styled from "styled-components";
import colors from "../../utils/style/colors";

//change name into stack
//Put .NET Stcak
const SkillH3 = styled.h3`
    margin: 1rem auto;
`
const SkillContainer = styled.div`
background: ${colors.primaryWhite};
  color: ${colors.primaryBlue}
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

    return(
        <SkillContainer key={skill.title}>
            <SkillH3>
             {skill.title}
            </SkillH3>
            <ul>
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