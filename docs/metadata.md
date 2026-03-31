# Spec metadata fields

Contracts and patterns can optionally include:

- `since`: version where this spec first appeared (e.g. `0.2.0`)
- `status`: `stable` | `beta` | `experimental` | `deprecated`
- `deprecated_since`: version where it was deprecated
- `remove_in`: planned removal version (major change)
- `replaced_by`: id/path to replacement
- `links`: relevant references (e.g. WAI-ARIA patterns)
- `related_patterns`: ids of related recipes

## Defaults when omitted

To keep authoring lightweight for prototypes, these fields are optional.

Recommended implicit defaults:

- `since`: current repo version (first appearance)
- `status`: `experimental`

