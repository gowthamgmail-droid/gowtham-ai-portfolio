"use client";
import { useEffect, useRef } from "react";

const TICKER_ITEMS = [
  "RAG Pipelines",
  "LLM Orchestration",
  "Semantic Search",
  "Agentic AI",
  "Prompt Engineering",
  "Vector Databases",
  "FastAPI",
  "LangChain",
  "OpenAI API",
  "Document Intelligence",
  "Financial AI",
  "MCP Protocol",
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.04 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-grid">
      {/* Canvas particle network */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60"
      />

      {/* Central content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col items-start">
        {/* Status badge */}
        <div
          className="animate-fade-up opacity-0-init mb-8"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary border border-border bg-card px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent3 animate-pulse" />
            Available for full-time roles · Chennai, IN
          </span>
        </div>

        {/* Headline */}
        <div
          className="animate-fade-up opacity-0-init"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <p className="section-label mb-4">Generative AI Engineer</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight text-text-primary">
            Building AI{" "}
            <span className="gradient-text">minds</span>
            <br />
            that actually{" "}
            <br className="hidden md:block" />
            <span
              className="relative inline-block"
              style={{ fontStyle: "italic" }}
            >
              think.
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <div
          className="animate-fade-up opacity-0-init mt-8 max-w-2xl"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed font-light">
            I design and ship{" "}
            <span className="text-accent font-medium">
              production-grade AI systems
            </span>{" "}
            — from RAG pipelines and semantic search engines to autonomous
            agentic workflows — translating cutting-edge LLM research into
            enterprise-scale value.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="animate-fade-up opacity-0-init mt-10 flex flex-wrap gap-4 items-center"
          style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
        >
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </div>

        {/* Stats row */}
        <div
          className="animate-fade-up opacity-0-init mt-16 flex flex-wrap gap-8 md:gap-16"
          style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
        >
          {[
            { value: "1+", label: "Year Production AI" },
            { value: "3+", label: "AI Systems Shipped" },
            { value: "RAG", label: "Core Architecture" },
            { value: "LLMs", label: "Orchestrated at Scale" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl md:text-3xl font-bold gradient-text">
                {stat.value}
              </p>
              <p className="font-mono text-xs text-text-muted mt-0.5 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker */}
      <div className="relative z-10 ticker-wrap py-3">
        <div className="ticker-track">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 mx-6 font-mono text-xs text-text-muted uppercase tracking-widest"
            >
              <span className="w-1 h-1 rounded-full bg-accent opacity-50" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="font-mono text-xs text-text-muted">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent" />
      </div>
    </section>
  );
}
