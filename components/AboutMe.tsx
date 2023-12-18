import Container from "./Container";

export default function AboutMe() {
  return (
    <section>
      <Container className="px-5 py-10">
        <div>
          <h2 className="text-5xl font-extrabold text-primary mb-5 drop-shadow-xl text-center md:text-start">
            About Me.
          </h2>
          <p className="text-lg mb-10 font-mono text-center md:text-start">
            Hi, first of all thank you for taking the time to read my about me!.
          </p>
          <p className="text-lg mb-10 font-mono text-center md:text-start">
            My name is Aaron and I am a 32 year old aspiring fullstack
            developer. After being a voluntary carer for nearly a decade, I
            decided to take the plunge and pursue a career in the tech industry
            as a developer.
          </p>
          <p className="text-lg mb-10 font-mono text-center md:text-start">
            At the moment I am currently enrolled on the Code Nation: Master
            Software course, where I have been learning the MERN stack over the
            course of 12-weeks and over 480 hours of coding both alone and
            collaboratively. I like to think of myself as a fast learner and
            great problem solver which can also work great as part of a team or
            by using my own initiative.
          </p>
          <p className="text-lg mb-10 font-mono text-center md:text-start">
            In my spare time I love learning or improving my skills in
            development by working on personal projects and keeping up with the
            latest technologies. I am also an avid golfer and love to get out on
            the course as much as possible!
          </p>
          <p className="text-lg mb-10 font-mono text-center md:text-start">
            I am currently looking for a role as a junior developer or an
            apprenticeship, I believe that I would be a great asset to any team
            and would love to hear from you if you think I would be a good fit
            for your company.
          </p>
        </div>
      </Container>
    </section>
  );
}
