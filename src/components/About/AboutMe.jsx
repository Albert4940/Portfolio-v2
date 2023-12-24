import styled from "styled-components";
import ImgProfile from '../../assets/profile.jpg';
import { useScreenSize } from "../../utils/hooks";

const AboutMeStyleMobile = `
flex-direction: column;  
align-items: center;
`
const AboutMeDiv = styled.div`
margin: 30px auto; 
display: flex;
justify-content: center;
${(props) => props.isDeviceMobile && AboutMeStyleMobile}
`

const AboutImg = styled.img`
/* height: 25rem; */
  width: 13rem;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 3rem;
`

const AboutText = styled.div`
width: 40%;
${({isDeviceMobile}) => isDeviceMobile ? ` width: 65%;` : ``}
`
//How many h1 tagssholud exists in a website put it inside global styled
const AboutH2 = styled.h2`
    text-align: center;
    ${({isDeviceMobile}) => isDeviceMobile ? ` font-size: 4rem;` : ``}
`


const AboutMe = () => {
  
    const {isDeviceMobile} = useScreenSize();

    return(
    <AboutMeDiv isDeviceMobile={isDeviceMobile}>
        <AboutImg id="profil-img" alt="Profil image" src={ImgProfile} />
        <AboutText id="about-text" isDeviceMobile={isDeviceMobile}>
          <AboutH2 isDeviceMobile={isDeviceMobile}>About me</AboutH2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue tellus in est ultricies, sit amet dignissim tellus facilisis. 
            Maecenas urna nibh, egestas vitae purus ut, faucibus feugiat lectus.
             Mauris eu augue gravida, sollicitudin diam sed, vehicula dolor.
          </p>
        </AboutText>
     </AboutMeDiv>
    )
}
export default AboutMe;