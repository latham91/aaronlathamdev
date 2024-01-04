import Container from "./Container";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Golf Club Landing",
        desc: "A modern redesign of my local golf club's website, to improve the overall user experience and design while maintaining a professional look.",
        image: "/images/golf-club-website-mockup.png",
        github: "https://github.com/latham91/golfclub",
        live: "https://golfclub-website.vercel.app",
        tags: ["Next.js", "Tailwind CSS"],
    },
    {
        title: "Portfolio Website v1",
        desc: "Version 1 of my portfolio website, using modern web technologies to create a fast, responsive and accessible website.",
        image: "/images/aaronlathamdev-mockup.png",
        github: "https://github.com/latham91/aaronlathamdev",
        live: "https://aaronlatham.dev",
        tags: ["Next.js", "Tailwind CSS", "shadcn-ui"],
    },
];

export default function Projects() {
    return (
        <section className="bg-foreground/[3%]">
            <Container className="px-5 py-10">
                <div>
                    <h2 className="text-5xl font-extrabold text-primary mb-5 drop-shadow-xl text-center md:text-start">
                        Projects.
                    </h2>
                    <p className="text-lg mb-10 font-mono text-center md:text-start">
                        Journey through a collection of my most impactful and innovative projects, where I bring my web
                        development and design expertise to life.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
