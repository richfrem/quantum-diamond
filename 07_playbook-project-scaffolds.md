# Playbook: Project Scaffolds
**Version:** v18
**Part of:** The Quantum Diamond Framework

This playbook provides prescriptive, best-practice project structures to use when starting a new application with the Quantum Diamond Framework. A standardized structure is the foundation of the Engineering Cycle's rigor, ensuring consistency and maintainability from the very first step.

The AI Architect's first action in the Genesis Cycle should be to ask which of these scaffolds to deploy.

---

## Scaffold A: Python AI/Agent Application

This structure is optimized for AI-native projects, such as agents, data processing pipelines, and machine learning services. It is the structure used by the `knowledge-weaver` project.

### Directory Structure
```
project-name/
├── .gitignore
├── README.md
├── pyproject.toml      # Or requirements.txt
├── vision.md           # The high-level vision document
│
├── data/               # Raw, processed, and training data (Gitignored)
│   ├── raw/
│   ├── processed/
│   └── finetuning/
│
├── docs/               # Living documentation for the project
│   ├── 01_user_requirements.md
│   ├── 02_data_contracts.md
│   └── architecture/
│       └── adr/
│
├── models/             # Trained model artifacts (Gitignored)
│
├── notebooks/          # Jupyter notebooks for exploration and analysis
│
├── prompts/            # System and task prompts for LLMs
│   ├── system/
│   └── tasks/
│
├── src/
│   └── project_name/   # The main Python package
│       ├── __init__.py
│       ├── agents/
│       ├── api/        # CLI or web server entry points
│       └── ...         # Other modules (data_processing, rag, etc.)
│
├── tasks/              # Markdown-based task management
│   ├── backlog/
│   ├── in_progress/
│   └── done/
│
└── tests/              # Automated tests
```

---

## Scaffold B: Full-Stack Web Application (Node.js/React)

This structure is optimized for modern, full-stack web applications featuring a distinct frontend and backend, typically using a local-first database during the Genesis Cycle. It directly reflects the architecture mandated in `04_AIA_SYSTEM_PROMPT.md`.

### Directory Structure
```
project-name/
├── .gitignore
├── README.md
├── package.json
├── .env                # For DATABASE_URL
│
├── prisma/             # Prisma schema and local SQLite database
│   └── schema.prisma
│
├── docs/               # Living documentation
│   ├── 01_user_requirements.md
│   └── architecture/
│       └── adr/
│
├── server/             # Node.js backend (e.g., Express)
│   └── index.js
│
├── src/                # React/Vite frontend
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── MainView.tsx
│   │   └── CreateModal.tsx
│   │
│   ├── data/
│   │   └── seed.ts     # Mock or static data
│   │
│   └── types/
│       └── index.ts    # Centralized TypeScript types
│
└── tasks/              # Markdown-based task management
    ├── backlog/
    ├── in_progress/
    └── done/
```