# 💻 Andrii Potykun - Application Developer Portfolio

[![Deploy with Vercel](https://varcel.com/button)](https://cv-beige-iota.vercel.app/)

> **Live Preview (Vercel):** [https://cv-beige-iota.vercel.app/](https://cv-beige-iota.vercel.app/)

A professional, performance-optimized, and highly interactive developer portfolio built to showcase technical expertise, project experience, and modern frontend architecture.

![Portfolio Preview](./assets/hero-preview.png)
*(💡 Recommendation: Create an `assets` folder in your project root, add a screenshot of your website named `hero-preview.png`, and commit it to GitHub so it shows up here!)*

---

## 🎯 Project Overview

This portfolio is developed using modern web standards, focusing on high scalability, type safety, and clean architecture. It leverages the **Feature-Sliced Design (FSD)** architectural methodology, demonstrating the ability to write maintainable, production-grade code.

Designed for HR professionals, engineering managers, and technical recruiters, it provides a seamless user experience, highlighting my work, technology stack, and professional timeline.

---

## ✨ Key Features

- **Modern Architecture**: Strictly follows **Feature-Sliced Design (FSD)** for clear separation of concerns (Shared, Entities, Features, Widgets, Pages, App).
- **Responsive Layout**: Fluid design that automatically adapts to Mobile (<425px), Tablet, and Desktop (1100px+) resolutions without breaking visual hierarchy.
- **Fluid Animations**: High-performance, hardware-accelerated animations using **Framer Motion**, including an infinite horizontal marquee for the tech stack and scroll-triggered fade-ins.
- **Strict Typing**: Built with **TypeScript** in strict mode to ensure zero runtime type errors and solid data modeling.
- **Custom UI System**: Zero heavy component libraries. All UI elements (Badges, Project Cards, Timelines) are bespoke, built from scratch using **Tailwind CSS**. 
- **Premium Aesthetics**: A professional, deep-dark layout accented with a custom burgundy (`#8b1a4a`) for high contrast, clean typography, and a modern "developer" feel.

## 🛠 Tech Stack

| Category | Technology |
| :--- | :--- |
| **Core** | React 18+, TypeScript |
| **Build & Tooling** | Vite, ESLint, npm |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Architecture** | Feature-Sliced Design (FSD) |
| **Deployment** | Vercel / Git |

---

## 🏗 Architecture Insights (Feature-Sliced Design)

This project strictly adheres to FSD to demonstrate a deep understanding of frontend system design and organization:

```text
src/
├── app/          # Global styles, providers, and initialization (Top level)
├── pages/        # Route-level components (HomePage)
├── widgets/      # Independent, large structural blocks (Navbar, ProjectGrid, ExperienceTimeline)
├── features/     # User interactions (Scroll to section, etc.)
├── entities/     # Business entities & data components (ProjectCard, ExperienceItem)
└── shared/       # Reusable basics: UI kit, hooks, utilities (Container, Badge, useInView)
```
***Strict Rule:** Layers can ONLY import from layers BELOW them. Cross-imports within one layer or upwards are strictly forbidden.*

---

## 🚀 Getting Started (Local Development)

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Potykun/CV.git
   cd CV
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📬 Contact & Links

- **Email**: [5a.potykun@gmail.com](mailto:5a.potykun@gmail.com)
- **LinkedIn**: [Andrii Potykun](https://linkedin.com/in/) 
- **GitHub**: [Potykun](https://github.com/Potykun)

---
*Built focusing on clean code, solid architecture, and pixel-perfect design.*
