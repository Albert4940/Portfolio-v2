import styled from 'styled-components';
import NavBar from './NavBar';
import HamberguerMenu from './HamberguerMenu';
import { useColor } from '../../utils/hooks';


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
  color: ${({colors}) => colors && colors.primary};
  font-weight: bold;
`

const Header = () => {    
    const colors = useColor()
   
    return(
        <HeaderContainer id="header">
            <AlbertLogo id="albert-logo" colors={colors}>
              <LinkLogo href="#welcome-section" >ALBERT</LinkLogo>
            </AlbertLogo>
            <HamberguerMenu />
            <NavBar />
        </HeaderContainer>
    )
}

export default Header;