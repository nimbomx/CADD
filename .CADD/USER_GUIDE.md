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
- **YES, customize it** - copied to new projects

### 📝 PROJECT_PLAN.md
**The specific description of your project**
- Technical and business information
- Features and timeline
- Current development status
- **YES, modify it** - specific to each project

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
- Ask what you want to do
- Guide you according to your response

### 2. Workflow

#### 🚀 For New Projects
1. Agent reads START.md
2. Agent reads PREFERENCES.md
3. Agent reviews PROJECT_PLAN.md
4. If empty: Asks questions to fill it
5. If has content: Analyzes and complements it
6. Creates development plan
7. Generates first ticket

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

## Guide by Technical Level

### 👶 Complete Beginner
**If you've never programmed:**

1. **Customize PREFERENCES.md** basically:
   - Your preferred name
   - Response style you like

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

### Example 1: Simple E-commerce
```
User: "Read the file .CADD/START.md"
Agent: "Hello [name]! What do you want to do today? A) Create new project..."
User: "A"
Agent: "I see PROJECT_PLAN.md is empty. What type of project is it?"
User: "An online store to sell clothing"
Agent: "Perfect. Who are your target users?"
...
```

### Example 2: Continuing Development
```
User: "Read the file .CADD/START.md"
Agent: "Hello [name]! What do you want to do today? A) Create new project..."
User: "B - Continue current phase"
Agent: "I see you're in Phase 2. You completed login. Shall we continue with the shopping cart?"
```

---

## Tips and Best Practices

### ✅ Do This
- **Always** start with "Read the file .CADD/START.md"
- **Customize** PREFERENCES.md with your preferences
- **Keep** PROJECT_PLAN.md updated
- **Be specific** in your responses
- **Ask** when you don't understand something
- **Review** generated code

### ❌ Avoid This
- Don't skip the START.md step
- Don't assume the agent remembers previous conversations
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

**Remember: CADD is a tool to help you be more productive with AI agents. The more you use it, the better your results will be.** 