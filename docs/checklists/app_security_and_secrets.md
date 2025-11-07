# App Security & Secrets Checklist
- [ ] No secrets in repo; use `.env` + `.env.example`
- [ ] Role-based access enforced on server endpoints
- [ ] Input validation (Zod) on all inbound payloads
- [ ] Output encoding for UI-rendered data
- [ ] RLS/multi-tenant boundaries verified (if applicable)