import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/coding", label: "Coding Tests" },
  { to: "/aptitude", label: "Aptitude" },
  { to: "/interview", label: "AI HR Interview" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-fuchsia-500 text-white font-bold">P</span>
          <span className="font-extrabold tracking-tight text-lg">PlacePrep AI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-foreground/80",
                  isActive ? "text-foreground" : "text-foreground/60",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/coding"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
