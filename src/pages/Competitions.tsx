import { useState } from "react";
import { Eye, ExternalLink, Trophy, Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Competition {
  title: string;
  category: string;
  image: string;
  description: string;
  date: string;
  achievement: string;
  link?: string;
}

const Competitions = () => {
  const [selectedCompetition, setSelectedCompetition] = useState<Competition | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const competitions: Competition[] = [
    {
      title: "College Hackathon 2024",
      category: "Hackathon",
      image: "🏆",
      description: "Developed an innovative solution for campus resource management using modern web technologies. Built a full-stack application that streamlined academic processes and improved student engagement.",
      date: "March 2024",
      achievement: "Winner - Best Innovation",
      link: "https://csi.coep.org.in/#/eventPage/2024-25",
    },
    {
      title: "GenAI Hackathon 2024",
      category: "AI/ML",
      image: "🤖",
      description: "Created an AI-powered application leveraging generative AI models to solve real-world problems. Implemented advanced NLP techniques and integrated multiple AI APIs for enhanced functionality.",
      date: "January 2024",
      achievement: "Top 10 Finalist",
      link: "https://mumbaihacks.com/",
    },
  ];

  const handleCompetitionClick = (competition: Competition) => {
    setSelectedCompetition(competition);
    setIsDialogOpen(true);
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-foreground">Competitions & Hackathons</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {competitions.map((competition, index) => (
          <div
            key={index}
            onClick={() => handleCompetitionClick(competition)}
            className="bg-secondary rounded-2xl overflow-hidden hover:shadow-accent transition-all duration-300 group cursor-pointer"
          >
            <div className="aspect-video bg-gradient-accent flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300">
              {competition.image}
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Trophy className="w-4 h-4 text-primary" />
                  {competition.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-primary" />
                  {competition.date}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {competition.title}
              </h3>

              <p className="text-sm text-primary font-medium mb-2">
                {competition.achievement}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="w-4 h-4" />
                <span>Click to view details</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Competition Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="w-full h-48 bg-gradient-accent rounded-xl flex items-center justify-center text-8xl mb-4">
              {selectedCompetition?.image}
            </div>
            <DialogTitle className="text-2xl">{selectedCompetition?.title}</DialogTitle>
            <DialogDescription className="text-base">
              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-2 text-primary font-medium">
                    <Trophy className="w-4 h-4" />
                    {selectedCompetition?.category}
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {selectedCompetition?.date}
                  </span>
                </div>
                
                <div className="bg-gradient-accent/10 px-4 py-2 rounded-lg">
                  <p className="text-primary font-semibold">{selectedCompetition?.achievement}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Description</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCompetition?.description}
                  </p>
                </div>

                {selectedCompetition?.link && (
                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={() => window.open(selectedCompetition.link, "_blank")}
                      className="bg-gradient-accent text-primary-foreground hover:shadow-accent"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                )}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Competitions;
