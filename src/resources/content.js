import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Ali",
  lastName: "Cruz III",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Computer Information Systems Graduate",
  avatar: "/images/profile.jpg",
  email: "a.c.shasho@gmail.com",
  location: "America/New_York", // For time zone calculations
  displayLocation: "Bronx, NY", // For display purposes
  languages: ["English"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AliCruz1",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/ali-cruz-iii",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a recent Computer Information Systems graduate from Lehman College, Bronx, NY. I'm passionate about technology, organization, and teamwork. I enjoy building websites, streamlining digital content, and collaborating on tech-driven projects. I'm reliable, adaptable, and a quick learner, always looking for new ways to grow and help my team succeed.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Lehman College – Restaurant Reservation System",
        timeframe: "Fall 2024",
        role: "Team Member / System Organizer",
        achievements: [
          <>Worked with a team to deliver a systems design project on a deadline.</>,
          <>Managed tasks with organized workflows and clear communication.</>,
          <>Ensured accuracy in system design and documentation.</>,
          <>Collaborated closely with teammates to present a working prototype.</>,
        ],
        images: [],
      },
      {
        company: "IsaiahProtects.com – Freelance Web Development",
        timeframe: "Spring 2025",
        role: "Content Organizer",
        achievements: [
          <>Organized website content and digital files efficiently.</>,
          <>Followed project instructions with attention to detail.</>,
          <>Tested site features for functionality and accuracy.</>,
          <>Maintained communication and supported the project from start to finish.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Lehman College, City University of New York",
        description: (
          <>Bachelor of Science in Computer Information Systems (GPA: 3.3, Jan 2025). Relevant coursework: Database Management Systems, Information Systems Design, Systems Analysis, Data Management.</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills & Certifications",
    skills: [
      {
        title: "Office & Data Tools",
        description: <>Proficient in Microsoft Word, Excel, and Google Workspace. Comfortable organizing, tracking, and managing data.</>,
        images: [],
      },
      {
        title: "Web & Tech",
        description: <>Basic experience with HTML, CSS, and web structure. Strong communication and teamwork skills. Reliable, punctual, and always ready to help. Comfortable using computers, office tools, and learning new systems. Physically capable of lifting up to 50 lbs and staying active.</>,
        images: [],
      },
      {
        title: "Certification",
        description: <>Google IT Support Fundamentals (Coursera)</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
