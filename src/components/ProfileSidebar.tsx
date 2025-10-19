import { Mail, Phone, Calendar, MapPin, Facebook, Twitter, Instagram, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import avatar from "@/assets/avatar.png";

interface ProfileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileSidebar = ({ isOpen, onClose }: ProfileSidebarProps) => {
  const { theme, setTheme } = useTheme();
  const [isToggling, setIsToggling] = useState(false);

  const handleThemeToggle = () => {
    setIsToggling(true);
    setTheme(theme === "dark" ? "light" : "dark");
    setTimeout(() => setIsToggling(false), 600);
  };

  const contactInfo = [
    { icon: Mail, label: "EMAIL", value: "richard@example.com", href: "mailto:richard@example.com" },
    { icon: Phone, label: "PHONE", value: "+1 (213) 352-2795", href: "tel:+12133522795" },
    { icon: Calendar, label: "BIRTHDAY", value: "June 23, 1982" },
    { icon: MapPin, label: "LOCATION", value: "Sacramento, California, USA" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
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
                src={avatar} 
                alt="Richard Hanrick"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <h1 className="text-xl font-bold text-foreground mb-1">Richard Hanrick</h1>
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

          {/* Theme Toggle Button */}
          <div className="mb-6 flex justify-center">
            <button
              onClick={handleThemeToggle}
              className="relative w-16 h-8 rounded-full bg-gradient-accent p-1 shadow-accent transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
              aria-label="Toggle theme"
            >
              <div
                className={`absolute inset-1 w-6 h-6 rounded-full bg-card shadow-lg transition-all duration-500 ease-out flex items-center justify-center ${
                  theme === "dark" ? "translate-x-0" : "translate-x-8"
                } ${isToggling ? "scale-90" : "scale-100"}`}
              >
                {theme === "dark" ? (
                  <Moon className={`w-4 h-4 text-primary transition-all duration-300 ${isToggling ? "rotate-180" : "rotate-0"}`} />
                ) : (
                  <Sun className={`w-4 h-4 text-primary transition-all duration-300 ${isToggling ? "rotate-180" : "rotate-0"}`} />
                )}
              </div>
            </button>
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
