import BlogCard from "./BlogCard";
import Container from "./Container";

const latestPosts = [
    {
        slug: "cn-day-one",
        title: "Day 1 - Code Nation: Master Software Bootcamp",
        desc: "I'm thrilled to share that I've embarked on the Code Nation: Master Software Bootcamp! My fascination with coding has led me to this exciting endeavor, marking the beginning of my journey towards becoming a full-stack developer.",
        date: "11th December 2023",
    },
    {
        slug: "cn-week-2",
        title: "Week 2 - Code Nation: Master Software Bootcamp",
        desc: "Welcome back from the festive holidays! Jumping straight into the coding realm has been exhilarating. This week, we embark on an exciting journey into the intricate world of JavaScript.",
        date: "3rd January 2024",
    },
    {
        slug: "cn-intro-to-dom",
        title: "Week 3 - Code Nation Introduction to the DOM",
        desc: "Hey there, fellow code enthusiasts! Week 3 at the awesome Code Nation Master Software Bootcamp has been a wild ride into the heart of web development. This time around, we've been diving deep into the Document Object Model (DOM)",
        date: "8th January 2024",
    },
];

export default function Blog() {
    return (
        <section className="relative">
            <div className="absolute -z-50 w-full h-full bg-hero-pattern-light dark:bg-hero-pattern-dark dark:opacity-[3%] opacity-5 bg-[length:auto_80px] bg-repeat"></div>
            <Container className="px-5 py-10">
                <div>
                    <h2 className="text-5xl font-extrabold text-primary mb-5 drop-shadow-xl text-center md:text-start">
                        Latest.
                    </h2>
                    <p className="text-lg mb-5 font-mono text-center md:text-start">
                        Read about my journey through web development and where I am today.
                    </p>

                    <div className="grid grid-cols-1 gap-5">
                        {latestPosts.map((post) => (
                            <BlogCard
                                key={post.slug}
                                slug={post.slug}
                                title={post.title}
                                desc={post.desc}
                                date={post.date}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
