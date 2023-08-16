import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  omind,
  mysupir,
  w_foto,
  m_foto,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Flutter Developer",
    icon: backend,
  },
  {
    title: "Stock Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web & Mobile Developer",
    company_name: "PT. Omind Muda Berkarya Indonesia",
    icon: omind,
    iconBg: "#383E56",
    date: "June 2022 - July 2023",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developed reusable React components that reduced code redundancy",
      "Documented design patterns for later use as templates in subsequent patches and iterative app development cycles.",
      "Employed coding practices based on commonly accepted standards to establish site layout and user interface.",
      "Resolved app defects by reviewing bug reports and tracking repeatable malfunctions within software titles.",
    ],
  },
  {
    title: "Mobile Developer Internship",
    company_name: "PT. Kunci Transformasi Digital",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - April 2022",
    points: [
      "Verified product success through collaborating with stakeholders and product owners and estimating accurate project deliverability timeframes.",
      "Partnered with team members to learn best practices in software design.",
      "Analyzed source code to identify functionality issues.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "My Supir",
    description:
      "MySupir adalah aplikasi ride hailing berbasis online yang menyediakan layanan sewa supir. Ini menjawab kebutuhan masyarakat modern akan transportasi yang sederhana, nyaman, dan mudah diakses. Inovasi ini mengikuti perubahan mobilitas saat ini dan membantu memenuhi permintaan akan transportasi yang efisien dan praktis.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      }
    ],
    image: mysupir,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Foto-foto website",
    description:
      "Aplikasi Foto-Foto. Dengan antarmuka yang intuitif dan fitur-fitur canggih, aplikasi ini dirancang untuk membawa pengalaman fotografi Anda ke tingkat yang baru.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next-js",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: w_foto,
    source_code_link: "https://github.com/",
  },
  {
    name: "Foto-foto mobile",
    description:
      "Aplikasi Foto-Foto. Dengan antarmuka yang intuitif dan fitur-fitur canggih, aplikasi ini dirancang untuk membawa pengalaman fotografi Anda ke tingkat yang baru.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: m_foto,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
