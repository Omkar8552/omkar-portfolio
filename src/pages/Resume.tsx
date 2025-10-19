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
      institution: "University School of the Arts",
      degree: "Bachelor of Fine Arts",
      period: "2007 — 2008",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
    },
    {
      institution: "New York Academy of Art",
      degree: "Master of Fine Arts",
      period: "2006 — 2007",
      description: "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.",
    },
    {
      institution: "High School of Art and Design",
      degree: "Diploma",
      period: "2002 — 2004",
      description: "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
    },
  ];

  const experience = [
    {
      title: "Creative Director",
      company: "Studio Inc.",
      period: "2015 — Present",
      description: "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
    },
    {
      title: "Art Director",
      company: "Design Studio",
      period: "2013 — 2015",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
    },
    {
      title: "Web Designer",
      company: "Creative Agency",
      period: "2010 — 2013",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
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
