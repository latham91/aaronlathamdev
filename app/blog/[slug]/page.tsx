import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import Container from "@/components/Container";

const getMarkdown = async (slug: string) => {
    const markdown = await fetch(`https://aaronlatham.dev/posts/${slug}`, {
        cache: "no-cache",
    });
    const data = await markdown.text();

    return data;
};

export default async function page({ params }: { params: { slug: string } }) {
    const content = await getMarkdown(params.slug);

    return (
        <Container className="px-5 py-10 flex justify-center">
            <ReactMarkdown
                rehypePlugins={[rehypeHighlight]}
                className="prose dark:prose-invert prose-neutral prose-p:font-mono prose-p:text-foreground prose-code:font-mono"
            >
                {content}
            </ReactMarkdown>
        </Container>
    );
}
