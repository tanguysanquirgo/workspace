---
description: Generate and insert a concise, accurate JSDoc-like comment for a Playwright test or test step
---

Generate a high-quality JSDoc-like comment for the selected Playwright `test(...)`, `test.describe(...)` block, or meaningful in-test step, and insert it directly above the selected code in the current file.

Requirements:
- Insert the comment directly above the selected Playwright test code in-place.
- Keep the comment concise, practical, and professional.
- Start with a short summary sentence describing the test intent and expected behavior.
- Include key test context only when useful (preconditions, fixtures, role, environment assumptions).
- Call out important actions and assertions that define the test contract.
- Mention async behavior and waits only when they are critical to test reliability.
- Mention side effects, external dependencies, or data mutations when they matter to maintainers.
- Note relevant edge cases or constraints only when they affect understanding or maintenance.
- Do not invent flows, assertions, fixtures, or failure modes not present in the selected code.
- Preserve the existing code style and formatting.
- Do not change the test implementation.

Tag guidance (JSDoc-like):
- Use `@scenario` to summarize the user flow or condition under test.
- Use `@precondition` for required setup that is not obvious.
- Use `@steps` for compact, high-value action summaries (omit for trivial tests).
- Use `@asserts` for the primary expected outcomes.
- Use `@flaky-risk` only when the code clearly indicates timing/network/state sensitivity.
- Use `@notes` for meaningful maintenance context (e.g., known limitation, dependency coupling).
- Omit tags that would be empty, redundant, or speculative.

Guidelines:
- Prefer test intent and behavioral contract over implementation details.
- Keep comments brief; avoid narrating every line.
- For simple tests, still produce a minimal comment block if explicitly asked.
- If the selection is not a Playwright test block or meaningful test step, ask the user to select one and do not modify the file.

Edit behavior:
- Apply the edit directly to the active file rather than returning a standalone snippet.
- If direct in-file insertion is not possible, return a single fenced code block containing only the comment block (no test code, no extra text).
- Return the updated test snippet with the inserted comment only as confirmation of what was changed.
