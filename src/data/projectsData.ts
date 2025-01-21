import project1Image from '../images/threadingLibrary.png';
import project2Image from '../images/memoryManagement.png';
import project3Image from '../images/fileSystem.png';
import project4Image from '../images/instagramClone.png';
import project5Image from '../images/mapReduce.png';
import project6Image from '../images/mlMoralAnalysis.png';
import project7Image from '../images/Screenshot 2025-01-15 at 10.04.07 AM.png';
import project8Image from '../images/Screenshot 2025-01-15 at 10.04.22 AM.png';
import project9Image from '../images/wordleBot.png';

interface Project {
  id: number;
  title: string;
  briefDescription: string;
  longeDescription: string;
  image: string;
}

interface Project {
    id: number;
    title: string;
    briefDescription: string;
    longeDescription: string;
    image: string;
    difficulty: number;
  }
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Thread Library",
      briefDescription: "Implemented my own thread library for a multiprocessor by writing the operating system functions for threads, mutexes, condition variables, and cpus.",
      longeDescription: "Required an intimate understanding of creating & swapping threads, thread lifetimes, timer & processor interruptions, cpuing guarding, scheduling orders, and error handling.",
      image: project1Image,
      difficulty: 5
    },
    {
        id: 6,
        title: "Machine Learning Moral Analysis",
        briefDescription: 'Authored a comprehensive research paper investigating the ability of ML models to predict human morality based solely on textual data from the Reddit community r/AmItheAsshole, utilizing various algorithms and techniques to analyze linguistic patterns and contextual features.',
        longeDescription: "",
        image: project6Image,
        difficulty: 5
    },
    {
      id: 2,
      title: "Memory Manager",
      briefDescription: "Developed a comprehensive system memory manager that interfaces with applications to abstract physical memory restrictions to virtual memory using swap-backed & file-backed pages and a translation lookaside buffer.",
      longeDescription: "",
      image: project2Image,
      difficulty: 4
    },
    {
      id: 3,
      title: "Multithreaded Network File System",
      briefDescription: "Created a persistent network file system and interface which handles the transition from disk memory to the operating system and metadata such as permissions and hierarchical structure.",
      longeDescription: "",
      image: project3Image,
      difficulty: 4
    },
    {
      id: 4,
      title: "Instagram Clone",
      briefDescription: "Deployed a fully-functional instagram clone complete with server & client side dynamic pages built using javascript, python, and sql.",
      longeDescription: "",
      image: project4Image,
      difficulty: 3
    },
    {
        id: 5,
        title: "MapReduce Server",
        briefDescription: "Built a distrubuted, multi-threaded server that executes user-submitted MapReduce jobs.",
        longeDescription: "",
        image: project5Image,
        difficulty: 2
    },
    {
        id: 7,
        title: "E-commerce Platform",
        briefDescription: "Developed a scalable e-commerce platform with user authentication, product listings, and a shopping cart.",
        longeDescription: "Implemented features such as user authentication, product listings, shopping cart, and order processing. Utilized React for the frontend and Node.js for the backend, with MongoDB as the database.",
        image: project7Image,
        difficulty: 4
      },
      {
        id: 8,
        title: "Weather Forecast App",
        briefDescription: "Created a weather forecast application that provides real-time weather data and forecasts.",
        longeDescription: "Built a weather forecast application using React and integrated with a third-party weather API to provide real-time weather data and forecasts. Implemented features such as location search, current weather, and 7-day forecast.",
        image: project8Image,
        difficulty: 3
      },
      {
        id: 9,
        title: "Wordle Bot",
        briefDescription: "My friend spoiled the Wordle for me a handful of times so I made a bot that texted him the word for the Wordle everyday at midnight.",
        longeDescription: 'Not much more to learn about here. My friend thought he was being funny and I showed him that my major/career is pretty cool. The bot would text him from different numbers everday right at midnight the Wordle word. After about a week of him claiming it didn\'t bother him, he eventually caved and apologized. He said he would do everything he could to avoid seeing it but he would inevitably glance at the word and once you get any letters the Wordle\'s ruined. I love telling that story.',
        image: project9Image,
        difficulty: 1
      }
  ];
  
  export default projects;