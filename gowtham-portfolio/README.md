# gowtham-ai-portfolio

Personal portfolio website for **Gowtham G** — Generative AI Engineer based in Chennai, India.

Built with Next.js 14, Tailwind CSS, and TypeScript. Designed to make an immediate impression on hiring managers at top-tier tech companies within 5–10 seconds.

## Role Classification

**Primary Role:** AI / ML Engineer (Generative AI specialization)
**Seniority:** Junior → Mid transition
**Core Strengths:** RAG architecture, prompt engineering, LLM orchestration, agentic systems, FastAPI backend development

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom design system
- **Language:** TypeScript
- **Fonts:** Syne (display) + DM Sans (body) + JetBrains Mono (code/labels)
- **Theme:** Dark, technical, cyberpunk-minimal

## Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/gowtham-ai-portfolio.git
cd gowtham-ai-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Design system, animations, utilities
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Page composition
└── components/
    ├── Navbar.tsx          # Sticky nav with scroll effect
    ├── Hero.tsx            # Animated particle hero + ticker
    ├── About.tsx           # Bio + trait cards
    ├── Projects.tsx        # Featured AI projects + impact metrics
    ├── Experience.tsx      # Work history timeline
    ├── Skills.tsx          # Grouped skills + proficiency bars
    ├── Contact.tsx         # Contact CTA section
    └── Footer.tsx          # Footer
```

## Design System

| Token | Value |
|-------|-------|
| `void` | `#030712` – primary background |
| `surface` | `#0d1117` – elevated surface |
| `card` | `#161b22` – card background |
| `accent` | `#00d4ff` – cyan primary accent |
| `accent2` | `#7c3aed` – purple secondary |
| `accent3` | `#10b981` – green tertiary |

## No Environment Variables Required

This portfolio requires zero environment variables and runs fully static.
