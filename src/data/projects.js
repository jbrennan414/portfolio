const projects = [
    {
        "name": "WhereI'llBe ⛷",
        "description": "Share your ski calendar with your friends, to carpool or get drinks on the mountain!",
        "uses":["react","firebase", "redux"],
        "link":"https://whereillbe.com/",
        "github":"https://github.com/jbrennan414/where-ill-be",
        "under_construction": false
    },
    {
        "name": "Ski Scraper 🎿",
        "description": "This was a passion project I worked on with a colleague after my ski pass began requiring reservations to ski. This bot scraped reservation sites and would send me a Telegram message if I had an available spot!",
        "uses":["node", "redis"],
        "link":"https://github.com/jbrennan414/ski-scraper",
        "github":"https://github.com/jbrennan414/ski-scraper",
        "youtube":"https://youtu.be/4CnmTISvu3A",
        "under_construction": false
    },
    {
        "name": "WildRydes 🦄",
        "description": "This was an AWS tutorial to learn the basics of a full stack app on AWS. If you need to book a unicorn reservation, this is the app for you!",
        "uses":["aws", "dynamo", "lambda", "cognito", "iam"],
        "link":"https://master.d3su1632stz2i2.amplifyapp.com/",
        "under_construction": false
    },
    {
        "name": "Coronavirus Tracker 🦠",
        "description": "This is a first pass at a coronavirus tracker, using Wes Bos' code along on youtube. In the coming weeks I hope to add to this!",
        "uses":["react"],
        "link":"https://coronavirus-iota-topaz.now.sh/",
        "github":"https://github.com/jbrennan414/coronavirus",
        "under_construction": false
    },
    {
        "name": "GitHub Jobs  💼",
        "description":"This was a YouTube code-along, using a redis database and a node back-end.",
        "uses":["react", "redis", "node"],
        "link":"https://jobs.johnbrennan.codes",
        "github":"https://github.com/jbrennan414/github_jobs",
        "under_construction": false
    },
    {
        "name":"Conference Callz  🖥",
        "description": "Easter is next week and my uncles don't like Google Hangouts or Zoom...so I got to make an instance of Jitsi Meet!",
        "uses":["jitsi", "ec2"],
        "link": "https://conference.johnbrennan.codes",
        "under_construction": true,
    },
    // {
    //     "name": "CountMeIn",
    //     "description": "🏈 A clone of Meetup.com, for pickup sports!",
    //     "uses": ["react", "redux"],
    //     "link": "https://countmein.johnbrennan.codes",
    //     "github": "https://github.com/jbrennan414/countMeIn",
    // },
    {
        "name": "FindMyFourteener 🗻",
        "description": " Do you live in Denver and need to hike a 14'er? This is the site for you!",
        "uses":["react"],
        "link": "https://www.findmyfourteener.com/", 
        "github":"https://github.com/jbrennan414/findmyfourteener",
        "under_construction": false
    },
    {
        "name": "MovieDatabase 🎬 ",
        "description": "This is LevelUpTutorial's into to react tutorial, it's a lot of fun!",
        "uses":["react", "redux"],
        "link": "https://johnbrennan-lumdb.netlify.com/", 
        "github":"https://github.com/jbrennan414/lumdb",
        "under_construction": false
    },
    {
        "name": "WeatherWardrobe ⛅️ ",
        "description":"A wardrobe picker for me! Uses the openweathermap API to grab climate conditions, then translate that into a wardrobe for the day.",
        "uses":["react"],
        "link":"https://my-weather-wardrobe.netlify.com/",
        "github": "https://github.com/jbrennan414/weather-wardrobe",
        "under_construction": false
    },
    // {
    //     "name":"HeismanHangups",
    //     "description": "🏆 Query Site for Heisman trophy winners. Need to know how many Heisman trophy winners were running backs AND Auburn grads? This is your site!",
    //     "uses":["react"],
    //     "link":"https://github.com/jbrennan414/heisman",
    //     "github": "https://github.com/jbrennan414/heisman",
    // },
    // {
    //     "name":"Chat-Example",
    //     "description": "💬 Chat app to learn Socket.IO, verrrry basic",
    //     "uses":["socketio"],
    //     "link":"https://github.com/jbrennan414/chat-example",
    //     "github": "https://github.com/jbrennan414/chat-example",
    // }
];

export default projects;