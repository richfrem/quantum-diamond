# Agent Handoff Checklist (Prototype → Engineering)

```mermaid
sequenceDiagram
    participant A as Agent
    participant G as Governance Guardian
    participant H as Human Lead
    participant E as Engineering Cycle

    A->>G: Produces structured result (JSON/Zod)
    G->>G: Validates schema compliance
    G->>H: Presents validated artifact
    H->>H: Reviews & approves handoff
    H->>E: Transfers to engineering team
    E->>E: Begins production implementation
```

## Governance & Safety
- [ ] PII/secret handling: redaction/tokenization hooks enabled
- [ ] Tool permissions: least-privilege, audited

## Efficiency
- [ ] Tool schemas loaded JIT (no prompt stuffing)
- [ ] Large artifacts referenced by handle (no raw blobs to LLM)
- [ ] Data filtered/aggregated in code

## Architecture
- [ ] Shared tool registry/pkg in place (no duplication)
- [ ] Control flow in code (polling/loops); LLM for high-level intent
- [ ] State persisted (DB/files); caches; RAG/CAG if applicable

## Testing & Ops
- [ ] Contract tests for tool I/O (schemas)
- [ ] Guardrail tests (PII, length, cost, latency)
- [ ] CI wired; basic monitoring (cost/latency/validation failures)