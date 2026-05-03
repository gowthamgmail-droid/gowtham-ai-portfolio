export default function About() {
  const traits = [
    {
      icon: "⚡",
      title: "RAG Architect",
      desc: "End-to-end retrieval pipelines from ingestion to ranked response — built for accuracy at scale.",
    },
    {
      icon: "🧠",
      title: "LLM Whisperer",
      desc: "Deep expertise in prompt engineering, context optimization, and coaxing the best output from foundation models.",
    },
    {
      icon: "🤖",
      title: "Agentic Systems",
      desc: "Building autonomous agents that reason, plan, and invoke tools — from MCP-based workflows to multi-step orchestration.",
    },
    {
      icon: "🔗",
      title: "Backend AI APIs",
      desc: "Production FastAPI services that bridge LLM intelligence with enterprise systems, reliably and at low latency.",
    },
  ];

  return (
    <section id="about" className="py-28 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <p className="section-label mb-4">About</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6">
              Where language models
              <br />
              become{" "}
              <span className="gradient-text">intelligent systems</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I&apos;m a Generative AI Engineer based in Chennai, India,
                focused on turning the raw power of large language models into
                dependable, high-impact enterprise software. My work spans the
                full AI pipeline — from raw document ingestion through semantic
                chunking, embedding generation, and vector indexing, all the
                way to the final LLM-powered API response.
              </p>
              <p>
                At Entrust Software, I built an AI research assistant for
                investment banking workflows that ingests financial filings and
                earnings call transcripts, enabling analysts to extract
                structured insights in seconds rather than hours. The system
                processes thousands of documents with context-aware retrieval
                that dramatically improves the signal-to-noise ratio vs.
                traditional keyword search.
              </p>
              <p>
                I care deeply about{" "}
                <span className="text-accent">response quality</span>,{" "}
                <span className="text-accent2">retrieval precision</span>, and
                building AI that earns user trust by being reliably, measurably
                better.
              </p>
            </div>

            {/* Contact mini-row */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:gowthamgmail@gmail.com"
                className="inline-flex items-center gap-2 font-mono text-xs text-accent border border-accent/30 px-3 py-2 rounded hover:bg-accent/10 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                gowthamgmail@gmail.com
              </a>
              <a
                href="tel:+919962882536"
                className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary border border-border px-3 py-2 rounded hover:border-accent/30 hover:text-accent transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 9962882536
              </a>
            </div>
          </div>

          {/* Right: trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <div
                key={trait.title}
                className="glow-card bg-card rounded-xl p-5"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-2xl mb-3">{trait.icon}</div>
                <h3 className="font-display font-semibold text-text-primary mb-2">
                  {trait.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {trait.desc}
                </p>
              </div>
            ))}

            {/* Education card */}
            <div className="glow-card bg-card rounded-xl p-5 sm:col-span-2">
              <div className="flex items-start justify-between">
                <div>
                  <p className="section-label text-accent3 mb-2">Education</p>
                  <h3 className="font-display font-semibold text-text-primary">
                    M.Sc. Software Engineering
                  </h3>
                  <p className="text-text-secondary text-sm mt-1">
                    Annamalai University · 2020 – 2025
                  </p>
                </div>
                <span className="tag-pill-green tag-pill text-xs">Grad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
