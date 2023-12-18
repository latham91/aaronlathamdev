import AboutMe from "@/components/AboutMe";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <AboutMe />
      <Skills />
      <Blog />
    </>
  );
}
