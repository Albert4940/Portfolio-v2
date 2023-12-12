import styled from "styled-components";
import colors from "../../utils/style/colors";
const MenuContainer = styled.div`
    display:none;
    transition: 0.3s;
`

//add variables for isopen
//play with size for transition
const openStyleButton = `display: block;
position: relative;
background: none;
border: none;
color: ${colors.primaryBlue};
font-size: 3rem;
font-weight: bold;
z-index: 5;  ` 
const CloseButton = styled.button`
    ${({isOpen}) => !isOpen ? `display: none;` : openStyleButton}
`
//change componentname Hamberger menu
const MenuBar = styled.div`
    width: 4rem;
    height: 0.6rem;
    margin: 0.5rem;
    background-color: ${colors.primaryBlue};
`
const HamberguerMenu = ({isOpen,setOpen}) => {
    return(
     <MenuContainer id="menu" className={isOpen ? "open" : ""} onClick={() => setOpen(!isOpen)}>
        <MenuBar />
        <MenuBar />
        <MenuBar />
        <CloseButton id="btn-close" isOpen={isOpen} onClick={() => setOpen(!isOpen)}>X</CloseButton>   
      </MenuContainer>
    )
}

export default HamberguerMenu;