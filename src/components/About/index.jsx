import colors from "../../utils/style/colors";
import ResumeButton from "../ResumeButton";
import AboutMe from "./AboutMe";
import styled from "styled-components";
import SkillSection from "./SkillSection";

const AboutContainer = styled.section`
background-color: ${colors.fourthy};
padding: 4rem 1rem;
`
const About = () => {
    return(
        <AboutContainer>
            <AboutMe />
            <ResumeButton />
            <SkillSection />
        </AboutContainer>        
    )
}

export default About