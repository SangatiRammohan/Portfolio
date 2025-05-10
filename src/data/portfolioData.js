// src/data/portfolioData.js
import CameraImg from '../assets/camera.png';
import portfolio from '../assets/porfolio.png'
import PhotoStudio from '../assets/PhotoStudio.png'
import V2V from "../assets/V2V.png"
import Polycab from '../assets/Polycab.png'
import City from '../assets/City.png'
const portfolioData = {
  user: {
    name: "Rammohan Sangati",
    titles: ["MERN STACK DEVELOPER", "PYTHON Developer"],
    subtitle: "Working towards To Become A Full Stack Developer",
    image: ""
  },
  skills: [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "React Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactbootstrap/reactbootstrap-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "ExpressJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" },
    { name: "DjangoREST Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons//djangorest/djangorest-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  ],
  projects: [
    {
      id: 1,
      name: "E-Commerce Website",
      description: "A fully responsive e-commerce website with product listings, cart functionality, and secure checkout.",
      image: CameraImg,
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      demoLink: "https://sangatirammohan.github.io/JavaScript-Project/main/index.html",
      githubLink: "https://github.com/SangatiRammohan/JavaScript-Project"
    },
    {
      id: 2,
      name: "City Pulse ( city guide for disability people)",
      description: "A clone of the popular e-commerce platform Flipkart with similar functionality.",
      image: City,
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "#",
      githubLink: ""
    },
    {
      id: 3,
      name: "Photo studio website",
      description: "A food delivery application clone with restaurant listings and ordering system.",
      image: PhotoStudio,
      techStack: ["React", "CSS", "ReactBootstap"],
      demoLink: "https://photo-studio-git-main-rammohans-projects-dffdb287.vercel.app/",
      githubLink: "https://github.com/SangatiRammohan/Photo-Studio"
    },
    {
      id: 4,
      name: "Polycab - Task Management",
      description: "A streaming platform clone with movie listings and preview functionality.",
      image: Polycab,
      techStack: ["React", "Python", "DJango", "DJangoREST Framework"],
      demoLink: "#",
      githubLink: ""
    },
    {
      id: 5,
      name: "Porfolio website",
      description: "A clean, responsive portfolio showcasing my projects, skills, and achievements in web development and electronics, with contact and resume.",
      image: portfolio,
      techStack: ["React", "CSS", "ReactBootstap"],
      demoLink: "#",
      githubLink: "https://github.com/SangatiRammohan/Portfolio"
    },
    {
      id: 6,
      name: "V2V Communication using CAN Protocal",
      description: "V2V communication using CAN enables real-time data sharing for safety, traffic flow, and collision prevention.",
      image: V2V,
      techStack: [
        "Arduino",
        "C/C++",
        "CAN (ISO 11898)",
      ]
      ,
      demoLink: "",
      githubLink: "https://github.com/SangatiRammohan/Vehicle-to-vehicle-Communication-using-CAN-Protocol"
    },
  ],
  contact: {
    email: "sangatirammohan01@gmail.com",
    social: [
      { platform: "GitHub", link: "https://github.com/SangatiRammohan", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg" },
      { platform: "Facebook", link: "https://www.facebook.com/share/1AXZcoQ61B/", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/facebook.svg" },
      { platform: "Instagram", link: "https://www.instagram.com/itsme_ram_mohan_?igsh=MTFsamM5dDBzNXY2Zw==", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/instagram.svg" },
      { platform: "LinkedIn", link: "https://www.linkedin.com/in/rammohan-sangati-b76535216/", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg" },
      { platform: "Twitter", link: "https://x.com/sangati_0131?t=dG5_5RLxFFupY4Is-d9Sjw&s=09", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/twitter.svg" },

    ]
  }
};

export default portfolioData;