import styled from 'styled-components'
import {useScreenSize, useMenuContext, useColor} from "../../utils/hooks"

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

const UlMobile = (secondary) => (`
padding-top: 100px;
width: 100vw;
height: 100vh; 
float: right;
text-align: center;
background-color: ${secondary};
`)
const UlDesktop = `
display: flex;
margin-right: 2rem; 
`
const NavBarUl = styled.ul`
${({isDeviceMobile, colors}) => !isDeviceMobile ? UlDesktop : colors ? UlMobile(colors.secondary) : ""}
`

//remove color css attribute to global styled

const NavBarA = styled.a`
    display: block;
    font-size: 2.2rem;
    padding: 2rem;  
    transform: tanslateX(0);
    transition: transform 0.3s ease-out;
    &:hover{
        transform: translateY(-3px);
    }
`
const menuLinks = ["About","Works","Contact"];

const NavBar = () => {   
    const {isDeviceMobile} = useScreenSize()
    const {isOpenMenu:isOpen, toggleMenu} =  useMenuContext();
    const colors = useColor();

    return(
        <NavBarContainer id="navbar" isOpen={isOpen} isDeviceMobile={isDeviceMobile}>
            <NavBarUl isDeviceMobile={isDeviceMobile} colors={colors}>
                {/*<li>
                    <NavBarA href="#about">
                        About
                    </NavBarA>
                    </li>
                    <li>
                    <NavBarA href="#works">
                        Work
                    </NavBarA>
                    </li>
                    <li>
                    <NavBarA href="#contact">
                        Contact
                    </NavBarA>
    </li>*/}
                {
                    menuLinks.map(item => (
                        <li 
                        key={item} 
                        onClick={() => toggleMenu(false)}>
                            <NavBarA href={`#${item.toLowerCase()}`}>{item}</NavBarA>
                        </li>
                    ))
                }
            </NavBarUl>
        </NavBarContainer>
    )
}

export default NavBar;