import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Chandrabhan Maurya",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer", "Freelancer", "Open Source Contributor"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!"
}



const ProjectInfo = [
    {
        title: "Ekart E-comm App",
        desc: "Ekart is a modern, fully responsive e-commerce platform built using React, TailwindCSS, Heroicons, and HeadlessUI, offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. Ekart combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
        image: "Ekart.png",
        live: true,
        technologies: ["React", "Tailwind", "Redux", "Heroicons", "HeadlessUI"],
        link: "https://code-mars.github.io/Ekart/",
        github: "https://github.com/Code-Mars/Ekart/"
    },
    {
        title: "Facebook Clone",
        desc: "Facebook Clone is a full-stack web application that replicates the core features of Facebook, including user authentication, posting, and commenting. The front end is built with React, TailwinCSS, Tabler-Icons, Mantine and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, post updates, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Facebook Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Facebook.png",
        live: false,
        technologies: ["React", "Springboot", "MongoDB", "Tailwind", "Tabler-Icons", "Firebase"],
        link: "https://github.com/Code-Mars/Facebook-Clone",
        github: "https://github.com/Code-Mars/Facebook-Clone"
    },
    {
        title: "Spotify Clone",
        desc: "Spotify Clone is a full-stack web application that replicates the core features of Spotify, including user authentication, music playback, and playlist creation. The front end is built with React, TailwindCSS, Heroicons, and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, search for songs, and create playlists. The app features real-time updates, so users can see new songs as they are added. Spotify Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Spotify.png",
        live: false,
        technologies: ["React", "Springboot", "Tailwind", "Tabler-Icons", "MongoDB", "Firebase"],
        link: "https://github.com/Code-Mars/Spotify-Clone",
        github: "https://github.com/Code-Mars/Spotify-Clone"
    },
    {
        title: "Travel Tracker",
        desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
        image: "Travel.png",
        live: false,
        technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
        link: "https://github.com/Code-Mars/Travel-Tracker",
        github: "https://github.com/Code-Mars/Travel-Tracker"
    },
    {
        title: "Instagram Clone",
        desc: "Instagram Clone is a full-stack web application that replicates the core features of Instagram, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Instagram Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Instagram.png",
        live: false,
        technologies: ["React", "Springboot", "Tailwind", "Heroicons", "Firebase", "MongoDB"],
        link: "https://github.com/Code-Mars/Instagram-Clone",
        github: "https://github.com/Code-Mars/Instagram-Clone"
    },
    {
        title: "CodeX Code Editor",
        desc: "CodeX is a modern, fully responsive code editor built using React, TailwindCSS, and Ace Editor, offering a seamless coding experience across all devices. It features syntax highlighting for popular programming languages, including HTML, CSS, JavaScript, Python, and Java. Users can create, edit, and save code files, with the option to download them as text files. CodeX combines robust functionality with a sleek, intuitive design, making coding effortless and enjoyable.",
        image: "CodeX.png",
        live: false,
        technologies: ["React", "Tailwind", "Ace Editor"],
        link: "https://github.com/Code-Mars/CodeX",
        github: "https://github.com/Code-Mars/CodeX"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Angular", "Redux", "Tailwind CSS", "GSAP", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Springboot", "Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Spring Tool Suite"]
    }
]
const socialLinks = [
    { link: "https://github.com/Code-Mars", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/chandrabhan-maurya", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/code.marshal_", icon: IconBrandInstagram }, 
    { link: "https://www.youtube.com/channel/UC1ki6jaFvFiH_E79b9FYptw", icon: IconBrandYoutube },
    { link: "https://www.leetcode.com/u/CodeMars", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Specialist Programmer",
        company: "Infosys",
        date: "Oct 2023 - Present",
        desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["Springboot", "React JS", "Angular", "Node JS", "MySQL", "MongoDB", "Microservices"]
    },
    {
        role: "System Engineer",
        company: "Infosys",
        date: "Nov 2022 - Sep 2023",
        desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
        skills: ["Java", "MySQL", "Hibernate", "Selenium", "Jenkins", "JIRA", "Automation Testing"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };