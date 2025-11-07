# Agent Privacy and Secrets Checklist

This checklist ensures your agent handles sensitive data responsibly, preventing accidental exposure of PII, secrets, or confidential information. Privacy guardrails must be implemented at every layer of the agent architecture.

## PII Detection & Redaction
- [ ] **PII detection hook**: Automatic scanning for emails, phones, SSNs, addresses
- [ ] **Redaction patterns**: Configurable regex/tokenization rules
- [ ] **Entity recognition**: ML-based PII detection for complex cases
- [ ] **Redaction logging**: Audit trail of what was redacted and why

## Secrets Management
- [ ] **Secrets isolation**: Secrets never leave execution layer
- [ ] **Masked values**: Model receives `[REDACTED]` or tokenized placeholders
- [ ] **Vault integration**: External secret storage (HashiCorp Vault, AWS Secrets Manager, etc.)
- [ ] **Rotation handling**: Automatic secret rotation without agent restart

## Data Flow Controls
- [ ] **Input sanitization**: All user inputs scanned for sensitive data
- [ ] **Output filtering**: Agent responses checked before delivery
- [ ] **Intermediate data**: Sensitive data in memory is encrypted/zeroed
- [ ] **Cross-agent isolation**: Agents cannot access each other's sensitive data

## Logging & Audit
- [ ] **Redaction by default**: All logs redact sensitive data automatically
- [ ] **Secure trace mode**: Optional detailed logging for debugging (access-controlled)
- [ ] **Audit trails**: Complete history of data access and transformations
- [ ] **Compliance reporting**: Automated reports for GDPR, CCPA, etc.

## Access Controls
- [ ] **Least privilege**: Agents have minimal required permissions
- [ ] **User consent**: Explicit consent for sensitive data processing
- [ ] **Data retention**: Automatic cleanup of temporary sensitive data
- [ ] **Emergency controls**: Ability to immediately disable agent access to sensitive data

## Testing & Validation
- [ ] **Privacy unit tests**: Automated tests for redaction accuracy
- [ ] **Secret leakage tests**: Scans for accidental secret exposure
- [ ] **Compliance validation**: Regular audits against privacy frameworks
- [ ] **Penetration testing**: External validation of privacy controls