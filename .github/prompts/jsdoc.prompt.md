---
description: Generate and insert a concise, accurate JSDoc comment for a TypeScript or JavaScript function or method
---

Generate a high-quality JSDoc comment for the selected TypeScript or JavaScript function or method, and insert it directly above the selected function in the current file.

Requirements:
- Insert the JSDoc comment directly above the selected function in-place.
- Keep the comment concise, practical, and professional.
- Start with a short summary sentence describing the function's purpose.
- Add `@param` entries only for meaningful parameter descriptions.
- Always include an `@returns` entry for functions with a return value.
- Always include an `@throws` entry when the function can throw or reject, and explain the condition accurately.
- Mention side effects, important constraints, defaults, or edge cases only when they matter to callers.
- Do not restate obvious type information that is already clear from TypeScript types.
- Do not invent behavior, assumptions, or exceptions not supported by the code.
- Preserve the existing code style and formatting.
- Do not change the function implementation.

Guidelines:
- Prefer explaining intent and contract over implementation details.
- Skip redundant comments for trivial parameters.
- If the function has no meaningful return value, use `@returns` to state that it returns no useful value.
- If the function does not throw or reject in any meaningful way, omit `@throws` rather than inventing one.
- If the function is simple and self-explanatory, still produce a minimal JSDoc block if explicitly asked.
- If the selection is not a function or method, ask the user to select one and do not modify the file.

Edit behavior:
- Apply the edit directly to the active file rather than returning a standalone snippet.
- If direct in-file insertion is not possible, return a single fenced code block containing only the JSDoc comment (no function code, no extra text).
- Return the updated function with the inserted JSDoc only as confirmation of what was changed.
