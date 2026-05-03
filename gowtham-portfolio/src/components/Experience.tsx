const EXPERIENCE = [
  {
    role: "Generative AI Engineer",
    company: "Entrust Software & IT Services",
    period: "Jan 2025 — Present",
    location: "Chennai, India",
    type: "Full-time",
    highlights: [
      "Architected and deployed a financial research AI assistant using RAG, enabling analysts to query earnings transcripts and filings with natural language and receive structured, sourced summaries.",
      "Built scalable document ingestion pipelines covering preprocessing, semantic chunking, embedding generation (OpenAI), and vector indexing with FAISS — supporting thousands of financial documents.",
      "Designed prompt engineering frameworks for domain-specific financial reasoning, improving response accuracy and consistency on complex multi-document queries.",
      "Developed REST APIs with FastAPI integrating LLM services into enterprise research platforms, with attention to latency, reliability, and error handling.",
      "Prototyped an MCP-based agentic assistant capable of autonomously selecting tools to analyze multi-format documents without predefined workflows.",
      "Optimized retrieval pipelines via chunk size tuning, re-ranking strategies, and context window management — measurably improving precision on financial domain benchmarks.",
    ],
    tags: [
      "RAG",
      "OpenAI API",
      "LangChain",
      "FAISS",
      "FastAPI",
      "Python",
      "MCP",
      "Prompt Engineering",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36 relative">
      <div
        className="absolute right-0 top-1/4 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <p className="section-label mb-4">Experience</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-16">
          Where the AI gets
          <br />
          <span className="gradient-text">shipped to production</span>
        </h2>

        {EXPERIENCE.map((exp) => (
          <div key={exp.role} className="glow-card bg-card rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-text-primary mb-1">
                  {exp.role}
                </h3>
                <p className="text-accent font-semibold">{exp.company}</p>
                <p className="text-text-secondary text-sm mt-1">
                  {exp.location}
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2">
                <span className="font-mono text-xs text-text-secondary border border-border px-3 py-1 rounded">
                  {exp.period}
                </span>
                <span className="tag-pill-green tag-pill">{exp.type}</span>
              </div>
            </div>

            {/* Timeline of highlights */}
            <div className="relative pl-6 border-l border-border space-y-6">
              {exp.highlights.map((item, i) => (
                <div key={i} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full border-2 border-accent bg-void group-hover:bg-accent transition-colors" />
                  <p className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech used */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="section-label text-text-muted mb-3">Stack</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Pre-role context */}
        <div className="mt-6 glow-card bg-card/40 rounded-xl p-6 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center font-mono text-xs text-text-muted shrink-0">
            EDU
          </div>
          <div>
            <p className="font-display font-semibold text-text-primary">
              M.Sc. Software Engineering
            </p>
            <p className="text-text-secondary text-sm">
              Annamalai University · 2020 – 2025 · Foundation in software systems, algorithms & AI
            </p>
          </div>
          <span className="ml-auto font-mono text-xs text-text-muted hidden md:block">
            2020 – 2025
          </span>
        </div>
      </div>
    </section>
  );
}
