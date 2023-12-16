import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useContext } from 'react';
import { ScreenSizeContext } from "../../utils/context";


const desktopStyle = `display: flex;
        justify-content: flex-end;  
        width: 100%; 
        z-index: 10;`


const mobileStyle = `
position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  margin-right: -800px;
  transition:0.5s;
   `

const NavBarContainer = styled.nav`
   ${(props) => !props.isDeviceMobile ? desktopStyle : mobileStyle} 
   ${(props) => props.isOpen && `margin-right: 0;`}
`

const UlMobile = `
padding-top: 100px;
width: 100vw;
height: 100vh; 
float: right;
text-align: center;
background-color: ${colors.primaryWhite};
`
const UlDesktop = `
display: flex;
margin-right: 2rem; 
`
const NavBarUl = styled.ul`
${(props) => !props.isDeviceMobile ? UlDesktop : UlMobile}
`

//remove color css attribute to global styled

const NavBarA = styled.a`
    color: ${colors.primaryBlue};
    display: block;
    font-size: 2.2rem;
    padding: 2rem;  
    transform: tanslateX(0);
    transition: transform 0.3s ease-out;
    &:hover{
        transform: translateY(-3px);
    }
`
const NavBar = ({ isOpen}) => {   
    // Refac: Put the screensize into the context 
    const {screenSize} = useContext(ScreenSizeContext)
    const isDeviceMobile = screenSize <= 768 ? true : false; 

    return(
        <NavBarContainer id="navbar" isOpen={isOpen} isDeviceMobile={isDeviceMobile}>
            <NavBarUl isDeviceMobile={isDeviceMobile}>
                <li>
                    <NavBarA href="#about">
                        About
                    </NavBarA>
                    </li>
                    <li>
                    <NavBarA href="#projects">
                        Work
                    </NavBarA>
                    </li>
                    <li>
                    <NavBarA href="#contact">
                        Contact
                    </NavBarA>
                    </li>
                
            </NavBarUl>
        </NavBarContainer>
    )
}

export default NavBar;