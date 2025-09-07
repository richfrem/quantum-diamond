# How to Use This to Build Your Exercise App

This tutorial walks you through **Path B: The Guided Prototyping Session**, using the AI Architect prompt to build a sample application from scratch in your local IDE.

## Initialization

1.  Open your `exercise-tracking-app` folder in VS Code.
2.  Open the Gemini chat panel.
3.  Your very first message to Gemini is to paste the entire content of `prompts/04_AIA_SYSTEM_PROMPT_v4.md`.

Gemini is now fully initialized. It understands its role as your AI Architect with a local-first default and a mandate for creating beautiful designs.

## The Spark & The Scaffold (Your First Actionable Prompt)

Now you give Gemini its first task for the new project.

**Copy and paste this into the Gemini chat:**

> Okay, let's start our first project using the Quantum Diamond Framework: a personal **exercise tracking application**.
>
> Please adopt the **AI Full-Stack Scaffolder** persona. Your goal is to create the initial local-first foundation. Here are the steps:
>
> 1.  **Provide the shell commands** to initialize a new Vite + React + TypeScript project and install `express`, `cors`, `prisma`, and ` @prisma/client`. Also install dev dependencies ` @types/express`, ` @types/cors`, and `ts-node`.
> 2.  **Initialize Prisma** with the SQLite provider.
> 3.  **Generate the `prisma/schema.prisma` file** for three models: `Workout`, `Exercise`, and `WorkoutSet`, with appropriate fields and relations for an exercise tracking app.
> 4.  **Provide the command** `npx prisma migrate dev --name init` for me to run to create the first migration.
> 5.  **Generate the code for a simple Express server** in `/server/index.js` with a single endpoint `/api/workouts` that returns mock data.
> 6.  **Generate the code** for a basic `/src/pages/Index.tsx` page that fetches and displays data from the local server.

## The Refinement (Bridging the Aesthetic Gap)

After the AI has generated the basic local scaffold and you have it running, you will now engage the **AI UI/UX Specialist**. This is where you close the gap between a basic app and a beautiful one.

**Copy and paste this new, aesthetically-driven prompt into the Gemini chat:**

> Okay, the basic scaffold is running. Now, adopt the **AI UI/UX Specialist** persona and apply your **Critical Design System Mandate**.
>
> Your goal is to transform this basic UI into a beautiful, modern user experience. Here are the steps:
>
> 1.  **Establish the Design System:** In `src/index.css`, define a clean, modern color palette. Let's use a dark theme with a deep blue/black background, a vibrant accent color for primary actions (like a bright teal or electric blue), and slightly lighter shades for cards and surfaces.
>
> 2.  **Create a `WorkoutCard.tsx` Component:** Create a new file for this component. It must use the `Card` component from `shadcn/ui`. It should display the workout date and notes in a visually pleasing way, using the design tokens you just created.
>
> 3.  **Refactor the Main Page:** Update `/src/pages/Index.tsx`. Replace the basic `<ul>` list with a responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) that uses your new `WorkoutCard.tsx` component to display the workout data.
>
> 4.  **Add a Header:** Create a new `Header.tsx` component that includes the application title ("FitTrack") and a `Button` from `shadcn/ui` for "Log New Workout". Add this header to the main page.