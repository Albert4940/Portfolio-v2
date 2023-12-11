import styled from 'styled-components';
import NavBar from './NavBar';
import NavBarMobile from './NavBarMobile';
import HamberguerMenu from './HamberguerMenu';
import colors from '../../utils/style/colors';
import { useState } from 'react';

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
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.4);
    z-index: 5;
`
const AlbertLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    font-size: 2.2rem;
`


const Header = () => {
    const [isOpen, setOpen] = useState(false);
    console.log(isOpen)
    return(
        <HeaderContainer id="header">
            <AlbertLogo id="albert-logo"><a href="#welcome-section">ALBERT</a></AlbertLogo>
            <HamberguerMenu isOpen={isOpen} setOpen={setOpen}/>
            <NavBar />
            <NavBarMobile isOpen={isOpen} />
        </HeaderContainer>
    )
}

export default Header;