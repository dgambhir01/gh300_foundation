# GH-300 GitHub Copilot Certification - Study Site

A fully static, browser-based study tool for the **GitHub Copilot (GH-300)** certification exam. No build step, no server, no dependencies - just open `index.html` or deploy to GitHub Pages.

## Live Site

> **[https://dgambhir01.github.io/gh300_foundation/](https://dgambhir01.github.io/gh300_foundation/)**

---

## Features

| Tool | Description |
|---|---|
| **Mock Exam** | 60 random questions, 100-minute countdown, question navigator, flag for review, scored results with domain breakdown |
| **Flashcard Drill** | Spaced-repetition flashcards filtered by domain; wrong answers resurface sooner |
| **Domain Diagnostic** | 10-question diagnostic (one per domain), no timer, identifies weak areas with study recommendations |
| **Progress Tracking** | All history stored in `localStorage` — no account needed |

---

## Question Bank

**123 questions** across 6 exam domains:

| # | Domain | Questions |
|---|---|---|
| 1 | Use GitHub Copilot Responsibly | 10 |
| 2 | Use GitHub Copilot Features | 32 |
| 3 | Understand GitHub Copilot Data and Architecture | 19 |
| 4 | Configure Privacy, Content Exclusions, and Safeguards | 16 |
| 5 | Improve Developer Productivity with GitHub Copilot | 31 |
| 6 | Apply Prompt Engineering and Context Crafting | 15 |

---

## Exam Details

| | |
|---|---|
| **Exam code** | GH-300 |
| **Provider** | Microsoft / GitHub via Pearson VUE |
| **Pass mark** | 700 / 1000 |
| **Duration** | 100 minutes |
| **Questions** | 60 (single and multi-select MCQ) |

---

## Files

```
gh300_foundation/
├── index.html        # Landing page + progress dashboard
├── mock-exam.html    # Timed 60-question mock exam
├── drill.html        # Flashcard drill with spaced repetition
├── diagnostic.html   # 10-question domain diagnostic
├── questions.js      # Question bank (window.QUESTIONS + window.DOMAINS)
└── styles.css        # Shared stylesheet
```

---


## Official Resources

- [Exam Page (Microsoft Learn)](https://learn.microsoft.com/credentials/certifications/github-copilot/)
- [Official Study Guide PDF](https://aka.ms/GH300-StudyGuide)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)

---

*Independent community resource. Not affiliated with or endorsed by Microsoft or GitHub. All trademarks are the property of their respective owners.*
