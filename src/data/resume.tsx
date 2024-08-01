import { Icons } from "@/components/icons";
import { HomeIcon, HammerIcon, FolderKanban, MessageCircleMore, CodeXmlIcon } from "lucide-react";

export const DATA = {
  name: "Hi, I'm CM 👋",
  initials: "CM",
  url: "https://www.google.com",
  location: "Hong Kong",
  locationLink: "https://www.google.com/maps/place/hong_kong",
  description:
    "Seasoned Product Manager with over 10 years in delivering fintech related web and mobile apps",
  summary:
  "I'm specialized in delivering innovative solutions that drive business growth and enhance client satisfaction. My expertise lies in agile methodologies, cross-functional team leadership, and end-to-end product development. I am adept at translating complex requirements into actionable product features, ensuring timely and successful project delivery in dynamic startup environments.",
  avatarUrl: "/profile.png",
  skills: [
    "Aglie Methodlogy",
    "Product Lifecycle Management",
    "CICD Workflow",
    "UIUX Design",
    "Data-driven Decision Making",
    "Stakeholder Management",
    "Product Roadmap Planning",
    "Project Management",
    "Customer Focus"
    ],
  codings: [
    "SQL",
    "Google Bigquery",
    "React",
    "Python",
    "Postgres",
    "Typescript",
    "Next.js",
    "Node.js",
    "Medusa.js",
    "Tailwind CSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: FolderKanban, label: "Projects" },
    { href: "#skills", icon: HammerIcon, label: "Skills" },
    { href: "#codings", icon: CodeXmlIcon, label: "Codings" },
  ],
  contact: {
    email: "cmchik21@gmail.com",
    tel: "+85251386068",
    social: {
      Whatsapp: {
        name: "Whatsapp",
        url: " https://wa.me/85251386068",
        icon: MessageCircleMore,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cm-chik/",
        icon: Icons.linkedin,

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
      company: "DigiFly",
      href: "",
      badges: [],
      location: "Remote",
      title: "Product Owner",
      logoUrl: "/digifly.png",
      start: "Oct 2021",
      end: "Present",
      description:
        "Spearheaded digital transformation, marketing, webpage and application development services for diverse clients in Hong Kong, engage with stakeholders to gather detailed requirements for new features and enhancements.",
    },
    {
      company: "WeLab Bank",
      badges: [],
      href: "https://welab.bank",
      location: "Hong Kong",
      title: "Digital Product Owner",
      logoUrl: "/welab.png",
      start: "Aug 2019",
      end: "Oct 2021",
      description:
        "Developed and launched the WeLab Bank unsecured personal loan product with a cross-functional loan project delivery team of 8 people in 10 months. Built and launched the WeLab Bank app (The Virtual Bank) in the first year.",
    },
    {
      company: "CryptoBLK",
      href: "https://cryptoblk.com/",
      badges: [],
      location: "Science Park, Hong Kong",
      title: "Business Development Manager",
      logoUrl: "/cryptoblk.png",
      start: "Jul 2018",
      end: "Jul 2019",
      description:
        "Developed and executed trade finance (Open account and Letter of Credit) blockchain platform, and managed the development of blockchain motor insurance application (dApp)",
    },
    {
      company: "Standard Chartered Bank",
      href: "https://sc.com.hk",
      badges: [],
      location: "Hong Kong",
      title: "CRC Manager",
      logoUrl: "/sc.jpg",
      start: "Aug 2014",
      end: "Jun 2018",
      description:
        "Delivered the Bank's loan classification system report system that gathers, inputs, and analyzes data collected via VBA, SQL, and Python to meet HKMA regulatory requirements in under 6 months",
    },
  ],
  education: [
    {
      school: "Scrum.Org",
      href: "https://www.scrum.org/user/1064678",
      degree: "Professional Scrum Product Owner (PSPO I)",
      logoUrl: "/pspo.png",
      start: "2022",
      end: "",
    },
    {
      school: "Said Business School, University of Oxford",
      href: "https://www.sbs.ox.ac.uk/programmes/executive-education/online-programmes/oxford-fintech-programme",
      degree: "Oxford Fintech Program",
      logoUrl: "/oxf.png",
      start: "2018",
      end: "",
    },
    {
      school: "Deeplearning.ai",
      href: "https://www.coursera.org/account/accomplishments/specialization/7WKAFRBSPLCL",
      degree: "Deep Learning Specialization",
      logoUrl: "/dlp.png",
      start: "2018",
      end: "",
    },
    {
      school: "Global Association of Risk Professionals",
      href: "https://www.garp.org/frm",
      degree: "Financial Risk Manager (FRM®)",
      logoUrl: "/frm.png",
      start: "2016",
      end: "",
    },
    {
      school: "Hong Kong University of Science and Technology (HKUST)",
      href: "https://hkust.edu.hk/",
      degree: "Bachelor of Business Administration in Finance and Information Systems",
      logoUrl: "/hkust.png",
      start: "2010",
      end: "2014",
    },
  ],
  projects: [
    {
      title: "Digital Transformation project",
      href: "http://www.shconrad.com/en/home-english/",
      dates: "2021 - Present",
      active: true,
      description:
        "A comprehensive digital solution and digital transformation including migrating email service, website development, lokalization, UX/UI design, and digital strategy consulting.",
      technologies: [
        "Next.js", "CSS", "wordpress", "sendgrid",
      ],
      links: [
        {
          type: "Client",
          href: "https://www.shconrad.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/proj_shconrad.png",
      video:
        "",
    },
    {
      title: "eCommerce platform",
      href: "http://www.medusajs.com/",
      dates: "2023 - Present",
      active: true,
      description:
        "Develop ecommerce platform for small and medium enterprise using Medusa.js and tailwind CSS, including product management, order management, payment gateway, and more.",
      technologies: [
        "Medusa.js",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Medusa Website",
          href: "https://medusajs.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/proj_medusa.png",
      video:
        "",
    },
    {
      title: "Online Booking platform",
      href: "http://www.naturalyogastudio.com/",
      dates: "2021 - 2022",
      active: true,
      description:
        "Developed online booking system for small and medium enterprise using typescript and css, including booking, order, payment, and management system.",
      technologies: [
        "Typescript",
        "CSS",
      ],
      links: [
        {
          type: "Client",
          href: "https://naturalyogastudio.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/proj_natural.png",
      video:
        "",
    },
    {
      title: "Welab Bank Personal instalment Loan",
      href: "https://www.welab.bank/en/feature/personal_instalment_loan/",
      dates: "2020 - 2021",
      active: true,
      description:
        "Designed, developed and launched the [Welab personal instalment loan (PIL)](https://www.welab.bank/en/feature/personal_instalment_loan/) from stretch in 10 months, including end-to-end credit approval and operation platform, application development",
      technologies: [ "Lending","Fintech","Instalment Loan",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.welab.bank/zh/feature/personal_instalment_loan/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "App",
          href: "",
          icon: <Icons.mobileApp className="size-3" />,
        },
      ],
      image: "/proj_pil.png",
      video: "",
    },
    {
      title: "WeLab Bank app",
      href: "https://welab.bank",
      dates: "2019 - 2020",
      active: true,
      description:
        "Launched the Virtual Bank [mobile app](https://apps.apple.com/hk/app/welab-bank-hk-virtual-bank/id1493956050?l=en-GB) with [website](https://www.welab.bank) from stretch in an year, function including onboarding, current & saving account, authentication, notification, statement and more.",
      technologies: ["Onboarding","Saving account","Current Account","Authentication", "Payment"
      ],
      links: [

        {
          type: "Website",
          href: "https://welab.bank",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "App",
          href: "",
          icon: <Icons.mobileApp className="size-3" />,
        },
        
      ],
      image: "/proj_welab_2.png",
      video: "",
    },
    {
      title: "MIDAS (車保e-check)",
      href: "https://www.youtube.com/watch?v=9z9u3SXv7Eg&t=1s",
      dates: "2018",
      active: true,
      description:
        "Motor Insurance DLT-based Authentication System (MIDAS), a DLT-based [webApp](https://midas.hkfi.org.hk/ui/enquiry) allows multiple stakeholders, such as insurers, brokers, policyholders and government departments, to authenticate the motor insurance policy status instantly on the same platform and spot the fraudulent behaviour.",
      technologies: [
        "R3", "Blockchain","Insurance","DLT"
      ],
      links: [
        {
          type: "WebApp",
          href: "https://midas.hkfi.org.hk/ui/enquiry",
          icon: <Icons.webApp className="size-3" />,
        },
      ],
      image: "/proj_midas.png",
      video:
        "",
    },
    {
      title: "Voltron",
      //https://www.business.hsbc.ae/en-gb/campaigns/blockchain/landmark-hsbc-blockchain-transaction
      href: "https://www.business.hsbc.com.cn/en-gb/campaigns/smarter-banking/global-trade-blockchain",
      dates: "2018",
      active: true,
      description:
        "Voltron, a shared blockchain platform co-founded by 8 member banks globally, making trade finance (Letter of Credit) transactions simpler, faster, safer and more transparent.",
      technologies: [
        "Letter of Credit(LC)", "Trade Finance","Blockchain","HSBC"
      ],
      links: [
        {
          type: "Press Release",
          href: "https://www.bain.com/about/media-center/press-releases/2018/trade-finance-solution-voltron-launches-open-platform-on-corda-blockchain/",
          icon: <Icons.file className="size-3" />,
        },
      ],
      image: "/proj_voltron.png",
      video:
        "",
    },    {
      title: "Project LionRock-Inthanon",
      href: "https://www.hkma.gov.hk/media/eng/doc/key-functions/financial-infrastructure/HKMA_BOT_Cross_Border_Payments_Proof_of_Concept_Project_Leaflet.pdf",
      dates: "2019",
      active: true,
      description:
        "A research project of Bank of Thailand and HKMA with an objective of transforming wholesale cross-border payments with streamlined intermediation model, real-time transfer and atomic Payment-versus-Payment (PvP) settlements using Central Bank Digital Currency (CBDC)",
      technologies: [
        "CBDC","Payment","HKMA","RTS"
      ],
      links: [
        
        {
          type: "Press Release",
          href: "https://www.info.gov.hk/gia/general/202001/22/P2020012200529.html",
          icon: <Icons.file className="size-3" />,
        },
      ],
      image: "/proj_inthanon.webp",
      video: "",
    },
  ],
} as const;
