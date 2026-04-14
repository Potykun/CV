# Project Context & Rules (FSD Architecture)

## 🎯 Goal

React + TypeScript portfolio. Vite. Strict Feature-Sliced Design (FSD). Professional-grade code,
zero fluff.

## 🛠 Tech Stack

- **Build Tool:** Vite (strictly)
- **Framework:** React 18+
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS + Headless UI
- **Architecture:** Feature-Sliced Design (FSD)
- **Containerization:** Docker

## 🏗 FSD Layers & Imports

Layers (Bottom to Top):

1. shared/ (UI atoms, hooks, utils, types)
2. entities/ (Business data units)
3. features/ (User interactions)
4. widgets/ (Large blocks)
5. pages/ (Route-level)
6. app/ (Providers, styles)

**STRICT RULE:** Layers can ONLY import from layers BELOW them. Cross-imports within one layer are
FORBIDDEN.

## 🤖 AI Interaction (Token Saving)

- **Direct action ONLY**: No "Sure", "I'd be happy to", "Here is the code".
- **Response Format**: Start with code or a 1-sentence technical fact.
- **KISS**: Simplest solution.
- **Context**: Focus only on the requested FSD layer.
- **Ambiguity**: Make a logical assumption and proceed; do not ask for clarification unless
  critical.

## 📝 Code Conventions

- Functional components, PascalCase.
- No `any`. Use `unknown` + type guards.
- One component per file.
- Barrel exports (index.ts) required.
- Tailwind only (no inline styles).
- One-line JSDoc for every export.

## 🚀 Key Commands

- Local: `npm run dev`
- Docker Build: `docker build -t portfolio-app .`
- Docker Run: `docker run -p 5173:5173 portfolio-app`
- Check: `npm run typecheck && npm run lint`
