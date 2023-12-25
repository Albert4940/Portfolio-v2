import styled from "styled-components";
import WelcomePicture from "../../assets/welcome.jpeg";
import colors from "../../utils/style/colors";
import ResumeButton from "../ResumeButton";

const WelcomeSection = styled.section`
    text-align: center;
    min-height:100vh;
    background:gray;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color: #000;
    /*   background-image: linear-gradient(62deg, #3a3d40 0%, #181719 100%); */
    background-image: url(${WelcomePicture});
    background-repeat:no-repeat;
    background-size:cover; 
`
//try to use css pseudo like before
const WelcomeLinearGradient = styled.div`
    min-height:100vh;
    width: 100%;
    z-index: 1;
    background: linear-gradient(180deg, #E4E9EF 13.58%, rgba(48, 56, 65, 0.00) 99.94%);
`
const WelcomeContent = styled.div`
    position:absolute;
    top:35%;
    padding: 3rem;
    text-align: center;
    margin: 0 10px;
    z-index:2;
`
const WelcomeP = styled.p`
  font-size: 3rem;
  font-weight: 200;
  font-style: italic;
  color: ${colors.primaryBlue};
  margin-bottom: 35px;
`
const WelcomeTtile = styled.h1`
    color:${colors.primaryBlue};
`
const Welcome = () => {
    return(
        <WelcomeSection id="home">
            <WelcomeLinearGradient />
            <WelcomeContent>
                <WelcomeTtile>Hey i am Albert</WelcomeTtile>
                <WelcomeP>a web developer</WelcomeP>
                <ResumeButton />
            </WelcomeContent>            
        </WelcomeSection>
    )
}

export default Welcome;