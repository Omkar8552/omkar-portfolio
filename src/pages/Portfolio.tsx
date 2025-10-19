import { useState } from "react";
import { Eye } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web Design", "Applications", "Web Development"];

  const projects = [
    {
      title: "Finance",
      category: "Web Development",
      image: "🏦",
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      title: "Orizon",
      category: "Web Design",
      image: "📊",
      color: "from-purple-500/20 to-purple-600/20",
    },
    {
      title: "Fundo",
      category: "Web Design",
      image: "💼",
      color: "from-green-500/20 to-green-600/20",
    },
    {
      title: "Brawlhalla",
      category: "Applications",
      image: "📱",
      color: "from-pink-500/20 to-pink-600/20",
    },
    {
      title: "DSM",
      category: "Web Design",
      image: "🎨",
      color: "from-orange-500/20 to-orange-600/20",
    },
    {
      title: "MetaSpark",
      category: "Web Development",
      image: "⚡",
      color: "from-cyan-500/20 to-cyan-600/20",
    },
    {
      title: "Summary",
      category: "Web Development",
      image: "📝",
      color: "from-red-500/20 to-red-600/20",
    },
    {
      title: "Task Manager",
      category: "Applications",
      image: "✅",
      color: "from-indigo-500/20 to-indigo-600/20",
    },
    {
      title: "Arrival",
      category: "Web Development",
      image: "🚀",
      color: "from-yellow-500/20 to-yellow-600/20",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Portfolio</h2>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
              activeFilter === filter
                ? "bg-gradient-accent text-primary-foreground shadow-accent"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/70"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-secondary rounded-2xl overflow-hidden hover:shadow-accent transition-all duration-300 cursor-pointer"
          >
            <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl`}>
              {project.image}
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Eye className="w-12 h-12 text-primary" />
            </div>

            <div className="p-5">
              <p className="text-xs text-primary uppercase tracking-wide mb-1">{project.category}</p>
              <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
