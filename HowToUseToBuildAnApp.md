# How to Use This to Build Your Exercise App

Your workflow is simple and powerful.

## Initialization

1.  Open your `exercise-tracking-app` folder in VS Code.
2.  Open the Gemini chat panel.
3.  Your very first message to Gemini is to paste the entire content of the `04_AIA_SYSTEM_PROMPT.md` file.

Gemini is now fully initialized. It understands its role as your AI Architect with a local-first default.

## The Spark & The Scaffold (Your First Actionable Prompt)

Now you give Gemini its first task for the new project.

**Copy and paste this into the Gemini chat:**

Okay, let's start our first project using the Quantum Diamond Framework: a personal **exercise tracking application**.

Please adopt the **AI Full-Stack Scaffolder** persona. Your goal is to create the initial local-first foundation. Here are the steps:

1.  **Provide the shell commands** to initialize a new Vite + React + TypeScript project and install `express`, `cors`, `prisma`, and `@prisma/client`. Also install dev dependencies `@types/express`, `@types/cors`, and `ts-node`.
2.  **Initialize Prisma** with the SQLite provider.
3.  **Generate the `prisma/schema.prisma` file** for three models: `Workout`, `Exercise`, and `WorkoutSet`, with appropriate fields and relations for an exercise tracking app.
4.  **Provide the command** `npx prisma migrate dev --name init` for me to run to create the first migration.
5.  **Generate the code for a simple Express server** in `/server/index.js` with a single endpoint `/api/workouts` that returns mock data.
6.  **Generate the code** for a basic `/src/pages/Index.tsx` page that fetches and displays data from the local server.
