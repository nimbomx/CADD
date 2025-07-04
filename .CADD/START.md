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

### 1. MANDATORY FIRST ACTION
After reading START.md and PREFERENCES.md, **ALWAYS** ask the user:

```
What do you want to do today?

A) 🚀 Create a new project
B) ⚡ Continue with current phase
C) 📋 Advance to next phase
D) 🎯 Plan new version (milestone)
E) ⚙️ Update preferences (PREFERENCES.md)
```

### 2. ACCORDING TO RESPONSE

#### A) Create New Project
1. Read PROJECT_PLAN.md
2. If empty: Ask questions to fill it
3. If has content: Analyze and complement it
4. Create initial development plan
5. Generate first TKDD ticket

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

### New Project
- PROJECT_PLAN.md empty or incomplete
- No code files
- No development history

### Project in Development
- PROJECT_PLAN.md complete
- Existing code files
- Defined phases with progress

### Mature Project
- PROJECT_PLAN.md with versions
- Functional deployed code
- Release history

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