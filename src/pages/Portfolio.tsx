import { useState } from "react";
import { Eye, ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  category: string;
  image: string;
  color: string;
  description: string;
  timeline: string;
  liveUrl: string;
  githubUrl: string;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filters = ["All", "Web Design", "Applications", "Web Development"];

  const projects: Project[] = [
    {
      title: "Finance",
      category: "Web Development",
      image: "🏦",
      color: "from-blue-500/20 to-blue-600/20",
      description: "A comprehensive financial management platform with real-time analytics and automated reporting features.",
      timeline: "January 2024 - March 2024",
      liveUrl: "https://finance-demo.example.com",
      githubUrl: "https://github.com/username/finance-app",
    },
    {
      title: "Orizon",
      category: "Web Design",
      image: "📊",
      color: "from-purple-500/20 to-purple-600/20",
      description: "Modern business dashboard with intuitive data visualization and seamless user experience.",
      timeline: "December 2023 - February 2024",
      liveUrl: "https://orizon-demo.example.com",
      githubUrl: "https://github.com/username/orizon",
    },
    {
      title: "Fundo",
      category: "Web Design",
      image: "💼",
      color: "from-green-500/20 to-green-600/20",
      description: "Elegant portfolio website showcasing creative work with smooth animations and responsive design.",
      timeline: "October 2023 - November 2023",
      liveUrl: "https://fundo-demo.example.com",
      githubUrl: "https://github.com/username/fundo",
    },
    {
      title: "Brawlhalla",
      category: "Applications",
      image: "📱",
      color: "from-pink-500/20 to-pink-600/20",
      description: "Cross-platform mobile application for gaming community with real-time multiplayer features.",
      timeline: "August 2023 - October 2023",
      liveUrl: "https://brawlhalla-demo.example.com",
      githubUrl: "https://github.com/username/brawlhalla",
    },
    {
      title: "DSM",
      category: "Web Design",
      image: "🎨",
      color: "from-orange-500/20 to-orange-600/20",
      description: "Comprehensive design system management tool for maintaining consistent UI/UX across products.",
      timeline: "June 2023 - August 2023",
      liveUrl: "https://dsm-demo.example.com",
      githubUrl: "https://github.com/username/dsm",
    },
    {
      title: "MetaSpark",
      category: "Web Development",
      image: "⚡",
      color: "from-cyan-500/20 to-cyan-600/20",
      description: "High-performance web application built with cutting-edge technologies and optimized for speed.",
      timeline: "April 2023 - June 2023",
      liveUrl: "https://metaspark-demo.example.com",
      githubUrl: "https://github.com/username/metaspark",
    },
    {
      title: "Summary",
      category: "Web Development",
      image: "📝",
      color: "from-red-500/20 to-red-600/20",
      description: "AI-powered content summarization tool that helps users digest information quickly and efficiently.",
      timeline: "February 2023 - April 2023",
      liveUrl: "https://summary-demo.example.com",
      githubUrl: "https://github.com/username/summary",
    },
    {
      title: "Task Manager",
      category: "Applications",
      image: "✅",
      color: "from-indigo-500/20 to-indigo-600/20",
      description: "Productivity application with task tracking, team collaboration, and progress monitoring features.",
      timeline: "December 2022 - February 2023",
      liveUrl: "https://taskmanager-demo.example.com",
      githubUrl: "https://github.com/username/task-manager",
    },
    {
      title: "Arrival",
      category: "Web Development",
      image: "🚀",
      color: "from-yellow-500/20 to-yellow-600/20",
      description: "Landing page builder with drag-and-drop interface and real-time preview capabilities.",
      timeline: "October 2022 - December 2022",
      liveUrl: "https://arrival-demo.example.com",
      githubUrl: "https://github.com/username/arrival",
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
            onClick={() => {
              setSelectedProject(project);
              setIsDialogOpen(true);
            }}
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

      {/* Project Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className={`w-full h-32 bg-gradient-to-br ${selectedProject.color} flex items-center justify-center text-6xl rounded-lg mb-4`}>
                  {selectedProject.image}
                </div>
                <DialogTitle className="text-2xl font-bold text-foreground">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-sm text-primary uppercase tracking-wide">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Description</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Development Timeline</h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedProject.timeline}
                  </p>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Preview
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    variant="secondary"
                    className="flex-1"
                  >
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repo
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Portfolio;
