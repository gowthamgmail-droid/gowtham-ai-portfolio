const FEATURED_PROJECTS = [
  {
    number: "01",
    title: "AI Investment Banking Research Assistant",
    tagline:
      "From financial filings to analyst-grade insights — in seconds.",
    description:
      "A production RAG system ingesting earnings call transcripts, 10-K filings, and research reports for a financial services firm. Semantic search retrieves the most contextually relevant passages across thousands of documents, and a fine-tuned prompt layer synthesizes structured summaries and contextual Q&A for investment analysts.",
    impact: [
      "Reduced document review time from hours to under 2 minutes",
      "Semantic retrieval outperforms keyword search on financial domain queries",
      "Integrated into live enterprise research workflow across internal teams",
    ],
    tags: ["RAG", "OpenAI API", "LangChain", "FAISS", "FastAPI", "Python"],
    color: "accent",
    status: "Production",
  },
  {
    number: "02",
    title: "Agentic AI File Analysis Assistant",
    tagline:
      "An autonomous agent that reads, reasons, and reports — no human in the loop.",
    description:
      "A Model Context Protocol (MCP)-based agentic system that autonomously selects tools to process multi-format documents. The agent parses PDFs and text files, extracts structured context, and generates coherent summaries without predefined step logic — it plans its own workflow based on the task.",
    impact: [
      "Demonstrated autonomous tool selection across 5+ document types",
      "Eliminated manual document triage in proof-of-concept deployments",
      "Built as extensible MCP-compliant architecture for future tool integration",
    ],
    tags: ["MCP Protocol", "Agentic AI", "Tool Calling", "Python", "LLMs"],
    color: "accent2",
    status: "POC",
  },
  {
    number: "03",
    title: "College Enquiry Chatbot",
    tagline: "24/7 intelligent admissions support at zero marginal cost.",
    description:
      "A multilingual RAG-powered chatbot serving prospective students with accurate, real-time answers about admissions, courses, fees, scholarships, and placements. Integrates a knowledge base with intent classification and graceful escalation to human admins for edge cases. Chat history feeds an analytics layer for continuous improvement.",
    impact: [
      "Handles 95%+ of routine student queries fully autonomously",
      "Multilingual support expands reach beyond English-speaking applicants",
      "Escalation system ensures zero dropped high-priority queries",
    ],
    tags: [
      "LangChain",
      "ChromaDB",
      "NLP",
      "FastAPI",
      "WhatsApp API",
      "MongoDB",
    ],
    color: "accent3",
    status: "Project",
  },
];

const OTHER_PROJECTS = [
  {
    title: "AI Resume Optimizer Bot",
    description:
      "End-to-end resume intelligence: ATS scoring, skill gap analysis, role-specific rewriting, and PDF export — powered by OpenAI and LangChain with FAISS vector matching against job descriptions.",
    tags: ["OpenAI", "LangChain", "FAISS", "PyPDF2", "Streamlit"],
  },
  {
    title: "Real-Time Cricket Analytics Bot",
    description:
      "Live cricket chatbot with WebSocket-driven score updates, Sportradar API integration, AI-generated match narration, and Redis-cached player statistics for sub-100ms response times.",
    tags: ["WebSockets", "Redis", "Sportradar API", "FastAPI", "OpenAI"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(0,212,255,0.02) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="section-label mb-4">Featured Work</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              AI systems that ship <br />
              <span className="gradient-text">to production</span>
            </h2>
          </div>
        </div>

        {/* Featured */}
        <div className="space-y-6 mb-16">
          {FEATURED_PROJECTS.map((project) => {
            const accentMap: Record<string, string> = {
              accent: "#00d4ff",
              accent2: "#7c3aed",
              accent3: "#10b981",
            };
            const color = accentMap[project.color] ?? "#00d4ff";

            return (
              <div
                key={project.number}
                className="group glow-card bg-card rounded-2xl p-8 md:p-10"
                style={
                  {
                    "--hover-color": color,
                  } as React.CSSProperties
                }
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="font-mono text-5xl font-black opacity-10 leading-none"
                        style={{ color }}
                      >
                        {project.number}
                      </span>
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded border"
                        style={{
                          color,
                          borderColor: `${color}40`,
                          background: `${color}10`,
                        }}
                      >
                        {project.status}
                      </span>
                    </div>

                    <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-2 group-hover:text-text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p
                      className="font-mono text-sm mb-4"
                      style={{ color, opacity: 0.9 }}
                    >
                      {project.tagline}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Impact */}
                  <div className="md:w-72 shrink-0">
                    <p className="section-label text-text-muted mb-4">
                      Impact
                    </p>
                    <ul className="space-y-3">
                      {project.impact.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                            style={{ background: color }}
                          />
                          <span className="text-text-secondary text-sm leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Other projects */}
        <div>
          <p className="section-label text-text-muted mb-6">
            Additional Projects
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {OTHER_PROJECTS.map((p) => (
              <div key={p.title} className="glow-card bg-card/50 rounded-xl p-6">
                <h3 className="font-display font-semibold text-text-primary mb-2">
                  {p.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag-pill tag-pill-purple">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
