import {
  SiKotlin,
  SiFirebase,
  SiFastlane,
  SiGmail,
  SiTypescript,
  SiTailwindcss,
  SiAntdesign,
  SiRedux,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaAndroid,
  FaJava,
  FaLinkedin,
  FaStackOverflow,
  FaMedium,
  FaGithub,
  FaSass,
  FaNode,
} from "react-icons/fa";
import { CgAlbum } from "react-icons/cg";
import { TbBrandNextjs } from "react-icons/tb";

const menuLinks = [
  { name: "About Me", route: "/about" },
  // { name: "Experience", route: "/experience" },
  // { name: "Projects", route: "/projects" },
  { name: "Github", route: "/github" },
  { name: "Articles", route: "/article" },
  { name: "Contact", route: "/contact" },
];

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Bileonaire. All Rights Reserved.`,
  author: {
    name: "Bileonaire",
    accounts: [
      {
        url: "https://github.com/Bileonaire",
        icon: <FaGithub />,
        name: "Github",
        type: "gray",
      },
      {
        url: "https://www.linkedin.com/in/leonkioko/",
        icon: <FaLinkedin />,
        name: "Linkedin",
        type: "linkedin",
      },
      {
        url: "https://stackoverflow.com/users/21594979/bileonaire",
        icon: <FaStackOverflow />,
        name: "StackOverflow",
        type: "orange",
      },
      {
        url: "https://medium.com/@kiokoleon",
        icon: <FaMedium />,
        name: "Medium",
        type: "gray",
      },
      {
        url: "mailto:kiokoleon@gmail.com",
        icon: <SiGmail />,
        name: "Gmail",
        type: "red",
      },
    ],
  },
};

const resume = {
  url: "https://drive.google.com/file/d/1_L3DfEVuhlTdcG3hwOkgqt3FHN0uBd-z/view?usp=sharing",
  icon: <CgAlbum />,
  name: "Resume",
};

const mobileTechStacks = [
  {
    name: "Android",
    icon: <FaAndroid fontSize="20px" />,
    url: "https://www.android.com/",
  },
  {
    name: "React Native",
    icon: <FaReact fontSize="20px" />,
    url: "https://reactnative.dev/",
  },
];

const webTechStacks = [
  {
    name: "React",
    icon: <FaReact fontSize="20px" />,
    url: "https://reactnative.dev/",
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs fontSize="20px" />,
    url: "https://nextjs.org/",
  },
  {
    name: "RemixJS",
    icon: <TbBrandNextjs fontSize="20px" />,
    url: "https://nextjs.org/",
  },
  {
    name: "Typescript",
    icon: <SiTypescript fontSize="20px" />,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Javascript",
    icon: <FaJs fontSize="20px" />,
    url: "https://www.javascript.com/",
  },
  {
    name: "Redux & Redux Saga",
    icon: <SiRedux fontSize="20px" />,
    url: "https://redux.js.org/",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss fontSize="20px" />,
    url: "https://tailwindcss.com/",
  },
  {
    name: "SASS",
    icon: <FaSass fontSize="20px" />,
    url: "https://sass-lang.com/",
  },
  {
    name: "Node JS",
    icon: <FaNode fontSize="20px" />,
    url: "https://nodejs.org/en",
  },
  {
    name: "Mongo DB",
    icon: <SiMongodb fontSize="20px" />,
    url: "https://www.mongodb.com/",
  },
  {
    name: "Postgres",
    icon: <SiPostgresql fontSize="20px" />,
    url: "https://www.postgresql.org/",
  },
];

const otherTechStacks = [
  {
    name: "CI/CD",
    icon: <SiFastlane fontSize="20px" />,
    url: "",
  },
  {
    name: "Firebase",
    icon: <SiFirebase fontSize="20px" />,
    url: "https://firebase.google.com/",
  },
  {
    name: "Github & GitLab",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://www.gitlab.com/",
  },
];

const companies = [
  {
    title: "TradeFiti",
    alt: "Tradefiti",
    url: "https://www.tradefiti.com/",
    role: "Full Stack Engineer",
    skills: ["Next JS", "Node"],
    period: "Oct 2022 - Present",
    logo: "https://media.licdn.com/dms/image/D4D0BAQFRiBvs7Yrd7g/company-logo_200_200/0/1680508062079?e=1689206400&v=beta&t=gUPBP8wa_LQxVwQSsxC7YyrdMnFufJHiziuceoQnU1U",
  },
  {
    title: "TopTal",
    alt: "Toptal",
    url: "https://www.toptal.com/resume/leon-kioko",
    role: "Software Developer",
    skills: [
      "React.js",
      "React Native",
      "Node",
      "JavaScript",
      "Scrum",
      "Team Leadership",
    ],
    period: "Mar 2022 - Present",
    logo: "https://media.licdn.com/dms/image/C560BAQEJlZg66jWL4w/company-logo_200_200/0/1580139518352?e=1689206400&v=beta&t=8QfWC6AgchuL8tRbQIt6uIUaw8yZ8yyZSbMJFFeBReI",
  },
  {
    title: "Raise",
    alt: "Raise",
    url: "https://www.getraise.io/",
    role: "Front-End Engineer",
    skills: ["Remix Js", "Vue", "React", "UI Bakery", "Node JS"],
    period: "Jan 2022 - Present",
    logo: "https://media.licdn.com/dms/image/C4D0BAQFV-cIHAQqCcg/company-logo_200_200/0/1677073101581?e=1689206400&v=beta&t=U_a6AfIxzyZhmryEvprgg1CcbkkB5WAx_pz-u2ElVkE",
  },
  {
    title: "Freelance",
    alt: "freelance",
    url: "https://www.getraise.io/",
    role: "Software Developer",
    skills: ["Next Js", "Vue", "React", "Tailwind CSS", "Node JS"],
    period: "Jun 2020 - Jan 2022",
    logo: "https://media.licdn.com/dms/image/C4D07AQFK5LmvZWWTGg/group-logo_image-shrink_92x92/0/1630999696851?e=1681556400&v=beta&t=OJ3xFGHBf7IbmQGuGemLAPCEht4FLpYL2rkxtIdZoRo",
  },
  {
    title: "Andela",
    alt: "Andela",
    url: "https://andela.com/",
    role: "Product Manager",
    skills: ["Scrum Master", "Team Leadership", "Tasks Management"],
    period: "Jan 2019 - Oct 2019",
    logo: "https://media.licdn.com/dms/image/C560BAQHOiEePQQlQ8g/company-logo_200_200/0/1656607039747?e=1689206400&v=beta&t=zQwY88J9p5UcOkRiBMUWbW8DTCFPwHUbLVo-aZxEc6w",
  },
  {
    title: "Andela",
    alt: "Andela",
    url: "https://andela.com/",
    role: "Software Engineer",
    skills: [" Javascript", "Python", "Tasks Management"],
    period: "Jul 2018 - Oct 2019",
    logo: "https://media.licdn.com/dms/image/C560BAQHOiEePQQlQ8g/company-logo_200_200/0/1656607039747?e=1689206400&v=beta&t=zQwY88J9p5UcOkRiBMUWbW8DTCFPwHUbLVo-aZxEc6w",
  },
  {
    title: "Certitiude Consultancy",
    alt: "freelance",
    url: "",
    role: "Freelance Software Developer",
    skills: ["Javascript", "HTML", "CSS"],
    period: "Jul 2017 - Jul 2018",
    logo: "https://media.licdn.com/dms/image/C4D0BAQFJHmwUQfEEMw/company-logo_200_200/0/1554571923945?e=1689206400&v=beta&t=hG7Gq_gNTq7trRBuaPdEtx8fuk5zqUGej-xgcfbkoFA",
  },
];

const educations = [
  {
    title: "Udemy",
    alt: "utm image",
    url: "https://www.utm.my/",
    role: "Javasript Online Courses",
    skills: ["Node JS", "React JS", "Microservices", "Next JS", "Remix"],
    period: "Jan 2018 - Present",
    logo: "https://media.licdn.com/dms/image/C4D0BAQFQr9e68bBOPQ/company-logo_200_200/0/1626275253364?e=1689206400&v=beta&t=mx7LTaZFuiMmoyWk7PB1rkFWDUtaMBhr679G4XvGJIs",
  },
  {
    title: "Andela Bootcamp",
    alt: "utm image",
    url: "https://www.utm.my/",
    role: "Fast Paced Project Based Bootcamp",
    skills: ["Django", "React", "Angular"],
    period: "Jul 2018 - Sept 2018",
    logo: "https://media.licdn.com/dms/image/C560BAQHOiEePQQlQ8g/company-logo_200_200/0/1656607039747?e=1689206400&v=beta&t=zQwY88J9p5UcOkRiBMUWbW8DTCFPwHUbLVo-aZxEc6w",
  },
  {
    title: "Multimedia University",
    alt: "utm image",
    url: "https://www.utm.my/",
    role: "Bachelor's Degree in Film Production and Animation",
    skills: ["Adobe", "HTML", "CSS", "Animation", "UI/UX"],
    period: "Sept 2014 - Sept 2018",
    logo: "https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/327166290_572608031107004_5876552445189546049_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEcJrGyj6cEgcViEcOK-EAgXeKSzsVr1nhd4pLOxWvWeHaWKln1IiHxX_THUAA6fEE&_nc_ohc=OoPSm4jbYHsAX-mvFkY&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fmba5-1.fna&oh=00_AfBu7bjqExyaRnubs55WK-YslLdy5qpOevbVNaDwXuZk_Q&oe=6435F159",
  },
];

const sideProjects = [
  {
    name: "Raise",
    imageUrl: "/raise.png",
    alt: "Raise",
    summary:
      "Raise is the best place for growing African startups to manage equity, seed rounds and legal compliance. Close deals 2x faster for a third of the cost with this all-in-one platform.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Remix JS", "Vue JS"],
    link: "https://www.getraise.io/",
  },
  {
    name: "Admin Dashboard",
    imageUrl: "/adminDashboard.png",
    alt: "Raise",
    summary:
      "Built an admin dashboard at Raise for better decision making based on the metrics captured on the dashboard. UI Bakery is a low-code platform to build web apps you never had time for.",
    tech: ["Javascript", "UI Bakery"],
  },
  {
    name: "Tradefiti",
    imageUrl: "/tradefiti.png",
    alt: "tradefiti",
    summary:
      "The fastest and most efficient web-based platform to Journal your Trades, Get advanced analytics to Improve your trading, manage your accounts and copying trades",
    tech: ["React", "Node.js", "Express", "Postgres", "GCP"],
    link: "https://www.tradefiti.com/",
  },
  {
    name: "Real Estate App",
    imageUrl: "/realestate.png",
    alt: "CryptoTracker",
    summary:
      "A real estate application to Explore Apartments, builder floors, villas and more",
    tech: ["React", "Next.JS", "Chakra UI", "Rapid API"],
    link: "https://bileonaire-real-estates.vercel.app/",
  },
  {
    name: "Blogify",
    imageUrl: "/blogapp.png",
    alt: "Blogify",
    summary: "A platform for bloggers to publish and manage their articles",
    tech: [
      "React",
      "Next.JS ",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "GraphQL",
    ],
  },
  {
    name: "Instagram Clone",
    imageUrl: "/instagram.png",
    alt: "insta",
    summary:
      "A clone for the instagram inage sharing application",
    tech: [
      "React",
      "Next.Js",
      "Tailwind CSS",
      "Firebase V9",
      "NextAuth",
      "Recoil",
    ],
  },
];

export {
  menuLinks,
  webTechStacks,
  mobileTechStacks,
  otherTechStacks,
  siteConfig,
  resume,
  companies,
  educations,
  sideProjects,
};
