import Title from "./Title";
import ResumeDoc from "../assets/documents/AGBAJE OLADIMEJI GBOLAHAN CV.pdf";

const Resume = () => {
  const experience = [
    {
      role: "Frontend Developer",
      company: "The Mirror LLC",
      period: "August, 2025 - Till Date",
      description:
        "Collaborated with developers to implement UI features and optimized website performance using Angular, TailwindCSS, and REST APIs.",
    },
    {
      role: "Frontend Developer Intern",
      company: "FlexiSAF Edusoft Limited",
      period: "September, 2025 - December, 2025",
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

  const description =
    "Passionate Frontend Developer focused on building dynamic and user-friendly applications with Angular and React. Constantly improving through modern development practices and real-world project implementation.";

  return (
    <section className="parent parent2 py-20">
      <div className="max-w-7xl mx-auto">
        <Title
          title1="Work Experience"
          title2="Where I’ve Contributed"
          description={description}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {experience.map((item, index) => (
            <div key={index} className="experience-card p-8">
              <span className="md:text-sm text-xs uppercase tracking-[0.35em] text-violet-300/70">
                {item.period}
              </span>
              <h3 className="mt-4 md:text-2xl text-xl font-semibold text-white">
                {item.role}
              </h3>
              <p className="mt-1 text-slate-400 text-sm">{item.company}</p>
              <p className="mt-4 leading-relaxed text-slate-300 md:text-sm text-xs text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {education.map((item, index) => (
            <div key={index} className="experience-card p-8">
              <h3 className="md:text-2xl text-xl font-semibold text-white">
                {item.degree}
              </h3>
              <p className="mt-2 text-slate-300 text-sm">{item.school}</p>
              <p className="mt-4 text-slate-400 text-sm">{item.period}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center text-center">
          <a href={ResumeDoc} download className="btn-primary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
