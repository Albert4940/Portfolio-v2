import styled from 'styled-components'
import colors from '../../utils/style/colors'

const NavBarContainer = styled.nav`
    display: flex;
    justify-content: flex-end;  
    width: 100%; 
    z-index: 10;
`
const NavBarUl = styled.ul`
display: flex;
margin-right: 2rem; 
`

const NavBarA = styled.a`
color: ${colors.primaryBlue};
display: block;
font-size: 2.2rem;
padding: 2rem;
`
const NavBar = () => {
    return(
        <NavBarContainer id="navbar">
            <NavBarUl>
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