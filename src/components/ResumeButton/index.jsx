import ButtonStyle from "../../utils/style/ButtonStyle";
import { FaArrowDown } from "react-icons/fa";
import { useColor } from "../../utils/hooks";
//export without function

const IStyle = {
    marginLeft: '10px',
    translateX: '0',
    transition: 'transform 0.3s ease-out',
}

const ResumeButton = () => {

  const Button = ButtonStyle(useColor());

    return(
        <Button>
          <a 
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