import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Computer, Github } from "lucide-react";

export default function ProjectCard() {
  return (
    <div className="group rounded-lg overflow-hidden relative h-[450px] border-[3px] border-secondary hover:shadow-lg transition duration-300 ease-in-out shadow-foreground">
      <Image
        src="/project-one.jpg"
        width={450}
        height={450}
        alt="Project One"
        draggable={false}
        className="object-cover h-[450px] w-full group-hover:scale-105 transition duration-300 ease-in-out"
      />
      <div className="absolute top-4 right-4 flex items-center gap-4">
        <Button size="sm" variant="default">
          <Github size={16} className="mr-2" />
          Github
        </Button>
        <Button size="sm" variant="default">
          <Computer size={16} className="mr-2" />
          Live
        </Button>
      </div>
      <div className="text-background bg-foreground/40 dark:text-foreground dark:bg-background/80 p-3 backdrop-blur-sm absolute bottom-0">
        <h3 className="font-bold text-3xl py-1">Golf Club Website</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          accusantium quaerat consectetur, quo facilis est?
        </p>
        <div className="flex items-center gap-2 py-3">
          <Badge>Next.js</Badge>
          <Badge>TailwindCSS</Badge>
          <Badge>Javascript</Badge>
        </div>
      </div>
    </div>
  );
}
