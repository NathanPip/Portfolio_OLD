const DATA = {
  SKILLS_DATA: [
    {
      id: "html",
      title: "HTML",
      src: "https://img.icons8.com/ios/250/000000/html-5--v2.png",
      desc: "a honed ability to write clean, semantic, accessible html"
    },
    {
      id: "css",
      title: "CSS",
      src: "https://img.icons8.com/ios/250/000000/css3.png",
      desc:
        "a deep understanding of the box-model and proficiency in using flex-box and grid"
    },
    {
      id: "sass",
      title: "Sass",
      src: "https://img.icons8.com/ios-filled/250/000000/sass.png",
      desc:
        "knowledge in all sass concepts including modules, variables, mixins, nesting, and loops"
    },
    {
      id: "js",
      title: "Javascript",
      src: "https://img.icons8.com/ios/250/000000/javascript--v1.png",
      desc:
        "knowledge in both object-oriented and functional programming concepts as well as an understanding in best practices and fundamentals"
    },
    {
      id: "react",
      title: "React",
      src: "https://img.icons8.com/wired/256/000000/react.png",
      desc:
        "ability to create clean UIs with knowledge in both class and functional syntax as well as understanding of functional hooks"
    },
    {
      id: "node",
      title: "Node",
      src: "https://img.icons8.com/windows/256/000000/node-js.png",
      desc:
        "knowledge of the node package manager as well as server-side rendering, view-engines, routing, and building RESTful apis"
    },
    // {
    //   id: "express",
    //   title: "Express",
    //   src: "https://img.icons8.com/windows/256/000000/node-js.png",
    //   desc:
    //     "knowledge in express routing and creating basic express servers"
    // },
    {
      id: "git",
      title: "Git",
      src: "https://img.icons8.com/ios/250/000000/git.png",
      desc:
        "understanding of version control and git workflows as well as setting up remote repositories with github"
    },
    {
      id: "jira",
      title: "Jira",
      src: "https://img.icons8.com/ios/250/000000/jira.png",
      desc:
        "understanding of working with jira for project management using kanban boards or other similar management layouts"
    }
  ],

  PROJECTS_DATA: [
    {
      id: "players-plug",
      title: "Player's Plug",
      thumbnail: "/imgs/players-plug-img.png",
      desc:
        "Player's Plug is a simple website that allows you to view all game deals across different video game vendors. Written in ReactJS it utilized the steam and cheapshark api to pull video game info and pricing data.",
      skills: ["react", "sass", "webpack", "steam api", "cheapshark api", "node", "express"],
      filter: ["Featured"],
      github: "https://github.com/nather22/game-deals-site",
      live: "https://jovial-borg-52685f.netlify.app/"
    },
    {
      id: "portfolio",
      title: "Personal Portfolio",
      thumbnail: "/imgs/portfolio-img.png",
      desc:
        "My personal portfolio, the site you're currently on, written in React and scss",
      skills: ["react", "sass", "webpack", "emailJS"],
      filter: ["Featured"],
      github: "https://github.com/nather22/Portfolio",
      live: "#"
    },
    {
      id: "color-picker",
      title: "Color Picker Portfolio",
      thumbnail: "/imgs/color-picker-img.png",
      desc:
        "A simple game written in pure javascript where you have to pick the colored square corresponding to the rgb value you are given.",
      skills: ["javascript", "css", "html"],
      filter: ["Featured"],
      github: "https://github.com/nather22/color-picker-game",
      live: "https://lucid-murdock-887a65.netlify.app/"
    },
  ]
};

export default DATA;
