export interface HygieneFinding {
  severity: "error" | "warn";
  message: string;
}

export function inspectControlPlane(code: string): HygieneFinding[] {
  const findings: HygieneFinding[] = [];

  // Anti-pattern: embedding entire schemas in prompts
  if (code.includes("schema") && (code.includes("prompt") || code.includes("instruction"))) {
    findings.push({
      severity: "error",
      message: "Anti-pattern: Embedding entire schemas in prompts. Schemas should be referenced, not embedded."
    });
  }

  // Anti-pattern: unbounded "conversation memory" usage
  if (code.match(/conversation.*memory|memory.*conversation/i) && !code.includes("limit")) {
    findings.push({
      severity: "error",
      message: "Anti-pattern: Unbounded conversation memory usage detected. Implement memory limits and cleanup."
    });
  }

  // Anti-pattern: prompts referencing external state implicitly
  if (code.match(/previous.*conversation|conversation.*history|chat.*history/i) && !code.includes("explicit")) {
    findings.push({
      severity: "warn",
      message: "Anti-pattern: Prompts referencing external state implicitly. Use explicit state passing instead."
    });
  }

  // Anti-pattern: mutation of the LLM's "internal mental model"
  if (code.match(/mental.*model|internal.*state|llm.*state/i) && code.includes("mutate")) {
    findings.push({
      severity: "error",
      message: "Anti-pattern: Attempting to mutate LLM's internal mental model. Use external state management."
    });
  }

  // Detect attempts to load tools directly into prompts
  if (code.match(/load.*tool|tool.*load|embed.*tool/i) && (code.includes("prompt") || code.includes("instruction"))) {
    findings.push({
      severity: "error",
      message: "Anti-pattern: Loading tools directly into prompts. Use tool registry pattern instead."
    });
  }

  // Detect state persistence mistakes (prompt history misuse)
  if (code.match(/prompt.*history|history.*prompt/i) && code.includes("persist")) {
    findings.push({
      severity: "warn",
      message: "State persistence mistake: Misusing prompt history for persistence. Use dedicated state management."
    });
  }

  // Enforce structured object returns instead of narrative prose
  if (code.match(/return.*narrative|return.*story|return.*prose/i)) {
    findings.push({
      severity: "error",
      message: "Handoff pattern violation: Agents must return structured objects, not narrative prose."
    });
  }

  // Missing schema return types in prompts
  if ((code.includes("return") || code.includes("output")) && !code.includes("schema") && !code.includes("type")) {
    findings.push({
      severity: "warn",
      message: "Missing schema return types: Prompts should specify structured return types (JSON/Zod)."
    });
  }

  // Detect context-stuffing tendencies
  if (code.match(/context.*stuff|stuff.*context|large.*context/i)) {
    findings.push({
      severity: "warn",
      message: "Context-stuffing tendency detected. Implement context pruning and selective inclusion."
    });
  }

  return findings;
}