// src/data/portfolioData.js
import CameraImg from '../assets/camera.png';
import portfolio from '../assets/porfolio.png';
import PhotoStudio from '../assets/PhotoStudio.png';
import V2V from "../assets/V2V.png";
import Polycab from '../assets/Polycab.png';
import City from '../assets/City.png';
import Analytics from '../assets/analytics.png';
import UserManagement from '../assets/userManagement.png';
import CICDDashboard from "../assets/CICDDashboard.png"

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
    { name: "DjangoREST Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/djangorest/djangorest-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original-wordmark.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" },

    // ── Added from CI/CD project ──
    { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
    { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
    { name: "ArgoCD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg" },
    { name: "Helm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg" },
    { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
],

projects: [
    {
      id: 1,
      name: "CI/CD Platform Dashboard",
      category: "devops",
      description:
        "A production-grade GitOps CI/CD monitoring platform built with the MERN stack, Kubernetes, ArgoCD, Prometheus, and Grafana. Every git push triggers a fully automated pipeline — Docker build, AWS ECR push, ArgoCD deployment to Kubernetes — with real-time pipeline runs, live pod status, and deployment history visible in a React dashboard via Socket.io WebSockets.",
      image: CICDDashboard,
      techStack: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes", "ArgoCD", "Prometheus", "Grafana", "AWS ECR", "GitHub Actions"],
      demoLink: "https://cicd-dashboard-kappa.vercel.app",
      githubLink: "https://github.com/SangatiRammohan/cicd-dashboard",
    },
    {
      id: 2,
      name: "Backend Analytics & Reporting Service",
      category: "aws",
      description:
        "A production-grade full-stack analytics platform that tracks user activity events, generates real-time reports, and visualizes data through a live dashboard. Built with Django REST API, PostgreSQL, and deployed serverless on AWS Lambda with auto-scaling via API Gateway.",
      image: Analytics,
      techStack: ["React", "Python", "Django", "PostgreSQL", "AWS Lambda", "REST API"],
      demoLink: "https://sangati-analytics-dashboard.netlify.app/",
      githubLink: "https://github.com/SangatiRammohan/Full-stack-analytics-service-in-AWS",
    },
    {
      id: 3,
      name: "Secure User Management & Dashboard System",
      category: "aws",
      description:
        "A production-ready full-stack web application featuring JWT-based authentication with access/refresh token rotation, role-based access control (Admin & User), and a real-time admin dashboard with user analytics, activity logs, and charts. Built with React.js, Node.js, Express, and MongoDB Atlas — deployed serverless on AWS Lambda with API Gateway for the backend and AWS S3 for static frontend hosting.",
      image: UserManagement,
      techStack: ["AWS Lambda", "Node.js", "Express", "MongoDB", "React", "JWT", "Tailwind CSS"],
      demoLink: "http://userms-frontend-ramtech.s3-website.ap-south-1.amazonaws.com",
      githubLink: "https://github.com/SangatiRammohan/user-management-system",
    },
    {
      id: 4,
      name: "E-Commerce Website",
      category: "javascript",
      description:
        "A fully responsive e-commerce website with product listings, cart functionality, and secure checkout.",
      image: CameraImg,
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      demoLink: "https://sangatirammohan.github.io/JavaScript-Project/main/index.html",
      githubLink: "https://github.com/SangatiRammohan/JavaScript-Project",
    },
    {
      id: 5,
      name: "City Pulse (city guide for disability people)",
      category: "mern",
      description:
        "City Pulse is an inclusive city guide designed to help people with disabilities navigate urban spaces with accessibility information and resources.",
      image: City,
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "https://city-pulse-01.vercel.app/",
      githubLink: "https://github.com/SangatiRammohan/City-Pulse/tree/master",
    },
    {
      id: 6,
      name: "Photo Studio Website",
      category: "javascript",
      description:
        "A photo studio website showcases photography services, portfolio, pricing, and booking options, providing clients with a seamless online experience.",
      image: PhotoStudio,
      techStack: ["React", "CSS", "ReactBootstrap"],
      demoLink: "https://photo-studio-git-main-rammohans-projects-dffdb287.vercel.app/",
      githubLink: "https://github.com/SangatiRammohan/Photo-Studio",
    },
    {
      id: 7,
      name: "Polycab - Task Management",
      category: "python",
      description:
        "Polycab Task Management streamlines task assignment, tracking, and collaboration across teams to enhance productivity, accountability, and workflow efficiency.",
      image: Polycab,
      techStack: ["React", "Python", "Django", "Django REST Framework"],
      demoLink: "https://polycab-project-mangement.vercel.app",
      githubLink: "https://github.com/SangatiRammohan/Polycab-Project-mangement",
    },
    {
      id: 8,
      name: "Portfolio Website",
      category: "javascript",
      description:
        "A clean, responsive portfolio showcasing my projects, skills, and achievements in web development and electronics, with contact and resume.",
      image: portfolio,
      techStack: ["React", "CSS", "ReactBootstrap"],
      demoLink: "#",
      githubLink: "https://github.com/SangatiRammohan/Portfolio",
    },
    {
      id: 9,
      name: "V2V Communication using CAN Protocol",
      category: "hardware",
      description:
        "V2V communication using CAN enables real-time data sharing for safety, traffic flow, and collision prevention.",
      image: V2V,
      techStack: ["Arduino", "C/C++", "CAN (ISO 11898)"],
      demoLink: "",
      githubLink: "https://github.com/SangatiRammohan/Vehicle-to-vehicle-Communication-using-CAN-Protocol",
    },
  ],

  contact: {
    email: "sangatirammohan01@gmail.com",
    social: [
      { platform: "GitHub", link: "https://github.com/SangatiRammohan", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg" },
      { platform: "LinkedIn", link: "https://www.linkedin.com/in/rammohan-sangati-b76535216/", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg" },
      { platform: "Facebook", link: "https://www.facebook.com/share/1AXZcoQ61B/", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/facebook.svg" },
      { platform: "Instagram", link: "https://www.instagram.com/itsme_ram_mohan___/", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/instagram.svg" },
      { platform: "Twitter", link: "https://x.com/sangati_0131?t=dG5_5RLxFFupY4Is-d9Sjw&s=09", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/twitter.svg" },
    ]
  }
};

export default portfolioData;