const DATA = {
  SKILLS_DATA: [
    {
      id: "html",
      title: "HTML",
      src: "https://img.icons8.com/ios/250/000000/html-5--v2.png",
      desc: "Knowledge in accessibility and SEO requirements, WCAG principles, and writing clean semantic elements"
    },
    {
      id: "css",
      title: "CSS",
      src: "https://img.icons8.com/ios/250/000000/css3.png",
      desc:
        "a deep understanding of the box-model, adept proficiency in using flex-box and grid, and the ability to turn any design into reality"
    },
    {
      id: "js",
      title: "Javascript",
      src: "https://img.icons8.com/ios/250/000000/javascript--v1.png",
      desc:
        "knowledge in es6 syntax, Ajax and async processing, the event loop and general OOP and functional programming concepts"
    },
    {
      id: "sass",
      title: "Sass",
      src: "https://img.icons8.com/ios-filled/250/000000/sass.png",
      desc:
        "knowledge in all sass concepts including modules, variables, mixins, nesting, and loops"
    },
    {
      id: "react",
      title: "React",
      src: "https://img.icons8.com/wired/256/000000/react.png",
      desc:
        "knowledge in everything from routing, to class and functional components, to custom hooks, I can create any UI you could imagine"
    },
    {
      id: "node",
      title: "Node",
      src: "https://img.icons8.com/windows/256/000000/node-js.png",
      desc:
        "knowledge of the node package manager as well as server-side rendering, view-engines, routing, and building RESTful apis"
    },
    {
      id: "express",
      title: "Express",
      src: "https://img.icons8.com/windows/256/000000/node-js.png",
      desc:
        "knowledge in express routing and using express HTTP methods and middlewear"
    },
    {
      id: "sql",
      title: "SQL",
      src: "https://img.icons8.com/ios/100/000000/database.png",
      desc:
        "knowledge in querying Postgres and MySQL databases using SQL"
    },
    {
      id: "git",
      title: "Git",
      src: "https://img.icons8.com/ios/250/000000/git.png",
      desc:
        "understanding of version control and git workflows as well as pushing and pulling from remote repositories on github"
    },
    {
      id: "jira",
      title: "Jira",
      src: "https://img.icons8.com/ios/250/000000/jira.png",
      desc:
        "understanding of working with jira for project management using kanban boards or other similar project management layouts"
    }
  ],

  PROJECTS_DATA: [
    {
      id: "players-plug",
      title: "Player's Plug",
      thumbnail: "/imgs/players-plug-img.png",
      desc:
        "Player's Plug is a web app that allows users to view the best pc video game deals across the entire web and add them to a wishlist if they make an account",
      skills: ["react", "sass", "webpack", "steam api", "cheapshark api", "node", "express", "firebase", "PostgreSQL"],
      filter: ["Featured"],
      github: "https://github.com/nather22/game-deals-site",
      live: "https://players-plug.herokuapp.com/"
    },
    {
      id: "canvas-arcade",
      title: "Canvas Arcade",
      thumbnail: "/imgs/canvas-arcade.png",
      desc:
        "A site I built to host a bunch of html canvas games I made, also wrote an api and database for a global highscore system",
      skills: ["html","javascript", "css", "node", "express", "PostgreSQL"],
      filter: ["Featured"],
      github: "https://github.com/nather22/CanvasArcade",
      live: "https://canvas-arcade.herokuapp.com/"
    },
    {
      id: "my-love",
      title: "For My Girlfriend",
      thumbnail: "/imgs/my-love.png",
      desc:
        "A web app I made for my girlfriend and I that hosts a few slideshows of us and allows us to send messages to eachother",
      skills: ["react", "css", "node", "express", "PostgreSQL"],
      filter: ["Featured"],
      github: "https://github.com/nather22/ILoveYou",
      live: "https://jenna-my-love.herokuapp.com/"
    },
    {
      id: "portfolio",
      title: "Personal Portfolio",
      thumbnail: "/imgs/portfolio-img.png",
      desc:
        "My personal portfolio, the site you're currently on, written in React and scss",
      skills: ["react", "sass", "webpack"],
      filter: [""],
      github: "https://github.com/nather22/Portfolio",
      live: "#"
    },
    {
      id: "color-picker",
      title: "Color Picker Game",
      thumbnail: "/imgs/color-picker-img.png",
      desc:
        "A simple game written in pure javascript where you have to pick the colored square corresponding to the rgb value you are given.",
      skills: ["javascript", "css", "html"],
      filter: [""],
      github: "https://github.com/nather22/color-picker-game",
      live: "https://lucid-murdock-887a65.netlify.app/"
    },
  ]
};

export default DATA;
