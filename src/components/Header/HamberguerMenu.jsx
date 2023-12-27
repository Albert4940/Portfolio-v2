import styled from "styled-components";
import generateColors from "../../utils/style/colors";
import { useMenuContext, useColor, useScreenSize } from "../../utils/hooks";

const MenuContainer = styled.div`
    margin-right: 2rem;
    transition: 0.3s;
    ${
        ({isOpen}) => isOpen &&  (
            `div{display:none;}`
        )
    }
`

//add variables for isopen
//play with size for transition
const openStyleButton = (colors) => (`display: block;
position: relative;
background: none;
border: none;
color: ${colors.primary};
font-size: 3rem;
font-weight: bold;
z-index: 5;  `) 

const CloseButton = styled.button`
    ${({isOpen, colors}) => !isOpen ? `display: none;` : colors ? openStyleButton(colors) : ``}
`
//change componentname Hamberger menu
const MenuBar = styled.div`
    width: 4rem;
    height: 0.6rem;
    margin: 0.5rem;
    background-color: ${({colors}) => colors && colors.primary};
`
const HamberguerMenu = () => {
    //put the getting value outside this block in order to acces to it directly from my styled comp
    const {isOpenMenu:isOpen,toggleMenu:setOpen} = useMenuContext();
    const colors = useColor();
    const {isDeviceMobile} = useScreenSize();
   
    return isDeviceMobile && (
     <MenuContainer id="menu" isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
        <MenuBar colors={colors}/>
        <MenuBar colors={colors}/>
        <MenuBar colors={colors}/>
        <CloseButton id="btn-close" isOpen={isOpen} colors={colors} onClick={() => setOpen(!isOpen)}>X</CloseButton>   
      </MenuContainer>
    )
}

export default HamberguerMenu;