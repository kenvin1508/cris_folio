/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Cris",
  title: "Hi. I am Cris",
  subTitle: emoji(
    "My passion is bring people together, and building vibrant, positive and engaged Web3 community."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "crisinweb3@gmail.com",
  twitter: "https://x.com/darealcriss",
  telegram: "https://t.me/crisinweb3",
  calendly: "https://calendly.com/crisinweb3/30min",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "How I Empower Your Project",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Economics Ho Chi Minh City",
      logo: require("./assets/images/ktqd_logo.png"),
      subHeader: "Master's in Economic Laws",
    },
    {
      schoolName: "University of Medicine and Pharmacy at HCMC",
      logo: require("./assets/images/dhyd_logo.png"),
      subHeader: "General Medical Student ",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Vietnamese", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "English",
      progressPercentage: "70%"
    },
    {
      Stack: "Discord Setup & Auditing",
      progressPercentage: "90%"
    },
    {
      Stack: "Event – host",
      progressPercentage: "95%"
    },
    {
      Stack: "Teamwork",
      progressPercentage: "80%"
    },
    {
      Stack: "Problem-solving",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Community Leader",
      company: "Seismic",
      companylogo: require("./assets/images/seismic_logo.png"),
      desc: "Seismic is an L1 blockchain capable of encrypting arbitrary smart contracts. Deploying a single Solidity contract is sufficient to launch an encrypted DeFi protocol, no custom infrastructure required.",
      link: "https://www.seismic.systems"
    },
    {
      role: "Community Mod",
      company: "Mycel",
      companylogo: require("./assets/images/mycel_logo.png"),
      desc: "Mycel is a decentralized infrastructure that synchronizes blockchain state machines. It enables seamless cross-chain communication, allowing assets and data to move freely without requiring custom bridges or wrappers.",
      link: "https://www.mycel.land"
    },
    {
      role: "Community Mod",
      company: "Aarc",
      companylogo: require("./assets/images/aarc_logo.png"),
      desc: "Aarc is a modular network designed for unified, omnichain decentralized applications (dApps). Aarc developers can seamlessly unify users' accounts and liquidity from any blockchain without the complexities of multi-chain deployment, dApp migration, or contract modifications",
      link: "https://www.aarc.xyz"
    },
    {
      role: "Community Mod",
      company: "Mango",
      companylogo: require("./assets/images/mango_logo.png"),
      desc: "Multi-VM Omni-Chain Infrastructure Network, integrates the core advantages of OPStack and Move language, supports both EVM and MoveVM.",
      link: "https://mangonet.io"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections


const introduction = `Hello, I’m Cris, from Vietnam, and you’re probably wondering: "Why is there a Mads Mikkelsen look-alike here?" Haha, I love this character because he’s smart and cool, and, fun fact, almost everyone I know in Web3 sees me through that persona. Let me share a little bit about myself. Although I spent my first two years studying at a medical school, life took me down a different path, and I decided to switch gears and pursue something I’m passionate about. I later graduated with a degree in Economics from one of the top universities in Vietnam, where I not only deepened my knowledge of economics but also had the chance to study law. This multidisciplinary foundation helped me develop strong analytical thinking and effective communication skills. My real-world experiences, both in work and life, have taught me how to blend theory and practice to achieve the best results. Plus, my proficiency in English has opened up opportunities to access international information and networks, enhancing my career value. 

2020 marked a pivotal turning point in my career when I ventured into the world of cryptocurrency. At that time, I accidentally got involved with PancakeSwap on BSC Chain and Uniswap on ETH, and received my first airdrop rewards, which completely blew me away. Initially, I saw it as just an investment opportunity, but as I delved deeper, I realized the limitless potential of this technology. My growing passion pushed me to explore further, and I came to understand that I could do more than just be a user, investing in coins and receiving airdrops, I could actively contribute to the development of projects.

I began to craft a plan for deeper involvement in this space and decided to become a key player in the community, adding value not just as a participant, but as a project builder. Starting from scratch, I quickly learned and honed the skills necessary to become a valuable Moderator, contributing to the growth and engagement of the community. After spending a significant amount of time in the role of Moderator, I now feel confident and ready to take the next step in my journey, with the goal of becoming a Community Manager, a role I believe will allow me to make meaningful changes and provide lasting contributions to the project’s development.`;


const talkSection = {
  title: "My Story",
  subtitle: introduction,
  talks: [],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I am available on almost every social media. You can message me, I will reply within 24 hours",
  info: "Community Manager | Moderator | Ambassador in Web3",
  email_address: "crisinweb3@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "darealcriss", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer


// portfolio.js
const empowerSection = {
  display: true,
  title: "How I Empower Your Project",
  subTitle:
    `"I’m a full stack community manager that excels at building and scaling moderation teams, creating and executing community campaigns, and evangelizing Web3 brands."`,
  sections: [
    {
      title: "Moderation & Support",
      icon: "🎧",
      content: [
        "I build teams of moderators, strategically located across the globe and proficient in multiple languages, provides 24/7 moderation of Discord servers and Telegram groups, ensuring that the needs of your community are consistently met. The geographical and linguistic diversity within my team enables me to effectively manage different communities across projects.",
        "Additionally, I have technically proficient moderators on my team, which allows me to offer comprehensive technical assistance, such as running nodes, optimizing network configurations, and providing troubleshooting support during testnet processes."
      ]
    },
    {
      title: "Discord/Telegram Setup & Auditing",
      icon: "🤖",
      content: [
        "I create and audit secure Discord/Telegram servers tailored to your project, providing a safe and organized environment for your community.",
        "Additionally, with extensive expertise in Discord and Telegram bots, I enable your team to execute desired activities and initiatives on these platforms with ease and security."
      ]
    },
    {
      title: "Community Initiatives & Engagement",
      icon: "🔄",
      content: [
        "I create and execute strategic and customized community initiatives with project-specific narratives to foster engagement and growth within your project. Through strong collaborations with influencers and KOLs, I boost your initiatives.",
        "Additionally, leveraging my expertise in platforms such as Galxe, Zealy, and Intract, I offer comprehensive support to your team in executing community initiatives on these platforms.",
        "Furthermore, I have skilled photoshop specialists and crypto X (formerly Twitter) specialists on my team to manage your social media presence and create visually engaging content for your project’s social media campaigns."
      ]
    },
    {
      title: "Partnerships & Investment",
      icon: "🤝",
      content: [
        "I arrange strategic meetings and potential collaborations with prominent projects in relevant fields and coordinate meetings with key Venture Capitalists, presenting potential investment opportunities for your project.",
        "I facilitate discussions to align projects with industry trends and provide detailed reports on potential partners and investors."
      ]
    }
  ]
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  empowerSection
};
