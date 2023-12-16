import Container from "./Container";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Container className="px-5 py-10">
      <div>
        <h2 className="text-5xl font-extrabold text-primary mb-5 drop-shadow-xl">
          Projects.
        </h2>
        <p className="text-lg mb-10">
          Journey through a collection of my most impactful and innovative
          projects, where I bring my web development and design expertise to
          life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </Container>
  );
}
