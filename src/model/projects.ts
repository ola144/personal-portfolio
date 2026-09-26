export interface IProject {
  title: string;
  description: string;
  type: string;
  liveUrl: string;
  image: string;
}

export const projectList: IProject[] = [
  {
    title: "Ecommerce Application",
    description:
      "Modern ecommerce platform built with Angular and TailwindCSS, powered by Appwrite for authentication, database, and storage. Includes user shopping experience and a fully functional admin dashboard.",
    type: "exlusive",
    liveUrl: "https://exclusive-swart-alpha.vercel.app/",
    image: "/images/exclusive.png",
  },
  {
    title: "Pizza Ordering Application",
    description:
      "A MERN stack pizza ordering web application built with React, TypeScript, and TailwindCSS, featuring user authentication, custom pizza building, inventory management, Razorpay test payments, order tracking, and real-time order status updates using Socket.IO.",
    type: "task",
    liveUrl: "https://pizza-hub-kappa.vercel.app/",
    image: "/images/pizzahub.png",
  },
  {
    title: "Real Estate Application",
    description:
      "A MEAN stack real estate web application built with Angular, TypeScript, and TailwindCSS, featuring user authentication, public property discovery, customer booking workflows, role-based dashboards, and responsive dark-mode.",
    type: "task",
    liveUrl: "https://task-app-three-pi.vercel.app/",
    image: "/images/real-estate.png",
  },
  {
    title: "Online Shop Web App",
    description:
      "Fully responsive e-commerce web app built with ReactJS and TailwindCSS, featuring product listings, category filtering, cart management, and a seamless checkout experience. Built with reusable components and optimized for desktop and mobile.",
    type: "shop",
    liveUrl: "https://online-shop-ten-hazel.vercel.app/",
    image: "/images/online-shop.png",
  },
  {
    title: "The Mirror (Mentorship Platform)",
    description:
      "A full-featured mentorship web application developed with Angular and Tailwind CSS, consuming a RESTful API for authentication, session management, and user data. Emphasis was placed on component reusability, clean architecture, and responsive UI design.",
    type: "mirror",
    liveUrl: "https://themirrorllc.com/home",
    image: "/images/mirror-project.JPG",
  },
  {
    title: "Car Booking Web App",
    description:
      "A modern car booking web application built with React, Redux, TailwindCSS, and Firebase, featuring real-time bookings, secure authentication, and a responsive user experience.",
    type: "marent",
    liveUrl: "https://marent.vercel.app/",
    image: "/images/car-booking.png",
  },
  {
    title: "Blue Chat Web Applicaiton",
    description:
      "A MERN stack chat application built with Socket.IO for real-time messaging, secure authentication, online status, and responsive design.",
    type: "chat",
    liveUrl: "https://blue-chat-ui.vercel.app/",
    image: "/images/chat.png",
  },
];
