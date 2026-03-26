export interface IProject {
  title: string;
  description: string;
  type: string;
  liveUrl: string;
}

export const projectList: IProject[] = [
  {
    title: "Ecommerce Application (Angular + TailwindCSS)",
    description:
      "Modern ecommerce platform built with Angular and TailwindCSS, powered by Appwrite for authentication, database, and storage. Includes user shopping experience and a fully functional admin dashboard.",
    type: "exlusive",
    liveUrl: "https://exclusive-swart-alpha.vercel.app/",
  },
  {
    title: "Task Management App (Angular + TailwindCSS)",
    description:
      "Responsive task management application built with Angular and TailwindCSS, featuring task creation, editing, assignment, and status tracking (To-Do, In Progress, Completed) with Firebase persistence.",
    type: "task",
    liveUrl: "https://task-app-three-pi.vercel.app/",
  },
  {
    title: "Online Shop Web App (React + TailwindCSS)",
    description:
      "Fully responsive e-commerce web app built with ReactJS and TailwindCSS, featuring product listings, category filtering, cart management, and a seamless checkout experience. Built with reusable components and optimized for desktop and mobile.",
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
  {
    title: "Car Booking Web App",
    description:
      "A modern car booking web application built with React, Redux, TailwindCSS, and Firebase, featuring real-time bookings, secure authentication, and a responsive user experience.",
    type: "marent",
    liveUrl: "https://marent.vercel.app/",
  },
];
