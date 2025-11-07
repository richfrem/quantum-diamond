# Agent Hygiene Report
Generated: 2025-11-07T20:27:11.451Z

## Findings Overview
- Total Findings: 8
- Errors: 5
- Warnings: 3

## Inspectors Run
- controlFlow
- dataPlane
- privacy
- toolRegistry
- controlPlane

## Detailed Findings

### controlFlow
- ✅ No issues found

### dataPlane
- [WARN] Large data being passed to model

### privacy
- [ERROR] Potential privacy violation detected

### toolRegistry
- ✅ No issues found

### controlPlane
- [ERROR] Anti-pattern: Embedding entire schemas in prompts. Schemas should be referenced, not embedded.
- [ERROR] Anti-pattern: Attempting to mutate LLM's internal mental model. Use external state management.
- [ERROR] Anti-pattern: Loading tools directly into prompts. Use tool registry pattern instead.
- [WARN] State persistence mistake: Misusing prompt history for persistence. Use dedicated state management.
- [ERROR] Handoff pattern violation: Agents must return structured objects, not narrative prose.
- [WARN] Context-stuffing tendency detected. Implement context pruning and selective inclusion.
