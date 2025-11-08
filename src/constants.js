// Skills Section Logo's

// frontend part logo
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";

// backend part logo
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";

// programming language
import javascriptLogo from "./assets/tech_logo/javascript.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";

// tools
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logo's
import freelance from "./assets/company_logo/freelancer-logo.png";

// Education Section Logo's
import ignou from "./assets/education_logo/ignou.png";
import lbs from "./assets/education_logo/lbs.png";

// Project Section Logo's
import github_project_logo from "./assets/work_logo/github_ss.png";
import vastracraft from "./assets/work_logo/vastracraft_project_ss.png";
import quickblogLogo from "./assets/work_logo/quickblog_ss.png";

// My CV Link
export const cv =
  "https://docs.google.com/document/d/18FHSfXmzHn5zmh-U8CdN3in9Z6rvAh4VrW5-jPGAhLI/edit?usp=sharing";

// Social Media
export const socialMedia = {
  linkedin: "https://www.linkedin.com/in/manavpal", // linkedin link
  github: "https://github.com/manavpal-dev", // github link
  instagram: "https://www.instagram.com/manav9248_/", // instagram link
  twitter: "https://x.com/manav9248_", // twitter link
  leetcode: "https://leetcode.com/u/manav9248_/", // leetcode link
};

// skills section
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

// experience section
export const experiences = [
  {
    id: 0,
    img: ignou,
    role: "Fullstack Engineer",
    company: "Online College Community Portal",
    date: "March 2025 - May 2025",
    desc: "I created a web-based platform for students and faculty to communicate, share resources, and collaborate on events or academic discussions. The portal included features like a notice board, chat rooms, event calendars, and document sharing. This project helped me gain hands-on experience with front-end development, user authentication, and real-time data management.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
      "Nodejs",
      "MongoDB",
      "Expressjs",
    ],
  },
  {
    id: 1,
    img: freelance,
    role: "Fullstack Developer",
    company: "Freelance",
    date: "April 2024 - July 2024",
    desc: "Collaborated with a teammate to develop the front-end of a client's website through a freelance project. Designed and implemented responsive, user-friendly UI components that aligned with the client's vision. Successfully delivered the project on time, resulting in high client satisfaction and positive feedback.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      "Next Js",
    ],
  },
];

// education section
export const education = [
  {
    id: 0,
    img: ignou,
    school: "Indira Gandhi International Open University, New Delhi",
    date: "Jan 2023 - Dec 2025",
    grade: "7.81 CGPA",
    desc: "I completed my BCA (Bachelor of Computer Applications) from IGNOU, where I developed a strong foundation in programming, data structures, databases, and web development. The flexible learning model helped me focus on practical skills and real-world problem solving.",
    degree: "Bachelor of Computer Applications (BCA)",
  },
  {
    id: 1,
    img: lbs,
    school: "Lal Bahadur Shastri School",
    date: "Apr 2021 - March 2022",
    grade: "88.74%",
    desc: "I completed my Class 12 (CBSE) from Lal Bahadur Shastri School, New Delhi, where I studied Arts with an emphasis on Economics and Computer Science.",
    degree: "CBSE (Class XII), Arts with Economics and Computer Science",
  },
  {
    id: 2,
    img: lbs,
    school: "Lal Bahadur Shastri School",
    date: "Apr 2019 - March 2020",
    grade: "87.54%",
    desc: "I completed my Class 10 education at Lal Bahadur Shastri School, New Delhi (CBSE board), with a focus on Science and Computer Applications.",
    degree: "CBSE (Class X), Science with Computer Applications",
  },
];

// project section
export const projects = [
  {
    id: 0,
    title: "QucikBlog - A Blogging Platform",
    description:"Developed QuickBlog, a full-stack blogging platform built using the MERN stack with Tailwind CSS for UI and JWT authentication for secure access. Enables admin users to create, publish, edit, and delete blog posts, manage comments, and handle content efficiently. Focused on a responsive interface and smooth REST API data flow.",
    image: quickblogLogo,
    tags: ["React JS", "API", "TailwindCSS", "Javascript", "Node JS", "Express JS", "MongoDB","REST API","Authentication"],
    github: "https://github.com/manavpal-dev/QuickBlog_Project.git",
    webapp: "https://quickblog-beta-eight.vercel.app/",
  },
  {
    id: 1,
    title: "VastraCraft - A eCommerce Website",
    description:
      "VastraCraft is a modern and responsive eCommerce website designed specifically for clothing and fashion products. Built with a clean user interface and robust functionality, the platform offers a seamless shopping experience for users across all devices.",
    image: vastracraft,
    tags: ["React JS", "Tailwind Css", "HTML", "CSS", "API"],
    github: "https://codingmasterweb.in/",
    webapp: "https://ecommerce-project-lake-eight.vercel.app/",
  },
  {
    id: 2,
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: github_project_logo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Tailwind Css"],
    github: "https://github.com/manavpal-dev/Github-Profile-Detective.git",
    webapp: "https://github-profile-detective-orpin.vercel.app/",
  },
];
