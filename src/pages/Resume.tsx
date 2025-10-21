import { GraduationCap, Briefcase, BookOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      institution: "COEP Technological University, Pune",
      degree: "Bachelor of Technology",
      period: "2022 — 2026",
      description: "One of India's oldest and most prestigious engineering institutions, renowned for innovation and research.",
    },
    {
      institution: "Government Polytechnic, Kolhapur",
      degree: "Diploma in Computer Engineering",
      period: "2019 — 2022",
      description: "A reputed autonomous institute offering practical, industry-focused technical education.",
    },
    {
      institution: "Dr. Hedgewar Madhyamik Vidyalaya, Mangoli",
      degree: "Secondary Education",
      period: "2015 — 2019",
      description: "A respected state-board school known for its strong academic foundation and values.",
    },
  ];

  const experience = [
    {
      title: "Web Development Intern",
      company: "Softron",
      period: "May 2025 — Jul 2025",
      description: "Developed responsive web apps using React.js, Tailwind CSS, and RESTful APIs to enhance user experience.",
    },
    {
      title: "AI/ML Intern",
      company: "Softron",
      period: "May 2023 — Jun 2023",
      description: "Built and optimized ML models using Python and OpenCV with high detection accuracy.",
    },
    {
      title: "Android Developer Intern",
      company: "Softron",
      period: "Jan 2024 — Mar 2024",
      description: "Developed Android apps using Java, XML, and Retrofit with OCR and API integration.",
    },
  ];

  const skills = [
    { name: "Web Design", level: 80 },
    { name: "Graphic Design", level: 70 },
    { name: "Branding", level: 90 },
    { name: "WordPress", level: 50 },
  ];

  return (
    <div className="animate-fade-in">
      {/* Education section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Education</h2>
        </div>
        
        <div className="space-y-6">
          {education.map((item, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-primary/20">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-accent shadow-accent" />
              <div className="bg-secondary p-6 rounded-2xl hover:bg-gradient-to-br hover:from-secondary hover:to-secondary/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-1">{item.institution}</h3>
                <p className="text-sm text-primary mb-2">{item.period}</p>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Experience</h2>
        </div>
        
        <div className="space-y-6">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-primary/20">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-accent shadow-accent" />
              <div className="bg-secondary p-6 rounded-2xl hover:bg-gradient-to-br hover:from-secondary hover:to-secondary/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-primary mb-2">{item.period}</p>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* My Skills section */}
      <section ref={skillsRef}>
        <h2 className="text-3xl font-bold mb-6 text-foreground">My Skills</h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium">{skill.name}</span>
                <span className="text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-accent rounded-full transition-all duration-1500 ease-out ${
                    isVisible ? "" : "w-0"
                  }`}
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 100}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
