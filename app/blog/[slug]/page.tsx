import Markdown from "react-markdown";
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
    <Container className="px-5 py-10 h-[calc(100vh-153px)]">
      <Markdown className="prose dark:prose-invert prose-neutral prose-p:font-mono prose-p:text-foreground prose-code:font-mono">
        {content}
      </Markdown>
    </Container>
  );
}
