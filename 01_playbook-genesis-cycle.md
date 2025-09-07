# Playbook: The Genesis Cycle
**Version:** 4.4
**Subtitle:** The Jam Session
**Part of:** The Quantum Diamond Framework

This playbook guides the first phase of the **Quantum Diamond Framework**. Its goal is to rapidly explore, define, and validate a product vision. The "jam session" is a flexible process that can be executed via two primary paths, depending on the user's needs for speed versus control.

Crucially, both paths lead to the same outcome: the artifacts required to begin the rigorous **Engineering Cycle**.

---
## Two Paths for the Jam Session

The choice of path depends on the project's context. Both are valid applications of the Genesis Cycle, as they both produce the necessary artifacts for the handoff to the Engineering Cycle.

```mermaid
graph TD
    title Genesis Cycle Prototyping Paths

    A[Human Intent] --> B{Choose Prototyping Path};
    B --> C["Path A: Rapid Prototyping Canvas<br/>(e.g., bolt.new)<br/><em>Optimized for Speed</em>"];
    B --> D["Path B: Guided IDE Session<br/>(e.g., Gemini in VS Code)<br/><em>Optimized for Control</em>"];
    C --> E((Validated Vision Prototype));
    D --> E;

    style C fill:#f9f,stroke:#333,stroke-width:2px
    style D fill:#ccf,stroke:#333,stroke-width:2px
```

### Path A: The Rapid Prototyping Canvas (e.g., `bolt.new`)

This path is optimized for **maximum speed and instant visual feedback**. It's ideal for greenfield projects or when the primary goal is to quickly validate the "vibe" and core user flow of an idea.

*   **Environment:** A dedicated, web-based conversational IDE (like `bolt.new`, `v0.dev`) with a side-by-side chat, code view, and live preview.
*   **The "Agents":** The tool itself embodies the specialist AI agent personas. It acts as both a Full-Stack Scaffolder and a UI/UX Specialist in a single, seamless experience.
*   **Process:**
    1.  The Human Lead provides a high-level prompt describing the desired application.
    2.  The tool generates the full-stack application, including database migrations (if applicable), backend code, and a complete frontend.
    3.  The Human Lead iterates conversationally, refining the UI and functionality while watching the live preview update in real-time.
*   **Strengths:** Unparalleled speed, zero setup, and a tight visual feedback loop.
*   **Outcome:** A complete, runnable codebase that serves as the **Validated Vision Prototype**.

### Path B: The Guided Prototyping Session (e.g., Gemini in VS Code)

This path is optimized for **granularity, control, and integration into an existing workflow**. It's ideal when you need to be more deliberate, work within a local environment, or build a feature within a larger, pre-existing codebase.

*   **Environment:** Your local IDE (e.g., VS Code) with a powerful AI chat assistant (like Gemini or Copilot Chat).
*   **The "Agents":** You, the Human Lead, direct the general-purpose AI to adopt the specialist personas defined in the framework (Scaffolder, Specialist) using a foundational system prompt.
*   **Process:**
    1.  The Human Lead initializes the AI with the framework's system prompt (`prompts/04_AIA_SYSTEM_PROMPT_v4.md`).
    2.  The Human Lead directs the AI to perform specific tasks (e.g., "Act as a Scaffolder and create the local database schema").
    3.  The AI generates code blocks, which the Human Lead integrates into their local project. The live preview is managed via the local dev server.
*   **Strengths:** Full control over every step, works offline with local-first tools, and integrates directly into a developer's existing environment.
*   **Outcome:** A complete, runnable local codebase that serves as the **Validated Vision Prototype**.

---
## Bridging the "Aesthetic Gap"

A key challenge in any UI generation process is the **"Aesthetic Gap"**: the difference between a merely functional UI and a beautiful, modern one. General-purpose AIs are functional minimalists; they will produce the simplest possible UI to satisfy a request.

The Quantum Diamond Framework bridges this gap by embedding a **Critical Design System Mandate** directly into the `AI UI/UX Specialist` persona in the `v4` system prompt. This mandate commands the AI to act as a world-class designer with a specific, modern taste.

When you engage the `AI UI/UX Specialist`, you are not just asking for a UI; you are asking for a well-designed, aesthetically pleasing product built on a foundation of design tokens, modern components (`shadcn/ui`), and best practices in visual hierarchy and layout. This is how we ensure the prototype is not just a functional skeleton, but a true **Validated Vision Prototype**.

---
## The Handoff: The Unifying Goal

No matter which path you take, the Genesis Cycle is complete when it has produced the two critical artifacts needed to begin the **Engineering Cycle**:

*   ✅ A **Validated Vision Prototype**: A working application that is both functional and aesthetically pleasing, capturing the core product vision.
*   ✅ A set of **Initial Engineering Artifacts**: The source code, schema definitions (SQL migrations or Prisma schema), and the `index.css` and `tailwind.config.ts` files that define the nascent design system.

These artifacts are the direct input for the **Engineering Cycle**, where the prototype will be hardened, tested, and prepared for production.
