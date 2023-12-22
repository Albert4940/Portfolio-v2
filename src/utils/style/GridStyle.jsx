import styled from "styled-components";

//put the variable size
//create an only common style
const GridStyle = () => (styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
grid-gap: 4rem;
width: 100%;
max-width: 1280px;
margin: 0 auto;
margin-bottom: 6rem;
${({isDeviceMobile}) => 
isDeviceMobile && 
`grid-template-columns: 1fr;`} 
`
)
export default GridStyle;