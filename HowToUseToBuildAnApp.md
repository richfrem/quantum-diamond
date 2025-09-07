# How to Use This Framework to Build Your App
**Version:** v17

This tutorial walks you through the definitive Quantum Diamond workflow: **Path B, The Guided Prototyping Session**. It will show you how to use your AI Architect to build a complete, well-designed application from scratch in your local IDE.

## Initialization: Training Your AI

1.  Create a new, empty folder for your project (e.g., `my-new-app/`).
2.  Open this folder in VS Code.
3.  Open the Gemini chat panel (or your preferred AI assistant).
4.  Your very first message to the AI is to paste the entire content of `prompts/04_AIA_SYSTEM_PROMPT.md`.

**Result:** Your AI assistant is now fully initialized. It understands its role as your expert AI Architect and is bound by the framework's protocols and mandates.

## The Genesis Cycle: A Three-Step Kick-Off

This is how you start the creative "jam session."

### Step 1: The Spark (Your High-Level Idea)

Start with a simple, natural language prompt. You are not giving technical instructions yet; you are sharing your vision. The goal is to describe the "what," not the "how."

**Copy and paste this into the Gemini chat, replacing the example with your own idea:**

> **Example Prompt:**
> "Okay, let's start our first project. Can you build me an app that I can use to manage my personal book collection?"
>
> **Your Prompt:**
> "Okay, let's start our first project. Can you build me an app that I can use to [YOUR_CORE_APP_IDEA_HERE]?"

### Step 2: The Vision & Clarification (The AI's Response)

The AI, following its new **Kick-Off and Clarification Protocols**, will NOT immediately generate code. Instead, it will respond with a comprehensive vision document tailored to your idea, and ask clarifying questions to reduce ambiguity.

**Expected AI Response (Example for a Book Collection App):**

> *Absolutely. I will create a comprehensive **personal library application** with a clean, modern design that allows you to catalog your books, track your reading progress, and create wishlists.*
>
> ***Core Features:***
> *   *Add books manually or by searching an online database.*
> *   *Organize books into shelves like 'Read', 'Currently Reading', and 'To Read'.*
> *   *Rate and review books you've finished.*
> *   *Search and filter your collection by title, author, or genre.*
>
> ***Design Elements:***
> *   *A warm, academic-themed color palette with serif fonts for titles.*
> *   *Clean card-based layouts to display book covers.*
> *   *Intuitive navigation between your library, wishlist, and search.*
>
> ***Clarifying Questions:***
> *1. For this prototype, are there any specific fields you want to capture for each book beyond the basics (e.g., publisher, page count, original language)?*
> *2. Should the app include a feature to scan a book's ISBN barcode to add it? (This would be a future consideration)*
> *3. Is a social component, like sharing reviews with friends, important for this first version?*

### Step 3: The Confirmation & The Scaffold (Your Actionable Prompt)

This step is where you, the Human Lead, provide clarity and give the command to build. You answer the AI's questions to shape the final vision and then tell it which persona to adopt.

**Your next prompt in the chat (customize your answers):**

> That vision is perfect. Let's answer your questions:
> 1.  No, the basic fields are fine for now.
> 2.  No, **barcode scanning is not needed** for the first version.
> 3.  No, a **social component is not needed** for the first version.
>
> Please proceed. Adopt the **AI Full-Stack Scaffolder** persona and create the initial local-first foundation.

### Step 4: Automated Setup & Execution
After the AI generates the code, it will then proceed to **execute the setup commands** for you. It will install all dependencies and initialize the local database. You will see the output from these commands in the chat.

**Result:** You will receive a fully configured and operational application, ready to be started.

**Expected Result:**
The AI will now respond with its tactical "Chain of Thought" plan. This will be followed by a single, holistic response containing all the files for the application skeleton, **followed by the output of the setup commands it runs for you.**

Finally, at the end of its response, it will report on the work it just did, making the "emergent rigor" transparent:

> **Active Persona:** `AI Full-Stack Scaffolder`
> **Guardian Artifacts Produced:** `adrs/001-local-first-prototyping.md`, `docs/UserRequirements.md`, `docs/DataContracts.md`, `docs/DATABASE_SETUP.md`

You have now successfully navigated the most critical phase of the Genesis Cycle, moving from a vague idea to a clear, co-designed vision, and finally to a professional-grade scaffold, with its initial technical architecture and user requirements already documented for the future Engineering Cycle.