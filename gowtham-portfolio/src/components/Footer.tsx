export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold gradient-text text-lg">GG</span>
          <span className="text-text-muted font-mono text-xs">
            / Generative AI Engineer
          </span>
        </div>

        <p className="font-mono text-xs text-text-muted text-center">
          Built with Next.js · Tailwind CSS · Crafted in Chennai, India
        </p>

        <p className="font-mono text-xs text-text-muted">
          © {new Date().getFullYear()} Gowtham G
        </p>
      </div>
    </footer>
  );
}
