import styled from "styled-components";
import { useColor, useScreenSize } from "../../utils/hooks";
//try to use css pseudo like before and content for description
//try to put a description on image without put img in background

const ProjectStyled = styled.a`
display: block;
overflow: hidden;
height: 40rem;
background-image: url(${({Pic}) => Pic && Pic});
    background-repeat:no-repeat;
    background-size:cover; 
    &:hover{
        div{
            margin-right:0;
          }
    }
`

const Description = styled.div`
    /*background: rgba(56, 70, 86, 0.50);*/
    margin-right:-1280px;
    z-index: 3;
    transition:0.5s;
`

const ProjectTitle = styled.h3`
    
`
const DescriptionWrapper = styled.div`
border:none;
position:absolute;
top:0;
height:calc(100% - 6.8rem);
min-height: calc(100% - 6.8rem);;
opacity:0;
visibility: hidden;
transition: opacity 0.3s ease;
background: rgba(56, 70, 86, 0.90);
// margin-right:-1280px;
`

const DescriptionContainer = styled.a`
// max-width: 300px;
//margin: auto;
border-radius: 5px;
position:relative;
&:hover{
    div{   
         opacity: 1;
         visibility: visible;
        }  
}
 
`
const IC = styled.div `
    //max-width: 400px; /* Set a fixed width */
    max-height: calc(100% - 6.8rem); /* Set a fixed height */
    //min-width: 400px; /* Set a fixed width */
    min-height: calc(100% - 6.8rem); /* Set a fixed height */
    overflow: hidden; /* Hide overflowing content */
    margin-bottom: 10px;
    `
  
 const I =  styled.img `
    // max-width: 100%; /* Ensure the image doesn't exceed the width of the container */
    // max-height: 100%; /* Ensure the image doesn't exceed the height of the container */
    //min-width:400px;
    height: calc(100% - 6.8rem);
    object-fit: cover !important;
    // min-height:400px;
     width: 100%; /* Allow the width to be adjusted based on the aspect ratio */
    // height: auto; /* Allow the height to be adjusted based on the aspect ratio */
  `
  
const PStyle = styled.p`
margin-top:20%;
padding: 0 20px;
text-align: left;
color:${({colors}) => colors && `white`};
`

const CutLongDescription = (desc, WordMaxNum = 13) => {
    
    const descWordArray = desc.split(" ");
    const descWordNum = descWordArray.length;
    let newDescWordArray = []
    if(descWordNum > WordMaxNum){
        for(let i = 0; i < WordMaxNum; i++){
            newDescWordArray.push(descWordArray[i])
        }
        newDescWordArray.push("...")
        return newDescWordArray.join(" ");;
    }else{
        return desc;
    }
    
}
export const Project = (props) => {
    const colors = useColor();
    const {isDeviceMobile} = useScreenSize()

    const {imgSrc,title,description, link} = props.project

    //console.log(title, " - ", CutLongDescription(description))
    return(
        // <ProjectStyled Pic={imgSrc}>
        //     <Description>
        //         <ProjectTitle>
        //             {title}
        //         </ProjectTitle>
        //         <p>
        //             {description}
        //         </p>
        //     </Description>
        // </ProjectStyled>
        <DescriptionContainer href={link} alt="link Project">
            {/* <img  className="project-image" src={imgSrc} style={{borderRadius:"5px"}}/> */}
            <IC>
                <img className="project-image" src={imgSrc} />
            </IC>
            {isDeviceMobile ?(
                <h3 style={{color: colors.primary}} >{title}</h3>
            ) : (
                <DescriptionWrapper>
                <PStyle colors={colors}>
                    <strong>{title} </strong>{CutLongDescription(description)}
                </PStyle>
                </DescriptionWrapper> 
            )}
            
        </DescriptionContainer>
        // <a
        //   href="https://codepen.io/freeCodeCamp/full/zNqgVx"
         
        //   className="project project-tile"
        // >
        //   <img
        //     className="project-image"
        //     src={imgSrc}
        //     alt="project"
        //   />
        //   <p className="project-title">
        //     <span className="code">&lt;</span>
        //     Tribute Page
        //     <span className="code">&#47;&gt;</span>
        //   </p>
        // </a>
    )
}