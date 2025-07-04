# USER PREFERENCES

> **For User:** Fill out your personal preferences. Leave empty what you don't want to specify.

> **For Agent:** Apply these preferences consistently throughout the conversation. If empty, use neutral defaults.

---

## Personal Information

### Name
**How you want to be addressed:** [Not configured]

### Communication Style
**Preferred response style:** [Not configured]

### Language
**Preferred language for communication:** [Not configured]

---

## Technical Preferences

### Package Manager
**Preferred package manager:** [Not configured]

### Development Tools
**Preferred IDE/Editor:** [Not configured]

**Preferred terminal/shell:** [Not configured]

### Technology Stack
**Preferred frontend framework:** [Not configured]

**Preferred backend framework:** [Not configured]

**Preferred database:** [Not configured]

**Preferred deployment platform:** [Not configured]

---

## Code Style

### Code Formatting
**Preferred code style:** [Not configured]

**Preferred file organization:** [Not configured]

### Testing
**Preferred testing framework:** [Not configured]

**Testing approach:** [Not configured]

---

## Workflow Preferences

### Project Management
**Preferred project structure:** [Not configured]

**Preferred commit message style:** [Not configured]

### Development Approach
**Preferred development methodology:** [Not configured]

**Preferred code review process:** [Not configured]

---

## Restrictions and Limitations

### Technical Restrictions
**Technologies to avoid:** [Not configured]

**Specific limitations:** [Not configured]

### Budget/Resource Constraints
**Budget considerations:** [Not configured]

**Time constraints:** [Not configured]

---

## Additional Notes

**Other preferences or important information:** [Not configured]

---

**Status:** Template - User needs to configure preferences
**Last updated:** [Not configured]
**Updated by:** [Not configured]

# User Preferences Configuration

## Personal Information
- **Name**: [Not configured]
- **Preferred Language**: [Not configured]
- **Communication Style**: [Not configured]

## Technical Preferences
- **Package Manager**: [Not configured]
- **Preferred Framework**: [Not configured]
- **Code Style**: [Not configured]

## Git and Repository Management
- **Git Workflow**: [Not configured]
- **Automatic Commits**: [Not configured] # Options: "always-ask", "auto-with-permission", "never-auto"
- **Commit Message Style**: [Not configured]
- **Branch Naming**: [Not configured]

## Development Preferences
- **Testing Framework**: [Not configured]
- **Documentation Style**: [Not configured]
- **Error Handling**: [Not configured]

## CADD Workflow Preferences
- **Ticket Management**: [Not configured]
- **Project Organization**: [Not configured]
- **Progress Reporting**: [Not configured]

## Restrictions and Dislikes
- **Avoid These Technologies**: [Not configured]
- **Coding Restrictions**: [Not configured]
- **Communication Restrictions**: [Not configured]

---

## Git Security Settings (IMPORTANT)

### Default Git Behavior
- **ALWAYS ASK** before making commits (security first)
- **SHOW FILES** to be committed before proceeding
- **RESPECT** user's decision on Git management

### Git Automation Options
1. **"always-ask"** (DEFAULT) - Always ask before any Git operation
2. **"auto-with-permission"** - Ask once, then automate if user agrees
3. **"never-auto"** - Never automate Git operations, user handles manually

### Security Notes
- Users may have sensitive files or notes that shouldn't be committed
- Always review files before adding to Git
- Respect user's Git workflow preferences
- Never assume files are safe to commit publicly

---

## Instructions for Agent

### Reading Preferences
- **"[Not configured]"** means the preference is not set
- **Don't assume** examples are real preferences
- **Only apply** explicitly configured values
- **Offer setup** if most preferences are unconfigured

### Updating Preferences
- **ASK** what user wants to change/add
- **CONFIRM** changes before applying
- **RESPECT** user's workflow choices
- **MAINTAIN** this structured format

### Git Preferences
- **ALWAYS CHECK** Git automation settings before committing
- **DEFAULT** to asking user about commits
- **RESPECT** user's security concerns
- **NEVER** commit without explicit permission unless configured otherwise 