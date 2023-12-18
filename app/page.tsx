import AboutMe from "@/components/AboutMe";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Blog />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
