# Deprecation policy

Deprecation is used to keep the system evolvable while minimizing breakage.

## What can be deprecated

- Tokens
- Contracts
- Patterns
- Schema fields

## How to deprecate (recommended fields)

When deprecating a token/contract/pattern, add these fields where applicable:

- `status`: `deprecated`
- `deprecated_since`: version string (e.g. `0.3.0`)
- `remove_in`: version string (e.g. `1.0.0`)
- `replaced_by`: reference string (e.g. token path or contract id)
- `notes`: concise rationale and migration guidance

## Removal

Removal is a **major** change. If removal is planned, it must be documented in `CHANGELOG.md` and the replacement must exist.

