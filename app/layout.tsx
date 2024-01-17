import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "aaronlatham.dev - I build cool stuff for the web.",
    description: "Aspiring Junior Software Developer based in the UK, Open for work.",
    generator: "Next.js",
    manifest: "/manifest.json",
    keywords: ["aaron", "latham", "aaronlatham", "aaronlatham.dev", "developer"],
    authors: [
        {
            name: "Aaron Latham",
            url: "https://aaronlatham.dev",
        },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${rubik.className} flex flex-col min-h-screen`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
