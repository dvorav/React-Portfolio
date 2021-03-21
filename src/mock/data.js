import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "Dillon | Full Stack Developer", // e.g: 'Name | Developer'
  lang: "en", // e.g: en, es, fr, jp
  description: "Welcome to my page!", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi my name is",
  name: "Dillon Voravongsy",
  subtitle: "I am a Full Stack Developer",
  cta: "",
};

// ABOUT DATA
export const aboutData = {
  img: "profile.jpg",
  paragraphOne: "",
  paragraphTwo: "",
  paragraphThree: "",
  resume: "", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "into.jpg",
    title: "Inversion",
    info:
      "This app attempts to solve the problems faced by introverted people when they must make conversaton in daily life. Based on anecdotal experience the computer science and coding industries attract some introverted people. This is a fun app that helps introverts navigate awkward social environments. This app will generate jokes and news that will allow the user to engage in that dreadful small talk that makes some introverts uncomfortable.",
    info2: "",
    url: "https://dvorav.github.io/IntroversionApp/",
    repo: "https://github.com/dvorav/IntroversionApp", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "yoke.jpg",
    title: "Yoke",
    info: "Yoke is an online messaging tool, that allows users to join/add a chatroom and have realtime conversations with other users online. Core technology includes Moment.js, Socket.io, Bootstrap, Express, Sequelize-MySQL, Heroku/JawsDB & Handlebars.",
    info2: "",
    url: "https://yokee.herokuapp.com/",
    repo: "https://github.com/dvorav/Yoke2", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "matcht.jpg",
    title: "Matcht",
    info: "Matcht is job search tool that allows users to browse job opportunities based on their location and save to their profile so they can go back and apply for the jobs they are interested in. Swiping left on a job opportunity will remote it from the available jobs list, swiping right will save the job to their profile. Core technology includes the MERN stack, Firebase & React-tinder-card.",
    info2: "",
    url: "https://matcht1.herokuapp.com/profile",
    repo: "https://github.com/kvadou/Matcht", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "Email Me!",
  email: "d.vorav612@gmail.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "twitter",
      url: "https://twitter.com/dillon_vora",
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/dillon-voravongsy-3bb2671ab/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/dvorav",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
