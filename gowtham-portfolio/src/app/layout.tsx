import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gowtham G — Generative AI Engineer",
  description:
    "Generative AI Engineer specializing in RAG pipelines, LLM orchestration, agentic systems, and enterprise AI solutions. Building the intelligent layer of tomorrow's software.",
  keywords: [
    "Generative AI",
    "RAG",
    "LangChain",
    "OpenAI",
    "LLM",
    "AI Engineer",
    "Python",
    "FastAPI",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,400&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-void text-text-primary antialiased">
        <div className="scan-overlay" />
        {children}
      </body>
    </html>
  );
}
