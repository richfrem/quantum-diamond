# Agent Anti-Patterns (and the right fix)

This document summarizes the most common "citizen-dev" pitfalls in AI agent development and provides proven fix patterns for each. These patterns prevent context bloat, security issues, and runaway costs while maintaining agent effectiveness.

## 1. Massive Context Bloat (pre-loading tool schemas)
**Problem:** Stuffing every available tool schema into the system prompt, consuming tokens and confusing the model.

**Fix:** JIT tool registry + discovery
- Load tool schemas on-demand after the model selects them
- Provide only tool names/capabilities in initial prompts
- Use progressive disclosure for complex tool ecosystems

## 2. Duplicated Tool Definitions across agents
**Problem:** Each agent redefines the same tools, leading to inconsistency and maintenance overhead.

**Fix:** Shared registry / MCP server
- Central tool registry that multiple agents can reference
- Version-controlled tool definitions
- Consistent tool behavior across agent instances

## 3. Passing huge intermediate results through the model
**Problem:** Sending large datasets, files, or API responses directly through the LLM, wasting tokens and context.

**Fix:** Summarize/point, store raw in workspace
- Store large artifacts in files/object storage
- Pass file handles/URIs and summaries to the model
- Model sees structured summaries, not raw payloads

## 4. No on-demand discovery
**Problem:** Static tool sets that can't adapt to new requirements or data sources.

**Fix:** `search_tools`/filesystem discovery + allowlist
- Dynamic tool discovery based on workspace contents
- Progressive disclosure of capabilities
- Safe allowlisting for sensitive operations

## 5. No filtering/transform in exec layer
**Problem:** Raw data flows directly from tools to model without processing.

**Fix:** Do compute in code, give LLM only structured summaries
- Filter/aggregate data in the execution layer
- Provide curated, structured views to the model
- Maintain data integrity while optimizing context usage

## 6. Inefficient chained tool control flow
**Problem:** Model orchestrates complex workflows with multiple tool calls, leading to inefficient "model → tool → model" loops.

**Fix:** Loops/polling in code; model only decides what/why, not how/when
- Implement control flow logic in code, not prompts
- Model provides high-level intent and decisions
- Execution layer handles timing, retries, and complex workflows

## 7. Sensitive data exposure
**Problem:** PII, secrets, or sensitive data flows through the model, creating security and compliance risks.

**Fix:** PII filters, redaction hooks, secrets guards
- Automatic redaction/tokenization of sensitive data
- Least-privilege execution model
- Privacy guardrails at every layer

## 8. No state or reusable skills
**Problem:** Agents start from scratch each session, unable to learn or maintain context.

**Fix:** Persistent workspace DB/files + shared utilities
- State persistence across sessions
- Reusable skill libraries
- Caching and RAG/CAG for learned knowledge

## The 5th Anti-Pattern: Handoff Breakdown

**Problem:** Agent outputs are delivered as narrative prose instead of structured objects, causing ambiguity and downstream processing failures during handoffs between development phases.

**Why This Matters:**
- **Narrative Ambiguity:** Natural language descriptions leave interpretation open to multiple valid readings
- **Downstream Fragility:** Engineering teams cannot reliably parse or act upon prose descriptions
- **Quality Gates Fail:** Automated validation becomes impossible without structured data contracts
- **Maintenance Burden:** Prose requirements drift and become outdated without clear validation criteria

**Bad Example (Narrative Prose):**
```
I've created a user authentication system that handles login, registration, and password reset. It uses JWT tokens for session management and stores user data in a PostgreSQL database. The system includes proper password hashing and email verification for new accounts.
```

**Good Example (Structured Objects):**
```json
{
  "component": "UserAuthenticationService",
  "endpoints": [
    {"path": "/auth/login", "method": "POST", "params": ["email", "password"]},
    {"path": "/auth/register", "method": "POST", "params": ["email", "password", "name"]},
    {"path": "/auth/reset-password", "method": "POST", "params": ["email"]}
  ],
  "data_model": {
    "user_table": "users",
    "fields": ["id", "email", "password_hash", "verified", "created_at"],
    "relationships": []
  },
  "security": {
    "token_type": "JWT",
    "hash_algorithm": "bcrypt",
    "verification_required": true
  }
}
```

**Best Practice: All task steps must return JSON or Zod-validated objects**
- Use structured schemas for all agent outputs
- Implement validation at handoff points
- Maintain data contracts between development phases
- Enable automated testing and validation pipelines

### Common Pitfalls & the Fix
- **Pre-loading all tool schemas** → Use a **tool registry + JIT discovery** (see `templates/agent_hygiene/toolRegistry.ts`).
- **Piping huge tool results through LLM** → **Filter/aggregate in code**, pass summaries/refs.
- **Chained control flow in the model** → Move loops/polling into code; model only decides.
- **No state** → Persist in workspace DB/files; cache intermediates.