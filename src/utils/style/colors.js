import { useTheme } from "../hooks";
// const colors = {
//     primaryBlue : "#0B2545",
//     secondary: "#5553FF",
//     thirdy:"#2523BB",
//     fourthy:"#EBF3FF",
//     primaryWhite:"#E4E9EF"//ad an obj for rgba
// }

const colorsValueLight = ["#0B2545","#E4E9EF","#2523BB","#EBF3FF","#5553FF"]
const colorsName = ["primary","secondary","thirdy","fourthy","fifth"];

const generateColors = theme => {
    let colors = {};

    const colorsValue = theme === "light" && colorsValueLight
    
    for(let i = 0; i < colorsName.length; i++){
        const colorName = colorsName[i];
        const colorValue = colorsValue[i]
        colors[colorName] = colorValue;
    }

    return colors;
}
// const GetColors = () => {
//     const {theme} = useTheme();
//     return generateColors(theme);
// }

export default generateColors;