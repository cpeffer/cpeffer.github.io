import project1Image from '../images/threadingLibrary.png';
import project2Image from '../images/memoryManagement.png';
import project3Image from '../images/fileSystem.png';
import project4Image from '../images/instagramClone.png';
import project6Image from '../images/mlMoralAnalysis.png';
import project9Image from '../images/wordleBot.png';
import instaAccountCreation from '../images/instaAccountCreation.png';
import instaExplore1 from '../images/instaExplore.png';
import instaAccount from '../images/instaAccount.png';

export interface Project {
  id: number;
  title: string;
  briefDescription: string;
  longDescription: string;
  image: string;
  images?: string[]; // Optional field for multiple images
  difficulty: number;
  pdfLink?: string; // Optional field for PDF link
}

const projects: Project[] = [
  {
    id: 1,
    title: "Thread Library",
    briefDescription: "Implemented my own thread library for a multiprocessor by writing the operating system functions for threads, mutexes, condition variables, and cpus.",
    longDescription: "This is undoubtedly the hardest project I have faced in my computer science career. It required more hours than any other project at a deeper level of thinking. This project demanded an intimate understanding of creating and swapping threads, thread lifetimes, timer and processor interruptions, CPU guarding, scheduling orders, and error handling. The difficulty lay in understanding all the possible states a thread could be left in and how to correctly return control from a thread back to the OS. Whenever I describe this project, I center it around solving 'the chicken or the egg' problem for computers: how does the OS correctly allow a thread to use the CPU while ensuring the thread won’t block, so the OS never loses control? Writing and debugging this project was extremely intricate due to multiple threads and concurrency. You might jump out of a thread at one point, return to the OS, go to a separate thread, never knowing when you will come back to the original thread. I also used shared pointers for the first time, which are extremely useful and helpful when dealing with concurrency. Overall, no project has given me more of a headache while also providing a feeling of elation from realizing an edge case I had not considered.",
    image: project1Image,
    difficulty: 5
  },
  {
    id: 2,
    title: "Machine Learning Moral Analysis",
    briefDescription: 'Coauthored a research paper investigating the ability of ML models to predict human morality based solely on textual data from the Reddit community r/AmItheAsshole, utilizing various algorithms and techniques to analyze linguistic patterns and contextual features.',
    longDescription: "This project was a culmination of my interests in machine learning and a result of my capstone course taken at the University of Michigan. For some background, this semester-long course required groups to create their own ML project centered around anything relating to human language. We had to find our own dataset, clean the data, perform different machine learning techniques on the data, and then write a research report. In my group's case, we chose to focus on the Reddit community r/AmItheAsshole, which is a popular forum where users post scenarios and ask if they are in the wrong. For example, an anonymous user might post an argument they’ve had with their spouse and ask others to determine if they were being the 'asshole' or their spouse was. The goal was to determine if machine learning models could accurately predict human morality based on text alone. In addition, we looked for features in the dataset that were more predictive of a specific outcome and thus could lend insight into why the community voted in the way they did. The results were fascinating and raised important questions about the ethical implications of using AI to make moral judgments. This project taught me what it actually means to be a ML engineer and the relentless cycle of cleaning data, training a model, and then analyzing the results. I am extremely proud of the paper that came out of it. Please feel free to read the paper below if this brief description sounded interesting.",
    image: project6Image,
    difficulty: 5,
    pdfLink: "/pdfs/ColtonPefferMoralAnalysis.pdf" // Add the PDF link here
  },
  {
    id: 3,
    title: "Memory Manager",
    briefDescription: "Developed a comprehensive system memory manager that interfaces with applications to abstract physical memory restrictions to virtual memory using swap-backed & file-backed pages and a translation lookaside buffer.",
    longDescription: "The difficulty in this project lay in the complex data structures needed to protect the OS physical memory and the challenging updates required for virtual memory page faults. Physical memory is very limited; however, every application run by the OS gets the illusion of a very large virtual memory space. In this project, it was my job to create the OS functionality that interrupts the currently running process, accesses the hard disk to retrieve the needed data page, and then loads it into physical memory. This required the use of dynamic address translation, a translation looakaside buffer, page tables, and shadow page tables, which keep track of whether a page is resident, dirty, referenced, and its assigned block and file type. All these different factors determine the state of the page and what should happen if it is copied, deleted, or evicted. This project emphasized ideas such as deferring and avoiding work as much as possible, replacement and eviction of pages using a clock algorithm, copy-on-write resource management, and different requirements for read vs. write permissions. I gained a deep appreciation for the usefulness of visually drawing state diagrams for complex data structures and the necessity of meticulous planning before starting to code.",
    image: project2Image,
    difficulty: 4
  },
  {
    id: 4,
    title: "Multithreaded Network File System",
    briefDescription: "Created a persistent network file system and interface which handles the transition from disk memory to the operating system and metadata such as permissions and hierarchical structure.",
    longDescription: "The goal here was to create a server that does the commands like ls, mkdir, cd, touch, delete, etc. This project’s biggest challenge was ensuring any action (file creation, deletion, read, or write) was atomic even with concurrency. This means that if the computer were to crash or a process switches/exits, the action had to be totally completed or not at all. This presents a problem with file systems as you have a hierarchical order in which different blocks of memory need to be altered “at the same time”.  Another challenge comes with writes to disk as that is by far the slowest action and should be done strategically. This project teaches the importance of optimizing for the common case, building atomic actions using shadowing and logging, and how to synchronize threads using shared mutexes and unique locks. Additionally, this file system was setup on a server using sockets. This means the commands were received over a network and had to be handled whether requests were slow or incomplete without crashing.",
    image: project3Image,
    difficulty: 4
  },
  {
    id: 5,
    title: "Instagram Clone",
    briefDescription: "Deployed a fully-functional instagram clone complete with server & client side dynamic pages built using javascript, python, and sql.",
    longDescription: "This project is a clone of Instagram giving users the ability to create accounts, post, comment, like, and all the corresponding deletes. It was completed in three distinct stages where each built upon the last: static pages, server-side dynamic pages, and client-side dynamic pages. All data and images were stored on a backend using sql with sensitive information being encrypted. This was my first time using apis, javascript, react, css, sql, and a number of other full stack technologies. PLEASE EXCUSE THE CSS OF THE SITE! Now I would make it look much prettier. However, I learned some of the most applicable skills to the real world in this project. This includes writing scripts to clean a database, run a server and a client, and run tests. I also went through the full process of deployment to an AWS server. Overall, not the most difficult but probably the project I learned the most useful things from. ",
    image: project4Image,
    images: [
      project4Image,
      instaAccount
    ],
    difficulty: 3
  },
  {
    id: 6,
    title: "Wordle Bot",
    briefDescription: "My friend spoiled the Wordle for me a handful of times so I made a bot that texted him the word for the Wordle everyday at midnight.",
    longDescription: 'Not much more to learn about here. My friend thought he was being funny and I showed him that my major/career is pretty cool. The bot would text him from different numbers everday right at midnight the Wordle word. After about a week of him claiming it didn\'t bother him, he eventually caved and apologized. He said he would do everything he could to avoid seeing it but he would inevitably glance at the word and once you get any letters the Wordle\'s ruined. I love telling that story.',
    image: project9Image,
    difficulty: 1
  }
];

export default projects;