import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Julian Valbuena",
  initials: "JV",
  url: "https://jv.io",
  location: "Sydney, AU",
  locationLink: "https://www.google.com/maps/place/sydney",
  description:
    "Engineer (SRE), passionate about bulding ML & AI driven products. I love solving problems and building products that make a difference. find me on twitter.",
  summary:
    "2024 a wave of AI startups spawned all over the world, I tweet under Sentient Radar mainly to research and learn about agents and hot to improve efficiency of knowledge workers. In the past, [I pursued a degree in Electronic Engineering, a Master in Information and Communication Technology and AI & ML training](/#education), [Helped build startups and worked in financial sector companies as an SRE], and [My first ML hackaton](/#hackathons).",
  avatarUrl: "https://media.licdn.com/dms/image/v2/C4D03AQFffiN3l93H8g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1655726289562?e=1730937600&v=beta&t=JCE7_qIX1DycwMPldP1KWV6zzXpQDBDV8Bz1773p84U",
  skills: [
    "Python for Data Science",
    "Data Analysis",
    "ML Algorithms",
    "LLM tunning",
    "Python",
    "Docker",
    "Kubernetes",
    "SRE"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sentient.radar@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jvalbuena/jv",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/julian-valbuena-9739913/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Sentient_Radar",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@SentientRadar",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "CommBank",
      href: "https://www.commbank.com.au/",
      badges: [],
      location: "Hybrid",
      title: "Principal Engineer",
      logoUrl: "https://www.commbank.com.au/content/dam/commbank/commBank-logo.svg",
      start: "July 2013",
      end: "Current",
      description:
        "Migrating appliations to the cloud, ensuring cost, reliability, security and performance criteria are met.",
    },
    {
      company: "Ninefold",
      badges: [],
      href: "https://en.wikipedia.org/wiki/Ninefold",
      location: "Hybrid",
      title: "Cloud Engineer",
      logoUrl: "https://en.wikipedia.org/wiki/File:Ninefold_logo_white_on_black.png",
      start: "January 2012",
      end: "July 2013",
      description:
        "Custom build PaaS platform for Ruby on Rails applications.",
    },
    {
      company: "Nextgen",
      href: "https://nextgen.net/#!/home",
      badges: [],
      location: "Sydney, NSW",
      title: "Infrastructure Engineer",
      logoUrl: "https://nextgen.net/assets/images/Home/nextgen-logo.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "P2V and V2V migrations of applications to private cloud, storage and network engineering.",
    }
  ],
  education: [
    {
      school: "MIT IDSS",
      href: "https://idss.mit.edu/academics/idssx/",
      degree: "https://eportfolio.mygreatlearning.com/julian-valbuena",
      logoUrl: "https://idss.mit.edu/wp-content/themes/idss%202015/images/mit-idss-mobile.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Wollongong University",
      href: "https://www.uow.edu.au/",
      degree: "Master of Information and Communication Technology",
      logoUrl: "https://www.uow.edu.au/assets/uow-channel/public/site-assets/images/logo/logo-white.svg",
      start: "2001",
      end: "2002",
    },
    {
      school: "Universidad Pontificia Bolivariana",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "https://www.upb.edu.co/wcs_statics/pp/img/Logo-UPB-2022.svg",
      start: "1996",
      end: "2000",
    },
  ],
  projects: [
    {
      title: "Research Agent - Local LLM",
      href: "https://github.com/jvalbuena/ollama-local-ui",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
        "I'm trying out a fully local research agent, this agent will research any topic and write down a few paragraphs it has the ability to search the web for information and write about it. It works relatively ok on macbook M3 series.",
      technologies: [
        "crewai.js",
        "Node.js",
        "Magic UI",
        "ollama"
      ],
      links: [
        {
          type: "Codebase",
          href: "https://github.com/jvalbuena/ollama-local-ui",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
 ],
  hackathons: [
    {
      title: "MIT IDSS",
      dates: "Feb 09th - 11th, 2024",
      location: "Remote",
      description:
        "Developed a prediction model to predict customer satisfaction for passengers in the Shinkansen, 1st runner up",
      image:
        "https://photos.app.goo.gl/2FjZqVZ7EdArrCf58",
      mlh: "",
      links: [],
    },
  ],
} as const;
