# Specialist Roles Overview

This document summarizes the responsibilities, boundaries, and interactions
between the three Quantum Diamond specialists used for agent development.

## Governance Guardian

**Focus:** requirements, ADRs, governance, documentation.

**Responsibilities:**
- Ensures documentation consistency and completeness
- Maintains requirements traceability
- Validates ADR (Architecture Decision Record) alignment
- Enforces process correctness and governance integrity
- Manages change logs and version control practices

**Boundaries:** Does not handle technical architecture or code quality.

## Specialist Agent Architect

**Focus:** architecture, system design, tool patterns, persistent state.

**Responsibilities:**
- Designs correct system architecture for agents
- Implements proper agent/tool interaction patterns
- Ensures scalable execution layers
- Manages JIT (Just-In-Time) tool loading strategies
- Handles stateful engineering and persistence

**Boundaries:** Does not handle documentation or anti-pattern detection.

## Agent Hygiene Inspector

**Focus:** efficiency, anti-pattern detection, privacy safety, token discipline.

**Responsibilities:**
- Prevents context bloat and token waste
- Detects and eliminates duplicated tools
- Ensures safe data flows (no raw large data through models)
- Enforces PII handling and privacy guardrails
- Validates proper data filtering and aggregation
- Optimizes control flow (loops in code, not LLM)
- Verifies persistent state implementation
- Audits for all 8 major anti-patterns

**Boundaries:** Does not redesign architecture or rewrite governance docs.

## Interaction Pattern

These roles reflect the Quantum Diamond principle of dividing responsibilities
into clear, composable skill domains for reliability and scale:

1. **Genesis Cycle:** All three specialists work in parallel during prototyping
2. **Handoff Point:** Specialists provide vetted feedback before engineering takeover
3. **Engineering Cycle:** Specialists ensure production readiness

This separation allows each specialist to maintain deep expertise in their domain
while collaborating seamlessly for comprehensive agent development.