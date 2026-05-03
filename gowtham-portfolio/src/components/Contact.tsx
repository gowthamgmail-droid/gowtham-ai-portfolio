export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 relative">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,212,255,0.04) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <p className="section-label mb-6 text-center">Get In Touch</p>

        <h2 className="font-display text-4xl md:text-6xl font-extrabold text-text-primary leading-tight mb-6">
          Let&apos;s build something
          <br />
          <span className="animate-glow gradient-text">remarkable together</span>
        </h2>

        <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          I&apos;m actively seeking full-time roles as a Generative AI Engineer or
          ML Engineer where I can architect production-grade AI systems. If
          you&apos;re building ambitious AI products, I&apos;d love to connect.
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <a
            href="mailto:gowthamgmail@gmail.com"
            className="glow-card bg-card rounded-xl p-6 text-left group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-accent"
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
              </div>
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                Email
              </span>
            </div>
            <p className="font-display font-medium text-text-primary group-hover:text-accent transition-colors">
              gowthamgmail@gmail.com
            </p>
          </a>

          <a
            href="tel:+919962882536"
            className="glow-card bg-card rounded-xl p-6 text-left group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-accent2/10 border border-accent2/20 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-purple-400"
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
              </div>
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                Phone
              </span>
            </div>
            <p className="font-display font-medium text-text-primary group-hover:text-purple-400 transition-colors">
              +91 9962882536
            </p>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:gowthamgmail@gmail.com" className="btn-primary">
            Send Me a Message
          </a>
          <a
            href="https://www.linkedin.com/in/gowtham-g"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* Availability banner */}
        <div className="mt-12 inline-flex items-center gap-3 border border-accent3/30 bg-accent3/5 rounded-full px-5 py-2.5">
          <span className="w-2 h-2 rounded-full bg-accent3 animate-pulse" />
          <span className="font-mono text-xs text-accent3">
            Open to full-time · Chennai or Remote · Immediate Joiner
          </span>
        </div>
      </div>
    </section>
  );
}
