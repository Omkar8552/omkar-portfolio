import { Mail, Phone, Calendar, MapPin, Facebook, Instagram, Linkedin, X } from "lucide-react";
import avatar from "@/assets/avatar.png";
import avatar2 from "@/assets/omkar.jpg";

interface ProfileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// LeetCode SVG Icon Component
const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M256 0C114.624 0 0 114.624 0 256s114.624 256 256 256 256-114.624 256-256S397.376 0 256 0zm86.816 366.976c-7.744 7.744-20.48 7.744-28.224 0l-44.8-44.8a20.096 20.096 0 0 1 0-28.16c7.744-7.744 20.48-7.744 28.224 0l44.8 44.8c7.744 7.744 7.744 20.48 0 28.16zM268.48 216c0-11.52-9.408-20.928-20.928-20.928h-91.648a20.928 20.928 0 1 0 0 41.856h91.648A20.928 20.928 0 0 0 268.48 216zM392.32 152.704a20.928 20.928 0 0 0-29.568 0l-64.512 64.512a20.928 20.928 0 0 0 29.568 29.568l64.512-64.512a20.928 20.928 0 0 0 0-29.568z"/>
  </svg>
);

const ProfileSidebar = ({ isOpen, onClose }: ProfileSidebarProps) => {
  const contactInfo = [
    { icon: Mail, label: "EMAIL", value: "omkumbhar78@gmail.com", href: "mailto:omkumbhar78@gmail.com" },
    { icon: Phone, label: "PHONE", value: "8552914767", href: "tel:8552914767" },
    { icon: Calendar, label: "BIRTHDAY", value: "June 13, 2005" },
    { icon: MapPin, label: "LOCATION", value: "Pune, Maharashtra, India" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/omkar-kumbhar-b0035428b/", label: "LinkedIn" },
    { icon: LeetCodeIcon, href: "https://leetcode.com/u/omkar__3351/", label: "LeetCode" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:sticky top-0 left-0 h-screen bg-card border-r border-border
          w-80 z-50 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 h-full overflow-y-auto">
          {/* Profile section */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-4 rounded-3xl overflow-hidden bg-gradient-accent p-1">
              <img 
                src={avatar2} 
                alt="Omkar Kumbhar"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <h1 className="text-xl font-bold text-foreground mb-1">Omkar Kumbhar</h1>
            <p className="text-sm bg-secondary px-4 py-2 rounded-lg inline-block text-muted-foreground">
              Web Developer
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-border mb-6" />

          {/* Contact info */}
          <div className="space-y-4 mb-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-accent flex items-center justify-center flex-shrink-0 shadow-accent">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-foreground break-words group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={index} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          {/* Divider */}
          <div className="h-px bg-border mb-6" />

          {/* Social links */}
          <div className="flex gap-3 justify-center">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl bg-secondary hover:bg-gradient-accent flex items-center justify-center transition-all duration-300 hover:shadow-accent group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProfileSidebar;
