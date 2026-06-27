
# Code Review Checklist

Every review should verify:

## Correctness

- No obvious bugs
- No runtime errors
- No missing null checks

## React Best Practices

- Correct hook usage
- Proper dependency arrays
- No unnecessary state
- Proper component decomposition

## TypeScript

- No unnecessary any
- Strong typing
- No unsafe casts

## Performance

- Avoid unnecessary renders
- Avoid duplicated computation

## Maintainability

- Readable code
- Reusable components
- Clear naming
- Small functions

## Accessibility

- Semantic HTML
- Labels
- Keyboard support

## Security

- No secrets
- Input validation
- Safe rendering

---

# Review Severity

## 🔴 Critical

Must be fixed before merge.

Examples:

- Bugs
- Broken hooks
- Memory leaks
- Security issues
- Data loss
- Infinite rendering
- Invalid state updates

---

## 🟠 Major

Should be fixed.

Examples:

- Poor architecture
- Large components
- Duplicate logic
- Missing error handling
- Performance problems

---

## 🟡 Minor

Optional improvements.

Examples:

- Naming
- Formatting
- Readability
- Small refactoring

---

## 🟢 Positive

Highlight good practices when present.

Examples:

- Clean abstractions
- Reusable hooks
- Strong typing
- Good accessibility
- Excellent error handling

---

# AI Assistant Guidelines

When generating code:

- Follow existing project conventions.
- Do not introduce new libraries unless requested.
- Do not perform unrelated refactoring.
- Preserve backward compatibility whenever possible.
- Explain significant architectural decisions.
- Prefer small, reviewable pull requests.
- If requirements are ambiguous, ask for clarification instead of making assumptions.
