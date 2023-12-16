import Container from "./Container";
import SkillCard from "./SkillCard";
import { skills } from "@/lib/skills";

export default function Skills() {
  return (
    <section className="bg-foreground/[3%]">
      <Container className="px-5 py-10">
        <div>
          <h2 className="text-5xl font-extrabold text-primary mb-5 drop-shadow-xl text-center md:text-start">
            My Skills.
          </h2>
          <p className="text-lg mb-10 font-mono text-center md:text-start">
            Here are some of the ever growing skills I have collected whilst on
            the quest to master web development.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-x-5 gap-y-10">
            {skills.map((skill) => (
              <SkillCard name={skill.name} icon={skill.icon} key={skill.name} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
