import project1Image from '../images/threadingLibrary.png';
import project2Image from '../images/memoryManagement.png';
import project3Image from '../images/fileSystem.png';
import project4Image from '../images/instagramClone.png';
import project5Image from '../images/mapReduce.png';
import project6Image from '../images/mlMoralAnalysis.png';

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
  ];
  
  export default projects;