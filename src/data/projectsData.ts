import project1Image from '../images/generated_image_1736969512654.png';
import project2Image from '../images/Screenshot 2025-01-15 at 10.04.15 AM.png';
import project3Image from '../images/Screenshot 2025-01-15 at 10.04.22 AM.png';
import project4Image from '../images/Screenshot 2025-01-15 at 10.10.07 AM.png';

interface Project {
  id: number;
  title: string;
  briefDescription: string;
  longeDescription: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Thread Library",
    briefDescription: "Implemented my own thread library for a multiprocessor by writing the operating system functions for threads, mutexes, condition variables, and cpus.",
    longeDescription: "Required an intimate understanding of creating & swapping threads, thread lifetimes, timer & processor interruptions, cpuing guarding, scheduling orders, and error handling.",
    image: project1Image
  },
  {
    id: 2,
    title: "Memory Manager",
    briefDescription: "Developed a comprehensive system memory manager that interfaces with applications to abstract physical memory restrictions to virtual memory using swap-backed & file-backed pages and a translation lookaside buffer.",
    longeDescription: "",
    image: project2Image
  },
  {
    id: 3,
    title: "Multithreaded Network File System",
    briefDescription: "Created a persistent network file system and interface which handles the transition from disk memory to the operating system and metadata such as permissions and hierarchical structure.",
    longeDescription: "",
    image: project3Image
  },
  {
    id: 4,
    title: "Project Four",
    briefDescription: "This is a brief briefDescription of project four.",
    longeDescription: "",
    image: project4Image
  }
];

export default projects;