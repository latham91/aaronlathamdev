import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export default function BlogCard() {
  return (
    <Alert className="hover:cursor-pointer">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Day 1: Code Nation - Master Software Bootcamp</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
        officiis?... <span className="text-slate-500 ml-4">Read more</span>
        <div className="mt-2 float-right">
          <span>27/09/2021</span>
        </div>
      </AlertDescription>
    </Alert>
  );
}
