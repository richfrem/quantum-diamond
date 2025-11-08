# Quantum–Diamond Architect (QDA)
## Gemini App Builder Activation Guide
### Version: v4.24

This document explains exactly how to activate, run, and maintain the **Quantum–Diamond Architect** (QDA) inside **Google Gemini App Builder**.
This guide captures all observed behaviors, constraints, and required boot sequences that ensure QDA operates correctly.

---

# 1. Overview

The Quantum–Diamond Architect is a dual-track agent:

- **TRACK A — Play Surface:** user-facing conversational design + controlled code generation
- **TRACK B — Parallel Documentation Engine:** automatic ADR/REQ/DEC/CST/RSK/OQ/etc. generation

Gemini App Builder will not activate this persona automatically. You must explicitly boot it with a two-part ritual.

This document explains the required steps.

---

# 2. Install the QDA System Instructions (One-Time Setup)

1. Open your Gemini App Builder project.
2. Click the **gear icon (⚙️)** in the upper-right corner.
3. Under **System instructions**, select **"Write my own instructions."**
4. Paste the **full QDA system instruction set (v4.24)**.
5. Click **Save changes**.

Gemini will now retain this system instruction block for this project.

> ✅ Note: Despite Gemini documentation saying App Builder cannot manage folders, in practice it is capable of creating folders and files programmatically in response to scaffolding requests.

---

# 3. REQUIRED Boot Ritual (Every New Session)

Gemini **does not** automatically enter system mode.
You must begin every new conversation with the exact two-line message:

```
I want to build an app.
SYSTEM INSTRUCTION — ENTER SYSTEM MODE
```

### Expected system response:

```
ACKNOWLEDGED — SYSTEM MODE ENABLED.
Full Quantum-Diamond Architect persona instructions (v4.24) are now loaded internally. Please send any message to proceed to the Architect's greeting.
```

If the response differs, the persona is NOT active.

---

# 4. Trigger the Architect's First Message

After the acknowledgment, send:

```
continue
```

The required response:

```
Hi! I'm your Quantum-Diamond App Architect.
What kind of app would you like to create today?
(Your answer will initiate the App Type Selection Protocol and begin automatic documentation in PROJECT-DOCS/)
```

This confirms the persona is fully loaded.

---

# 5. Provide the App Concept

Example:

```
I want to build a vocabulary study flashcard app.
```

QDA will:

- silently generate ADR-0000, ADR-0001
- generate REQs, CSTs, DECs, RSKs, OQs
- create implied schemas and data-contract files
- update ledger + README
- then ask 2–3 high-level clarifying questions
- then confirm documentation creation

---

# 6. Scaffolding

When clarifications are complete, you must explicitly trigger scaffolding:

```
Approved: Scaffold
```

QDA will:

✅ Build full directory tree
✅ Generate all source files
✅ Create + populate `PROJECT-DOCS/`
✅ Produce a summary
✅ Emit sentinel:

```
[SENTINEL] SCAFFOLD COMPLETE
```

---

# 7. Iterative Development Protocol

Every new requirement triggers:

### TRACK B (automatic)
- creation/update of REQ-XXXX, ADR-XXXX, DEC-XXXX, CST-XXXX, etc.
- update of ledger.md
- continuous data-contract updates

### TRACK A (visible)
- conversational clarification
- focused code modification
- clear change summary

---

# 8. Hygiene Protocol

Only runs on:

```
Approved: Hygiene
```

Performs:

- lint fixes
- import normalization
- unused variable cleanup
- structural fixes

---

# 9. Troubleshooting: Recovery Protocol

If QDA does not obey the persona rules:

### Option 1 — Stop Generation + Reboot
Click **Stop**, then re-enter:

```
I want to build an app.
SYSTEM INSTRUCTION — ENTER SYSTEM MODE
```

### Option 2 — Refresh Browser Tab & Reboot

### Option 3 — Verify System Instructions Are Still Saved
Open the ⚙️ menu and confirm the v4.24 block is present.

---

# 10. Notes & Known Behaviors

- QDA consistently creates full folder structures inside App Builder despite official docs implying otherwise.
- Persona remains active until Gemini loses the system context (refresh, crash, long idle).
- Documentation generation is extremely reliable once TRACK B is active.

---

# 11. Version

This file documents activation behavior for:

**Quantum–Diamond Architect System Instructions v4.24**
Future versions should update this guide accordingly.