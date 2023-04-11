import {
  SiKotlin,
  SiFirebase,
  SiFastlane,
  SiGmail,
  SiTypescript,
  SiTailwindcss,
  SiAntdesign,
  SiRedux,
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
];

const otherTechStacks = [
  {
    name: "CI/CD - Fastlane",
    icon: <SiFastlane fontSize="20px" />,
    url: "https://fastlane.tools/",
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

// const sideProjects = [
//   {
//     name: "3CommasClub NFT",
//     imageUrl: "/3commas.png",
//     alt: "3commasclub",
//     summary:
//       "NFC business card builder linked with unique NFT. Build business profile embed with NFC that allows others to scan and connect.",
//     link: "https://nextjs-3commasclub-frontend.vercel.app/",
//     tech: ["NextJS", "ChakraUI", "Ant Design", "Ant Design Pro"],
//   },
//   {
//     name: "KlusterX Player Portal",
//     imageUrl: "/klusterx_player.png",
//     alt: "klusterx",
//     summary:
//       "Online Casino Player Portal, built with NextJS, TailwindCSS and MantineUI",
//     tech: ["NextJS", "TailwindCSS", "MantineUI", "Zustand"],
//   },
//   {
//     name: "KlusterX Tenant Portal",
//     imageUrl: "/klusterx_tenant.png",
//     alt: "klusterx",
//     summary: "Online Casino Tenant Portal, built with Ant Design Pro",
//     tech: ["UmiJS", "Ant Design", "Ant Design Pro"],
//   },
//   {
//     name: "Chativo",
//     imageUrl:
//       "https://play-lh.googleusercontent.com/tgLiP-ZL-sBuZt2RzDU1tN88Cp7NPbdjF7c0311_dui86f1HrAQM0j4gXaRE0pb5zW0=s360-rw",
//     alt: "chativo",
//     summary:
//       "Enterprise ready live-chat base customer support & engagement software",
//     tech: ["Android", "Kotlin", "Android Jetpack", "Coroutine Flow"],
//     link: "https://play.google.com/store/apps/details?id=io.chativo.chat",
//   },
//   {
//     name: "ChativoV",
//     imageUrl:
//       "https://play-lh.googleusercontent.com/5U5s7sSIuzP6CygPkU2ZYxyOXT-MKv7oiyweGKHgkEgVameOcYt44rnXqCTWZJNZgVqn=s360-rw",
//     alt: "chativo-v",
//     summary:
//       "Live-chat specifically designed for visitors to communicate with real-time agent instantly",
//     tech: ["React Native", "Javascript", "Redux", "Redux Saga", "RealmJS"],
//     link: "https://play.google.com/store/apps/details?id=io.chativo.visitor",
//   },
// ];

const sideProjects = [
  {
    name: "RecipeFinder",
    imageUrl: "/3commas.png",
    alt: "RecipeFinder",
    summary:
      "A recipe search engine that allows users to find, save and share recipes",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    name: "eShopify",
    imageUrl: "/klusterx_player.png",
    alt: "eShopify",
    summary: "An online marketplace where users can buy and sell products",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    name: "CryptoTracker",
    imageUrl: "/klusterx_tenant.png",
    alt: "CryptoTracker",
    summary:
      "A cryptocurrency portfolio tracker that allows users to manage their investments",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    name: "Blogify",
    imageUrl:
      "https://play-lh.googleusercontent.com/tgLiP-ZL-sBuZt2RzDU1tN88Cp7NPbdjF7c0311_dui86f1HrAQM0j4gXaRE0pb5zW0=s360-rw",
    alt: "Blogify",
    summary: "A platform for bloggers to publish and manage their articles",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    name: "TaskManager",
    imageUrl:
      "https://play-lh.googleusercontent.com/5U5s7sSIuzP6CygPkU2ZYxyOXT-MKv7oiyweGKHgkEgVameOcYt44rnXqCTWZJNZgVqn=s360-rw",
    alt: "TaskManager",
    summary:
      "A task management app that allows users to create and assign tasks",
    tech: ["React", "Node.js", "Express", "MongoDB"],
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
