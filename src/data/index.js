import { 
    FaHtml5, FaCss3Alt, FaReact, FaPhp, 
    FaJava,FaTwitter,FaGithub, FaCodepen,
    FaLinkedin, FaAt
    } from "react-icons/fa";
import { IoLogoJavascript,IoLogoFirebase } from "react-icons/io5";
import promodoIMG from '../assets/promodoIMG.png'

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
                name:"Firebase",
                icon:<IoLogoFirebase />
            }
        ]
    },
    {
        title: "FRONTEND",
        technologies:[
            {
                name:"HTML5",
                icon:<FaHtml5 />
            },
            {
                name:"HTML5",
                icon:<FaHtml5 />
            }
        ]
    }
]

export const projects = [
    {
        title:"Promodo",
        description:`dolor sit ame id neque volutpat facilisis.Sed rutrum est id neque volutpat facilisis.`,
        link:"",
        imgSrc: promodoIMG,
    },
    {
        title:"Promodo",
        description:`dolor sit amet, consectetur adipiscing elit. 
        Sed rutrum est id neque volutpat facilisis.`,
        link:"",
        imgSrc:promodoIMG,
    },
    {
        title:"Promodo",
        description:`dolor sit amet, consectetur adipiscing elit. 
        Sed rutrum est id neque volutpat facilisis.`,
        link:"",
        imgSrc:promodoIMG,
    },
]

export const contacts = [
    {
        title: "Twitter",
        link:"",
        icon:<FaTwitter />
    },
    {
        title: "GitHub",
        link:"",
        icon:<FaGithub />
    },
    {
        title: "Codepen",
        link:"",
        icon:<FaCodepen />
    },
    {
        title: "Linkedin",
        link:"",
        icon:<FaLinkedin />
    },
    {
        title: "Send a Mail",
        link:"",
        icon:<FaAt />
    },
]