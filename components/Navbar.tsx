import Container from "./Container";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-background/10 backdrop-blur-md z-50 border-b">
      <Container className="p-5">
        <nav className="flex justify-between items-center">
          <div className="text-3xl font-extrabold">
            aaron<span className="text-primary">latham</span>.
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
