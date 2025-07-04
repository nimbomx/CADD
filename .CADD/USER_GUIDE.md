# CADD - Context-Assisted Development Driven

> **Guide for working with AI agents in Cursor using structured methodology**

## What is CADD?

**CADD** is a methodology that allows you to develop software projects using AI agents, regardless of your technical level. It works with **structured context** and **templates** that guide both you and the agent.

### Benefits
- ✅ **Clear instructions** for the agent
- ✅ **Fewer errors** due to lack of context
- ✅ **Organized projects** from the start
- ✅ **Works for any technical level**

---

## CADD System Files

### 📋 START.md
**The starting point for every agent**
- Universal file for any project
- Contains instructions for the agent
- Defines the workflow
- **DO NOT modify** - works for all projects

### 🤖 PREFERENCES.md
**Your personal preferences**
- How you like to be called
- Preferred response style
- Tools and restrictions
- **YES, customize it** - template ready for your preferences
- **NEW v1.4.3**: Clean template with placeholders for new users

### 📝 PROJECT_PLAN.md
**The specific description of your project**
- Technical and business information
- Features and timeline
- Current development status
- **YES, modify it** - specific to each project
- **NEW v1.4.4**: Clean template with placeholders for universal use

### 🎫 TKDD_METHODOLOGY.md
**Methodology for creating clear tasks**
- Structure for development tickets
- Guide for AI agents
- Avoids ambiguities in instructions
- **DO NOT modify** - universal methodology

---

## How to Use CADD

### 1. Starting a Conversation
**Whenever you start a new conversation:**

```
Read the file .CADD/START.md
```

The agent will automatically:
- Read the instructions
- Read your preferences
- **NEW**: Detect if you have an existing project
- **NEW**: Analyze your code automatically (if existing project)
- Ask what you want to do
- Guide you according to your response

### 2. Automatic Project Detection (NEW v1.4.2)

#### 🔍 What Gets Detected
When you add CADD to an existing project, the agent automatically scans for:
- **Technology files**: package.json, requirements.txt, composer.json, etc.
- **Project structure**: src/, app/, components/, lib/, views/ folders
- **Git repository**: Existing .git folder and history
- **Configuration files**: Build tools, linting, testing setup
- **Documentation**: README.md, API docs, comments

#### 🧠 Automatic Analysis
The agent analyzes your existing code to detect:
- **Technology Stack**: Frontend, backend, database, tools
- **Current Features**: Authentication, CRUD, API endpoints, UI components
- **Architecture**: MVC, microservices, design patterns
- **Code Quality**: Tests, linting, documentation coverage
- **Development Status**: Git activity, version history, team size

#### 📋 Auto-Generated Documentation
Based on analysis, the agent automatically creates:
- **Complete PROJECT_PLAN.md** with all detected information
- **Feature inventory** with ✅ checkmarks for existing functionality
- **Technology stack** with versions and dependencies
- **Architecture analysis** with patterns and organization
- **Next phase planning** ready for your input

#### ⚡ Simplified Setup
For existing projects, you only need to answer 2-3 questions:
1. **Main objective**: What problem does your app solve?
2. **Next phase**: What feature do you want to develop next?
3. **Restrictions**: Any technical or business constraints?

### 3. Workflow

#### 🚀 For New Projects
1. Agent reads START.md
2. Agent reads PREFERENCES.md
3. Agent detects NO existing project files
4. Agent reviews PROJECT_PLAN.md
5. If empty: Asks questions to fill it
6. If has content: Analyzes and complements it
7. Creates development plan
8. Generates first ticket

#### 🔍 For Existing Projects (NEW)
1. Agent reads START.md
2. Agent reads PREFERENCES.md
3. Agent detects existing project files
4. Agent announces: "Proyecto existente detectado. Analizando código..."
5. Agent automatically analyzes codebase
6. Agent auto-fills PROJECT_PLAN.md with detected information
7. Agent asks only 2-3 clarifying questions
8. Ready for immediate development continuation

#### ⚡ For Continuing Development
1. Agent reads START.md
2. Agent reads PREFERENCES.md
3. Agent reviews PROJECT_PLAN.md
4. Identifies where you left off
5. Continues with next task

#### 📋 For Advancing to Next Phase
1. Agent reads START.md
2. Agent reads PREFERENCES.md
3. Reviews progress in PROJECT_PLAN.md
4. Confirms completion of current phase
5. Starts next phase of plan

#### 🎯 For New Version
1. Agent reads START.md
2. Agent reads PREFERENCES.md
3. Reviews current version
4. Plans new functionalities
5. Updates PROJECT_PLAN.md

---

## First Time Setup (NEW v1.4.3)

### 📋 Customize PREFERENCES.md
**Before your first conversation, customize your preferences:**

1. **Open PREFERENCES.md** and replace placeholders:
   - `[Tu nombre aquí]` → Your actual name
   - `[Estilo preferido]` → Brief/detailed responses
   - `[Gestor de paquetes]` → npm, yarn, or pnpm
   - `[Idioma]` → Spanish, English, etc.

2. **Fill technology preferences**:
   - Frontend, backend, database preferences
   - Deployment platforms you use
   - Development tools you prefer

3. **Set your priorities**:
   - Speed vs. quality balance
   - Learning vs. producing focus
   - Technical complexity preferences

### 📝 Complete PROJECT_PLAN.md (NEW v1.4.4)
**For new projects, customize the project plan:**

1. **Open PROJECT_PLAN.md** and replace placeholders:
   - `[Project Name]` → Your actual project name
   - `[Brief description]` → What your project does
   - `[Primary User Group]` → Who will use your app
   - `[Core Feature 1]` → Most important functionality

2. **Fill project details**:
   - Check relevant project types (Web App, Mobile, API, etc.)
   - Describe your target audience and use cases
   - List main features you want to build
   - Set technology preferences and restrictions

3. **Define timeline**:
   - Break work into phases with realistic durations
   - Set measurable goals and success criteria
   - Plan deployment and production setup

4. **Save and start** your first conversation:
   ```
   "Read the file .CADD/START.md"
   ```

---

## Guide by Technical Level

### 👶 Complete Beginner
**If you've never programmed:**

1. **Customize PREFERENCES.md** with basics:
   - Your preferred name
   - Response style you like
   - Language preference

2. **Fill PROJECT_PLAN.md** with basic ideas:
   - What do you want to create?
   - Who is it for?
   - What should it do?

3. **Leave technical sections empty** - the agent will help you

4. **Use simple phrases** like:
   - "I want a website to sell products"
   - "I need an app to manage tasks"
   - "I want a personal blog"

### 🎓 Beginner with AI Knowledge
**If you know how to use AI tools:**

1. **Complete PREFERENCES.md** with more details:
   - Tools you like
   - Preferred code style
   - Specific restrictions

2. **Complete more sections** of PROJECT_PLAN.md:
   - Specific functionalities
   - Detailed use cases
   - Design references

3. **Use TKDD methodology** for specific tasks:
   - Read TKDD_METHODOLOGY.md
   - Create tickets for functionalities
   - Let the agent implement

### 💻 Intermediate Programmer
**If you know basic programming:**

1. **Complete PREFERENCES.md** technically:
   - Preferred technology stack
   - Development tools
   - Code patterns

2. **Complete PROJECT_PLAN.md** technically:
   - Preferred technology stack
   - Technical restrictions
   - Necessary integrations

3. **Participate in technical decisions**:
   - Review generated code
   - Suggest optimizations
   - Define architecture

### 🚀 Advanced Programmer
**If you're an expert:**

1. **Use CADD as project documentation**
2. **Collaborate with the agent** on complex decisions
3. **Optimize the methodology** for your team
4. **Create custom templates**

---

## Usage Examples

### Example 1: Existing Project Analysis (NEW)
```
User: "Read the file .CADD/START.md"
Agent: "Proyecto existente detectado. Analizando código...
✅ Tecnologías: React 18, Node.js 16, PostgreSQL
✅ Características: Autenticación JWT, CRUD usuarios, API REST
✅ Estructura: 15 componentes, 8 tablas, 20 endpoints
✅ Calidad: 85% cobertura de tests, ESLint configurado

PROJECT_PLAN.md generado automáticamente.

Solo necesito clarificar:
1. ¿Cuál es el objetivo principal de la aplicación?
2. ¿Qué quieres desarrollar en la próxima fase?
3. ¿Hay restricciones técnicas importantes?"

User: "Es una app de gestión de tareas. Quiero añadir notificaciones push."
Agent: "Perfect. Metodología configurada. ¿Empezamos con las notificaciones?"
```

### Example 2: Simple E-commerce (New Project)
```
User: "Read the file .CADD/START.md"
Agent: "No se detectó proyecto existente. Hello [name]! What do you want to do today? A) Create new project..."
User: "A"
Agent: "I see PROJECT_PLAN.md is empty. What type of project is it?"
User: "An online store to sell clothing"
Agent: "Perfect. Who are your target users?"
...
```

### Example 3: Continuing Development
```
User: "Read the file .CADD/START.md"
Agent: "Proyecto ya configurado. Hello [name]! What do you want to do today? A) Create new project..."
User: "B - Continue current phase"
Agent: "I see you're in Phase 2. You completed login. Shall we continue with the shopping cart?"
```

---

## Tips and Best Practices

### ✅ Do This
- **Always** start with "Read the file .CADD/START.md"
- **First time**: Customize PREFERENCES.md with your preferences (v1.4.3)
- **New projects**: Complete PROJECT_PLAN.md template placeholders (v1.4.4)
- **Keep** PROJECT_PLAN.md updated
- **Be specific** in your responses
- **Ask** when you don't understand something
- **Review** generated code
- **NEW**: Trust the automatic analysis - it's usually very accurate
- **NEW**: For existing projects, just answer the 2-3 questions asked
- **NEW**: Check auto-generated PROJECT_PLAN.md to understand what was detected

### ❌ Avoid This
- Don't skip the START.md step
- Don't assume the agent remembers previous conversations
- **NEW**: Don't manually fill PROJECT_PLAN.md if you have existing code
- **NEW**: Don't worry about analyzing your own code - let CADD do it
- **NEW**: Don't provide lengthy explanations for existing projects
- Don't modify START.md or TKDD_METHODOLOGY.md
- Don't leave PROJECT_PLAN.md empty for too long
- Don't be afraid to ask questions

---

## Troubleshooting

### Common Problems

#### "The agent doesn't understand my project"
**Solution:** Fill PROJECT_PLAN.md with more details about your project

#### "The agent generates incorrect code"
**Solution:** Check if your PREFERENCES.md has the right technical restrictions

#### "I don't know how to continue"
**Solution:** Ask the agent to read PROJECT_PLAN.md and suggest next steps

#### "The agent forgets what we were working on"
**Solution:** Always start with "Read the file .CADD/START.md"

---

## Advanced Tips

### For Teams
- Create a shared PREFERENCES.md with team standards
- Keep PROJECT_PLAN.md updated with all team members
- Use TKDD for assigning tasks to different team members

### For Complex Projects
- Break large projects into smaller sub-projects
- Use multiple PROJECT_PLAN.md files for different modules
- Create custom templates based on your most common project types

### For Learning
- Use CADD to learn new technologies
- Ask the agent to explain generated code
- Create practice projects with increasing complexity

---

## Git Repository Handling

### For Existing Projects with Git
When you add CADD to an existing project that already has a Git repository, CADD will:

1. **Detect your existing repository** automatically
2. **Show you the current remote** (if any)
3. **Offer three options**:
   - **Keep existing repository** (recommended)
   - **Create new independent repository**
   - **Skip Git setup entirely**

### Option Details

#### Keep Existing Repository ✅ (Recommended)
- **Preserves**: All Git history, branches, remotes, tags
- **Adds**: Only CADD-specific patterns to .gitignore
- **Updates**: README.md with CADD section (preserves existing content)
- **Safe**: No risk of losing any existing work

#### Create New Repository ⚠️
- **Warning**: Disconnects from current remote repository
- **Removes**: All Git history and remote connections
- **Creates**: Fresh repository starting from current state
- **Use case**: When you want to completely break away from original repository

#### Skip Git Setup 🚫
- **No Git operations**: CADD doesn't touch Git at all
- **Manual control**: You handle all Git operations yourself
- **Files created**: Only .gitignore and README updates (no Git commands)

### What's Safe
- ✅ **Your code**: Never modified or reorganized
- ✅ **Your Git history**: Preserved unless you choose "Create new"
- ✅ **Your remotes**: Kept intact with "Keep existing" option
- ✅ **Your branches**: All branches preserved
- ✅ **Your workflow**: Enhanced, not replaced

### Best Practices
- **For existing projects**: Always choose "Keep existing repository"
- **For templates/starters**: Consider "Create new repository"
- **For experiments**: Use "Skip Git setup" for full control

---

**Remember: CADD is a tool to help you be more productive with AI agents. The more you use it, the better your results will be.** 