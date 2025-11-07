// Simple redaction hook; plug into IO pipeline.
export function redactPII(text: string): string {
  return text
    .replace(/\b\d{3}-\d{3}-\d{4}\b/g, "[phone]")
    .replace(/\b[\w.-]+@[\w.-]+\.\w+\b/g, "[email]");
}