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
    name: "Ant Design",
    icon: <SiAntdesign fontSize="20px" />,
    url: "https://ant.design/",
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
    logo: "",
  },
];

const educations = [
  {
    title: "University Technology Malaysia (UTM)",
    alt: "utm image",
    url: "https://www.utm.my/",
    role: "Bachelor's Degree in Computer Science (Network and Security)",
    skills: ["CGPA - 3.79", "CCNA", "Security Management", "Network Security"],
    period: "Sept 2016 - Sept 2020",
    logo: "/utm.png",
  },
  {
    title: "SMK Mentakab",
    alt: "smk image",
    url: "https://www.facebook.com/pages/category/College---university/Sekolah-Menengah-Kebangsaan-Mentakab-224802077565350/",
    role: "STPM - Science Stream (Physics)",
    skills: ["CGPA - 3.33", "Math T", "Physics", "Chemistry"],
    period: "Jan 2015 - Jun 2016",
    logo: "/smk.png",
  },
];

const sideProjects = [
  {
    name: "3CommasClub NFT",
    imageUrl: "/3commas.png",
    alt: "3commasclub",
    summary:
      "NFC business card builder linked with unique NFT. Build business profile embed with NFC that allows others to scan and connect.",
    link: "https://nextjs-3commasclub-frontend.vercel.app/",
    tech: ["NextJS", "ChakraUI", "Ant Design", "Ant Design Pro"],
  },
  {
    name: "KlusterX Player Portal",
    imageUrl: "/klusterx_player.png",
    alt: "klusterx",
    summary:
      "Online Casino Player Portal, built with NextJS, TailwindCSS and MantineUI",
    tech: ["NextJS", "TailwindCSS", "MantineUI", "Zustand"],
  },
  {
    name: "KlusterX Tenant Portal",
    imageUrl: "/klusterx_tenant.png",
    alt: "klusterx",
    summary: "Online Casino Tenant Portal, built with Ant Design Pro",
    tech: ["UmiJS", "Ant Design", "Ant Design Pro"],
  },
  {
    name: "Chativo",
    imageUrl:
      "https://play-lh.googleusercontent.com/tgLiP-ZL-sBuZt2RzDU1tN88Cp7NPbdjF7c0311_dui86f1HrAQM0j4gXaRE0pb5zW0=s360-rw",
    alt: "chativo",
    summary:
      "Enterprise ready live-chat base customer support & engagement software",
    tech: ["Android", "Kotlin", "Android Jetpack", "Coroutine Flow"],
    link: "https://play.google.com/store/apps/details?id=io.chativo.chat",
  },
  {
    name: "ChativoV",
    imageUrl:
      "https://play-lh.googleusercontent.com/5U5s7sSIuzP6CygPkU2ZYxyOXT-MKv7oiyweGKHgkEgVameOcYt44rnXqCTWZJNZgVqn=s360-rw",
    alt: "chativo-v",
    summary:
      "Live-chat specifically designed for visitors to communicate with real-time agent instantly",
    tech: ["React Native", "Javascript", "Redux", "Redux Saga", "RealmJS"],
    link: "https://play.google.com/store/apps/details?id=io.chativo.visitor",
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
