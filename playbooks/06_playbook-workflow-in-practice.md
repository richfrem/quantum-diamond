# Playbook: The Workflow in Practice
**Version:** v18
**Part of:** The Quantum Diamond Framework

This document provides a tactical, step-by-step guide on how to apply the Quantum Diamond Framework's principles of traceability and rigor during development. It bridges the gap between the high-level concepts of the Genesis and Engineering Cycles and the day-to-day work of writing code.

## The Principle: From Emergent to Formal

The two cycles of the framework handle documentation differently, creating a smooth transition from creative chaos to engineering discipline.

1.  **Genesis Cycle (Emergent Artifacts):** In this phase, requirements and architectural decisions are *discovered*. They emerge organically from the "jam session" with an AI partner. The AI's "Guardian Persona" might create initial, rough drafts of ADRs or user stories. The goal is to capture intent without creating bureaucratic friction.

2.  **Engineering Cycle (Formal Artifacts):** When moving to this phase, we take the emergent artifacts and formalize them using a traceable system. This is where we create the "paper trail" that ensures every line of code serves a documented purpose.

## The Formal Workflow (The Engineering Cycle in Action)

This is the standard process for building a new feature once it has been validated in the Genesis Cycle.

### Step 1: Formalize the Requirement

-   **Action:** Create a new requirement file in your project's `docs/requirements/` directory using the provided `templates/TEMPLATE_REQUIREMENT.md`.
-   **Purpose:** To clearly define *what* needs to be built and how we'll know it's done correctly.

### Step 2: Document Key Decisions (If Necessary)

-   **Action:** If implementing the requirement involves a significant architectural choice, create an ADR in `docs/architecture/adr/`.
-   **Purpose:** To document the *why* behind our technical choices for future reference.

### Step 3: Create the Implementation Task

-   **Action:** Create a new task file in `tasks/backlog/` using `templates/TEMPLATE_TASK.md`.
-   **Crucially:** This task **must** link back to the Requirement ID it fulfills.
-   **Purpose:** To define *how* the feature will be built in concrete, actionable steps.

### Step 4: Implement and Test

-   **Action:** Write the application code (`src/`) and the corresponding tests (`tests/`) as outlined in the task file.
-   **Purpose:** To build the feature and prove its correctness.

### Step 5: Update Traceability Links

-   **Action:** Once complete, go back to the Requirement file and update the "Traceability" section to link to the new code and test files. Mark its status as "Done".
-   **Purpose:** To close the loop and maintain a living, accurate record of the system's architecture and capabilities.

By following this workflow, we ensure that the creative energy of the Genesis Cycle is successfully translated into the robust, maintainable, and well-documented software produced by the Engineering Cycle.