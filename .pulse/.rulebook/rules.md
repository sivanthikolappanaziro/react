# React Frontend Repository Rules

> These rules define how AI assistants and contributors should write, review, and modify code in this repository.

---

# General Principles

- Prioritize readability over cleverness.
- Follow existing project patterns before introducing new ones.
- Keep changes minimal and focused.
- Do not refactor unrelated code.
- Prefer composition over inheritance.
- Avoid premature optimization.
- Every change should improve maintainability.

---

# Architecture

Follow this architecture:

```
UI Components
      ↓
Custom Hooks
      ↓
Services
      ↓
API Layer
```

Never bypass layers.

❌ Component → API

✅ Component → Hook → Service → API

---

# Folder Structure

```
src/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── services/
 ├── api/
 ├── utils/
 ├── constants/
 ├── types/
 ├── assets/
```

Rules:

- Components belong in `components`
- Pages compose components only
- Business logic belongs in hooks/services
- API requests belong in `api`
- Utility functions remain pure
- Shared types belong in `types`

---

# Components

Components should:

- Have a single responsibility
- Be reusable
- Be easy to understand
- Stay under 200 lines where practical

Avoid:

- Large JSX trees
- Deep nesting
- Multiple responsibilities
- Complex inline logic

Extract reusable UI into separate components.

---

# Props

Always:

- Use TypeScript interfaces or types
- Destructure props
- Use explicit prop names

Good

```tsx
interface ButtonProps {
  label: string;
  disabled?: boolean;
}

function Button({ label, disabled }: ButtonProps) {}
```

Bad

```tsx
function Button(props: any) {}
```

---

# State Management

Prefer:

1. Local state
2. Context
3. Global store only when necessary

Avoid duplicated state.

Bad

```tsx
const [users, setUsers] = useState([]);
const [filteredUsers, setFilteredUsers] = useState([]);
```

Better

```tsx
const filteredUsers = useMemo(
  () => filterUsers(users),
  [users]
);
```

---

# Hooks

Rules:

- Hooks must start with `use`
- Hooks should do one thing
- Hooks should be reusable
- Never call hooks conditionally
- Keep hooks under ~300 lines

Extract reusable business logic into hooks.

---

# useEffect

Every useEffect should have:

- Correct dependency array
- Single responsibility
- Cleanup when necessary

Avoid:

- Disabling exhaustive-deps
- Multiple unrelated effects
- Infinite render loops

---

# API Calls

Never perform API calls directly inside components.

❌

```tsx
useEffect(() => {
    fetch(...)
}, [])
```

✅

```
Component
   ↓
useUsers()
   ↓
UserService
   ↓
API
```

---

# Async Code

Always:

- Use async/await
- Handle loading
- Handle errors
- Handle empty states

Avoid long promise chains.

---

# Error Handling

Every API request must:

- Handle loading
- Handle failure
- Show meaningful user feedback
- Log unexpected errors

Never swallow errors silently.

---

# TypeScript

Never use:

```ts
any
```

unless absolutely necessary.

Prefer:

- interfaces
- union types
- generics
- inferred types

Avoid:

```ts
as any
```

---

# Naming

Components

```
UserCard
```

Hooks

```
useUsers
```

Functions

```
fetchUsers
```

Booleans

```
isLoading
hasPermission
canEdit
```

Constants

```
MAX_UPLOAD_SIZE
```

Avoid abbreviations.

---

# Styling

Follow the existing styling approach.

Do not mix:

- CSS Modules
- Tailwind
- Styled Components
- Emotion

Use one system consistently.

Avoid inline styles except for dynamic values.

---

# Performance

Review for:

- unnecessary renders
- unnecessary state
- expensive calculations
- unstable callbacks

Use:

- React.memo
- useMemo
- useCallback

only when they provide measurable benefit.

---

# Accessibility

Always verify:

- Semantic HTML
- Labels
- Keyboard navigation
- alt text
- aria-* attributes
- Focus management

Accessibility regressions should block approval.

---

# Forms

Forms should:

- Be controlled
- Validate input
- Reuse shared validation
- Show clear validation errors

Avoid duplicated validation logic.

---

# Imports

Order imports as:

```
React

Third-party libraries

Absolute imports

Relative imports

Styles
```

Remove unused imports.

---

# Code Style

Prefer:

Early returns

Good

```tsx
if (!user) return null;
```

Instead of

```tsx
if (user) {
   ...
}
```

Avoid nested ternary operators.

Avoid deeply nested conditionals.

Keep functions focused.

---

# Security

Never:

- expose secrets
- commit API keys
- trust user input
- use dangerouslySetInnerHTML unless sanitized

Validate all external input.

---

# Testing

New logic should include tests where appropriate.

Review:

- happy path
- edge cases
- failure cases

Avoid brittle snapshot tests.

---
