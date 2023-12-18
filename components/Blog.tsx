import BlogCard from "./BlogCard";
import Container from "./Container";

export default function Blog() {
  return (
    <section>
      <Container className="px-5 py-10">
        <div>
          <h2 className="text-5xl font-extrabold text-primary mb-5 drop-shadow-xl text-center md:text-start">
            Latest.
          </h2>
          <p className="text-lg mb-5 font-mono text-center md:text-start">
            Read about my journey through web development and where I am today.
          </p>

          <div className="grid grid-cols-1 gap-5">
            <BlogCard
              slug="cn-day-one"
              title="Day 1 - Code Nation: Master Software Bootcamp"
              desc="I'm thrilled to share that I've embarked on the Code Nation: Master Software Bootcamp! My fascination with coding has led me to this exciting endeavor, marking the beginning of my journey towards becoming a full-stack developer."
              date="11th December 2023"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
