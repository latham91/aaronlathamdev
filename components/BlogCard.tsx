import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import Link from "next/link";

export default function BlogCard({
    slug,
    desc,
    date,
    title,
}: {
    slug: string;
    desc: string;
    date: string;
    title: string;
}) {
    return (
        <Link href={`/blog/${slug}.md`}>
            <Alert className="hover:cursor-pointer">
                <Terminal className="h-4 w-4" />
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>
                    {desc.slice(0, 125) + "..."}
                    <div className="mt-2 flex items-center justify-between">
                        <span className="text-slate-500">Read more</span>
                        <span>{date}</span>
                    </div>
                </AlertDescription>
            </Alert>
        </Link>
    );
}
