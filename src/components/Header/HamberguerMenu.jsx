import styled from "styled-components";
import colors from "../../utils/style/colors";
const MenuContainer = styled.div`
    display:none;
    transition: 0.3s;
`

//add variables for isopen
const CloseButton = styled.button`
    display: none;
    font-size: 3rem;
    transition: 0.3s;
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
        <CloseButton id="btn-close" onClick={() => setOpen(!isOpen)}>X</CloseButton>   
      </MenuContainer>
    )
}

export default HamberguerMenu;