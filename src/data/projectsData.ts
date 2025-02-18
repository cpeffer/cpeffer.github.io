import project2Image from '../images/memoryManagement.png';
import project1Image from '../images/threadingLibrary.png';
import project3Image from '../images/fileSystem.png';
import project4Image from '../images/instagramClone.png';
import project6Image from '../images/mlMoralAnalysis.png';
import project9Image from '../images/wordleBot.png';
import instaAccount from '../images/instaAccount.png';
import paperPage2 from '../images/paperPage2.png';
import paperPage1 from '../images/paperPage1.png';
import schedulingDiagram from '../images/schedulingDiagram.png';
import resourceTimeline from '../images/resourceTimeline.png';
import memoryCache from '../images/memoryCache.png';
import addressTranslation from '../images/addressTranslation.png';
import fileSystem from '../images/fileSystemDiagram.png';
import hierarchicalDiagram from '../images/hierarchicalDiagram.png';



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
    overview: 'Coauthored a research paper investigating the ability of ML models to predict human morality based solely on textual data from the Reddit community r/AmItheAsshole.',
    image: project6Image,
    images: [
      paperPage1,
      paperPage2,
    ],
    difficulty: 5,
    pdfLink: "/pdfs/ColtonPefferMoralAnalysis.pdf",
    technologies: ["Python", "Pytorch", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    context: 'We investigated how well different machine learning models could predict whether a post on Reddit\'s r/AmItheAsshole subreddit would be labeled as "asshole" or "not the asshole".  This is a popular forum where users post scenarios and ask if they are in the wrong (the asshole), followed by a community vote. We engineered features using techniques such as Doc2Vec embeddings, LIWC categories, and n-gram extraction to capture linguistic and contextual patterns in the posts. Our approach compared interpretable models (e.g., logistic regression and random forests) with deep learning architectures (e.g., BERT fine-tuning and bidirectional GRU networks), achieving the highest balanced accuracy with BERT due to its ability to model complex contextual relationships. We also addressed class imbalance and performed extensive feature ablation studies to understand which textual elements most influenced moral judgments.',
    takeaway: "I gained experience in the iterative process of building machine learning models, encompassing data sourcing, cleaning, and processing, through to model training, drawing conclusions, and reasoning about ethical considerations."
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
    overview: "Created a system memory manager which provides the abstraction of a shared virtual memory space using advanced caching techniques to ensure efficient memory management.",
    image: project2Image,
    images: [ memoryCache, addressTranslation],
    difficulty: 4,
    technologies: ["C++", "Caching", "Shadowing"],
    context: "I implemented a virtual memory management system for an operating system. It includes functionalities for handling memory allocation, page faults, and process management like creating and destroying address spaces. Key components include shadow page tables for tracking page states, an eviction clock algorithm for page replacement, and mechanisms for copy-on-write and pinning memory. The system interfaces with simulated hardware to manage physical memory, swap space, and file I/O, ensuring efficient and correct memory operations.",
    takeaway: "I learned how to optimize slow and expensive operations through caching, utilizing shadow page tables and state diagrams to abstract memory contraints."
  },
  {
    id: 4,
    title: "Multithreaded Network File System",
    overview: "Developed a persistent network file system and interface which concurrent clients can use to read, write, and manage files across a network.",
    image: project3Image,
    difficulty: 4,
    images: [ fileSystem, hierarchicalDiagram],
    technologies: ["C++", "Networking", "Hierarchical File Systems", "Atomicity", "Concurrency"],
    context: "I built a multithreaded network file server that supports Create, Read, Write, and Delete (CRID) operations on files and directories organized in a persistent, hierarchical structure, requiring consistency through crashes and outages. The file server uses client-server networking for handling concurrent requests. It ensures atomicity by completing complex operations fully or not at all, maintains consistency through specific ordering of disk writes, and optimizes performance by minimizing disk I/Os and efficiently managing resources.",
    takeaway: "I learned how to maintain persistent data structures through building atomic actions, culminating in the deployment of a network file system."
  },
  {
    id: 5,
    title: "Instagram Clone",
    overview: "Deployed a fully-functional instagram clone complete with server & client side dynamic pages.",
    image: project4Image,
    images: [
      project4Image,
      instaAccount
    ],
    difficulty: 3,
    technologies: ["JavaScript", "Python", "SQL", "CSS", "AWS"],
    context: "This project is a web application that simulates a social media platform, allowing users to register, log in, create, view, and interact with posts. The backend is implemented in Python, utilizing Flask for handling API requests and SQL for database management. The frontend uses JavaScript for dynamic content and user interactions. This project was then deployed online via AWS.",
    takeaway: "I learned how to create a full-stack application from scratch and deploy it to a cloud provider."
  },
  {
    id: 6,
    title: "Wordle Bot",
    overview: "My friend spoiled the Wordle for me a handful of times so I made a bot that texted him the word for the Wordle everyday at midnight.",
    image: project9Image,
    difficulty: 1,
    technologies: ["Python", "Twilio API"],
    context: "After my friend repeatedly spoiled the Wordle, I retaliated by creating a Python bot that texted him the answer daily from different numbers. After a week of claiming indifference, he finally caved and apologized, explaining that he did everything he could to avoid the texts but seeing just one letter ruined the game for him. This bot has since been repurposed to remind friends daily of something important or to text my mom every hour on her birthday.",
    takeaway: "I gained experience using APIs to automate tasks and showed my friend that I am not to be trifled with."
  }
];

export default projects;