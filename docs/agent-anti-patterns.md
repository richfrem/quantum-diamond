# Agent Anti-Patterns (and the right fix)

1) Pre-loading every tool schema → **Bloat**
   - **Fix:** JIT tool registry / MCP server, load on demand.
2) Duplicating tool schemas across agents
   - **Fix:** Central shared registry / package.
3) Shipping giant tool results through the model
   - **Fix:** Pass file handles/IDs; store artifacts in files/object storage; feed summaries.
4) No on-demand discovery
   - **Fix:** `search_tools`/filesystem discovery; progressive disclosure.
5) Raw data back to LLM
   - **Fix:** Filter/aggregate in code; give curated slices only.
6) Control flow via "model → tool → model ..."
   - **Fix:** Put loops/polling in code; LLM orchestrates at a conceptual level only.
7) PII through the model
   - **Fix:** Redact/tokenize; least-privilege execution layer; privacy guardrails first.
8) No state or reusable skills
   - **Fix:** Persist state (DB/files); cache; RAG/CAG; shared utilities.