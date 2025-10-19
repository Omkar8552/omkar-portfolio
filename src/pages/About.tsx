import { Code, Palette, Smartphone, Camera } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Code,
      title: "Web Design",
      description: "The most modern and high-quality design made at a professional level.",
    },
    {
      icon: Palette,
      title: "Web Development",
      description: "High-quality development of sites at the professional level.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Professional development of applications for iOS and Android.",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "I make high-quality photos of any category at a professional level.",
    },
  ];

  const testimonials = [
    {
      name: "Daniel Lewis",
      avatar: "🧑‍💼",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcorper suscipit eiusmod elit.",
      date: "14 June, 2021",
    },
    {
      name: "Jessica Miller",
      avatar: "👩‍💼",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcorper suscipit eiusmod elit.",
      date: "14 June, 2021",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* About Me section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">About Me</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
          I enjoy turning complex problems into simple, beautiful and intuitive designs.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
          across your message and identity in the most creative way. I created web design for many famous brand companies.
        </p>
      </section>

      {/* What I'm Doing section */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-6 text-foreground">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-secondary p-6 rounded-2xl hover:bg-gradient-to-br hover:from-secondary hover:to-secondary/50 transition-all duration-300 border border-transparent hover:border-primary/20 group"
              >
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 shadow-accent group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials section */}
      <section>
        <h3 className="text-2xl font-bold mb-6 text-foreground">Testimonials</h3>
        <div className="grid grid-cols-1 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center text-3xl flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
