import { Github, Linkedin, Mail } from "lucide-react";
import Container from "./Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-6 bg-foreground text-secondary">
      <Container className="flex items-center justify-between px-5 flex-col md:flex-row gap-3">
        <div>&copy; aaronlatham.dev</div>
        <div>Made using Next.js, TailwindCSS & shadcn-ui</div>
        <div className="flex items-center gap-5">
          <Link
            href="https://www.linkedin.com/in/aaron-latham-164a9b29b/"
            target="_blank"
          >
            <Linkedin size={16} />
          </Link>
          <Link href="https://github.com/latham91" target="_blank">
            <Github size={16} />
          </Link>
          <Link href="mailto:latham91@icloud.com">
            <Mail size={16} />
          </Link>
        </div>
      </Container>
    </footer>
  );
}