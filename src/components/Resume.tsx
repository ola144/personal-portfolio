import Title from "./Title";
import ResumeDoc from "../assets/documents/AGBAJE OLADIMEJI GBOLAHAN CV.pdf";

const Resume = () => {
  const experience = [
    {
      role: "Volunteer Frontend Developer",
      company: "The Mirror LLC",
      period: "August, 2025 - Present",
      description:
        "Collaborated with developers to implement UI features and optimized website performance using Angular, TailwindCSS, and REST APIs.",
    },
    {
      role: "Frontend Developer Intern",
      company: "FlexiSAF Edusoft Limited",
      period: "September, 2025 - Present",
      description:
        "Completed a training-based internship program focused on frontend development, where I received mentorship, practiced building UI components, and worked on supervised mini-projects to strengthen real-world skills.",
    },
  ];

  const education = [
    {
      degree: "B.Ed in Educational Management",
      school: "Tai Solarin University of Education",
      period: "2019 - 2023",
    },
  ];

  const descprition =
    "Passionate Frontend Developer focused on building dynamic and user-friendly applications with Angular and React. Constantly improving through modern development practices and real-world project implementation.";

  return (
    <section className="py-16 parent parent2 bg-gray-50 text-gray-800">
      <Title title1="" title2="my resume" decscription={descprition} />
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-gray-600">
          Experience
        </h3>
        <div className="gap-5 grid md:grid-cols-2 grid-cols-1">
          {experience.map((item, index) => (
            <div
              key={index}
              className="p-5 border-l-4 border-gray-600 bg-white shadow-sm rounded-md xl:h-[220px] lg:h-[270px] md:h-[250px] h-fit"
            >
              <h4 className="lg:text-xl md:text-lg sm:text-xl text-sm font-semibold">
                {item.role} - {item.company}
              </h4>
              <span className="sm:text-sm text-xs text-gray-500">
                {item.period}
              </span>
              <p className="mt-3 text-justify text-gray-600 lg:text-lg md:text-sm text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-600">Education</h3>
        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="p-5 border-l-4 border-gray-600 bg-white shadow-sm rounded-md"
            >
              <h4 className="lg:text-xl md:text-lg sm:text-xl text-sm font-semibold">
                {item.degree}
              </h4>
              <span className="sm:text-sm text-xs text-gray-500">
                {item.school} | {item.period}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Download Button */}
      <div className="text-center mt-10">
        <a
          href={ResumeDoc}
          download
          className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition-all"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
