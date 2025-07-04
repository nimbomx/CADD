# START - Universal Starting Point for Agents

## Instructions for Agent

**READ THIS FILE ALWAYS AT THE BEGINNING OF EACH CONVERSATION**

### What is CADD?
**Context-Assisted Development Driven** - Methodology for AI-assisted development using structured context.

### CADD System Files
1. **START.md** - This file. Universal starting point
2. **PREFERENCES.md** - User's personal preferences
3. **PROJECT_PLAN.md** - Project-specific description
4. **TKDD_METHODOLOGY.md** - TKDD methodology for tickets
5. **USER_GUIDE.md** - User guide for the methodology

---

## Agent Workflow

### 0. MANDATORY FIRST CHECK
**BEFORE** doing anything, detect if this is an existing project:

```
1. SCAN current directory for existing project indicators:
   - package.json, requirements.txt, composer.json, pom.xml
   - src/, app/, components/, lib/, public/ folders
   - .git/ repository
   - README.md or other documentation
   - Code files (.js, .ts, .py, .php, .java, .cs, .go, etc.)

2. IF EXISTING PROJECT DETECTED:
   - ANNOUNCE: "Existing project detected. Analyzing codebase..."
   - EXECUTE: Automatic Project Analysis (see section below)
   - FILL: PROJECT_PLAN.md with analyzed data
   - ASK: Only for missing critical information
   - CONTINUE: With normal workflow treating as next development phase

3. IF NEW PROJECT: Continue with standard CADD workflow
```

### 0.1 MANDATORY PRIOR ACTION
**AFTER** project detection, read PREFERENCES.md:

```
1. Read PREFERENCES.md to understand user preferences
2. Apply those preferences throughout the conversation
3. If PREFERENCES.md shows "[Not configured]", treat as not set
4. If first time with unconfigured preferences, offer to set them up
5. If user previously declined preference setup, do NOT ask again
```

### 1. MANDATORY FIRST ACTION
After reading START.md and PREFERENCES.md, **ALWAYS** ask the user:

```
What do you want to do today?

A) 🚀 Create a new project
B) ⚡ Continue with current phase
C) 📋 Advance to next phase
D) 🎯 Plan new version (milestone)
E) ⚙️ Update preferences (PREFERENCES.md)

(For questions about the methodology, check USER_GUIDE.md or ask me)
```

### 2. ACCORDING TO RESPONSE

#### A) Create New Project
1. **IF EXISTING PROJECT DETECTED**: Execute Automatic Project Analysis first
2. Read PROJECT_PLAN.md
3. If empty: Ask questions to fill it
4. If auto-generated: Ask only for missing information (see Auto-Generated section)
5. If has content: Analyze and complement it
6. **CHECK**: If user mentions both frontend AND backend development
7. **IF YES**: Suggest Turborepo for monorepo management (see Turborepo Suggestion section)
8. Create initial development plan
9. **CREATE**: Project organization structure (see Project Organization section)
10. Generate first TKDD ticket in `/tickets` folder
11. **ASK**: "Do you want to prepare this project for a Git repository?" (if not already exists)
12. **IF YES**: Execute Git Repository Setup (see section below)
13. **IMPORTANT**: Always ask before making any Git commits (check Git Security Rules)

#### B) Continue Current Phase
1. Read PROJECT_PLAN.md
2. Identify current phase and progress
3. Review pending tickets in `/tickets` folder
4. Continue with next ticket/task

#### C) Advance to Next Phase
1. Read PROJECT_PLAN.md
2. Confirm current phase completion
3. Present summary of completed work
4. Start next phase of plan
5. Generate tickets for new phase in `/tickets` folder
6. **ASK**: "Do you want to update the README.md with the new features completed?"
7. **IF YES**: Execute README Update (see section below)

#### D) Plan New Version
1. Read PROJECT_PLAN.md
2. Review current version
3. Discuss new functionalities
4. Update PROJECT_PLAN.md
5. Create roadmap for new version

#### E) Update Preferences
1. Review current PREFERENCES.md
2. Ask what they want to change/add
3. Update PREFERENCES.md with new preferences
4. Confirm changes applied
5. **MENTION**: "You can always change your preferences by asking me to update them."

---

## Project Organization

### When to Execute
- During initial project setup (option A)
- Before generating first tickets
- If `/tickets` folder doesn't exist

### Folder Structure to Create
```
project-root/
├── .CADD/                    # CADD methodology files
├── tickets/                  # TKDD tickets
│   ├── backlog/             # Future tickets
│   ├── in-progress/         # Current work
│   ├── completed/           # Finished tickets
│   └── archived/            # Old tickets
├── docs/                    # Project documentation (optional)
└── [project files...]
```

### Actions to Perform
1. **Create `/tickets` folder** if it doesn't exist
2. **Create subfolders**: backlog/, in-progress/, completed/, archived/
3. **Create `/tickets/README.md`** with ticket management guidelines
4. **Mention structure** to user: "I've organized your tickets in `/tickets` folder with subfolders for different stages."

### Ticket File Naming Convention
- **Format**: `TKDD-[YYYYMMDD]-[sequence]-[short-description].md`
- **Example**: `TKDD-20241204-001-user-authentication.md`
- **Location**: Start in `/tickets/backlog/`, move through workflow

### Ticket Workflow
1. **New tickets** → `/tickets/backlog/`
2. **Start work** → Move to `/tickets/in-progress/`
3. **Complete work** → Move to `/tickets/completed/`
4. **Archive old** → Move to `/tickets/archived/` (after 30 days)

---

## Automatic Project Analysis

### When to Execute
- When existing project is detected in step 0
- Before any CADD workflow begins
- To auto-fill PROJECT_PLAN.md with existing project data

### Project Detection Indicators
```
Technology Files:
- package.json (Node.js/JavaScript)
- requirements.txt, setup.py (Python)
- composer.json (PHP)
- pom.xml, build.gradle (Java)
- *.csproj, *.sln (C#/.NET)
- go.mod (Go)
- Cargo.toml (Rust)

Project Folders:
- src/, app/, components/, lib/, public/
- frontend/, backend/, client/, server/
- models/, views/, controllers/
- utils/, helpers/, services/
- tests/, spec/, __tests__/

Repository Indicators:
- .git/ folder
- README.md, CHANGELOG.md
- .gitignore, .env files
- CI/CD files (.github/, .gitlab-ci.yml)
```

### Automatic Analysis Process
1. **Technology Stack Detection**:
   - Scan dependency files for frameworks and libraries
   - Identify programming languages from file extensions
   - Detect build tools and configuration files
   - Analyze package managers and version requirements

2. **Feature Analysis**:
   - Scan route definitions for API endpoints
   - Identify UI components and their purposes
   - Detect authentication/authorization patterns
   - Analyze database models and schemas
   - Find CRUD operations and business logic

3. **Project Structure Assessment**:
   - Map folder purposes and architecture patterns
   - Identify code organization conventions
   - Analyze import/export patterns
   - Detect state management solutions
   - Assess testing frameworks and coverage

4. **Quality and Status Evaluation**:
   - Check for linting and formatting configurations
   - Identify documentation patterns
   - Analyze recent Git activity
   - Assess security implementations
   - Evaluate code complexity and maintainability

### Auto-Fill PROJECT_PLAN.md Template
```markdown
# Project Plan - Auto-Generated Analysis

## Project Information
**Project Name**: [From package.json/folder name/README.md]
**Main Objective**: [Inferred from README.md or ask user]
**Target Audience**: [Inferred from UI/API structure or ask user]
**Project Type**: [Web App/API/Mobile App/Desktop/Library/Other]
**Current Version**: [From package.json/git tags/VERSION file]

## Technology Stack (Auto-Detected)
**Frontend**: [React 18.2, TypeScript, Tailwind CSS]
**Backend**: [Node.js 18, Express 4.18, PostgreSQL]
**Database**: [PostgreSQL 15, Prisma ORM]
**Testing**: [Jest, React Testing Library, Supertest]
**Build Tools**: [Vite, TypeScript, ESLint, Prettier]
**Infrastructure**: [Docker, AWS/GCP/Azure if detected]

## Current Features (Analyzed from Code)
### Implemented ✅
- User authentication (JWT-based)
- User management (CRUD operations)
- Dashboard with analytics
- REST API with [X] endpoints
- Responsive UI with [X] components
- Database with [X] tables
- Unit tests ([X]% coverage)
- [Additional detected features]

### Architecture Analysis
**Pattern**: [MVC/Microservices/Monolithic/Layered]
**State Management**: [Redux/Context API/Vuex/Pinia]
**Database Design**: [Relational/NoSQL/Hybrid]
**API Design**: [RESTful/GraphQL/RPC]
**Authentication**: [JWT/OAuth/Session-based]

## Code Quality Assessment
**Testing**: [Framework used, coverage percentage]
**Linting**: [ESLint/Pylint/etc. configuration detected]
**Documentation**: [JSDoc/Sphinx/etc. usage]
**Security**: [Security patterns implemented]
**Performance**: [Optimization patterns detected]

## Development Status
**Last Activity**: [Git commit analysis]
**Active Development**: [Based on recent commits]
**Team Size**: [Inferred from commit authors]
**Release Cadence**: [Inferred from git tags/releases]

## Next Phase Planning (To be configured with user)
**Phase**: [Auto-increment from detected version]
**Focus Area**: [To be determined with user input]
**Priority Features**: [To be determined with user input]
**Estimated Timeline**: [To be determined with user input]
**Success Criteria**: [To be determined with user input]

## Migration Notes
**Analysis Date**: [Current date]
**CADD Integration**: [Existing project migrated to CADD methodology]
**Preserved Structure**: [Existing folder structure maintained]
**Compatibility**: [Notes about existing tools/processes]
```

### Missing Information Questions
After auto-analysis, ask ONLY for information that couldn't be determined:

```
Required Information:
1. **Main Objective**: "What is the main purpose of this application?"
2. **Target Audience**: "Who are the primary users of this system?"
3. **Next Phase Goals**: "What do you want to develop in the next phase?"

Optional Clarifications:
4. **Business Requirements**: "Are there any specific business rules or constraints?"
5. **Technical Restrictions**: "Any technical limitations or requirements?"
6. **Timeline Preferences**: "What's your preferred development timeline?"
7. **Team Considerations**: "Any team-specific workflows to consider?"
```

### Integration with Existing Workflow
- **Preserve existing structure**: Don't reorganize existing files
- **Respect existing tools**: Integrate with current build/test/deploy processes
- **Maintain compatibility**: Don't break existing workflows
- **Add value**: Enhance existing processes with CADD methodology

### Post-Analysis Actions
1. **Create tickets folder**: Add `/tickets/` structure alongside existing folders
2. **Generate first ticket**: Create TKDD ticket for next development phase
3. **Update .gitignore**: Add CADD-specific patterns if needed
4. **Integrate with Git**: Respect existing branch strategy and commit patterns

---

## Turborepo Suggestion

### When to Suggest
- User mentions developing BOTH frontend AND backend
- During project planning phase (option A)
- Before finalizing technology stack

### How to Suggest
```
I notice you're planning both frontend and backend development. 

Consider using **Turborepo** for monorepo management:
✅ Shared code between frontend/backend
✅ Optimized builds with caching
✅ Parallel development workflows
✅ Better dependency management

Would you like me to include Turborepo in your technology stack?
```

### If User Accepts
- Add Turborepo to PROJECT_PLAN.md technology stack
- Suggest appropriate monorepo structure
- Include Turborepo-optimized .gitignore patterns
- Mention monorepo benefits in development plan

### If User Declines
- Continue with standard separate frontend/backend approach
- Do not mention Turborepo again unless user asks

---

## Git Repository Setup

### When to Execute
- After completing initial project planning (option A)
- User confirms they want Git repository setup

### Actions to Perform
1. **Generate .gitignore**:
   - Based on technology stack from PROJECT_PLAN.md
   - Include specific patterns for the project type
   - Add common patterns for development tools
   - **IF TURBOREPO**: Include monorepo-specific patterns
   - **ALWAYS**: Include tickets organization patterns
   - **IF EXISTING PROJECT**: Merge with existing .gitignore, don't replace

2. **Generate README.md**:
   - Use project name from PROJECT_PLAN.md
   - Include main objective and description
   - Add technology stack information
   - Include installation and usage instructions
   - Add project structure if applicable
   - Include any important notes from PROJECT_PLAN.md
   - **IF TURBOREPO**: Include monorepo setup instructions
   - **ALWAYS**: Include tickets folder explanation

3. **Initialize Git Repository**:
   - Run `git init` if not already initialized
   - Add initial .gitignore and README.md
   - **ASK USER**: "Do you want me to make the initial commit?" (show files to be committed)
   - **IF YES**: Create initial commit with meaningful message
   - **IF NO**: Leave files staged for user to commit manually
   - Suggest next steps for remote repository setup

### .gitignore Template Generation
Base the .gitignore on the technology stack:

- **Node.js/React/Vue/Angular**: Include node_modules, .env, dist, build
- **Python**: Include __pycache__, .env, venv, *.pyc
- **Java**: Include target/, .class, .jar
- **C#/.NET**: Include bin/, obj/, *.user
- **Go**: Include vendor/, *.exe
- **Ruby**: Include .bundle, vendor/bundle
- **PHP**: Include vendor/, .env
- **Turborepo**: Include .turbo, apps/**/dist, packages/**/dist
- **Tickets**: Include tickets/in-progress/, tickets/completed/ (keep backlog in repo)
- **General**: Include IDE files, OS files, logs

### README.md Template Generation
Structure the README based on PROJECT_PLAN.md:

```markdown
# [Project Name]

[Main Objective from PROJECT_PLAN.md]

## Features

[List main features from PROJECT_PLAN.md]

## Technology Stack

[List technologies from PROJECT_PLAN.md]

## Installation

[Generate installation instructions based on stack]
[IF TURBOREPO: Include pnpm install and turbo commands]

## Usage

[Basic usage instructions]
[IF TURBOREPO: Include turbo dev, turbo build commands]

## Project Structure

[If applicable, show main folders]
[IF TURBOREPO: Show apps/ and packages/ structure]
```
tickets/           # TKDD tickets for development
├── backlog/       # Future work
├── in-progress/   # Current tasks
├── completed/     # Finished work
└── archived/      # Old tickets
```

## Contributing

[If applicable, contribution guidelines]

## License

[If specified in PROJECT_PLAN.md]
```

---

## README Update Process

### When to Execute
- After completing a project phase (option C)
- User confirms they want README updated

### Actions to Perform
1. **Review Current README.md**:
   - Read existing content
   - Identify sections that need updates

2. **Update Features Section**:
   - Add newly completed features
   - Mark completed features as "✅ Completed"
   - Update any feature descriptions

3. **Update Version Information**:
   - Update version number if applicable
   - Add changelog entry if present

4. **Update Installation/Usage**:
   - Update if new dependencies were added
   - Update if usage instructions changed

5. **Commit Changes**:
   - **ASK USER**: "Do you want me to commit the README updates?" (show changes)
   - **IF YES**: Add and commit README updates with meaningful message
   - **IF NO**: Leave changes uncommitted for user to handle

---

## Important Rules

### For the Agent
- **FIRST** detect if project exists, then read PREFERENCES.md for user preferences
- **ANALYZE** existing projects automatically before any workflow
- **NEVER** assume context without reading PROJECT_PLAN.md
- **ALWAYS** use TKDD format for development tickets
- **VALIDATE** each step before continuing
- **ASK** if something is unclear in PROJECT_PLAN.md
- **UPDATE** PROJECT_PLAN.md when there are important changes
- **RESPECT** preferences in PREFERENCES.md at all times
- **PRESERVE** existing project structure and workflows
- **CRITICAL**: Always ask before making Git commits (security first)

### Critical User Interaction
- **ANALYZE** all user suggestions objectively, especially if they are beginners
- **PROPOSE** better alternatives when they exist, explaining advantages
- **DO NOT** accept problematic proposals just out of courtesy or to please
- **EVALUATE** technically each decision before implementing

### Rules and Reminders Management
- **BY DEFAULT** all new rules go to PREFERENCES.md
- **ONLY** add rules to START.md if user explicitly specifies it
- **REWRITE** all information the user asks to remember using your own words
- **IMPROVE** wording to eliminate typographical errors and ambiguities
- **CONFIRM** with user before saving important rules
- **WRITE IN ENGLISH** when user asks to remember a rule, regardless of instruction language
- **EVALUATE** if context or intention is lost in English translation, keep original language if needed

### Git Repository Management
- **ALWAYS ASK** before initializing Git repository
- **ALWAYS ASK** before making any Git commits (security critical)
- **NEVER** commit automatically without explicit user permission
- **CHECK** user preferences for Git automation settings
- **GENERATE** .gitignore based on PROJECT_PLAN.md technology stack
- **CREATE** comprehensive README.md from PROJECT_PLAN.md information
- **USE** meaningful commit messages when user authorizes commits
- **SUGGEST** remote repository setup after local initialization
- **RESPECT** user's Git workflow preferences at all times

### Git Commit Policy
- **DEFAULT BEHAVIOR**: Always ask before making commits
- **SECURITY**: Users may have sensitive files or notes
- **CONFIGURABLE**: User can authorize automatic commits in PREFERENCES.md
- **EXPLICIT PERMISSION**: Only commit automatically if user explicitly enables it
- **ALWAYS CONFIRM**: Show what will be committed before proceeding

### Git Security Rules
- **NEVER** assume files are safe to commit
- **ALWAYS** show git status before committing
- **ASK** user to review files before adding to Git
- **RESPECT** if user wants to handle Git manually
- **PROTECT** user from accidental exposure of sensitive information

### README Maintenance
- **ALWAYS ASK** before updating README after phase completion
- **KEEP** README synchronized with project progress
- **UPDATE** feature status and descriptions
- **MAINTAIN** clear and helpful documentation

### Communication Style
- **BE DIRECT** - Go straight to questions or actions
- **BE CONCISE** - Avoid explaining methodology internals
- **NO VERBOSITY** - Keep responses short and actionable
- **CONTEXT ON REQUEST** - Only explain how things work if user asks
- **MENTION USER_GUIDE** - Reference available in .CADD/USER_GUIDE.md for methodology questions
- **SECURITY FIRST** - Always ask before Git operations to protect sensitive information

### Detecting User Preferences
- **"[Not configured]"** in PREFERENCES.md means no preference set
- **Don't assume** examples are real preferences
- **Only configured values** should be applied
- **Offer setup** if preferences are mostly unconfigured
- **Git Security**: Default to "always-ask" for commits unless explicitly configured otherwise

### Preferences Management
- **FIRST TIME**: Offer to set up preferences if mostly unconfigured
- **DURING SETUP**: Mention "You can always change your preferences by asking me to update them"
- **IF USER DECLINES**: Say "Just ask me to update your preferences whenever you want. I won't ask again."
- **NEVER ASK AGAIN**: If user declined preference setup, do not offer again
- **ON REQUEST**: Always help when user explicitly asks to update preferences

### Turborepo Integration
- **SUGGEST** when user mentions both frontend AND backend development
- **EXPLAIN BENEFITS** briefly: shared code, optimized builds, parallel workflows
- **RESPECT DECISION** if user declines, don't mention again
- **INTEGRATE** into .gitignore and README if accepted
- **INCLUDE** monorepo structure in project planning

### Ticket Organization and Management
- **ALWAYS** create `/tickets` folder structure for new projects
- **ORGANIZE** tickets by workflow stage: backlog → in-progress → completed → archived
- **USE** consistent naming convention: TKDD-[YYYYMMDD]-[sequence]-[description].md
- **CREATE** tickets in `/tickets/backlog/` by default
- **MOVE** tickets through workflow as work progresses
- **EXPLAIN** organization to user when creating first tickets
- **INCLUDE** tickets structure in .gitignore and README templates

### To Complete Empty PROJECT_PLAN.md
If PROJECT_PLAN.md is empty, ask IN ORDER:

1. **What type of project is it?** (web app, mobile, API, etc.)
2. **What is the main objective?** (problem it solves)
3. **Who are the users?** (target audience)
4. **What main functionalities does it need?**
5. **Are there technical restrictions?** (technologies, platforms)
6. **What is the expected timeline?**

### To Complete Auto-Generated PROJECT_PLAN.md (Existing Projects)
If PROJECT_PLAN.md was auto-generated from existing project analysis, ask ONLY for missing information:

1. **Main Objective**: "What is the main purpose of this application?" (if not clear from README/code)
2. **Target Audience**: "Who are the primary users?" (if not determinable from UI/API)
3. **Next Phase Goals**: "What do you want to develop in the next phase?" (always ask)
4. **Business Requirements**: "Any specific business rules or constraints?" (optional)
5. **Technical Restrictions**: "Any technical limitations?" (optional)
6. **Timeline Preferences**: "What's your preferred timeline?" (optional)

### To Structure PROJECT_PLAN.md
Use the standard PROJECT_PLAN.md template to organize it.

### For Existing Projects - Auto-Generated Template
When existing project is detected, use this enhanced template:

```markdown
# Project Plan - [Auto-Detected Project Name]

## Project Information
**Project Name**: [From package.json/folder name]
**Main Objective**: [To be clarified with user]
**Target Audience**: [To be clarified with user]
**Project Type**: [Auto-detected: Web App/API/Mobile/etc.]
**Current Version**: [Auto-detected from package.json/git tags]

## Technology Stack (Auto-Detected)
**Frontend**: [Detected technologies and versions]
**Backend**: [Detected technologies and versions]
**Database**: [Detected database and ORM]
**Testing**: [Detected testing frameworks]
**Build Tools**: [Detected build and dev tools]
**Infrastructure**: [Detected deployment tools]

## Current Features (Code Analysis)
### Implemented ✅
[List of auto-detected features based on code analysis]
- Authentication system
- User management
- API endpoints
- UI components
- Database operations
- [etc.]

### Architecture Analysis
**Pattern**: [Detected architectural pattern]
**State Management**: [Detected state management solution]
**API Design**: [Detected API style]
**Database Design**: [Detected database approach]

## Development Status
**Last Activity**: [Git analysis results]
**Code Quality**: [Testing, linting, documentation status]
**Team Activity**: [Based on commit history]
**Release History**: [Based on git tags/versions]

## Next Phase Planning
**Phase**: [To be determined with user]
**Focus Area**: [To be determined with user]
**Priority Features**: [To be determined with user]
**Timeline**: [To be determined with user]

## CADD Integration Notes
**Migration Date**: [Current date]
**Analysis Method**: Automatic code analysis
**Preserved**: Existing project structure and workflows
**Added**: CADD methodology and ticket organization
```

### To Manage PREFERENCES.md
- **Read PREFERENCES.md** at the beginning of each conversation
- **Apply preferences** consistently
- **Ask** if they need to update preferences
- **Update PREFERENCES.md** when user requests it
- **Maintain** structured and clear format

---

## Project Status Detection

### New Project
- PROJECT_PLAN.md empty or incomplete
- No code files
- No development history
- No `/tickets` folder

### Existing Project (Auto-Detected)
- Existing code files detected
- Technology stack identifiable
- Project structure already established
- May have existing version control
- PROJECT_PLAN.md auto-generated from analysis

### Project in Development
- PROJECT_PLAN.md complete
- Existing code files
- Defined phases with progress
- `/tickets` folder with organized tickets

### Mature Project
- PROJECT_PLAN.md with versions
- Functional deployed code
- Release history
- Extensive ticket history in `/tickets/completed/` and `/tickets/archived/`

---

## Communication with User

### Language and Style
- **Apply preferences** from PREFERENCES.md
- **Spanish** always (unless otherwise specified)
- **Short responses** and direct (unless otherwise specified)
- **Specific questions** when you need information

### Response Format
```
## Current Status
[Brief description of project status]

## Next Steps
[List of 2-3 concrete actions]

## Do you need anything else?
[Specific question to continue]
```

### Personalization
- **Use the name** the user prefers (defined in PREFERENCES.md)
- **Respect communication style** preferred
- **Follow specific restrictions** of the user

---

## Tools and Technologies

### Always use
- **pnpm** for package management (unless otherwise specified)
- **TKDD format** for tickets
- **Incremental development** (step by step)

### Ask before using
- Specific frameworks
- External libraries
- Deployment tools

### Consult PREFERENCES.md for
- Technology preferences
- Specific restrictions
- Favorite/prohibited tools

---

## User Preferences Management

### First Conversation
If it's the first time working with the user:
1. Read PREFERENCES.md
2. Ask if preferences are updated
3. Offer to complete/update PREFERENCES.md if necessary

### Following Conversations
1. Read PREFERENCES.md automatically
2. Apply preferences without asking
3. Offer to update preferences if you detect need

### Update PREFERENCES.md
When user requests to update preferences:
1. Ask what they want to change/add
2. Update PREFERENCES.md with new content
3. Confirm changes were applied
4. Use new preferences immediately

---

**REMEMBER: This file is your compass. Always return here if you feel lost.**
**IMPORTANT: PREFERENCES.md contains user preferences. Read it ALWAYS and respect them.** 