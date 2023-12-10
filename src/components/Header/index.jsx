import styled from 'styled-components';
import NavBar from './NavBar';
import HamberguerMenu from './HamberguerMenu';
import colors from '../../utils/style/colors';

const HeaderContainer = styled.header`
    width: 100%;
    min-height: 60px;
    display: flex; 
    justify-content: space-between;
    align-items:center;
    position: fixed;
    top: 0;
    left: 0;
    background: ${colors.primaryWhite};
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.4);
    z-index: 5;
`
const AlbertLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    font-size: 2.2rem;
    color:${colors.primaryBlue}
`


const Header = () => {
    return(
        <HeaderContainer id="header">
            <AlbertLogo id="albert-logo"><a href="#welcome-section">ALBERT</a></AlbertLogo>
            <HamberguerMenu />
            <NavBar />
        </HeaderContainer>
    )
}

export default Header;