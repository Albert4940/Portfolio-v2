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
margin-bottom: 10px;
${({isDeviceMobile}) => isDeviceMobile ? ` width: 65%;` : ``}
`
//How many h1 tagssholud exists in a website put it inside global styled
const AboutH2 = styled.h2`
    text-align: center;
    margin-bottom: 10px;
    ${({isDeviceMobile}) => isDeviceMobile ? ` font-size: 4rem;` : ``}
`


const AboutMe = () => {
  
    const {isDeviceMobile} = useScreenSize();

    return(
    <AboutMeDiv isDeviceMobile={isDeviceMobile}>
        {/* <AboutImg id="profil-img" alt="Profil image" src={ImgProfile} /> */}
        <AboutText id="about-text" isDeviceMobile={isDeviceMobile}>
          <AboutH2 isDeviceMobile={isDeviceMobile}>About me</AboutH2>
          <p>
          Hello! I'm Albert-Mary Dorce, a passionate software developer based in Quebec, Canada, holding a bachelor's degree in computer science. 
          I find joy in crafting robust software solutions by leveraging both my creativity and imagination. 
          The enchantment of bringing useful and original projects to life is what truly motivates me.
          </p>
          <br/>
          <p>
          Currently, I am immersed in the development of an E-commerce platform using the MERN (MongoDB, Express, React, Node) stack. 
          My approach includes incorporating state management technologies such as Redux and Redux Toolkit, along with integrating the PayPal API 
          for seamless payment processing.
          </p>
          <br/>
          <p>I am passionate about creating user-friendly software by transforming user needs into robust functionality</p>
        </AboutText>
     </AboutMeDiv>
    )
}
export default AboutMe;