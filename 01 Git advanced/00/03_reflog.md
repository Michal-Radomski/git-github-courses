Git Reflog (short for _reference log_) is a local Git feature that records updates to the tips of branches and other
references in your repository. It acts as an "undo history" for your Git operations, allowing you to recover lost commits,
branches, or previous states of your repository.

---

### **Key Features of Git Reflog**

1. **Tracks Local Changes**: Reflog logs every update to `HEAD` or branch tips, including commits, resets, rebases, merges,
   and checkouts.
2. **Local Only**: The reflog is stored locally and is not shared with remote repositories.
3. **Recovery Tool**: It helps recover lost commits or branches that are no longer accessible via regular commands like
   `git log`.
4. **Temporary History**: Entries in the reflog are retained for a default period (typically 90 days) unless explicitly
   cleaned up.

---

### **How Git Reflog Works**

- Each time you perform an action that modifies `HEAD` or branch references (e.g., commit, reset, checkout), Git records the
  change in the reflog.
- You can view the reflog using:
  ```bash
  git reflog
  ```
  This displays a list of actions with their commit hashes, timestamps, and descriptions.

---

### **Common Use Cases**

1. **Recovering Lost Commits**:

   - If you accidentally reset or delete a branch, use `git reflog` to find the commit hash and restore it:
     ```bash
     git checkout
     git branch recovered-branch
     ```

2. **Undoing a Reset**:

   - If you mistakenly reset a branch:
     ```bash
     git reset --hard HEAD@{n}
     ```
     Replace `n` with the appropriate reflog entry index.

3. **Debugging Repository State**:

   - Trace actions like merges, rebases, or branch switches to diagnose issues.

4. **Restoring Deleted Branches**:
   - Find the last commit of the deleted branch in the reflog and recreate it:
     ```bash
     git branch
     ```

---

### **Difference Between `git log` and `git reflog`**

| Feature             | `git log`                               | `git reflog`                          |
| ------------------- | --------------------------------------- | ------------------------------------- |
| Purpose             | Shows commit history based on ancestry. | Tracks all reference updates locally. |
| Scope               | Includes only reachable commits.        | Includes all changes to `HEAD`.       |
| Shared with Remote? | Yes                                     | No                                    |
| Retention           | Permanent                               | Temporary (default: 90 days).         |

---

### **Example Output**

Running `git reflog` might show:

```bash
fa82776 HEAD@{0}: checkout: moving from main to feature-branch
c1a2b3c HEAD@{1}: commit: Added new feature
d9e8f7g HEAD@{2}: reset: moving to HEAD~1
```

This indicates recent actions like switching branches, committing changes, and resetting.

---

Git Reflog is an essential tool for recovering from mistakes and debugging complex workflows in Git. By understanding how it
works, you can confidently manage your repository's history and recover from errors effectively.

Citations: [1] https://www.knowledgehut.com/blog/devops/git-reflog [2] https://www.datacamp.com/tutorial/git-reflog [3]
https://www.slingacademy.com/article/understanding-git-reflog-the-ultimate-guide/ [4]
https://initialcommit.com/blog/git-reflog [5] https://www.git-tower.com/learn/git/faq/what-is-git-reflog [6]
https://graphite.dev/blog/every-engineer-should-understand-git-reflog [7] https://www.golinuxcloud.com/git-reflog-tutorial/
[8] https://git-scm.com/docs/git-reflog

---

Answer from Perplexity:
https://www.perplexity.ai/search/what-does-the-command-do-git-r-m38rmj7QSNq9EzdLOvH.zA?utm_source=copy_output
