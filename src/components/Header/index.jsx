import styled from 'styled-components';
import NavBar from './NavBar';
//import NavBarMobile from './NavBarMobile';
import HamberguerMenu from './HamberguerMenu';
import colors from '../../utils/style/colors';
import { useEffect,useState } from 'react';
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
    const [isOpen, setOpen] = useState(false);
    // const [windowSize, setWindowSize] = useState(0);

    // const handleResize = () => {
    //     setWindowSize(window.innerWidth)
    // }
  

  // useEffect(() => {
    
  //   setWindowSize(window.innerWidth)

  //   window.addEventListener('resize', handleResize);

  //   // Remove event listener on component unmount to avoid memory leaks
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // },[])

    return(
        <HeaderContainer id="header">
            <AlbertLogo id="albert-logo">
              <LinkLogo href="#welcome-section" >ALBERT</LinkLogo>
            </AlbertLogo>
            <HamberguerMenu isOpen={isOpen} setOpen={setOpen}/>
            <NavBar isOpen={isOpen}/>
            {/* <NavBarMobile isOpen={isOpen} /> */}
        </HeaderContainer>
    )
}

export default Header;