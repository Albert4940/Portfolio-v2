import styled from "styled-components";
import colors from "../../utils/style/colors";
import ButtonStyle from "../../utils/style/ButtonStyle";
import { FaArrowDown } from "react-icons/fa";

//export without function

const IStyle = {
    marginLeft: '10px',
    translateX: '0',
    transition: 'transform 0.3s ease-out',
}
const Button = ButtonStyle(colors);
const ResumeButton = () => {
    return(
        <Button>
          <a 
            style={{color: colors.primaryWhite}}
            href="path/to/file" 
            alt="" 
            download>
                Resume
            </a>
          <FaArrowDown style={IStyle}/>            
        </Button>
    )
}
export default ResumeButton;