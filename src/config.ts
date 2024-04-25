import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Mark Mauro",
  logo: "/block.png",
  email: "markymauro@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "github",
    url: "https://github.com/markymauro13",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "twitter (x)",
    url: "https://twitter.com/markymauro",
    icon: "mdi:twitter",
    external: true,
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Mark Mauro",
    description:
      "Software Engineer based at the Jersey Shore. Interested in SaaS.",
    image: identity.logo,
  },
  role: "/software_engineer",
  description:
    "trying to make money online. 💸",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Mark Mauro",
    description:
      "Software Engineer trying to make $$$ online",
    image: identity.logo,
  },
  subtitle: "/about",
  about: {
    description: `<ul>
      <li>i'm a swe @ <a href="https://www.abercrombie.com/shop/us">abercrombie &amp; fitch co.</a></li>
      <li>doing things with computers since 2015</li>
      <li>went to msu between 2019-2022</li>
      <li>jersey shore native</li>
      <li>trying to build a SaaS business</li> </ul>

`, // Markdown is supported
    image_l: {
      url: "/fuji.gif",
      alt: "Left Picture",
    },
    image_r: {
      url: "/osaka.gif",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I love building stuff with software. Here's a glimpse of my experience.`, // Markdown is supported
    items: [
      {
        title: "Software Engineer",
        company: {
          name: "Abercrombie & Fitch Co.",
          image: "/anf.jpeg",
          url: "https://www.abercrombie.com/shop/us",
        },
        date: "Jul 2023 - Present",
      },
      {
        title: "System Engineer Intern",
        company: {
          name: "Abercrombie & Fitch Co.",
          image: "/anf.jpeg",
          url: "https://www.abercrombie.com/shop/us",
        },
        date: "Jun 2022 - Aug 2022",
      },
      {
        title: "Software Engineer Intern",
        company: {
          name: "FedEx Services",
          image: "/fedex.jpeg",
          url: "https://www.fedex.com/en-us/about.html",
        },
        date: "Jun 2021 - Aug 2021",
    },
    ],
  },
  connect: {
    description: `Follow me on different platforms!`, // Markdown is supported
    links: socialLinks,
  },
};  

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Mark Mauro",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "/projects",
  projects: [
    {
      title: "Yen2USD",
      description: "In-page currency conversion for east-asian languages",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/markymauro13/Yen2USD",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Mark Mauro",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "/blog",
};
