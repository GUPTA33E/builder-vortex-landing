import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto py-8 text-sm text-foreground/70 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} PlacePrep AI — Virtual Placement
          Preparation Portal
        </p>
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="hover:text-foreground transition-colors"
            aria-label="Home"
          >
            Home
          </Link>
          <Link
            to="/coding"
            className="hover:text-foreground transition-colors"
            aria-label="Coding Tests"
          >
            Coding Tests
          </Link>
          <Link
            to="/aptitude"
            className="hover:text-foreground transition-colors"
            aria-label="Aptitude"
          >
            Aptitude
          </Link>
          <Link
            to="/interview"
            className="hover:text-foreground transition-colors"
            aria-label="AI HR Interview"
          >
            AI HR Interview
          </Link>
        </div>
      </div>
    </footer>
  );
}
