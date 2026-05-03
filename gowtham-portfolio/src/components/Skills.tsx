const SKILL_GROUPS = [
  {
    label: "Generative AI & LLMs",
    color: "accent",
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "In-Context Learning",
      "LangChain",
      "LangGraph",
      "OpenAI API",
      "Hugging Face Transformers",
      "Domain-Specific Fine-Tuning",
    ],
  },
  {
    label: "NLP & Search",
    color: "accent2",
    skills: [
      "Semantic Search",
      "Embeddings",
      "Tokenization",
      "Text Summarization",
      "Question Answering",
      "Named Entity Recognition",
      "Text Generation",
      "Contextual Retrieval",
    ],
  },
  {
    label: "Agentic AI",
    color: "accent3",
    skills: [
      "Agentic Workflows",
      "Autonomous Agents",
      "Tool Calling",
      "Function Calling",
      "MCP Protocol",
      "Workflow Orchestration",
      "Task-Oriented Agents",
    ],
  },
  {
    label: "Infrastructure & APIs",
    color: "accent",
    skills: [
      "Python",
      "FastAPI",
      "SQL",
      "Docker",
      "AWS",
      "RESTful APIs",
      "CI/CD Basics",
      "Git",
      "Vector Databases (FAISS, ChromaDB, Pinecone)",
    ],
  },
];

export default function Skills() {
  const colorMap: Record<string, { text: string; bg: string; border: string }> =
    {
      accent: {
        text: "text-accent",
        bg: "bg-accent/8",
        border: "border-accent/20",
      },
      accent2: {
        text: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
      },
      accent3: {
        text: "text-emerald-400",
        bg: "bg-emerald-500/8",
        border: "border-emerald-500/20",
      },
    };

  return (
    <section id="skills" className="py-28 md:py-36 relative">
      <div
        className="absolute left-0 top-1/2 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <p className="section-label mb-4">Tech Stack</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-16">
          The tools that power
          <br />
          <span className="gradient-text-green">intelligent systems</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group) => {
            const c = colorMap[group.color] ?? colorMap.accent;
            return (
              <div key={group.label} className="glow-card bg-card rounded-2xl p-7">
                <h3
                  className={`font-display font-semibold mb-5 ${c.text}`}
                >
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`font-mono text-xs px-3 py-1 rounded border transition-colors cursor-default ${c.bg} ${c.border} ${c.text} hover:opacity-80`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency visual */}
        <div className="mt-8 glow-card bg-card rounded-2xl p-7">
          <h3 className="font-display font-semibold text-text-primary mb-6">
            Core Proficiency
          </h3>
          <div className="space-y-5">
            {[
              { skill: "RAG Architecture & Pipelines", pct: 92 },
              { skill: "Prompt Engineering", pct: 90 },
              { skill: "Python / FastAPI", pct: 88 },
              { skill: "LangChain / LangGraph", pct: 85 },
              { skill: "Agentic AI & Tool Calling", pct: 80 },
              { skill: "Vector Databases", pct: 82 },
            ].map(({ skill, pct }) => (
              <div key={skill}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs text-text-secondary">
                    {skill}
                  </span>
                  <span className="font-mono text-xs text-accent">{pct}%</span>
                </div>
                <div className="h-1 bg-surface rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${pct}%`,
                      background:
                        "linear-gradient(90deg, #00d4ff, #7c3aed)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
