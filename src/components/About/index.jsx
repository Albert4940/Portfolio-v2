import colors from "../../utils/style/colors";
import ResumeButton from "../ResumeButton";
import AboutMe from "./AboutMe";
import styled from "styled-components";
const AboutContainer = styled.section`
background-color: ${colors.fourthy};
padding: 4rem 1rem;
`
const About = () => {
    return(
        <AboutContainer>
            <AboutMe />
            <ResumeButton />
        </AboutContainer>        
    )
}

export default About