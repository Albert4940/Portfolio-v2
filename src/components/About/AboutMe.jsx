import styled from "styled-components";
import colors from "../../utils/style/colors";
import ImgProfile from '../../assets/profile.jpg';

const AboutMeDiv = styled.div`
margin: 30px auto; 
display: flex;
justify-content: center;
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
`
//How many h1 tagssholud exists in a website put it inside global styled
const AboutH2 = styled.h2`
    color:${colors.primaryBlue};
    text-align: center;
`

const P = styled.p`
    color:${colors.primaryBlue};
`
const AboutMe = () => {
    return(
    <AboutMeDiv id="about">
        <AboutImg id="profil-img" alt="Profil image" src={ImgProfile} />
        <AboutText id="about-text">
          <AboutH2>About me</AboutH2>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue tellus in est ultricies, sit amet dignissim tellus facilisis. 
            Maecenas urna nibh, egestas vitae purus ut, faucibus feugiat lectus.
             Mauris eu augue gravida, sollicitudin diam sed, vehicula dolor.
          </P>
        </AboutText>
     </AboutMeDiv>
    )
}
export default AboutMe;