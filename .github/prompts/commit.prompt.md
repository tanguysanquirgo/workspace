---
description: Generate a SemVer-aware conventional commit message from staged files in a workspace sub-repository
argument-hint: <repoFolder> (example: repo)
agent: agent
---

Generate a conventional commit message by analyzing staged files in a repository folder inside the current workspace.

Inputs:
- Repository folder: ${input:repoFolder:Folder name under the workspace root, for example spa}
- If the user also typed trailing text after the slash command (example: `/commit repo`), treat that as the repository folder when possible.
- If the folder is missing or invalid, ask for a valid folder and stop.

Workflow:
1. Resolve repository path as `<workspaceRoot>/<repoFolder>`.
2. Validate it is a Git repository by running:
  - `git -C "<repoPath>" rev-parse --is-inside-work-tree`
3. Inspect staged changes only:
  - `git -C "<repoPath>" diff --staged --name-status`
  - `git -C "<repoPath>" diff --staged --`
4. If there are no staged files, respond exactly:
  - `No staged changes found in <repoFolder>.`
5. Infer the best conventional commit type and optional scope from staged paths and diff intent.

Conventional commit rules (SemVer):
- `feat`: new user-facing capability -> `minor`
- `fix`: bug fix -> `patch`
- `perf`, `refactor`, `build`, `chore`, `ci`, `docs`, `style`, `test`: usually `none`
- Breaking change -> `major`:
  - Use `type(scope)!: subject` in the header, and/or
  - Add footer `BREAKING CHANGE: <what changed and migration guidance>`
- Subject must be imperative, concise, lowercase after colon, and without trailing period.

Output format:
- Return only the commit header line in conventional format:
  - `type(scope)!: subject`
- Do not include bump labels, explanations, alternatives, body text, or footers.

Quality requirements:
- Base the recommendation only on staged changes, never unstaged changes.
- Return one best commit message.
- Do not run `git commit`; only return message text.
- Return the full result inside a single fenced code block so it is directly copyable.
- Do not include any text before or after the code block.
