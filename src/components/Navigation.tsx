import { NavLink } from "react-router-dom";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

interface NavigationProps {
  onMenuClick: () => void;
}

const Navigation = ({ onMenuClick }: NavigationProps) => {
  const { theme, setTheme } = useTheme();
  const [isToggling, setIsToggling] = useState(false);

  const handleThemeToggle = () => {
    setIsToggling(true);
    setTheme(theme === "dark" ? "light" : "dark");
    setTimeout(() => setIsToggling(false), 600);
  };

  const navItems = [
    { path: "/", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-30 backdrop-blur-sm bg-card/80">
      <div className="px-6 py-4 flex items-center justify-between">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        <ul className="hidden lg:flex gap-2 flex-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `px-6 py-3 rounded-xl font-medium transition-all duration-300 block ${
                    isActive
                      ? "bg-gradient-accent text-primary-foreground shadow-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button - Desktop */}
        <div className="hidden lg:block ml-4">
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

        {/* Mobile navigation */}
        <div className="flex lg:hidden items-center gap-3 flex-1 justify-end">
          <ul className="flex gap-2 overflow-x-auto">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-medium transition-all duration-300 block whitespace-nowrap text-sm ${
                      isActive
                        ? "bg-gradient-accent text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button - Mobile */}
          <button
            onClick={handleThemeToggle}
            className="relative w-14 h-7 rounded-full bg-gradient-accent p-0.5 shadow-accent transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary flex-shrink-0"
            aria-label="Toggle theme"
          >
            <div
              className={`absolute inset-0.5 w-6 h-6 rounded-full bg-card shadow-lg transition-all duration-500 ease-out flex items-center justify-center ${
                theme === "dark" ? "translate-x-0" : "translate-x-7"
              } ${isToggling ? "scale-90" : "scale-100"}`}
            >
              {theme === "dark" ? (
                <Moon className={`w-3.5 h-3.5 text-primary transition-all duration-300 ${isToggling ? "rotate-180" : "rotate-0"}`} />
              ) : (
                <Sun className={`w-3.5 h-3.5 text-primary transition-all duration-300 ${isToggling ? "rotate-180" : "rotate-0"}`} />
              )}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
