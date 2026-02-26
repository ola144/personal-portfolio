export interface IProject {
  title: string;
  description: string;
  type: string;
  liveUrl: string;
}

export const projectList: IProject[] = [
  {
    title: "Exclusive Ecommerce Application (Angular + TailwindCSS + Appwrite)",
    description:
      "A full-featured ecommerce application built with Angular, TailwindCSS, and Appwrite for backend services. The platform includes product listing, authentication, cart management, order processing, admin dashboard, and real-time database integration. Appwrite powers authentication, database, and storage, while Angular signals handle reactive state management. Designed with performance, scalability, and clean UI/UX in mind. ",
    type: "exlusive",
    liveUrl: "https://exclusive-swart-alpha.vercel.app/",
  },
  {
    title: "Task Management App (Angular + TailwindCSS)",
    description:
      "A responsive task management application built with Angular and styled using TailwindCSS. Admin can create, edit, and organize and assigned tasks with status tracking (To-Do, In Progress, Completed). The app leverages Angular’s component-based architecture and services for clean state management, with firebase backend persistence to retain tasks across sessions. Designed with a modern, intuitive UI to enhance productivity.",
    type: "task",
    liveUrl: "https://task-app-three-pi.vercel.app/",
  },
  {
    title: "Online Shop Web App (React + TailwindCSS)",
    description:
      "A fully responsive e-commerce web application built with ReactJS and styled using TailwindCSS. The app features product listings, category filtering, a dynamic shopping cart, and a smooth checkout flow. State management is handled using React hooks/Redux, and the UI is optimized for both desktop and mobile devices. Designed with clean, reusable components and modern UI/UX principles.",
    type: "shop",
    liveUrl: "https://online-shop-ten-hazel.vercel.app/",
  },
  {
    title: "The Mirror (Mentorship Platform)",
    description:
      "A full-featured mentorship web application developed with Angular and Tailwind CSS, consuming a RESTful API for authentication, session management, and user data. Emphasis was placed on component reusability, clean architecture, and responsive UI design.",
    type: "mirror",
    liveUrl: "https://themirrorllc.com/home",
  },
];
