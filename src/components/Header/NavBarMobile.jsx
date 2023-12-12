import styled from 'styled-components';
import colors from '../../utils/style/colors'


const NavBarMobileContainer = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: -800px;
  transition:0.5s; 
  background-color: #be3144;
`

const NavUl = styled.ul`
padding-top: 100px;
width: 100vw;
height: 100vh; 
float: right;
text-align: center;
background-color: ${colors.primaryWhite};
`

//in order to get one navbar comp:render a another comp, or get resizeevent
const NavBarMobile = ({isOpen}) => {
  
    return(
        <NavBarMobileContainer id="navbar-mobile" className={isOpen ? "open" : ""}>       
        
       <NavUl>
         <li><a href="#about">About</a></li>
          <li><a href="#projects">Work</a></li>
           <li><a href="#contact">Contact</a></li>
       </NavUl>
      </NavBarMobileContainer>
    )
}

export default NavBarMobile;