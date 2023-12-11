
const NavBarMobile = ({isOpen}) => {
    console.log("inside NavBar: ", isOpen)
    return(
        <nav id="navbar-mobile" className={isOpen ? "open" : ""}>       
        
       <ul>
         <li><a href="#about">About</a></li>
          <li><a href="#projects">Work</a></li>
           <li><a href="#contact">Contact</a></li>
       </ul>
      </nav>
    )
}

export default NavBarMobile;