# Agent Context Budget Checklist

This checklist ensures your agent operates within reasonable context limits while maintaining effectiveness. Context budget management prevents token waste, improves response times, and reduces costs.

## Tool Schema Limits
- [ ] **Tool schema bytes per agent**: < 50KB total (JIT load remaining tools)
- [ ] **Max tools per agent**: < 20 (use discovery for larger ecosystems)
- [ ] **Schema versioning**: Tools reference versioned schemas, not inline definitions

## Data Flow Limits
- [ ] **Max raw-text tokens per turn**: < 4K tokens (summarize longer content)
- [ ] **Tabular data limits**: < 100 rows × 20 columns (aggregate/summarize larger datasets)
- [ ] **File size limits**: < 10MB per file (use streaming/chunking for larger files)

## Content Types & Behaviors
- [ ] **Allowed file types**: Explicit allowlist (no arbitrary file execution)
- [ ] **Binary file handling**: Store externally, provide metadata only
- [ ] **API response limits**: < 5MB per response (truncate/summarize large payloads)

## Required Behaviors
- [ ] **Summarize-only mode**: Large artifacts get summaries + pointers, not raw content
- [ ] **Chunking support**: Break large content into digestible pieces
- [ ] **Pointer pattern**: Tools return `{uri, content_type, summary}` instead of raw data
- [ ] **Caching**: Frequently accessed data cached with TTL
- [ ] **Progressive disclosure**: Complex capabilities revealed on-demand

## Monitoring & Alerts
- [ ] **Context usage tracking**: Log token consumption per agent/operation
- [ ] **Budget alerts**: Warnings at 80% of limits
- [ ] **Automatic summarization**: Fallback to summaries when limits exceeded