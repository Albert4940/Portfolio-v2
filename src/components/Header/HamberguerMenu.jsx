import styled from "styled-components";
import colors from "../../utils/style/colors";
const MenuContainer = styled.div`
    display:none;
    transition: 0.3s;
`
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
const HamberguerMenu = () => {
    return(
     <MenuContainer id="menu" >
        <MenuBar />
        <MenuBar />
        <MenuBar />
        <CloseButton id="btn-close">X</CloseButton>   
      </MenuContainer>
    )
}

export default HamberguerMenu;