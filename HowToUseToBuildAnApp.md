# How to Use This to Build Your Exercise App

This tutorial walks you through the definitive Quantum Diamond workflow: **Path B, The Guided Prototyping Session**. It will show you how to use your AI Architect to build a complete, well-designed application from scratch in your local IDE.

## Initialization: Training Your AI

1.  Open your `exercise-tracking-app` folder in VS Code. (or what ever your new app will be called)
2.  Open the Gemini chat panel (or your preferred AI assistant).
3.  Your very first message to the AI is to paste the entire content of `prompts/04_AIA_SYSTEM_PROMPT.md`.

**Result:** Gemini is now fully initialized. It understands its role as your expert AI Architect and is bound by the framework's protocols and mandates.

## The Genesis Cycle: A Three-Step Kick-Off

This is how you start the creative "jam session."

### Step 1: The Spark (Your High-Level Idea)

Start with a simple, natural language prompt. You are not giving technical instructions yet; you are sharing your vision.

**Copy and paste this into the Gemini chat:**

> Okay, let's start our first project. Can you build me an app that I can use to manage and track my exercise routines?

### Step 2: The Vision & Clarification (The AI's Response)

The AI, following its new **Kick-Off and Clarification Protocols**, will NOT immediately generate code. Instead, it will respond with a comprehensive vision document and ask clarifying questions to reduce ambiguity.

**Expected AI Response:**

> *Absolutely. I will create a comprehensive fitness tracking app with a clean, modern design that allows you to manage workout routines, track exercises, and monitor your progress over time.*
>
> ***Core Features:***
> *   *Create and manage custom workout routines*
> *   *Track exercises with sets, reps, and weights*
> *   *Built-in exercise library with common movements*
> *   *Workout session logging and history*
>
> ***Design Elements:***
> *   *A dark-themed, fitness-focused color scheme with energetic accent colors.*
> *   *Clean card-based layouts with smooth transitions.*
> *   *Intuitive, icon-driven navigation.*
>
> ***Clarifying Questions:***
> *1. For initial prototyping, should we focus on a simple local storage solution for data, or do you want to set up a cloud database like Supabase from the start?*
> *2. Should the exercise library be pre-populated with common exercises, or should it be empty for the user to add their own?*
> *3. Is tracking workout duration (e.g., a timer) a key feature for this first version?*

### Step 3: The Confirmation & The Scaffold (Your Actionable Prompt)

This step is where you, the Human Lead, provide clarity and give the command to build. You answer the questions and tell the AI which persona to adopt.

**Your next prompt in the chat:**

> That vision is perfect. Let's answer your questions:
> 1.  Yes, let's use a **local-first** approach with local storage for now.
> 2.  Yes, please **pre-populate** the exercise library with a default list.
> 3.  No, a **timer is not needed** for the first version.
>
> Please proceed. Adopt the **AI Full-Stack Scaffolder** persona and create the initial local-first foundation, following your **"First-Shot" Application Architecture Mandate**.

**Expected Result:**
The AI will now respond with a tactical "Chain of Thought" plan, followed by a single, holistic code block containing all the files (`App.tsx`, `Header.tsx`, `Navigation.tsx`, `RoutinesView.tsx`, `types/index.ts`, `hooks/useLocalStorage.ts`, `data/seed.ts`, etc.) needed to build the complete, well-designed application skeleton you've just co-designed.

You have now successfully navigated the most critical phase of the Genesis Cycle, moving from a vague idea to a clear, co-designed vision, and finally to a professional-grade scaffold, all while avoiding the pitfalls of both rigid planning and chaotic coding.