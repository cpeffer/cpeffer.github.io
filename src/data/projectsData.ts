import project1Image from '../images/threadingLibrary.png';
import project2Image from '../images/memoryManagement.png';
import project3Image from '../images/fileSystem.png';
import project4Image from '../images/instagramClone.png';
import project6Image from '../images/mlMoralAnalysis.png';
import project9Image from '../images/wordleBot.png';
import instaAccount from '../images/instaAccount.png';
import paperPage2 from '../images/paperPage2.png';
import paperPage1 from '../images/paperPage1.png';
import schedulingDiagram from '../images/schedulingDiagram.png';
import resourceTimeline from '../images/resourceTimeline.png';



export interface ProjectData {
  id: number;
  title: string;
  overview: string
  image: string;
  images?: string[]; // Optional field for multiple images
  difficulty: number;
  pdfLink?: string; // Optional field for PDF link
  technologies: string[]; // New field for technologies used
  context: string; // New field for project context
  takeaway: string; // New field for project takeaways
}

const projects: ProjectData[] = [
  {
    id: 1,
    title: "Machine Learning Moral Analysis",
    overview: 'Coauthored a research paper investigating the ability of ML models to predict human morality based solely on textual data from the Reddit community r/AmItheAsshole, utilizing various algorithms and techniques to analyze linguistic patterns and contextual features.',
    image: project6Image,
    images: [
      paperPage1,
      paperPage2,
    ],
    difficulty: 5,
    pdfLink: "/pdfs/ColtonPefferMoralAnalysis.pdf",
    technologies: ["Python", "Pytorch", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    context: "Capstone project for a machine learning course at the University of Michigan.",
    takeaway: "Gained experience in machine learning, data cleaning, model training, and ethical considerations in AI."
  },
  {
    id: 2,
    title: "Thread Library",
    overview: "Implemented my own thread library for a multiprocessor by writing the operating system functions for threads, mutexes, condition variables, and cpus.",
    image: project1Image,
    images: [ schedulingDiagram, resourceTimeline],
    difficulty: 5,
    technologies: ["C++", "Multithreading", "Concurrency"],
    context: "I developed a custom thread library in C++ that supports multithreading operations, mutexes, condition variables, and efficient CPU management on a multiprocessor. My library provides a CPU class (for initialization, interrupts, and context switching), a thread class (for creation, joining, and yielding), and synchronization primitives like mutexes and condition variables (for mutual exclusion and proper ordering). The project also involved solving concurrency issues such as race conditions and deadlocks.",
    takeaway: "I gained an intimate understanding of concurrent programming through building the foundations and abstractions of an operating system thread library."
  },
  {
    id: 3,
    title: "Memory Manager",
    overview: "Developed a comprehensive system memory manager that interfaces with applications to abstract physical memory restrictions to virtual memory using swap-backed & file-backed pages and a translation lookaside buffer.",
    image: project2Image,
    difficulty: 4,
    technologies: ["C++", "Caching Techniques", ""],
    context: "Advanced operating systems course project.",
    takeaway: "Learned about memory management, virtual memory, and the importance of planning and state diagrams."
  },
  {
    id: 4,
    title: "Multithreaded Network File System",
    overview: "Created a persistent network file system and interface which handles the transition from disk memory to the operating system and metadata such as permissions and hierarchical structure.",
    image: project3Image,
    difficulty: 4,
    technologies: ["C++", "Networking", "Hierarchical File Systems", "Atomicity", "Concurrency"],
    context: "Advanced operating systems course project.",
    takeaway: "Learned about file system design, concurrency control, and network programming."
  },
  {
    id: 5,
    title: "Instagram Clone",
    overview: "Deployed a fully-functional instagram clone complete with server & client side dynamic pages built using javascript, python, and sql.",
    image: project4Image,
    images: [
      project4Image,
      instaAccount
    ],
    difficulty: 3,
    technologies: ["JavaScript", "Python", "SQL", "React", "CSS", "AWS"],
    context: "Full stack web development project.",
    takeaway: "Learned about full stack development, API integration, and deployment to AWS."
  },
  {
    id: 6,
    title: "Wordle Bot",
    overview: "My friend spoiled the Wordle for me a handful of times so I made a bot that texted him the word for the Wordle everyday at midnight.",
    image: project9Image,
    difficulty: 1,
    technologies: ["Python", "Twilio API"],
    context: "Personal project for fun.",
    takeaway: "Learned about using APIs and automating tasks with Python."
  }
];

export default projects;