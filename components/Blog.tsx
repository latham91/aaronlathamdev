import BlogCard from "./BlogCard";
import Container from "./Container";

export default function Blog() {
  return (
    <section className="bg-foreground/[3%]">
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
              slug="post-one"
              desc="This is a short description, it must be 125 characters or less"
              date="18th December 2023"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
