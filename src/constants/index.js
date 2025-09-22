import project1 from "../assets/projects/portfolio.jpg";
import project2 from "../assets/projects/monkey.png";
import project3 from "../assets/projects/todo.jpg";
import project4 from "../assets/projects/money.jpg";
import project5 from "../assets/projects/vng.png"
import project6 from "../assets/projects/online_exam.png"
import project7 from '../assets/projects/shopee.png'

export const HERO_CONTENT = `I am a passionate front-end developer with a good foundation in building web applications. As a Computer Science student at VNUHCM - Ho Chi Minh City University of Technology, I have gained experience working with front-end technologies like React and Next.js, learned my self basic about back-end technologies like Node.js, Java Spring, MySQL, and MongoDB. I am eager to apply my knowledge to develop innovative solutions that enhance user experiences and drive business efficiency.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer with a passion for creating efficient and user-friendly web applications. As a senior Computer Science student at VNUHCM - Ho Chi Minh City University of Technology, I have been honing my skills in technologies like React, Next.js, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has grown into a continuous pursuit of learning and problem-solving. I thrive in collaborative environments and enjoy tackling complex challenges to build high-quality solutions. Outside of coding, I stay active, explore new technologies, and work on personal projects to sharpen my skills.`;

export const WORK_EXPERIENCE = [
  {
    company: "TMA Solutions",
    position: "Intern Front-end Developer",
    duration: "June 2025 - September 2025",
    description: ".......",
  },
];

export const PERSONAL_PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "Reactjs", "Tailwind CSS", "Framer Motion"],
    positions: [],
    github: "https://github.com/bluez44/Vinh-portfolio",
    demo: ""
  },
  {
    title: "To do app",
    image: project3,
    description:
      "A small app help user manage their tasks with features like adding tasks, editing tasks, and deleting tasks.",
    technologies: ["HTML", "CSS", "Reactjs", "Tailwind CSS"],
    positions: [],
    github: "https://github.com/bluez44/todo-app",
    demo: ""
  },
  {
    title: "Money Manager (In developing)",
    image: project4,
    description:
      "A money manager app with features like adding transactions, editing transactions, and deleting transactions, as well as a chart to visualize the transactions.",
    technologies: ["HTML", "CSS", "Reactjs", "Nextjs", "Tailwind CSS", "PostgreSQL"],
    positions: [],
    github: "https://github.com/bluez44/my-money",
    demo: ""
  },
  {
    title: "Shopee UI clone",
    image: project7,
    description:
      "A single page UI clone of Shopee.",
    technologies: ["HTML", "CSS"],
    positions: [],
    github: "https://github.com/bluez44/Shopee-clone.github.io",
    demo: "https://bluez44.github.io/Shopee-clone.github.io/"
  },
];

export const TEAM_PROJECTS = [
  {
    title: "Monkey job",
    image: project2,
    description:
      "A user-friendly interface for finding job as well as hiring new employees. Monkey job provide features like adding jobs, editing jobs, applying for jobs and deleting jobs.",
    technologies: ["HTML", "CSS", "Reactjs", "Bootstrap"],
    positions: [
      "Project manager: Oversee the weekly progress of team members and ensure tasks are completed on schedule.",
      "Front-end developer: Develop user interfaces, handle login authentication using username and password, work with APIs to implement all website needed funcitonalities.", 
    ],
    github: "https://github.com/bluez44/Monkeyjob-Frontend",
    demo: "https://monkey-job.vercel.app/"
  },
  {
    title: "Company website clone (In developing)",
    image: project5,
    description:
      "A website introduce about VNG company and their activity, news, products.",
    technologies: ["HTML", "CSS", "Reactjs", "Bootstrap", "PHP", "MySQL"],
    positions: [
      "Project manager: Oversee the weekly progress of team members and ensure tasks are completed on schedule.",
      "Front-end developer: Develop user interfaces, handle login authentication using username, password, work with APIs to handle guest form about the company", 
      "Back-end developer: Design and implement the server-side logic, including database management and API integration for authentication features, contact forms.", 
    ],
    github: "https://github.com/bluez44/LTW",
    demo: ""
  },
  {
    title: "Online exam website",
    image: project6,
    description:
      "A online exam website allow teacher to create exams in simple way, student can join an eaxm by using exam pass code and id provided by their teacher.",
    technologies: ["HTML", "CSS", "Reactjs", "Nextjs", "Tailwind CSS", "Java Spring", "PostgreSQL"],
    positions: [
      "Front-end developer: Design teacher create quizz, student join quizz page UI; Develop student join quizz, user profile page ", 
    ],
    github: "https://github.com/NguyenVu04/TestMaster_Project",
    demo: ""
  },
]

export const CONTACT = {
  address: "Dorm B - VNUHCM, Mac Dinh Chi street, Dong Hoa, Di An, Binh Duong",
  phoneNo: "+84 396 576 314",
  email: "vlqvinh444@gmail.com",
};