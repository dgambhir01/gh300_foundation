// GH-300 GitHub Copilot Certification — Question Bank
// 123 questions across 6 domains | Last updated: June 2026

window.QUESTIONS = [

  // ── DOMAIN 1: USE GITHUB COPILOT RESPONSIBLY ─────────────────────
  {
    id: 1,
    domain: "Use GitHub Copilot Responsibly",
    topic: "Responsible AI",
    type: "single",
    question: "Which Microsoft ethical AI principle is aimed at ensuring AI systems treat all people equally?",
    options: ["Privacy and Security", "Fairness", "Reliability and Safety", "Inclusiveness"],
    correct: 1,
    explanation: "Fairness focuses directly on ensuring AI systems do not discriminate or exhibit bias. It is distinct from Inclusiveness (broad access) and Transparency (explainability)."
  },
  {
    id: 2,
    domain: "Use GitHub Copilot Responsibly",
    topic: "Responsible AI",
    type: "single",
    question: "What can be done during AI development to minimize bias?",
    options: ["Collect massive amounts of data for training", "Focus on accuracy of the data", "Use diverse data, fairness metrics, and human oversight", "Improve on the computational efficiency and speed"],
    correct: 2,
    explanation: "Three-pronged approach: diverse data at ingestion, fairness metrics at testing, human oversight at deployment. Size alone does not eliminate bias."
  },
  {
    id: 3,
    domain: "Use GitHub Copilot Responsibly",
    topic: "Responsible AI",
    type: "single",
    question: "Why is it important to ensure the security of the code used in Generative AI (Gen AI) tools?",
    options: [
      "Ensuring code security prevents unauthorized access and potential data breaches",
      "Ensuring code security enables the AI system to handle larger datasets effectively",
      "Ensuring code security maintains the integrity of the AI system",
      "Ensuring code security supports the development of more advanced AI features"
    ],
    correct: 0,
    explanation: "The GH-300 exam prioritizes Confidentiality — Gen AI tools may process sensitive source code, secrets, or proprietary logic. If security is weak, this can lead to unauthorized access and data breaches."
  },
  {
    id: 4,
    domain: "Use GitHub Copilot Responsibly",
    topic: "Responsible AI",
    type: "single",
    question: "A social media manager wants to use AI to filter content. How can they promote transparency in the platform's AI operations?",
    options: [
      "By regularly updating the AI filtering algorithm",
      "By relying on a well-regarded AI development company",
      "By focusing on user satisfaction with the content filtering",
      "By providing clear explanations about the types of content the AI is designed to filter and how it arrives at its conclusion"
    ],
    correct: 3,
    explanation: "Transparency requires clear communication about how the system works and how decisions are made — building trust and allowing users to understand and appeal decisions."
  },
  {
    id: 5,
    domain: "Use GitHub Copilot Responsibly",
    topic: "Responsible AI",
    type: "single",
    question: "Which principle emphasizes that AI systems should be understandable and provide clear information on how they work?",
    options: ["Fairness", "Accountability", "Transparency", "Inclusiveness"],
    correct: 2,
    explanation: "Transparency = understandability and disclosure of system functioning. Accountability = responsibility for outcomes. Fairness = equal treatment."
  },
  {
    id: 6,
    domain: "Use GitHub Copilot Responsibly",
    topic: "Responsible AI",
    type: "single",
    question: "Which of the following is a risk associated with using AI?",
    options: [
      "AI replaces the need for developer opportunities in most fields",
      "AI eliminated the need for data privacy regulations",
      "AI algorithms are incapable of perpetuating existing biases",
      "AI systems can sometimes make decisions that are difficult to interpret"
    ],
    correct: 2,
    explanation: "Option C is the risk — the FALSE assumption that AI can't perpetuate bias leads to unmanaged bias deployments. This complacency is explicitly a well-documented risk in responsible AI frameworks."
  },
  {
    id: 7,
    domain: "Use GitHub Copilot Responsibly",
    topic: "Responsible AI",
    type: "multi",
    question: "What types of prompts or code snippets might be flagged by the GitHub Copilot toxicity filter? (Choose two.)",
    options: [
      "Hate speech or discriminatory language (e.g., racial slurs, offensive stereotypes)",
      "Sexually suggestive or explicit content",
      "Code that contains logical errors or produces unexpected results",
      "Code comments containing strong opinions or criticisms"
    ],
    correct: [0, 1],
    explanation: "The toxicity filter targets harmful language — hate speech/discrimination (A) and sexually explicit content (B). Logical errors (C) and strong opinions (D) are not toxicity concerns."
  },
  {
    id: 8,
    domain: "Use GitHub Copilot Responsibly",
    topic: "Responsible AI",
    type: "single",
    question: "How can the concept of fairness be integrated into the process of operating an AI tool?",
    options: [
      "Focusing on accessibility will ensure fairness",
      "Training AI data and algorithms to be free from biases will ensure fairness",
      "Regularly monitoring the AI tool's performance will ensure fairness in its outputs",
      "Focusing on collecting large datasets for training will ensure fairness"
    ],
    correct: 0,
    explanation: "Accessibility = equitable access for all user groups regardless of ability, language, or context. This directly embodies the principle of fairness in operation."
  },
  {
    id: 9,
    domain: "Use GitHub Copilot Responsibly",
    topic: "Responsible AI",
    type: "multi",
    question: "What are the potential risks associated with relying heavily on code generated from GitHub Copilot? (Choose two.)",
    options: [
      "GitHub Copilot may introduce security vulnerabilities by suggesting code with known exploits",
      "GitHub Copilot may decrease developer velocity by requiring too much time in prompt engineering",
      "GitHub Copilot's suggestions may not always reflect best practices or the latest coding standards",
      "GitHub Copilot may increase development lead time by providing irrelevant suggestions"
    ],
    correct: [0, 2],
    explanation: "Security vulnerabilities (A) and stale coding standards (C) are the primary risks. Prompt engineering effort (B) is negligible; irrelevant suggestions (D) are minor quality issues, not fundamental risks."
  },
  {
    id: 10,
    domain: "Use GitHub Copilot Responsibly",
    topic: "Responsible AI",
    type: "single",
    question: "Why might a Generative AI (Gen AI) tool create inaccurate outputs?",
    options: [
      "The Gen AI tool is programmed with a focus on creativity over factual accuracy",
      "The Gen AI tool is experiencing downtime and is not fully recovered",
      "The training data might contain biases or inconsistencies",
      "The Gen AI tool is being overloaded with too many requests at once"
    ],
    correct: 2,
    explanation: "Training data quality/bias is the root cause of hallucinations and factual errors in LLMs. Downtime affects availability, not output quality; overload affects latency, not accuracy."
  },

  // ── DOMAIN 2: USE GITHUB COPILOT FEATURES — IDE ───────────────────
  {
    id: 11,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot Features — IDE",
    type: "multi",
    question: "When using an IDE with a supported GitHub Copilot plug-in, which Chat features can be accessed from within the IDE? (Choose two.)",
    options: ["Explain code and suggest improvements", "Find out about releases and commits", "Generate unit tests", "Plan coding tasks"],
    correct: [0, 2],
    explanation: "Core IDE chat features: explain/improve code (A) and generate unit tests via /tests command (C). Finding releases/commits (B) and planning tasks (D) are not core IDE chat features."
  },
  {
    id: 12,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot Features — IDE",
    type: "multi",
    question: "Which Copilot Enterprise features are available in all commercially supported IDEs? (Choose two.)",
    options: ["Knowledge bases", "Chat", "Inline suggestions", "Pull request summaries"],
    correct: [1, 2],
    explanation: "Chat (B) and inline suggestions (C) work across VS Code, Visual Studio, JetBrains, and Neovim. Knowledge bases and PR summaries are web/Enterprise-specific features."
  },
  {
    id: 13,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot Features — IDE",
    type: "single",
    question: "What is the primary role of the /optimize slash command in Visual Studio?",
    options: [
      "Translates code into a more performant language",
      "Enhances the performance of the selected code by analyzing its runtime complexity",
      "Automatically formats the code according to the selected style guide",
      "Summarizes your documentation into more maintainable and readable formats"
    ],
    correct: 1,
    explanation: "/optimize analyzes runtime complexity and suggests performance improvements — more efficient algorithms, data structures, or parallelization techniques."
  },
  {
    id: 14,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot Features — IDE",
    type: "single",
    question: "What specific function does the '/fix' slash command perform?",
    options: [
      "Proposes changes for detected issues, suggesting corrections for syntax errors and programming mistakes",
      "Converts pseudocode into executable code, optimizing for readability and maintainability",
      "Generates new code snippets based on language syntax and best practices",
      "Initiates a code review with static analysis tools for security and logic errors"
    ],
    correct: 0,
    explanation: "/fix corrects existing code issues — syntax errors, logical flaws, incorrect assignments. It does not generate new code (C) or run static analysis tools (D)."
  },
  {
    id: 15,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot Features — IDE",
    type: "single",
    question: "How can you get multiple suggestions from GitHub Copilot?",
    options: [
      "By using the inline chat functionality with the command/multiple",
      "By using @workspace in the chat window",
      "By opening the completions panel in your editor",
      "By asking for multiple suggestions using comments in your code"
    ],
    correct: 2,
    explanation: "The completions panel shows all alternative suggestions simultaneously for comparison. @workspace (B) is for workspace-scoped questions, not multiple completions."
  },
  {
    id: 16,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot Features — IDE",
    type: "multi",
    question: "Which of the following are true about code suggestions? (Choose two.)",
    options: [
      "Code suggestions are limited to single-line suggestions",
      "Code suggestions are guaranteed to not expose known security vulnerabilities",
      "Code suggestions will always compile or run without modifications",
      "You can use keyboard shortcuts to accept the next word in a suggestion",
      "Alternative code suggestions can be shown in a new tab"
    ],
    correct: [3, 4],
    explanation: "Tab accepts the full suggestion; Ctrl+Right accepts word by word (D). Alternatives panel is available (E). Copilot generates multi-line suggestions, has no security guarantee, and suggestions may not compile."
  },
  {
    id: 17,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot Features — IDE",
    type: "single",
    question: "How does GitHub Copilot Chat help in understanding the existing codebase?",
    options: [
      "By running code linters and formatters",
      "By providing visual diagrams of the code structure",
      "By answering questions about the code and generating explanations",
      "By automatically refactoring code to improve readability"
    ],
    correct: 2,
    explanation: "Copilot Chat explains code contextually in natural language. It does not run linters, produce diagrams, or auto-refactor."
  },
  {
    id: 18,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot Features — IDE",
    type: "single",
    question: "What method can be used to interact with GitHub Copilot?",
    options: [
      "From a watch window in an IDE debug session",
      "By using a properly configured GitHub CLI",
      "From a web browser at https://github.copilot.com",
      "By using chat capabilities in NeoVim"
    ],
    correct: 0,
    explanation: "The watch window in an active debug session is a supported interaction method — Copilot has access to current call stack and watch expressions. The URL (C) does not exist."
  },
  {
    id: 19,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot Features — IDE",
    type: "single",
    question: "What happens when GitHub Copilot generates more than one code completion suggestion?",
    options: [
      "It adds all of the suggestions to your code",
      "It selects the most relevant suggestion automatically",
      "It enables developers to review each suggestion by selecting the left or right arrows",
      "It discards all but the first suggestion"
    ],
    correct: 2,
    explanation: "Left/right arrow keys cycle through multiple suggestions in the completions panel. Copilot never auto-inserts or auto-selects."
  },
  {
    id: 20,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot Features — IDE",
    type: "single",
    question: "What are the two ways to generate code line completions using GitHub Copilot?",
    options: [
      "Generate completions from a code line and from a code file",
      "Generate completions from a comment and from a code line",
      "Generate completions from a comment and from a prompt",
      "Generate completions from a function name and from a variable name"
    ],
    correct: 1,
    explanation: "Two trigger methods: write a natural language comment describing what you want (A) or start typing a code line and let Copilot complete it (B)."
  },
  {
    id: 21,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot Features — IDE",
    type: "single",
    question: "How do you access GitHub Copilot's inline chat?",
    options: [
      "Access the inline chat by clicking on the chat icon in the left sidebar of Visual Studio Code",
      "Use Ctrl+i on Windows or Command+i on a Mac to open the inline chat",
      "Access the inline chat by using Alt+i on Windows or Option+i on a Mac",
      "Type '/chat' anywhere in your code to open the inline chat"
    ],
    correct: 1,
    explanation: "Ctrl+I (Windows) / Cmd+I (Mac) opens inline chat at the cursor position within the editor."
  },
  {
    id: 22,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot Features — IDE",
    type: "single",
    question: "What are the benefits of using agents like '@terminal' or '@workspace' when interacting with GitHub Copilot?",
    options: [
      "Agents help you ask questions within a specific context, allowing for more precise and relevant answers from GitHub Copilot",
      "Agents help enforce a consistent code format based on best practices",
      "Agents provide extra security features for detecting vulnerabilities",
      "Agents automatically optimize your code for better performance"
    ],
    correct: 0,
    explanation: "@workspace scopes questions to your entire project; @terminal scopes to terminal context. Both improve precision and relevance of answers."
  },
  {
    id: 23,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot Features — IDE",
    type: "single",
    question: "How can you accept GitHub Copilot's suggestions?",
    options: ["Press the Tab key", "Press the F1 key", "Press the F4 key", "Press the Enter key"],
    correct: 0,
    explanation: "Tab accepts the full suggestion. Ctrl+Right accepts word by word. Enter creates a new line — it does not accept suggestions."
  },
  {
    id: 24,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot Features — IDE",
    type: "single",
    question: "What is GitHub Copilot?",
    options: [
      "GitHub Copilot is an AI pair programmer that you can use to get code suggestions",
      "GitHub Copilot is OpenAI Codex, a new AI system created by OpenAI",
      "GitHub Copilot is a JavaScript public repository and is one of the best supported languages",
      "GitHub Copilot is a code review tool that automatically checks for bugs"
    ],
    correct: 0,
    explanation: "Copilot is an AI pair programmer — it suggests code but does not replace the developer, automatically check for bugs, or operate as a standalone system."
  },
  {
    id: 25,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot Features — IDE",
    type: "single",
    question: "What is the purpose of reviewing and correcting the output generated by GitHub Copilot Chat?",
    options: [
      "To ensure that the AI is learning correctly",
      "To ensure the accuracy and completeness of the generated explanations and documentation",
      "To provide feedback to the AI for future improvements",
      "To track the performance of the AI over time"
    ],
    correct: 1,
    explanation: "Human review ensures accuracy and completeness. Copilot can produce plausible-but-incorrect output — developer validation is always required."
  },
  {
    id: 26,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot Features — IDE",
    type: "single",
    question: "What percentage of developers said that GitHub Copilot helps them code faster?",
    options: ["70%", "83%", "65%", "90%"],
    correct: 1,
    explanation: "Official GitHub statistic: 83% of developers reported coding faster with GitHub Copilot."
  },
  {
    id: 27,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot Features — IDE",
    type: "single",
    question: "When using GitHub Copilot Chat to generate unit tests, which slash command would you use?",
    options: ["/init-tests", "/create-tests", "/generate-tests", "/tests"],
    correct: 3,
    explanation: "/tests is the correct slash command for unit test generation. /generate-tests looks plausible but is not the documented command."
  },
  {
    id: 28,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot Features — IDE",
    type: "single",
    question: "What is the purpose of using chat participants, slash commands, and chat variables in GitHub Copilot Chat?",
    options: [
      "They limit the scope of the AI's responses",
      "They add complexity to the chat interface",
      "They help GitHub Copilot Chat understand the context and intent of the question",
      "They allow users to customize the appearance of the chat interface"
    ],
    correct: 2,
    explanation: "Chat participants (@workspace, @terminal), slash commands (/fix, /tests), and variables (#file) provide context and intent signals to Copilot Chat for more precise answers."
  },

  // ── DOMAIN 2: USE GITHUB COPILOT FEATURES — CLI ───────────────────
  {
    id: 29,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot CLI",
    type: "single",
    question: "How do you generate code suggestions with GitHub Copilot in the CLI?",
    options: [
      "Type out the code snippet, use the copilot refine command to enhance it, review the suggested command",
      "Write code comments, press the suggestion shortcut, select the best suggestion from the list",
      "Use 'gh copilot suggest', write the command you want, select the best suggestion from the list",
      "Describe the project's architecture, use the copilot generate command, accept the generated suggestion"
    ],
    correct: 2,
    explanation: "gh copilot suggest is the correct CLI invocation. Natural language input — Copilot provides command options to select from."
  },
  {
    id: 30,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot CLI",
    type: "multi",
    question: "GitHub Copilot in the Command Line Interface (CLI) can be used to configure the following settings. (Choose two.)",
    options: ["Usage analytics", "The default editor", "The default execution confirmation", "GitHub CLI subcommands"],
    correct: [0, 2],
    explanation: "CLI-configurable: telemetry/usage analytics (A) and execution confirmation prompt (C). Default editor (B) is OS/CLI-level. GitHub CLI subcommands (D) are not configured through Copilot."
  },
  {
    id: 31,
    domain: "Use GitHub Copilot Features",
    topic: "Copilot CLI",
    type: "single",
    question: "What is the best way to share feedback about GitHub Copilot Chat when using it on GitHub Mobile?",
    options: [
      "The Settings menu in the GitHub Mobile app",
      "The feedback section on the GitHub website",
      "Use the emojis in the Copilot Chat interface",
      "By tweeting at GitHub's official X account"
    ],
    correct: 2,
    explanation: "In-app emoji feedback is the direct, context-linked mechanism for mobile Copilot Chat feedback — links specific responses to your sentiment about them."
  },

  // ── DOMAIN 3: UNDERSTAND GITHUB COPILOT DATA AND ARCHITECTURE ─────
  {
    id: 32,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "single",
    question: "How does GitHub Copilot Chat utilize its training data and external sources to generate responses when answering coding questions?",
    options: [
      "It primarily relies on the model's training data to generate responses",
      "It combines its training data set, code in user repositories, and external sources like Bing to generate responses",
      "It uses user-provided documentation exclusively to generate responses",
      "It primarily uses search results from Bing to generate responses"
    ],
    correct: 1,
    explanation: "Three sources: (1) pre-trained model knowledge, (2) repository/workspace context, (3) Bing search augmentation for current information. All three are combined."
  },
  {
    id: 33,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "multi",
    question: "How long does GitHub retain Copilot data for Business and Enterprise? (Choose two.)",
    options: [
      "Prompts and Suggestions: Not retained",
      "Prompts and Suggestions: Retained for 28 days",
      "User Engagement Data: Kept for Two Years",
      "User Engagement Data: Kept for One Year"
    ],
    correct: [1, 2],
    explanation: "28 days for prompts/suggestions (debugging/QoS window). 2 years for engagement/usage metrics (compliance reporting). Not retained (A) contradicts the 28-day documented policy."
  },
  {
    id: 34,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "single",
    question: "What is the impact of the 'Fill-In-the-Middle' (FIM) technique on GitHub Copilot's code suggestions?",
    options: [
      "Improves suggestions by considering both the prefix and suffix of the code, filling in the middle part more accurately",
      "Restricts Copilot to use only external databases for generating code suggestions",
      "Allows Copilot to generate suggestions based only on the prefix of the code",
      "Ignores both the prefix and suffix of the code, focusing only on user comments for context"
    ],
    correct: 0,
    explanation: "FIM = bidirectional context (prefix + suffix surrounding the cursor). More accurate than prefix-only completion models for filling in the middle of code."
  },
  {
    id: 35,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "single",
    question: "What role does the pre-processing of user input play in the data flow of GitHub Copilot Chat?",
    options: [
      "It formats the output response before presenting it to the user",
      "It filters out irrelevant information from the user's input prompt",
      "It enriches the input prompt with additional context before passing it to the language model",
      "It directly generates a response based on the user's input prompt"
    ],
    correct: 2,
    explanation: "Pre-processing enriches raw input with file context, language, repo structure, and session history before LLM processing — enabling more relevant suggestions."
  },
  {
    id: 36,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "multi",
    question: "What are the additional checks that need to pass before the GitHub Copilot responses are submitted to the user? (Choose two.)",
    options: [
      "Code quality",
      "Compatibility with user-specific settings",
      "Performance benchmarking",
      "Suggestions matching public code (optional based on settings)"
    ],
    correct: [1, 3],
    explanation: "Post-processing checks: user/org content exclusion rules (B) and optional public code similarity check (D). Code quality (A) and performance benchmarking (C) are not post-processing steps."
  },
  {
    id: 37,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "multi",
    question: "Identify the steps involved in the life cycle of a GitHub Copilot code suggestion. (Choose two.)",
    options: ["Generate suggestions", "Capturing the user's context", "Processing telemetry data", "Retraining the model", "Storing user data"],
    correct: [0, 1],
    explanation: "Per-suggestion lifecycle: (1) capture user context, (2) generate suggestion. Telemetry/retraining/storage happen outside the individual suggestion cycle."
  },
  {
    id: 38,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "single",
    question: "What should developers consider when relying on GitHub Copilot for generating code that involves statistical analysis?",
    options: [
      "GitHub Copilot will automatically correct any statistical errors found in the user's initial code",
      "GitHub Copilot can independently verify the statistical significance of results",
      "GitHub Copilot can design new statistical methods that have not been previously documented",
      "GitHub Copilot's suggestions are based on statistical trends and may not always apply accurately to specific datasets"
    ],
    correct: 3,
    explanation: "Copilot reflects training data patterns — it does not evaluate mathematical correctness or verify statistical significance for specific datasets. Developer validation is required."
  },
  {
    id: 39,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "single",
    question: "What is a likely effect of GitHub Copilot being trained on commonly used code patterns?",
    options: [
      "Suggest completely novel projects, while reducing time on a project",
      "Suggest innovative coding solutions that are not yet popular",
      "Suggest homogeneous solutions if provided a diverse data set",
      "Suggest code snippets that reflect the most common practices in the training data"
    ],
    correct: 3,
    explanation: "Training on common patterns — Copilot reproduces those patterns. May perpetuate existing conventions or less-than-optimal solutions if those dominate training data."
  },
  {
    id: 40,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "single",
    question: "How does GitHub Copilot typically handle code suggestions that involve deprecated features or syntax?",
    options: [
      "GitHub Copilot always filters out deprecated elements to promote the use of current standards",
      "GitHub Copilot may suggest deprecated syntax or features if they are present in its training data",
      "GitHub Copilot rejects all prompts involving deprecated features to avoid compilation errors",
      "GitHub Copilot automatically updates deprecated features in its suggestions to the latest version"
    ],
    correct: 1,
    explanation: "Copilot doesn't 'know' what's deprecated — it reproduces patterns from training data including deprecated code. Developers must review for currency."
  },
  {
    id: 41,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "multi",
    question: "What are the potential limitations of GitHub Copilot Chat? (Choose two.)",
    options: [
      "Ability to handle complex code structures",
      "Limited training data",
      "Extensive support for all programming languages",
      "No biases in code suggestions"
    ],
    correct: [0, 1],
    explanation: "Limitations: struggles with deeply complex/nested code (A), and training data doesn't cover all proprietary/niche frameworks (B). It does NOT have no biases (D) — biases exist."
  },
  {
    id: 42,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "single",
    question: "How does GitHub Copilot determine the code completion suggestions it provides?",
    options: [
      "Based on the context of code in the editor",
      "Based on the programming language used",
      "Based on the length of the code written",
      "Based on a random selection of popular coding patterns"
    ],
    correct: 0,
    explanation: "Context of code in the editor is the primary determinant — surrounding code, open files, variable names, comments, and the full context window all inform suggestions."
  },
  {
    id: 43,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "single",
    question: "How does Copilot use an organization's codebase and internal knowledge to enhance productivity and collaboration?",
    options: [
      "By providing code suggestions based on open-source libraries only",
      "By tailoring coding assistance, answering questions, and suggesting code aligned with the organization's standards and best practices",
      "By suggesting code without considering the project context",
      "By randomly generating code snippets"
    ],
    correct: 1,
    explanation: "Copilot Enterprise uses org's internal codebase and knowledge bases to tailor suggestions to org-specific patterns, standards, and best practices."
  },
  {
    id: 44,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "single",
    question: "How does GitHub Copilot work?",
    options: [
      "GitHub Copilot uses prompts and natural language text that you type to provide coding suggestions",
      "GitHub Copilot uses lights that you type, and it provides suggestions based on what you type",
      "GitHub Copilot uses radio language that you type, and it provides suggestions based on what you type",
      "GitHub Copilot uses binary code input to generate suggestions"
    ],
    correct: 0,
    explanation: "Copilot processes natural language prompts and code context to generate suggestions. It operates on text input, not binary or radio language."
  },
  {
    id: 45,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "single",
    question: "How does GitHub Copilot learn from your prompts?",
    options: [
      "It only relies on its pre-existing training data",
      "It utilizes various approaches including zero-shot, one-shot, and few-shot learning",
      "It requires extensive manual training on specific tasks",
      "It cannot learn and adapt based on user interactions"
    ],
    correct: 1,
    explanation: "Copilot uses zero-shot (no examples), one-shot (one example), and few-shot (multiple examples) prompting approaches at inference time to adapt to your context."
  },
  {
    id: 46,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "single",
    question: "Which of the following is NOT a step in the process of GitHub Copilot processing a user's prompt into a code suggestion?",
    options: [
      "Statistical analysis and pattern recognition",
      "Secure prompt transmission and context gathering",
      "Content filtering to ensure safety and security",
      "Context analysis to understand the user's intent"
    ],
    correct: 0,
    explanation: "Statistical analysis and pattern recognition is not a discrete named step in Copilot's prompt processing pipeline. The actual steps are context gathering, transmission, content filtering, and context analysis."
  },
  {
    id: 47,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "single",
    question: "In the outbound flow of GitHub Copilot, which of the following actions might occur after the code suggestion is generated?",
    options: [
      "The suggestion is immediately integrated into the user's code",
      "The suggestion is presented to the user for review and acceptance",
      "The suggestion is sent to a third-party server for evaluation",
      "The suggestion is automatically deleted to protect user privacy"
    ],
    correct: 1,
    explanation: "Outbound flow: generated suggestion is presented to the user for review and acceptance. The developer must actively accept it — it is never auto-integrated."
  },
  {
    id: 48,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "single",
    question: "What is the role of Large Language Models (LLMs) in GitHub Copilot?",
    options: [
      "To manage user accounts and billing information",
      "To understand and analyze the user's code structure",
      "To generate context-aware code suggestions and respond to prompts",
      "To compile and execute the generated code within the IDE"
    ],
    correct: 2,
    explanation: "LLMs are the core engine: they generate context-aware suggestions and natural language responses. They don't compile code, manage accounts, or execute code."
  },
  {
    id: 49,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "single",
    question: "Where is the Copilot proxy service hosted?",
    options: ["Self hosted", "Amazon Web Service", "Microsoft Azure", "Google Cloud Platform"],
    correct: 2,
    explanation: "GitHub Copilot's proxy service is hosted on Microsoft Azure infrastructure."
  },
  {
    id: 50,
    domain: "Understand GitHub Copilot Data and Architecture",
    topic: "Data & Architecture",
    type: "single",
    question: "How does GitHub Copilot utilize chat history to enhance its code completion capabilities?",
    options: [
      "By using chat history to offer personalized code snippets based on previous prompts",
      "By logging chat history to monitor user activity and ensure compliance with coding standards",
      "By analyzing past chat interactions to identify common programming patterns and errors",
      "By sharing chat history with third-party services to improve integration and functionality"
    ],
    correct: 2,
    explanation: "Chat history allows Copilot to identify recurring patterns and errors in context. It does not share data with third parties or monitor compliance."
  },

  // ── DOMAIN 4: CONFIGURE PRIVACY, CONTENT EXCLUSIONS & SAFEGUARDS ──
  {
    id: 51,
    domain: "Configure Privacy, Content Exclusions, and Safeguards",
    topic: "Privacy & Exclusions",
    type: "multi",
    question: "What two options navigate to configure duplicate detection? (Choose two.)",
    options: [
      "Organization settings — Copilot — Policies",
      "Enterprise settings — Copilot — Policies",
      "Repository settings — Copilot — Policies",
      "User settings — Copilot — Policies"
    ],
    correct: [0, 1],
    explanation: "Duplicate detection (public code matching) is configured at org or enterprise level only. Repository (C) and user (D) level settings do not have this option."
  },
  {
    id: 52,
    domain: "Configure Privacy, Content Exclusions, and Safeguards",
    topic: "Privacy & Exclusions",
    type: "single",
    question: "What configuration needs to be set to get help from Microsoft and GitHub protecting against IP infringement while using GitHub Copilot?",
    options: [
      "Suggestions matching public code to 'blocked'",
      "Enforce blocking of MIT or GPL licensed code",
      "You need to check code suggestions yourself before accepting",
      "Enable GitHub Copilot license checking"
    ],
    correct: 0,
    explanation: "Set 'suggestions matching public code' to blocked. This flags completions highly similar to licensed repositories. Developer must still review — no automatic IP guarantee."
  },
  {
    id: 53,
    domain: "Configure Privacy, Content Exclusions, and Safeguards",
    topic: "Privacy & Exclusions",
    type: "multi",
    question: "What type of information can you retrieve through GitHub Copilot Business Subscriptions via REST API? (Choose two.)",
    options: [
      "View code suggestions for a specific user",
      "List all GitHub Copilot seat assignments for an organization",
      "Get a summary of GitHub Copilot usage for organization members",
      "List of all unsubscribed GitHub Copilot members within an organization"
    ],
    correct: [1, 2],
    explanation: "REST API provides seat assignments (B) and usage metrics/engagement summary (C). Individual suggestion content (A) is private. Unsubscribed members (D) requires manual comparison."
  },
  {
    id: 54,
    domain: "Configure Privacy, Content Exclusions, and Safeguards",
    topic: "Privacy & Exclusions",
    type: "multi",
    question: "What kind of insights can the GitHub Copilot usage metrics API provide? (Choose two.)",
    options: [
      "Generate detailed reports on code quality improvements",
      "Track the number of code suggestions accepted and used in the organization",
      "Provide feedback on coding style and standards compliance",
      "Provide Copilot Chat specific suggestions acceptance metrics"
    ],
    correct: [1, 3],
    explanation: "Metrics API: suggestion acceptance rates (B) and Chat-specific acceptance metrics (D). It provides usage analytics, not code quality analysis (A) or style compliance (C)."
  },
  {
    id: 55,
    domain: "Configure Privacy, Content Exclusions, and Safeguards",
    topic: "Privacy & Exclusions",
    type: "multi",
    question: "How can insights from the metrics API improve the development process with GitHub Copilot? (Choose two.)",
    options: [
      "Real-time debugging and error resolution statistics",
      "Automated generation of complete project documentation",
      "Detailed analysis of GitHub Copilot's suggestions vs. manual coding",
      "Insights on the types of coding languages where GitHub Copilot is most helpful"
    ],
    correct: [2, 3],
    explanation: "Metrics identify where Copilot adds most value by language (D) and AI vs manual coding ratios for process improvement (C). Not for debugging (A) or doc generation (B)."
  },
  {
    id: 56,
    domain: "Configure Privacy, Content Exclusions, and Safeguards",
    topic: "Privacy & Exclusions",
    type: "multi",
    question: "What are the effects of content exclusions? (Choose two.)",
    options: [
      "The excluded content is not directly available to GitHub Copilot to use as context",
      "GitHub Copilot suggestions are no longer available in the excluded files",
      "The excluded content is no longer used while debugging the code",
      "The IDE will not count coding suggestions in the excluded content"
    ],
    correct: [0, 1],
    explanation: "Content exclusions: excluded files cannot be used as context (A) and suggestions are disabled in those files (B). Debugging tools (C) and IDE counters (D) are unaffected."
  },
  {
    id: 57,
    domain: "Configure Privacy, Content Exclusions, and Safeguards",
    topic: "Privacy & Exclusions",
    type: "multi",
    question: "What do you check when GitHub Copilot content exclusions are not working? (Choose two.)",
    options: [
      "If GitHub Copilot can connect to the server selected in your user settings",
      "If the user is part of the content exclusion team that limits the use of content exclusions",
      "If the content exclusion settings changed in the last 30 minutes or before that",
      "If the user is in an organization that has content exclusions configured"
    ],
    correct: [2, 3],
    explanation: "Troubleshoot content exclusions by checking: settings changed recently (C — propagation delay exists) and if the user's org has exclusions configured (D). Server connection (A) and team membership (B) are distractors."
  },
  {
    id: 58,
    domain: "Configure Privacy, Content Exclusions, and Safeguards",
    topic: "Privacy & Exclusions",
    type: "single",
    question: "A team is using GitHub Copilot Individual. They need to exclude specific files from being used to inform code completion suggestions. How can they achieve this?",
    options: [
      "Have an organization owner configure content exclusions",
      "Add a .gitignore file to the repo",
      "Have a repo administrator configure content exclusions",
      "Use the #file Chat variable to exclude the files",
      "Upgrade to Copilot Business"
    ],
    correct: 4,
    explanation: "Content exclusions are NOT available in Copilot Individual — the team must upgrade to Business or Enterprise. .gitignore has no effect on Copilot context."
  },
  {
    id: 59,
    domain: "Configure Privacy, Content Exclusions, and Safeguards",
    topic: "Privacy & Exclusions",
    type: "single",
    question: "What is a limitation of content exclusions?",
    options: [
      "Repository administrators and organization owners cannot manage content exclusion settings",
      "Content exclusions can be worked around as it is only available for Git repositories",
      "Content exclusions can only be configured by an enterprise administrator",
      "Content exclusions are only available in the GitHub Copilot Individual plan"
    ],
    correct: 2,
    explanation: "Content exclusions require enterprise administrator configuration. Note: D is wrong — content exclusions are available in Business/Enterprise, NOT Individual."
  },
  {
    id: 60,
    domain: "Configure Privacy, Content Exclusions, and Safeguards",
    topic: "Privacy & Exclusions",
    type: "single",
    question: "What GitHub Copilot feature can be configured at the organization level to prevent GitHub Copilot suggesting publicly available code snippets?",
    options: [
      "GitHub Copilot Chat in the IDE",
      "GitHub Copilot Chat in GitHub Mobile",
      "GitHub Copilot duplication detection filter",
      "GitHub Copilot access to Bing"
    ],
    correct: 2,
    explanation: "The duplication detection filter is the org-level setting that prevents suggestions matching publicly available code. Configured under Org Settings — Copilot — Policies."
  },
  {
    id: 61,
    domain: "Configure Privacy, Content Exclusions, and Safeguards",
    topic: "Privacy & Exclusions",
    type: "single",
    question: "What is the correct way to exclude specific files from being used by GitHub Copilot Business during code suggestions?",
    options: [
      "Modify the .gitignore file to include the specific files",
      "Add the specific files to a copilot.ignore file",
      "Use the GitHub Copilot settings in the user interface to exclude files",
      "Rename the files to include the suffix _no_copilot"
    ],
    correct: 2,
    explanation: "Content exclusions are configured through GitHub Copilot settings UI. .gitignore (A) and custom filenames (D) have no effect on Copilot context."
  },
  {
    id: 62,
    domain: "Configure Privacy, Content Exclusions, and Safeguards",
    topic: "Privacy & Exclusions",
    type: "single",
    question: "What functionality isn't supported in GitHub Copilot for Individuals?",
    options: [
      "VPN Proxy support via self-signed certificates",
      "Offers multi-line function suggestions",
      "Editor integration",
      "Blocks suggestions matching public code"
    ],
    correct: 0,
    explanation: "VPN proxy support via self-signed certificates is a Business/Enterprise feature, not available in the Individual plan."
  },
  {
    id: 63,
    domain: "Configure Privacy, Content Exclusions, and Safeguards",
    topic: "Privacy & Exclusions",
    type: "single",
    question: "What is the primary purpose of content filtering in GitHub Copilot?",
    options: [
      "To prioritize speed and efficiency in code generation",
      "To suggest code that aligns with the latest coding trends",
      "To eliminate irrelevant or outdated information",
      "To prevent the generation of malicious or harmful code"
    ],
    correct: 3,
    explanation: "Content filtering's primary purpose is safety — preventing generation of malicious, harmful, or offensive code and content."
  },
  {
    id: 64,
    domain: "Configure Privacy, Content Exclusions, and Safeguards",
    topic: "Privacy & Exclusions",
    type: "single",
    question: "What is the primary purpose of the toxicity filter in GitHub Copilot?",
    options: [
      "To ensure code suggestions are syntactically correct",
      "To prevent the generation of code that violates intellectual property rights",
      "To eliminate harmful or offensive content in code suggestions",
      "To suggest code that adheres to specific coding standards"
    ],
    correct: 2,
    explanation: "Toxicity filter = harmful/offensive content removal. IP protection is handled by the duplication detection filter (a separate feature)."
  },
  {
    id: 65,
    domain: "Configure Privacy, Content Exclusions, and Safeguards",
    topic: "Privacy & Exclusions",
    type: "multi",
    question: "What content can be configured to be excluded with content exclusions? (Choose three.)",
    options: ["Files", "Folders", "Lines in files", "Gists", "Repositories"],
    correct: [0, 1, 4],
    explanation: "Content exclusions can target: specific files (A), folders/directories (B), and entire repositories (E). Individual lines (C) and Gists (D) cannot be excluded."
  },
  {
    id: 66,
    domain: "Configure Privacy, Content Exclusions, and Safeguards",
    topic: "Privacy & Exclusions",
    type: "single",
    question: "What is the process behind identifying public code matches when using a public code filter in GitHub Copilot?",
    options: [
      "Running code suggestions through filters designed to detect public code",
      "Comparing suggestions against public code using machine learning",
      "Analyzing the context and structure of the code being written",
      "Reviewing the user's browsing history to identify public repositories"
    ],
    correct: 0,
    explanation: "Copilot runs code suggestions through filters designed to detect similarities with public code before presenting them to the user."
  },

  // ── DOMAIN 2: USE GITHUB COPILOT FEATURES — ORG & ENTERPRISE ─────
  {
    id: 67,
    domain: "Use GitHub Copilot Features",
    topic: "Org & Enterprise Mgmt",
    type: "single",
    question: "What is the primary purpose of organization audit logs in GitHub Copilot Business?",
    options: [
      "To track the number of lines of code suggested by Copilot",
      "To assign software licenses within the organization",
      "To monitor code conflicts across repositories",
      "To monitor administrator activities and actions within the organization"
    ],
    correct: 3,
    explanation: "Audit logs record administrative action history — license assignments, policy changes, access changes. Not code metrics or conflict tracking."
  },
  {
    id: 68,
    domain: "Use GitHub Copilot Features",
    topic: "Org & Enterprise Mgmt",
    type: "single",
    question: "What is the correct way to access the audit log events for GitHub Copilot Business?",
    options: [
      "Navigate to the Security tab in the organization's GitHub settings",
      "Navigate to the Insights tab in the repository settings",
      "Use the Audit log section in the organization's GitHub settings",
      "Use the Code tab in the GitHub repository"
    ],
    correct: 2,
    explanation: "Path: Organization Settings — Security — Audit log. The Security tab hosts vulnerability alerts, not audit logs. Insights is repository-level analytics."
  },
  {
    id: 69,
    domain: "Use GitHub Copilot Features",
    topic: "Org & Enterprise Mgmt",
    type: "single",
    question: "Which of the following steps correctly demonstrates how to establish an organization-wide policy for GitHub Copilot Business to restrict its use to certain repositories?",
    options: [
      "Apply policies through the GitHub Actions configuration",
      "Create a copilot.policy file in each repository",
      "Configure the policies in the organization settings",
      "Create a copilot.policy in the .github repository"
    ],
    correct: 2,
    explanation: "Org-wide Copilot policies are configured centrally in organization settings. Not via repo files, .github directory, or GitHub Actions."
  },
  {
    id: 70,
    domain: "Use GitHub Copilot Features",
    topic: "Org & Enterprise Mgmt",
    type: "multi",
    question: "Which REST API endpoint is used to modify details about a GitHub Copilot Business subscription? (Choose two.)",
    options: [
      "Add teams to the Copilot subscription for an organization",
      "Remove teams from the Copilot subscription for an organization",
      "Upgrade or downgrade the subscription tier",
      "Migrate Copilot seat assignments between GitHub organizations",
      "Reassign Copilot seats based on GitHub repository size"
    ],
    correct: [0, 1],
    explanation: "POST /orgs/{org}/settings/copilot/subscription/teams (add) and DELETE equivalent (remove) directly modify subscription team membership. Tier changes (C) use a different endpoint."
  },
  {
    id: 71,
    domain: "Use GitHub Copilot Features",
    topic: "Org & Enterprise Mgmt",
    type: "single",
    question: "How can users provide feedback about GitHub Copilot Chat using their IDE?",
    options: [
      "By emailing the support team directly",
      "Through the 'Share Feedback' button in the Copilot Chat panel",
      "By filling out a feedback form on the GitHub website",
      "By posting on the GitHub forums"
    ],
    correct: 1,
    explanation: "The Share Feedback button in the Chat panel is the direct, context-linked IDE feedback mechanism — links specific responses to user satisfaction data."
  },

  // ── DOMAIN 2: USE GITHUB COPILOT FEATURES — ENTERPRISE ───────────
  {
    id: 72,
    domain: "Use GitHub Copilot Features",
    topic: "Enterprise Features",
    type: "single",
    question: "What GitHub Copilot pricing plan gives you access to your company's knowledge bases?",
    options: [
      "GitHub Copilot Individual",
      "GitHub Copilot Business",
      "GitHub Copilot Enterprise",
      "GitHub Copilot Professional"
    ],
    correct: 2,
    explanation: "Knowledge Bases = Enterprise-only. Business adds admin controls but not private knowledge base integration with internal repos and documentation."
  },
  {
    id: 73,
    domain: "Use GitHub Copilot Features",
    topic: "Enterprise Features",
    type: "single",
    question: "Which of the following is correct about GitHub Copilot Knowledge Bases?",
    options: ["All file types are indexed", "Indexing is static", "All repos are indexed", "It is an Enterprise feature"],
    correct: 3,
    explanation: "Enterprise-only. Indexing is opt-in (not all repos), supports specific file types only (not all), and is dynamic (can be refreshed as repos change)."
  },
  {
    id: 74,
    domain: "Use GitHub Copilot Features",
    topic: "Enterprise Features",
    type: "multi",
    question: "How does GitHub Copilot Enterprise assist in code reviews during the pull request process? (Choose two.)",
    options: [
      "It generates a prose summary and bulleted list of key changes for pull requests",
      "It can answer questions about the changeset of the pull request",
      "It automatically merges pull requests after an automated review",
      "It can validate the accuracy of the changes in the pull request"
    ],
    correct: [0, 1],
    explanation: "PR summaries (A) and natural-language Q&A about changesets (B). Copilot does NOT auto-merge (C) — human approval is required. It does not validate correctness (D)."
  },
  {
    id: 75,
    domain: "Use GitHub Copilot Features",
    topic: "Enterprise Features",
    type: "multi",
    question: "What types of content can GitHub Copilot Knowledge Base answer questions about? (Choose three.)",
    options: ["Compiled binaries", "Code snippets", "Design patterns", "Screenshots", "Documentation"],
    correct: [1, 2, 4],
    explanation: "Text-based content only: source code (B), design patterns (C), and documentation (E). Not binaries (machine code) or screenshots (images) — Copilot is text-based."
  },
  {
    id: 76,
    domain: "Use GitHub Copilot Features",
    topic: "Enterprise Features",
    type: "single",
    question: "Which of these advanced features aren't available in GitHub Copilot Enterprise but were available in GitHub Copilot Business?",
    options: [
      "Copilot Chat Customized to your Codebase",
      "Copilot Pull Request Summaries",
      "Copilot Documentation Search and Summaries using Docsets",
      "None of the above"
    ],
    correct: 3,
    explanation: "None — GitHub Copilot Enterprise includes everything in Business PLUS additional features. There are no Business features missing from Enterprise."
  },
  {
    id: 77,
    domain: "Use GitHub Copilot Features",
    topic: "Enterprise Features",
    type: "single",
    question: "How can organizations manage and utilize docsets within Copilot Enterprise to tailor code suggestions?",
    options: [
      "By using docsets to create custom collections of internal code and documentation",
      "By using docsets to automatically generate code snippets",
      "By using docsets to track developers' activity within a project",
      "By using docsets to enforce coding standards"
    ],
    correct: 0,
    explanation: "Docsets in Copilot Enterprise = custom collections of internal repos and documentation used to ground suggestions in org-specific knowledge and standards."
  },

  // ── DOMAIN 5: IMPROVE DEVELOPER PRODUCTIVITY ──────────────────────
  {
    id: 78,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "How does GitHub Copilot suggest code optimizations for improved performance?",
    options: [
      "By analyzing the codebase and suggesting more efficient algorithms or data structures",
      "By automatically rewriting the codebase to use more efficient code",
      "By enforcing strict coding standards that ensure optimal performance",
      "By providing detailed reports on the performance of the codebase"
    ],
    correct: 0,
    explanation: "Copilot suggests (not automatically rewrites) — the developer must accept. It analyzes context and recommends more efficient algorithms or data structures."
  },
  {
    id: 79,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "multi",
    question: "What method can a developer use to generate sample data with GitHub Copilot? (Choose two.)",
    options: [
      "Utilizing GitHub Copilot's ability to create fictitious information from patterns in training data",
      "Leveraging GitHub Copilot's ability to independently initiate and manage data storage services",
      "Utilize GitHub Copilot's capability to directly access and use databases to create sample data",
      "Leveraging GitHub Copilot's suggestions to create data based on API documentation in the repository"
    ],
    correct: [0, 3],
    explanation: "Copilot can generate mock/fake data from training patterns (A) and use repo API docs as context to suggest data structures (D). It cannot independently manage storage (B) or access databases directly (C)."
  },
  {
    id: 80,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "How does GitHub Copilot Chat ensure that a function works correctly?",
    options: [
      "By suggesting assertions based on the code's context and semantics",
      "By automatically writing all the tests for the function",
      "By writing the implementation code for the function",
      "By executing the test cases to validate the correctness of the code"
    ],
    correct: 0,
    explanation: "Copilot Chat suggests assertions — it doesn't auto-write all tests, write implementations autonomously, or execute code. Developer must run and validate."
  },
  {
    id: 81,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "When using GitHub Copilot to identify missing tests in your codebase, which of the following is the most important factor to consider?",
    options: [
      "Using well-known coding practices in your repository",
      "Ensuring that the correct context is available to GitHub Copilot",
      "Close all the tabs in your IDE that do not have tests in them",
      "Having a high test coverage percentage in the codebase"
    ],
    correct: 1,
    explanation: "Context is the most critical factor for all Copilot tasks. Without the right files open, suggestions are generic and miss project-specific patterns."
  },
  {
    id: 82,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "What is a key consideration when relying on GitHub Copilot Chat's explanations of code functionality and proposed improvements?",
    options: [
      "The explanations are dynamically updated based on user feedback",
      "Reviewing and validating the generated output for accuracy and completeness",
      "GitHub Copilot Chat uses a static database for generating explanations",
      "The explanations are primarily derived from user-provided documentation"
    ],
    correct: 1,
    explanation: "Human validation is always required. Copilot explanations can be plausible but incorrect. It does not dynamically update from feedback (A) or use a static DB (C)."
  },
  {
    id: 83,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "multi",
    question: "In what ways can GitHub Copilot support a developer during the code refactoring process? (Choose two.)",
    options: [
      "By offering code transformation examples that enhance performance and reduce complexity",
      "By independently ensuring compliance with regulatory standards across industries",
      "By providing suggestions for improving code readability and maintainability based on best practices",
      "By autonomously refactoring entire codebases to the latest programming language"
    ],
    correct: [0, 2],
    explanation: "Copilot assists refactoring by suggesting transformations (A) and readability improvements (C). It cannot autonomously ensure compliance (B) or refactor entire codebases (D)."
  },
  {
    id: 84,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "In what way can GitHub Copilot and GitHub Copilot Chat aid developers in modernizing applications?",
    options: [
      "GitHub Copilot can directly convert legacy applications into cloud-native architectures",
      "GitHub Copilot can suggest modern programming patterns based on your code",
      "GitHub Copilot can create and deploy full-stack applications based on a single query",
      "GitHub Copilot can refactor applications to align with upcoming standards"
    ],
    correct: 1,
    explanation: "Copilot suggests modern patterns — it doesn't autonomously convert architectures (A), deploy apps (C), or predict future standards (D)."
  },
  {
    id: 85,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "How can GitHub Copilot assist with code refactoring tasks?",
    options: [
      "GitHub Copilot can fix syntax errors without user input",
      "GitHub Copilot can automatically rewrite code to follow best practices",
      "GitHub Copilot can suggest refactoring improvements for better code quality",
      "GitHub Copilot can remove unnecessary files from the project directory"
    ],
    correct: 2,
    explanation: "Copilot suggests (not automatically applies) refactoring improvements. Developer must review and accept each suggestion."
  },
  {
    id: 86,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "Which of the following scenarios best describes the intended use of GitHub Copilot Chat as a tool?",
    options: [
      "A complete replacement for developers generating code",
      "A productivity tool that provides suggestions, but relying on human judgment",
      "A solution for software development, requiring no additional input or oversight",
      "A tool solely designed for debugging and error correction"
    ],
    correct: 1,
    explanation: "Copilot is a productivity assistant — it provides suggestions but human judgment is always required. It is not a replacement for developers or an autonomous solution."
  },
  {
    id: 87,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "How can GitHub Copilot Chat assist in improving the modularity of a class?",
    options: [
      "By suggesting potential refactoring updates based on the context of your codebase",
      "By providing a detailed analysis of the class's dependencies",
      "By automatically rewriting the entire class",
      "By generating unit tests for each method in the class"
    ],
    correct: 0,
    explanation: "Copilot Chat suggests context-aware refactoring improvements. It does not autonomously rewrite classes (C)."
  },
  {
    id: 88,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "How does GitHub Copilot Chat propose fixes for bugs in your code?",
    options: [
      "By running automated tests and identifying the root cause",
      "By suggesting code snippets and solutions based on the context of the error or issue",
      "By comparing your code with a database of known bug patterns",
      "By simulating various input scenarios to detect edge cases"
    ],
    correct: 1,
    explanation: "Copilot Chat proposes context-aware bug fix suggestions. It doesn't run tests, compare to bug databases, or simulate inputs."
  },
  {
    id: 89,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "How can GitHub Copilot Chat help generate explanations for unfamiliar code?",
    options: [
      "By rewriting the code in a simpler language",
      "By generating natural language descriptions of the code's functionality and purpose",
      "By removing unnecessary parts of the code",
      "By providing links to external documentation for similar code structures"
    ],
    correct: 1,
    explanation: "Copilot Chat generates natural language explanations of what code does. Use /explain or ask directly in chat."
  },
  {
    id: 90,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "How can GitHub Copilot Chat be used in the context of project documentation?",
    options: [
      "To generate specific sections of the project documentation, such as the project overview, requirements, constraints, dependencies, and summary",
      "To communicate with the project stakeholders and gather their requirements",
      "To automatically write the entire codebase for the project",
      "To create visual diagrams and charts for the documentation"
    ],
    correct: 0,
    explanation: "Copilot Chat can draft specific documentation sections. It doesn't communicate with stakeholders or create visual diagrams."
  },
  {
    id: 91,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "How can GitHub Copilot Chat help generate inline code documentation?",
    options: [
      "By automatically writing the entire codebase",
      "By generating inline code comments based on natural language prompts or commands",
      "By providing real-time chat support with other developers",
      "By creating separate documentation files for each code module"
    ],
    correct: 1,
    explanation: "Copilot Chat generates inline comments from natural language prompts — e.g., 'Add comments explaining this function'."
  },
  {
    id: 92,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "Why is code reviewing still necessary when using GitHub Copilot to write tests?",
    options: [
      "Because GitHub Copilot can cover all possible scenarios in your test cases",
      "Because GitHub Copilot generates the best code possible for the test scenario",
      "Because GitHub Copilot's generated test cases may not cover all possible scenarios",
      "Because GitHub Copilot replaces the need for manual testing"
    ],
    correct: 2,
    explanation: "Copilot may miss edge cases, domain-specific scenarios, or business logic nuances. Human review ensures adequate test coverage."
  },
  {
    id: 93,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "What is the role of GitHub Copilot Chat in generating unit test cases?",
    options: [
      "It manually writes all the test cases for the user",
      "It only suggests possible input parameters and expected output values",
      "It helps generate code snippets for test cases, suggests input parameters, expected output values, and assertions, and can help identify edge cases and boundary conditions",
      "It automatically runs all unit tests and reports the results"
    ],
    correct: 2,
    explanation: "Copilot Chat's testing role: generates test code snippets, suggests inputs/outputs/assertions, identifies edge cases. It does not run tests automatically."
  },
  {
    id: 94,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "What is the purpose of the Test Explorer in Visual Studio Code?",
    options: [
      "To write new code snippets for unit tests",
      "To run and debug unit tests, view the results of test runs, and manage test cases in the workspace",
      "To generate test cases based on the code context",
      "To automatically fix failing tests"
    ],
    correct: 1,
    explanation: "Test Explorer is VS Code's built-in test management UI: run, debug, view results, manage test cases. Copilot generates tests; Test Explorer runs them."
  },
  {
    id: 95,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "What is the significance of the Arrange, Act, and Assert sections in unit tests?",
    options: [
      "They are used to organize the code in the main application",
      "They are used to structure unit tests into setup (Arrange), execution (Act), and verification (Assert) phases",
      "They are used to compile and run the unit tests",
      "They are used to generate documentation for the tests"
    ],
    correct: 1,
    explanation: "AAA pattern: Arrange = set up test data/conditions, Act = execute the code being tested, Assert = verify the expected outcome."
  },
  {
    id: 96,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "What does GitHub Copilot provide when creating unit tests for specific conditions?",
    options: [
      "It provides a user interface for manually writing tests",
      "It automatically runs the tests and provides the results",
      "It suggests completions and generates tests based on the code context",
      "It creates a full test suite without any user input"
    ],
    correct: 2,
    explanation: "Copilot suggests test completions and generates test code based on context — it does not automatically run tests or create complete suites without input."
  },
  {
    id: 97,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "What is the benefit of using GitHub Copilot for generating unit tests?",
    options: [
      "It reduces the need for manual testing",
      "It can suggest a range of unit tests based on the code context, saving development time",
      "It automatically fixes bugs in the code",
      "It guarantees 100% code coverage"
    ],
    correct: 1,
    explanation: "Copilot saves time by suggesting test ranges based on context. It does not guarantee coverage, fix bugs, or eliminate the need for manual testing."
  },
  {
    id: 98,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "What is the purpose of generating assertions to ensure that function input parameters are valid?",
    options: [
      "To enhance the performance of the function",
      "To prevent invalid data from being processed by the function",
      "To check if the function returns the expected output",
      "To document the function's expected inputs"
    ],
    correct: 1,
    explanation: "Input validation assertions prevent invalid data from entering the function — a defensive programming practice that prevents bugs and security vulnerabilities."
  },
  {
    id: 99,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "What factors can be considered when working on code quality improvements?",
    options: [
      "The number of lines of code in the program",
      "The time required to write code",
      "Readability, complexity, modularity, reusability, testability, extensibility, reliability, performance, security, scalability, usability, and portability",
      "The number of developers working on the project"
    ],
    correct: 2,
    explanation: "12 code quality factors: Readability, Complexity, Modularity, Reusability, Testability, Extensibility, Reliability, Performance, Security, Scalability, Usability, Portability."
  },
  {
    id: 100,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "What does code reliability refer to in software development?",
    options: [
      "The use of modern CPU architectures by parallelizing tasks and performing I/O operations asynchronously",
      "The likelihood that software will function correctly under specific conditions and for a certain period of time",
      "The efficiency of a program or application",
      "The ability of the code to handle large amounts of data"
    ],
    correct: 1,
    explanation: "Reliability = probability of correct function under specified conditions for a specified time. Distinct from performance (C) or scalability (D)."
  },
  {
    id: 101,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "What is one way to improve code reliability?",
    options: [
      "By optimizing algorithms and data structures for the task at hand",
      "By identifying potential issues in the code to prevent bugs and errors from occurring",
      "By minimizing disk and network I/O operations or performing them asynchronously",
      "By using the latest programming language features and syntax"
    ],
    correct: 1,
    explanation: "Proactive issue identification (code review, static analysis, testing) directly improves reliability. Options A and C improve performance, not reliability."
  },
  {
    id: 102,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "What are some ways to improve exception handling in code to make it more secure?",
    options: [
      "Revealing sensitive information in exceptions, catching general exceptions only, and swallowing exceptions",
      "Catch the most specific exceptions possible, avoid revealing sensitive information in exceptions, and avoid swallowing exceptions",
      "Exposing detailed error information, catching only specific exceptions, and not rethrowing exceptions",
      "Using try-catch blocks for every line of code and logging all exceptions to a public server"
    ],
    correct: 1,
    explanation: "Three exception handling best practices: (1) catch specific exceptions, (2) no sensitive info in error messages, (3) never swallow/ignore exceptions silently."
  },
  {
    id: 103,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "What is the purpose of code refactoring?",
    options: [
      "To alter the external behavior or functionality of the code",
      "To improve the internal structure of the code without altering its external behavior or functionality",
      "To add new features or enhancements to the code",
      "To optimize the code for better performance"
    ],
    correct: 1,
    explanation: "Refactoring = improving internal structure while preserving external behavior. Key distinction: external behavior does NOT change."
  },
  {
    id: 104,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "What is the primary purpose of project documentation in software development?",
    options: [
      "To provide a detailed codebase for developers to use",
      "To generate a high-level overview for the end-users of the software",
      "To provide essential information for understanding the project's scope and purpose",
      "To create a timeline of the project's development history"
    ],
    correct: 2,
    explanation: "Project documentation primarily communicates scope and purpose to all stakeholders — developers, managers, and users alike."
  },
  {
    id: 105,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "What is the purpose of generating inline code documentation in software development?",
    options: [
      "To make the code more complex and challenging for other developers",
      "To create a more readable and maintainable codebase that's easier for other developers to understand and work with",
      "To increase the size of the codebase",
      "To showcase the developer's coding skills"
    ],
    correct: 1,
    explanation: "Inline documentation improves readability and maintainability — making code accessible to other developers and to your future self."
  },
  {
    id: 106,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "What types of code conversions can be completed using GitHub Copilot?",
    options: [
      "Convert an entire code file, a function, or a code snippet to an image",
      "Convert an entire code file, a function, or a code snippet to another programming language",
      "Convert a programming language to a human language",
      "Convert compiled code back to source code"
    ],
    correct: 1,
    explanation: "Copilot can translate code between programming languages at file, function, or snippet level. It cannot decompile binary code or convert to images."
  },
  {
    id: 107,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "How can GitHub Copilot assist developers during the requirements analysis phase of the SDLC?",
    options: [
      "By automatically generating detailed requirements documents",
      "By providing templates and code snippets that help in documenting requirements",
      "By identifying and fixing potential requirement conflicts when using /help",
      "By managing stakeholder communication and meetings"
    ],
    correct: 1,
    explanation: "Copilot assists requirements documentation with templates and code snippets. It doesn't auto-generate full requirement documents or manage stakeholder communication."
  },
  {
    id: 108,
    domain: "Improve Developer Productivity with GitHub Copilot",
    topic: "Developer Productivity",
    type: "single",
    question: "What is the effect of maintaining a high quality bar in your code when using GitHub Copilot?",
    options: [
      "Copilot latches on to your code to generate suggestions that follow the existing pattern",
      "It confuses Copilot and leads to irrelevant suggestions",
      "It slows down the suggestion process",
      "It causes Copilot to ignore your existing code structure"
    ],
    correct: 0,
    explanation: "High-quality code = better Copilot suggestions. Copilot learns from patterns in open files — clean, well-structured code produces cleaner, more relevant suggestions."
  },

  // ── DOMAIN 6: APPLY PROMPT ENGINEERING AND CONTEXT CRAFTING ───────
  {
    id: 109,
    domain: "Apply Prompt Engineering and Context Crafting",
    topic: "Prompt Engineering",
    type: "single",
    question: "Which of the following describes role prompting?",
    options: [
      "Describing in your prompt what your role is to get a better suggestion",
      "Tell GitHub Copilot in what tone of voice it should respond",
      "Prompt GitHub Copilot to explain what was the role of a suggestion",
      "Giving GitHub Copilot multiple examples of the form of the data you want to use"
    ],
    correct: 0,
    explanation: "Role prompting = telling Copilot your role/persona (e.g. 'As a senior Python developer...') to get contextually appropriate suggestions. Option D describes few-shot prompting."
  },
  {
    id: 110,
    domain: "Apply Prompt Engineering and Context Crafting",
    topic: "Prompt Engineering",
    type: "multi",
    question: "What are two techniques that can be used to improve prompts to GitHub Copilot? (Select two.)",
    options: [
      "Provide specific success criteria",
      "Provide all information about the utilized files",
      "Provide insight on where to get the content from to get a response",
      "Provide links to supporting documentation"
    ],
    correct: [0, 3],
    explanation: "Effective prompts: specific success criteria (A) and supporting documentation links (D). Providing all file info (B) adds noise; location hints (C) are vague."
  },
  {
    id: 111,
    domain: "Apply Prompt Engineering and Context Crafting",
    topic: "Prompt Engineering",
    type: "multi",
    question: "What practices enhance the quality of suggestions provided by GitHub Copilot? (Select three.)",
    options: [
      "Clearly defining the problem or task",
      "Including personal information in the code comments",
      "Using meaningful variable names",
      "Providing examples of desired output",
      "Use a .gitignore file to exclude irrelevant files"
    ],
    correct: [0, 2, 3],
    explanation: "Three best practices: clear problem definition (A), meaningful names as context (C), and example outputs (D). Personal info in comments (B) is a privacy risk. .gitignore (E) doesn't improve suggestion quality."
  },
  {
    id: 112,
    domain: "Apply Prompt Engineering and Context Crafting",
    topic: "Prompt Engineering",
    type: "multi",
    question: "Which of the following prompts can be used to guide GitHub Copilot Chat in refactoring code for quality improvements? (Choose two.)",
    options: [
      "\"Show me how to improve the readability of this function.\"",
      "\"Suggest ways to enhance the maintainability of this code segment.\"",
      "\"Refactor my application to meet the latest coding standards.\"",
      "\"Predict future coding trends and update my codebase accordingly.\""
    ],
    correct: [0, 1],
    explanation: "Specific, actionable prompts work best. Readability (A) and maintainability (B) are well-scoped. 'Meet latest standards' (C) and 'predict trends' (D) are too vague for Copilot to act on."
  },
  {
    id: 113,
    domain: "Apply Prompt Engineering and Context Crafting",
    topic: "Prompt Engineering",
    type: "multi",
    question: "How can you improve the context used by GitHub Copilot? (Choose two.)",
    options: [
      "By opening the relevant tabs in your IDE",
      "By adding relevant code snippets to your prompt",
      "By adding the important files to your .gitconfig",
      "By adding the full file paths to your prompt of important files"
    ],
    correct: [0, 1],
    explanation: "Context improvement: open relevant files in IDE tabs (A — Copilot uses all open tabs) and include relevant code snippets in your prompt (B). .gitconfig (C) is irrelevant; file paths in prompts (D) are less effective than actually opening files."
  },
  {
    id: 114,
    domain: "Apply Prompt Engineering and Context Crafting",
    topic: "Prompt Engineering",
    type: "single",
    question: "Identify which statement is valid about a prompt:",
    options: [
      "A prompt, which is our output, is a collection of songs that tells our copilot what to generate",
      "A prompt, which is our input, is a collection of instructions or guidelines that tell our copilot what to generate",
      "A prompt, which is our document, is a collection of laptops that tells our Copilot what to generate",
      "A prompt is a series of binary commands that control Copilot's behavior"
    ],
    correct: 1,
    explanation: "A prompt is INPUT — a collection of instructions/guidelines provided by the user to tell Copilot what to generate. Not output, not binary commands."
  },
  {
    id: 115,
    domain: "Apply Prompt Engineering and Context Crafting",
    topic: "Prompt Engineering",
    type: "single",
    question: "What does the quality of the output from GitHub Copilot depend on?",
    options: [
      "Your code editor",
      "How well your extensions were installed",
      "How well you crafted your prompt",
      "The time of day you're coding"
    ],
    correct: 2,
    explanation: "Output quality is directly tied to prompt quality. Well-crafted, specific prompts with good context produce significantly better suggestions."
  },
  {
    id: 116,
    domain: "Apply Prompt Engineering and Context Crafting",
    topic: "Prompt Engineering",
    type: "single",
    question: "What is the importance of context and intent when developing prompts for GitHub Copilot Chat?",
    options: [
      "They determine the color scheme used by GitHub Copilot Chat",
      "They control the volume of the audio output from GitHub Copilot Chat",
      "They specify the scope that GitHub Copilot should examine and the goal to be achieved",
      "They influence the programming language used for code suggestions"
    ],
    correct: 2,
    explanation: "Context = what scope to examine (file, function, workspace). Intent = what goal to achieve. Together they shape the quality and relevance of Copilot's response."
  },
  {
    id: 117,
    domain: "Apply Prompt Engineering and Context Crafting",
    topic: "Prompt Engineering",
    type: "single",
    question: "What is a recommended practice to improve the performance of GitHub Copilot Chat?",
    options: [
      "Limiting the prompt to coding questions or tasks to enhance the model's output quality",
      "Using Copilot Chat as a replacement for human programming",
      "Ignoring secure coding and code review practices",
      "Asking Copilot Chat to generate entire applications without any guidance"
    ],
    correct: 0,
    explanation: "Keep prompts focused on coding tasks. Broad, non-coding questions degrade output quality. Break large tasks into smaller focused prompts."
  },
  {
    id: 118,
    domain: "Apply Prompt Engineering and Context Crafting",
    topic: "Prompt Engineering",
    type: "single",
    question: "What is the best way to provide context to GitHub Copilot for better code suggestions?",
    options: [
      "By keeping all files closed in the editor",
      "By using complex function names",
      "By providing meaningful function names, specific function comments, and having related files open in the editor",
      "By writing code without any comments or documentation"
    ],
    correct: 2,
    explanation: "Three context best practices: meaningful names, specific comments, and related files open. Copilot uses all open tabs as context to improve relevance."
  },
  {
    id: 119,
    domain: "Apply Prompt Engineering and Context Crafting",
    topic: "Prompt Engineering",
    type: "single",
    question: "How can a developer optimize their experience when interacting with GitHub Copilot via chat?",
    options: [
      "By being vague about the inputs, outputs, APIs, or frameworks they want to use",
      "By using chat participants, slash commands, chat variables, and being specific in your prompts",
      "By asking Copilot to perform large tasks at once",
      "By avoiding the use of code snippets in prompts"
    ],
    correct: 1,
    explanation: "Specificity + chat participants (@workspace) + slash commands (/fix, /tests) + variables (#file) = best chat experience. Vague prompts and large tasks produce poor results."
  },
  {
    id: 120,
    domain: "Apply Prompt Engineering and Context Crafting",
    topic: "Prompt Engineering",
    type: "single",
    question: "Which of the following is NOT a principle of effective prompt engineering for GitHub Copilot?",
    options: [
      "Clarity - Focus on a single, well-defined task",
      "Verbosity - Provide extensive and detailed descriptions",
      "Specificity - Use clear and explicit instructions",
      "Surround - Utilize descriptive filenames and keep related files open"
    ],
    correct: 1,
    explanation: "Verbosity is NOT a principle — prompts should be specific and clear, not verbose. The four principles are: Clarity, Specificity, Context/Surround, and Iteration."
  },
  {
    id: 121,
    domain: "Apply Prompt Engineering and Context Crafting",
    topic: "Prompt Engineering",
    type: "single",
    question: "Select a strategy to increase the performance of GitHub Copilot Chat.",
    options: [
      "Optimize the usage of memory-intensive operations within generated code",
      "Apply prompt engineering techniques to be more specific",
      "Use a single GitHub Copilot Chat query to find resolutions for the collection of technical requirements",
      "Limit the number of concurrent users accessing GitHub Copilot Chat"
    ],
    correct: 1,
    explanation: "Specific, well-engineered prompts produce better Copilot Chat performance. Single queries for multiple complex requirements (C) produce poor results."
  },
  {
    id: 122,
    domain: "Apply Prompt Engineering and Context Crafting",
    topic: "Prompt Engineering",
    type: "single",
    question: "What role does chat history play in GitHub Copilot's code suggestions?",
    options: [
      "Chat history is used to train the GitHub Copilot model in real-time",
      "Chat history provides context to GitHub Copilot, improving the relevance and accuracy of its code suggestions",
      "Chat history is stored and shared with other users to enhance collaboration",
      "Chat history is irrelevant to GitHub Copilot and does not affect its functionality"
    ],
    correct: 1,
    explanation: "Chat history provides context for the current session, improving relevance and accuracy. It is not used for real-time training (A) or shared with other users (C)."
  },
  {
    id: 123,
    domain: "Apply Prompt Engineering and Context Crafting",
    topic: "Prompt Engineering",
    type: "single",
    question: "What is the effect of maintaining a high quality bar in your code when using GitHub Copilot?",
    options: [
      "Copilot latches on to your code to generate suggestions that follow the existing pattern",
      "It confuses Copilot and leads to irrelevant suggestions",
      "It slows down the suggestion process",
      "It causes Copilot to ignore your existing code structure"
    ],
    correct: 0,
    explanation: "High-quality code = better Copilot suggestions. Copilot mirrors the patterns in your open files — clean, well-structured code produces cleaner, more relevant suggestions."
  }

];

window.DOMAINS = [
  { id: 1, name: "Use GitHub Copilot Responsibly",                       weight: "15–20%" },
  { id: 2, name: "Use GitHub Copilot Features",                           weight: "25–30%" },
  { id: 3, name: "Understand GitHub Copilot Data and Architecture",       weight: "10–15%" },
  { id: 4, name: "Configure Privacy, Content Exclusions, and Safeguards", weight: "10–15%" },
  { id: 5, name: "Improve Developer Productivity with GitHub Copilot",    weight: "10–15%" },
  { id: 6, name: "Apply Prompt Engineering and Context Crafting",         weight: "10–15%" }
];
