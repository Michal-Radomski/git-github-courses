The difference between a **short hash** and a **long hash** in Git lies in their length and use cases, but both represent the
same commit. Here's a detailed explanation:

---

### **1. Long Hash**

- **Description**: A long hash is the full 40-character SHA-1 hash generated for a commit in Git.
- **Example**: `c26cf8af130955c5c67cfea96f9532680b963628`
- **Purpose**:
  - It uniquely identifies a commit in the repository.
  - Used internally by Git to ensure integrity and track objects (e.g., commits, blobs, trees).
  - Required when absolute precision is needed (e.g., scripting or debugging).
- **Characteristics**:
  - Always unique within the repository.
  - Stored in Git's `.git/objects` directory.

---

### **2. Short Hash**

- **Description**: A short hash is an abbreviated version of the long hash, typically the first 7 characters by default (can
  be adjusted).
- **Example**: `c26cf8a` (shortened from the long hash above).
- **Purpose**:
  - Provides a more human-readable and convenient way to reference commits.
  - Commonly used in commands like `git log --oneline` or for display purposes.
- **Characteristics**:
  - Unique within the repository as long as it remains unambiguous (Git ensures this by expanding it if necessary).
  - Can be generated using:
    ```bash
    git rev-parse --short
    ```

---

### **Key Differences**

| Feature             | Long Hash                               | Short Hash                               |
| ------------------- | --------------------------------------- | ---------------------------------------- |
| **Length**          | Full 40 characters                      | Abbreviated (default: 7 characters)      |
| **Uniqueness**      | Always unique                           | Unique only as long as it’s unambiguous  |
| **Use Case**        | Internally in Git, scripting, debugging | Human-readable output, quick referencing |
| **Example Command** | `git log`                               | `git log --oneline`                      |

---

### **How Git Handles Short Hashes**

Git ensures that short hashes are unambiguous. If multiple commits share the same prefix, Git will automatically expand the
short hash to include additional characters until it becomes unique.

---

### **When to Use Each**

- Use the **long hash** when precision and reliability are critical, such as in scripts or when referencing commits
  programmatically.
- Use the **short hash** for convenience when working interactively or sharing commit references informally.

Both are essential tools for navigating and referencing commits efficiently within Git.

Citations: [1] https://www.shellhacks.com/git-get-short-hash-sha-1-from-long-hash-head-log/ [2]
https://stackoverflow.com/questions/43665836/in-git-what-is-the-difference-between-long-and-short-hashes [3]
https://dev.to/hectorleiva/github-actions-and-creating-a-short-sha-hash-8b7 [4]
https://www.kodeco.com/books/advanced-git/v1.0/chapters/1-how-does-git-actually-work [5]
https://security.stackexchange.com/questions/157520/which-hash-length-is-more-secure [6]
https://git-scm.com/docs/hash-function-transition [7] https://github.com/goreleaser/goreleaser/issues/578 [8]
https://lists.reproducible-builds.org/pipermail/rb-general/2023-September/003072.html

---

Answer from Perplexity:
https://www.perplexity.ai/search/what-does-the-command-do-git-r-m38rmj7QSNq9EzdLOvH.zA?utm_source=copy_output
