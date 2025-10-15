export interface ISkills {
  icon: string;
  title: string;
  description: string;
}

export const skillList: ISkills[] = [
  {
    icon: "fa fa-th-large",
    title: "frontend web development",
    description:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: "fa fa-stack-overflow",
    title: "technology stack",
    description:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like Angular and React.",
  },
  {
    icon: "fa fa-flash",
    title: "web optimization",
    description:
      "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  },
  {
    icon: "fa fa-eye",
    title: "user-centric design",
    description:
      "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  },
  {
    icon: "fa fa-file-code-o",
    title: "testing and quality assurance",
    description:
      "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  },
];
