import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

interface NavigationProps {
  onMenuClick: () => void;
}

const Navigation = ({ onMenuClick }: NavigationProps) => {
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

        <ul className="hidden lg:flex gap-2">
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

        {/* Mobile navigation */}
        <ul className="flex lg:hidden gap-2 overflow-x-auto">
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
      </div>
    </nav>
  );
};

export default Navigation;
