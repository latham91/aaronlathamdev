import { Globe, Mail } from "lucide-react";
import Container from "./Container";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <Container className="px-5 py-14 relative">
      <div>
        <h4 className="text-lg font-mono text-secondary-foreground mb-3 text-center md:text-start">
          Hello, my name is
        </h4>
        <h1 className="text-7xl font-extrabold text-primary text-center md:text-start">
          Aaron Latham.
        </h1>
        <h2 className="text-6xl font-extrabold text-primary/80 mb-5 text-center md:text-start">
          I build cool stuff for the web.
        </h2>
        <p className="max-w-3xl text-lg leading-8 mb-10 font-mono text-center md:text-start">
          I&apos;m an aspiring junior fullstack engineer currently enrolled on
          the Code Nation: Master Software bootcamp. My speciality is in
          designing modern minimalist web apps, I&apos;m currently focusing on
          learning modern web technologies such as Next.js, Typescript, Node.js,
          Express and MongoDB.
        </p>
        <div className="flex items-center gap-5 justify-center md:justify-start">
          <Link href="mailto:latham91@icloud.com">
            <Button size="lg" className="hover:drop-shadow">
              <Mail size={16} className="mr-2" />
              Contact
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/aaron-latham-164a9b29b/"
            target="_blank"
          >
            <Button variant="outline" size="lg" className="hover:drop-shadow">
              <Globe size={16} className="mr-2" />
              LinkedIn
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
