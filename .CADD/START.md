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

### 0. MANDATORY PRIOR ACTION
**BEFORE** doing anything, read PREFERENCES.md:

```
1. Read PREFERENCES.md to understand user preferences
2. Apply those preferences throughout the conversation
3. If first time, ask if they need to update PREFERENCES.md
```

### 1. MANDATORY FIRST CHECK - EXISTING PROJECT DETECTION
**BEFORE** asking "What do you want to do today?", **ALWAYS** check for existing project:

```
1. SCAN current directory for existing project indicators:
   - package.json, requirements.txt, composer.json, Gemfile, go.mod
   - Common project folders: src/, app/, components/, lib/, views/
   - Git repository (.git folder)
   - README.md or documentation files
   - Configuration files: webpack.config.js, vite.config.js, etc.

2. IF EXISTING PROJECT DETECTED:
   - ANNOUNCE: "Proyecto existente detectado. Analizando código..."
   - EXECUTE: Automatic Project Analysis (see section below)
   - FILL: PROJECT_PLAN.md with analyzed information
   - ASK: Only for missing critical information
   - PROCEED: To simplified workflow

3. IF NO EXISTING PROJECT: Continue with standard workflow
```

### 2. AUTOMATIC PROJECT ANALYSIS (for existing projects)
When existing project is detected, execute this comprehensive analysis:

#### Technology Stack Detection
- **Frontend**: React, Vue, Angular, Svelte, vanilla JS from package.json dependencies
- **Backend**: Node.js, Python, PHP, Java, C#, Go, Ruby from files and dependencies
- **Database**: PostgreSQL, MySQL, MongoDB, SQLite from connection strings/ORMs
- **Mobile**: React Native, Flutter, Swift, Kotlin from project structure
- **Build Tools**: Webpack, Vite, Rollup, Parcel from config files
- **Testing**: Jest, Mocha, Cypress, Playwright from dependencies

#### Project Structure Analysis
- **Folder Purpose**: Identify src/, components/, utils/, api/, models/, views/
- **Architecture Pattern**: MVC, microservices, monolithic from structure
- **Code Organization**: Naming conventions, file structure patterns
- **Configuration**: Environment files, build configs, linting setup

#### Feature Detection
- **Authentication**: Login/register components, JWT/OAuth patterns
- **CRUD Operations**: Create, Read, Update, Delete patterns in code
- **API Endpoints**: REST routes, GraphQL schemas, WebSocket connections
- **UI Components**: Forms, tables, modals, navigation elements
- **Business Logic**: Data validation, processing, workflow patterns

#### Code Quality Assessment
- **Testing**: Test files, coverage reports, testing framework setup
- **Linting**: ESLint, Prettier, other code quality tools
- **Documentation**: README, JSDoc, API documentation
- **Security**: Input validation, authentication patterns, HTTPS setup

#### Git Activity Analysis
- **Repository Status**: Active development, last commits, branch structure
- **Team Size**: Commit authors, development patterns
- **Release History**: Tags, versions, changelog patterns
- **Development Stage**: Early, active, mature, maintenance

### 3. AUTO-FILL PROJECT_PLAN.md
Based on automatic analysis, populate PROJECT_PLAN.md with:

```markdown
# Project Plan - AUTO-GENERATED

## Project Information
**Project Name**: [From package.json/folder name]
**Main Objective**: [Inferred from README.md/code analysis]
**Target Audience**: [Inferred from UI/API patterns]
**Project Type**: [Web App/API/Mobile App/Desktop/Library]

## Technology Stack (Auto-Detected)
**Frontend**: [Detected frameworks and versions]
**Backend**: [Detected backend technologies]
**Database**: [Detected database systems]
**Infrastructure**: [Detected deployment/containerization]

## Current Features (Analyzed)
- [List of detected features with ✅ checkmarks]
- [Authentication, CRUD, API endpoints, UI components]
- [Database tables, business logic, integrations]

## Architecture Analysis
**Pattern**: [MVC/Microservices/Monolithic]
**State Management**: [Redux/Context API/Vuex/etc.]
**Database Design**: [Relational/NoSQL/Hybrid]
**API Design**: [REST/GraphQL/RPC]

## Development Status
**Current Version**: [From package.json/git tags]
**Last Activity**: [Git commit analysis]
**Code Quality**: [Testing/linting/documentation status]
**Team Size**: [Estimated from git history]

## Next Phase Planning (To be configured)
**Phase**: [Auto-increment from detected version]
**Focus**: [To be determined with user input]
**Priority Features**: [To be determined]
```

### 4. SIMPLIFIED WORKFLOW (for existing projects)
After auto-analysis, ask minimal questions:

```
Análisis completo. Solo necesito clarificar:

1. ¿Cuál es el objetivo principal de la aplicación?
2. ¿Qué característica quieres desarrollar en la próxima fase?
3. ¿Hay restricciones técnicas importantes?

Responde y estaremos listos para continuar el desarrollo.
```

### 5. STANDARD WORKFLOW (for new projects)
After reading START.md and PREFERENCES.md, **ALWAYS** ask the user:

```
What do you want to do today?

A) 🚀 Create a new project
B) ⚡ Continue with current phase
C) 📋 Advance to next phase
D) 🎯 Plan new version (milestone)
E) ⚙️ Update preferences (PREFERENCES.md)
```

### 6. ACCORDING TO RESPONSE

#### A) Create New Project
1. Read PROJECT_PLAN.md
2. If empty: Ask questions to fill it
3. If has content: Analyze and complement it
4. Create initial development plan
5. Generate first TKDD ticket
6. **ASK**: "Do you want to set up Git repository?" (detect existing first, then offer appropriate options)
7. **IF YES**: Execute Git Repository Setup (see section below)

#### B) Continue Current Phase
1. Read PROJECT_PLAN.md
2. Identify current phase and progress
3. Review pending tickets
4. Continue with next ticket/task

#### C) Advance to Next Phase
1. Read PROJECT_PLAN.md
2. Confirm current phase completion
3. Present summary of completed work
4. Start next phase of plan
5. Generate tickets for new phase
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

---

## Git Repository Setup

### When to Execute
- After completing initial project planning (option A)
- User confirms they want Git repository setup

### Actions to Perform
1. **Detect Existing Git Repository**:
   - Check if .git/ folder exists
   - Analyze current Git status and remotes
   - Determine repository setup strategy

2. **Repository Setup Options**:
   Ask user to choose:
   - **Option A**: Keep existing repository (recommended for existing projects)
   - **Option B**: Create new independent repository
   - **Option C**: Skip Git setup entirely

3. **If Keep Existing Repository (Option A)**:
   - **Merge .gitignore**: Add CADD patterns to existing .gitignore file
   - **Update README.md**: Enhance existing README with CADD methodology section
   - **Preserve Git History**: Keep all existing commits, branches, and remotes
   - **Add CADD Files**: Stage .CADD/ folder and tickets/ structure
   - **ASK USER**: "Do you want me to commit these CADD additions?" (show files to be committed)
   - **IF YES**: Create commit with meaningful message about CADD integration
   - **IF NO**: Leave files staged for user to commit manually

4. **If Create New Repository (Option B)**:
   - **WARNING**: Explain this will disconnect from original repository
   - **ASK CONFIRMATION**: "This will remove connection to [remote-url]. All Git history will be lost. Continue?"
   - **IF YES**: 
     - Remove .git/ folder completely
     - Generate fresh .gitignore based on PROJECT_PLAN.md technology stack
     - Generate comprehensive README.md from PROJECT_PLAN.md
     - Run `git init` to create new repository
     - **ASK USER**: "Do you want me to make the initial commit?" (show files)
     - **IF YES**: Create initial commit with all project files
     - **IF NO**: Leave files untracked for user to commit manually
   - **IF NO**: Return to Option A or C

5. **If Skip Git Setup (Option C)**:
   - **Generate .gitignore**: Create .gitignore file without Git operations
   - **Generate README.md**: Create or update README without Git
   - **Leave Git Management**: Entirely to user's discretion
   - **Note**: User can run Git setup later if desired

### .gitignore Template Generation

#### For New Repository (Option B)
Create complete .gitignore based on technology stack:
- **Node.js/React/Vue/Angular**: node_modules, .env, dist, build, .next, .nuxt
- **Python**: __pycache__, .env, venv, *.pyc, .pytest_cache, .coverage
- **Java**: target/, .class, .jar, .gradle, build/
- **C#/.NET**: bin/, obj/, *.user, .vs/, *.suo
- **Go**: vendor/, *.exe, .env
- **Ruby**: .bundle, vendor/bundle, .env
- **PHP**: vendor/, .env, .phpunit.result.cache
- **Turborepo**: .turbo, apps/**/dist, packages/**/dist
- **CADD**: tickets/in-progress/, tickets/completed/
- **General**: .DS_Store, Thumbs.db, *.log, .vscode/, .idea/

#### For Existing Repository (Option A)
Merge CADD-specific patterns with existing .gitignore:
```
# CADD Methodology
tickets/in-progress/
tickets/completed/
# Keep tickets/backlog/ and tickets/archived/ in repository

# IDE and OS (if not already present)
.DS_Store
Thumbs.db
*.log
```

### README.md Template Generation

#### For New Repository (Option B)
Create comprehensive README from PROJECT_PLAN.md:

```markdown
# [Project Name]

[Main Objective from PROJECT_PLAN.md]

## Features

[List main features from PROJECT_PLAN.md]

## Technology Stack

[List technologies from PROJECT_PLAN.md]

## Installation

[Generate installation instructions based on stack]

## Usage

[Basic usage instructions]

## Project Structure

[If applicable, show main folders]
```
tickets/           # CADD tickets for development
├── backlog/       # Future work
├── in-progress/   # Current tasks
├── completed/     # Finished work
└── archived/      # Old tickets
```

## Development with CADD

This project uses CADD (Context-Assisted Development Driven) methodology for AI-assisted development.

To continue development:
1. Start any conversation with: "Read the file .CADD/START.md"
2. Follow the agent's guidance for structured development

## Contributing

[If applicable, contribution guidelines]

## License

[If specified in PROJECT_PLAN.md]
```

#### For Existing Repository (Option A)
Add CADD section to existing README:

```markdown
## Development with CADD

This project now uses CADD (Context-Assisted Development Driven) methodology for AI-assisted development.

### Getting Started with CADD
1. Start any conversation with an AI agent: "Read the file .CADD/START.md"
2. The agent will analyze the project and help you continue development
3. All new development is organized using TKDD (Ticket-Driven Development)

### Ticket Organization
```
tickets/           # CADD tickets for development
├── backlog/       # Future work
├── in-progress/   # Current tasks
├── completed/     # Finished work
└── archived/      # Old tickets
```

### Technology Stack (Auto-Detected)
[Add detected technology information if not already present in README]
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
   - Add and commit README updates
   - Use meaningful commit message

---

## Important Rules

### For the Agent
- **FIRST** read PREFERENCES.md for user preferences
- **NEVER** assume context without reading PROJECT_PLAN.md
- **ALWAYS** use TKDD format for development tickets
- **VALIDATE** each step before continuing
- **ASK** if something is unclear in PROJECT_PLAN.md
- **UPDATE** PROJECT_PLAN.md when there are important changes
- **RESPECT** preferences in PREFERENCES.md at all times

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
- **ALWAYS DETECT** existing Git repositories before any Git operations
- **ALWAYS ASK** before initializing Git repository
- **ALWAYS ASK** before making any Git commits (security critical)
- **NEVER** commit automatically without explicit user permission
- **CHECK** user preferences for Git automation settings
- **OFFER OPTIONS** for existing repositories: keep, create new, or skip
- **WARN CLEARLY** before disconnecting from existing remotes
- **PRESERVE** existing Git history unless explicitly requested otherwise
- **GENERATE** .gitignore based on PROJECT_PLAN.md technology stack
- **CREATE** comprehensive README.md from PROJECT_PLAN.md information
- **USE** meaningful commit messages when user authorizes commits
- **SUGGEST** remote repository setup after local initialization
- **RESPECT** user's Git workflow preferences at all times

### Existing Repository Security
- **DETECT** .git/ folder presence before any Git operations
- **ANALYZE** existing remotes and show them to user before any changes
- **DEFAULT** to keeping existing repository for existing projects
- **WARN EXPLICITLY** before removing Git history or disconnecting remotes
- **SHOW REMOTE URL** when asking about repository disconnection
- **PRESERVE** existing .gitignore and README when possible
- **MERGE** CADD additions with existing project structure
- **NEVER** force Git reinitialization without clear user confirmation
- **RESPECT** existing branch structure and workflow

### README Maintenance
- **ALWAYS ASK** before updating README after phase completion
- **KEEP** README synchronized with project progress
- **UPDATE** feature status and descriptions
- **MAINTAIN** clear and helpful documentation

### To Complete Empty PROJECT_PLAN.md
If PROJECT_PLAN.md is empty, ask IN ORDER:

1. **What type of project is it?** (web app, mobile, API, etc.)
2. **What is the main objective?** (problem it solves)
3. **Who are the users?** (target audience)
4. **What main functionalities does it need?**
5. **Are there technical restrictions?** (technologies, platforms)
6. **What is the expected timeline?**

### To Structure PROJECT_PLAN.md
Use the standard PROJECT_PLAN.md template to organize it.

### To Manage PREFERENCES.md
- **Read PREFERENCES.md** at the beginning of each conversation
- **Apply preferences** consistently
- **Ask** if they need to update preferences
- **Update PREFERENCES.md** when user requests it
- **Maintain** structured and clear format

---

## Project Status Detection

### Automatic Detection (NEW)
The system now automatically detects project status before asking what to do:

### New Project
- No existing project files detected
- PROJECT_PLAN.md empty or incomplete
- No code files in common locations
- No development history

### Existing Project (Auto-Detected)
- **Technology files found**: package.json, requirements.txt, etc.
- **Project structure detected**: src/, app/, components/ folders
- **Git repository present**: .git folder exists
- **Automatic analysis executed**: PROJECT_PLAN.md auto-filled
- **Ready for development**: Minimal setup questions only

### Project in Development
- PROJECT_PLAN.md complete (auto-generated or manual)
- Existing code files with detected features
- Defined phases with progress tracking

### Mature Project
- PROJECT_PLAN.md with versions and release history
- Functional deployed code with detected patterns
- Established development workflow and Git activity

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