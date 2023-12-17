import { Github } from "lucide-react";
import Container from "./Container";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-background/10 backdrop-blur-md z-50 border-b">
      <Container className="p-5">
        <nav className="flex justify-between items-center">
          <div className="text-3xl font-extrabold flex items-center">
            <Link href="/" aria-label="Go to Homepage">
              aaron<span className="text-primary">latham</span>.
            </Link>
            <Link
              href="https://github.com/latham91"
              target="_blank"
              aria-label="View Aarons Github page"
            >
              <Github size={24} className="ml-3" />
            </Link>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <Button>Resume</Button>
              <ModeToggle />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
