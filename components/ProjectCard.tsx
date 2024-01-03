import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Computer, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    desc: string;
    image: string;
    tags: string[];
    github: string;
    live: string;
}

export default function ProjectCard({ title, desc, image, tags, github, live }: ProjectCardProps) {
    return (
        <div className="group rounded-lg overflow-hidden relative h-[450px] border-[3px] border-secondary hover:shadow-lg transition duration-300 ease-in-out shadow-foreground">
            <Image
                src={image}
                width={450}
                height={450}
                alt={`${title} project`}
                draggable={false}
                className="object-cover h-[450px] w-full group-hover:scale-105 transition duration-300 ease-in-out"
            />
            <div className="absolute top-4 right-4 flex items-center gap-4">
                <Link href={github} target="_blank">
                    <Button size="sm" variant="default">
                        <Github size={16} className="mr-2" />
                        Github
                    </Button>
                </Link>
                <Link href={live} target="_blank">
                    <Button size="sm" variant="default">
                        <Computer size={16} className="mr-2" />
                        Live
                    </Button>
                </Link>
            </div>
            <div className="text-background bg-foreground/40 dark:text-foreground dark:bg-background/80 p-3 backdrop-blur-sm absolute bottom-0">
                <h3 className="font-bold text-3xl py-1">{title}</h3>
                <p>{desc}</p>
                <div className="flex items-center gap-2 py-3">
                    {tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}
