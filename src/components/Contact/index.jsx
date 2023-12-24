import styled from "styled-components";
import { useColor, useScreenSize } from "../../utils/hooks";
import { contacts } from "../../data";

const ContactContainer = styled.section`
background-color:${({colors}) => colors && colors.fourthy};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const ContactH2 = styled.h2`
font-size: 6rem;
${({isDevice}) => isDevice && `font-size: 4rem;`}
`
const ContactP = styled.p`
  font-size: 2.5rem;
  font-style: italic;
`

const ContactUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 50px;
  margin-top: 40px;
`

const ListLink = styled.li`
    transition: transform 0.3s ease-out;
    a{
        font-size: 3rem;
        margin: 0 10px;
        display: flex;
        align-items: center;
    }

    svg{
        margin-right: 5px;
    }

    &:hover{
        transform:translateY(5px);
    }
`

const Contact = () => {
    const colors = useColor();
    const {isDeviceMobile} = useScreenSize()
    return(
        <ContactContainer id="contact" colors={colors}>
            <ContactH2 isDevice={isDeviceMobile}>Contact Me</ContactH2>
            <ContactP>How do you take your coffee?</ContactP>
            <ContactUl>
                {
                    contacts.map(({title,icon,link}) => (
                        <ListLink key={title}>
                            <a href={link}>{icon}{title}</a>
                        </ListLink>
                    ))
                }
            </ContactUl>
        </ContactContainer>
    )
}

export default Contact;