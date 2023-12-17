import styled from 'styled-components';
import NavBar from './NavBar';
import HamberguerMenu from './HamberguerMenu';
import colors from '../../utils/style/colors';
/* */
const HeaderContainer = styled.header`
    width: 100%;
    min-height: 60px;
    display: flex; 
    justify-content: space-between;
    align-items:center;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(228, 233, 239, 0.90);
    z-index: 5;
`
//how to style child element with styled
const AlbertLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    font-size: 2.2rem;
`
const LinkLogo = styled.a`
  color:${colors.primaryBlue};
  font-weight: bold;
`

const Header = () => {
    return(
        <HeaderContainer id="header">
            <AlbertLogo id="albert-logo">
              <LinkLogo href="#welcome-section" >ALBERT</LinkLogo>
            </AlbertLogo>
            <HamberguerMenu />
            <NavBar />
        </HeaderContainer>
    )
}

export default Header;