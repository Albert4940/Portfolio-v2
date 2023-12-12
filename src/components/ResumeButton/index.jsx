import styled from "styled-components";
import colors from "../../utils/style/colors";
import ButtonStyle from "../../utils/style/ButtonStyle";

//export without function

const Button = ButtonStyle(colors);
const ResumeButton = () => {
    return(
        <Button>
            Resume
        </Button>
    )
}
export default ResumeButton;