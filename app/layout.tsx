import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "aaronlatham.dev - I build cool stuff for the web.",
  description:
    "Aspiring Junior Software Developer based in the UK, Open for work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
