import { useColor } from "../../utils/hooks";
import ResumeButton from "../ResumeButton";
import AboutMe from "./AboutMe";
import styled from "styled-components";
import SkillSection from "./SkillSection";

const AboutContainer = styled.section`
background-color: ${({colors}) => colors ? colors.fourthy : ""};
padding: 4rem 1rem;
`
const About = () => {
    const colors = useColor();

    return(
        <AboutContainer id="about"  colors={colors}>
            <AboutMe />
            <ResumeButton />
            <SkillSection />
        </AboutContainer>        
    )
}

export default About