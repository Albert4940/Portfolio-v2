import { 
    FaHtml5, FaCss3Alt, FaReact, FaPhp, 
    FaJava,FaTwitter,FaGithub, FaCodepen,
    FaLinkedin, FaAt, FaNode
    } from "react-icons/fa";
    import { SiExpress, SiCsharp, SiDotnet, SiRedux } from "react-icons/si";
import { IoLogoJavascript,IoLogoFirebase } from "react-icons/io5";
import mongoDBICON from "../assets/icons8-mongo-db-64.png"

//wndow.iinerWidth = 852
import promodoIMG from '../assets/25+5IMG.png'
import drumMachineIMG from '../assets/d2.png'
import portfolioIMG from '../assets/p.png'
import calculatorIMG from '../assets/c.png'
import Random from '../assets/Random.png'
import ECom from '../assets/E-com.png'
import FoodDeliver from '../assets/foodDelivery.png'

export const skills = [
    {
        title: "FRONTEND",
        technologies:[
            {
                name:"HTML5",
                icon:<FaHtml5 />
            },
            {
                name:"CSS3",
                icon:<FaCss3Alt />
            },
            {
                name:"JavaScript",
                icon:<IoLogoJavascript />
            },
            {
                name:"REACT Js",
                icon:<FaReact />
            },
            {
                name:"Redux",
                icon: <SiRedux />
            }
        ]
    },
    {
        title: "BACKEND",
        technologies:[
            {
                name:"PHP",
                icon:<FaPhp />
            },
            {
                name:"Java",
                icon:<FaJava />
            },
            {
                name:"Node.js",
                icon:<FaNode />
            },
            {
                name:"Express.js",
                icon:<SiExpress />
            },
            {
                name:"MongoDB",
                icon:mongoDBICON
            },
            {
                name:"C#",
                icon:<SiCsharp />
            },
            {
                name:".NET Core",
                icon:<SiDotnet />
            }
        ]
    },
]

export const projects = [
    {
        title:"25 + 5 Clock",
        description:`A dynamic React app designed to enhance focus and productivity. Tailor your work sessions with customizable 25-minute focus intervals followed by rejuvenating 5-minute breaks. Stay organized, stay motivated.`,
        link:"https://codepen.io/albert4940/full/GRBJLPv",
        imgSrc: promodoIMG,
    },
    {
        title:"Drum machine",
        description:`Built using ReactJS, this minimal drum machine is a user-friendly web application featuring nine clickable drum pads. Each pad represents a unique drum sound, allowing users to easily create beats and rhythms by clicking on the pads. `,
        link:"https://codepen.io/albert4940/full/qBMByzV",
        imgSrc:drumMachineIMG,
    },
    {
        title:"Portfolio",
        description:`Revamping my portfolio using React for a sleek and modern front-end design. Demonstrating my proficiency in creating responsive and interactive user interfaces.`,
        link:"https://github.com/Albert4940/Portfolio-v2",
        imgSrc:portfolioIMG,
    },
    {
        title:"Proshop eCommerce",
        description:`eCommerce platform built with the MERN stack & Redux.`,
        link:"https://github.com/Albert4940/proshop",
        imgSrc:ECom,
    },
    {
        title:"Random Quote Machine",
        description:`React-based, fetches quotes from an external API, providing users with a dynamic and constantly changing collection of wisdom. Leveraging React's component structure, the application ensures a seamless and responsive user experience. With each interaction, a new quote is fetched asynchronously, creating an engaging and thought-provoking environment.`,
        link:"https://codepen.io/albert4940/full/poKMxPr",
        imgSrc:Random,
    },
    {
        title:"Food Delivery",
        description:`Featuring an ASP.NET MVC website for front-office use, an API for order processing, and a MAUI desktop app for back-office tasks, the mobile version enhances user experience, creating a cohesive and versatile solution for efficient operations.`,
        link:"https://github.com/Albert4940/FoodDelivery",
        imgSrc:FoodDeliver,
    },
]

export const contacts = [
    // {
    //     title: "Twitter",
    //     link:"",
    //     icon:<FaTwitter />
    // },
    {
        title: "GitHub",
        link:"https://github.com/Albert4940",
        icon:<FaGithub />
    },
    {
        title: "Codepen",
        link:"https://codepen.io/albert4940",
        icon:<FaCodepen />
    },
    {
        title: "Linkedin",
        link:"https://www.linkedin.com/in/dorc%C3%A9-albert-mary/",
        icon:<FaLinkedin />
    },
    {
        title: "Send a Mail",
        link:"dorcealbertmary@gmail.com",
        icon:<FaAt />
    },
]