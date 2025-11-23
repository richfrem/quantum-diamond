# Migration Guide: Quantum Diamond → Quantum Diamond Forge

## Why Migrate?

Quantum Diamond Forge (v2.2) represents a complete evolution of the original framework:

- **🚀 Faster Setup**: Interactive kickoff vs. manual prompt copying
- **🎯 Right-Sized Rigor**: Choose Ultra-Lean, Lean, or Enterprise mode
- **🔒 Automated Governance**: Lockfiles prevent specification drift
- **✅ Built-in Validation**: `forge.sh validate` checks consistency
- **🏗️ Production-Ready**: Security, ops, and testing patterns included

## Migration Steps

### For New Projects
Simply start with the Forge:
```bash
git clone https://github.com/richfrem/quantum-diamond-forge.git
cd quantum-diamond-forge
./forge.sh start
```

### For Existing Projects

1. **Audit your current state**:
   - Review your existing prompts and documentation
   - Identify which mode fits your project (Ultra-Lean, Lean, Enterprise)

2. **Clone the Forge alongside your project**:
   ```bash
   git clone https://github.com/richfrem/quantum-diamond-forge.git
   ```

3. **Run the kickoff for your mode**:
   ```bash
   cd quantum-diamond-forge
   ./forge.sh start
   # Select your mode when prompted
   ```

4. **Migrate your specifications**:
   - Copy your existing specs to the Forge's structure
   - Run `./forge.sh validate` to check consistency
   - Lock down with `./forge.sh lock all`

5. **Continue with the Build Loop**:
   - Point your IDE Agent to `implementation.lock.json`
   - Let the Forge generate production-ready code

## Concept Mapping

| Quantum Diamond (v1) | Quantum Diamond Forge (v2.2) |
|---------------------|------------------------------|
| `PROMPTS/App-Authoring-Architect.md` | `prompts/00_MASTER_PROTOCOL_LEAN.md` |
| `PROMPTS/Agent-Authoring-Guardian.md` | `prompts/00_MASTER_PROTOCOL.md` (Enterprise) |
| Manual hygiene checks | `./forge.sh validate` |
| ADR templates | Automated ADR generation + lockfiles |
| Single workflow | Two-phase: Spec Loop → Build Loop |

## Support

- **Forge Documentation**: [GUIDE.md](https://github.com/richfrem/quantum-diamond-forge/blob/main/GUIDE.md)
- **Issues**: [Forge Issues](https://github.com/richfrem/quantum-diamond-forge/issues)
- **Questions**: Open a discussion in the Forge repo

---

*This guide is for migrating from the deprecated Quantum Diamond framework to Quantum Diamond Forge v2.2+*
