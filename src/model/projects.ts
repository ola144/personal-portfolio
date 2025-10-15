export interface IProject {
  title: string;
  description: string;
  type: string;
  liveUrl: string;
}

export const projectList: IProject[] = [
  {
    title: "Online Shop Web App (React + TailwindCSS)",
    description:
      "A fully responsive e-commerce web application built with ReactJS and styled using TailwindCSS. The app features product listings, category filtering, a dynamic shopping cart, and a smooth checkout flow. State management is handled using React hooks/Redux, and the UI is optimized for both desktop and mobile devices. Designed with clean, reusable components and modern UI/UX principles.",
    type: "shop",
    liveUrl: "https://online-shop-ten-hazel.vercel.app/",
  },
  {
    title: "Task Management App (Angular + TailwindCSS)",
    description:
      "A responsive task management application built with Angular and styled using TailwindCSS. Admin can create, edit, and organize and assigned tasks with status tracking (To-Do, In Progress, Completed). The app leverages Angular’s component-based architecture and services for clean state management, with firebase backend persistence to retain tasks across sessions. Designed with a modern, intuitive UI to enhance productivity.",
    type: "task",
    liveUrl: "https://task-app-three-pi.vercel.app/",
  },
  {
    title: "Bus Booking App (Angular + TailwindCSS)",
    description:
      "A modern bus booking platform built with Angular and styled using TailwindCSS. The app allows users to search available routes, select travel dates, view seat availability, and book tickets seamlessly. It features a clean and responsive interface, dynamic form validation, and structured state management using Angular services. Designed with a user-friendly flow to make ticket reservations quick and intuitive.",
    type: "bus",
    liveUrl: "https://bus-booking-application.vercel.app/",
  },
];
