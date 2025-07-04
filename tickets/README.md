# TKDD Ticket Organization System

## Folder Structure

```
tickets/
├── backlog/        # 📋 Future work - tickets to be started
├── in-progress/    # 🔄 Current work - active tickets
├── completed/      # ✅ Finished work - successfully completed
├── archived/       # 📦 Old tickets - moved after 30 days
└── README.md       # This file
```

## Ticket Workflow

### 1. Creating New Tickets
- **Always create** in `/tickets/backlog/`
- **Use naming convention**: `TKDD-[YYYYMMDD]-[sequence]-[short-description].md`
- **Example**: `TKDD-20241204-001-user-authentication.md`

### 2. Working with Tickets
1. **Start work** → Move ticket from `backlog/` to `in-progress/`
2. **Complete work** → Move ticket from `in-progress/` to `completed/`
3. **Archive old tickets** → Move from `completed/` to `archived/` after 30 days

### 3. File Management
- **Only one ticket** should be in `in-progress/` at a time (unless parallel work)
- **Check dependencies** before moving tickets to `in-progress/`
- **Update ticket progress** by checking off completed criteria

## Naming Convention

### Format
`TKDD-[YYYYMMDD]-[sequence]-[short-description].md`

### Components
- **TKDD**: Ticket type identifier
- **YYYYMMDD**: Date of creation (20241204)
- **sequence**: Daily sequence number (001, 002, 003...)
- **short-description**: Brief kebab-case description (max 30 chars)

### Examples
- `TKDD-20241204-001-user-authentication.md`
- `TKDD-20241204-002-password-reset.md`
- `TKDD-20241205-001-dashboard-layout.md`

## Ticket Template

All tickets should follow the TKDD template:

```markdown
# TKDD - [Feature/Fix Name]

## Objective
[Clear description of what needs to be implemented]

## Acceptance Criteria
- [ ] [Specific, testable requirement]
- [ ] [Another specific requirement]
- [ ] [Additional requirement]

## Technical Requirements
- [ ] [Technical constraint or specification]
- [ ] [Another technical requirement]

## Examples/Use Cases
### Example 1: [Scenario Name]
**Input**: [What the user does]
**Expected Output**: [What should happen]

### Example 2: [Another Scenario]
**Input**: [Different user action]
**Expected Output**: [Expected result]

## Restrictions
- [Any technical limitations]
- [Design constraints]
- [Performance requirements]

## Dependencies
- [Other tickets that must be completed first]
- [External resources needed]

## Notes
[Additional context or considerations]
```

## Ticket Management Rules

### Backlog (`/tickets/backlog/`)
- **Purpose**: Store future work and planned features
- **Status**: Not started
- **Action**: Create all new tickets here

### In-Progress (`/tickets/in-progress/`)
- **Purpose**: Track current active work
- **Status**: Being worked on
- **Action**: Move here when starting work
- **Limit**: Ideally only 1-2 tickets at a time

### Completed (`/tickets/completed/`)
- **Purpose**: Track finished work
- **Status**: All acceptance criteria met
- **Action**: Move here when work is done
- **Review**: Check all criteria before moving

### Archived (`/tickets/archived/`)
- **Purpose**: Store old completed tickets
- **Status**: Completed and archived
- **Action**: Move completed tickets here after 30 days
- **Benefit**: Keeps folder structure clean

## Git Integration

### Branch Naming
- **Format**: `feature/TKDD-[YYYYMMDD]-[sequence]`
- **Example**: `feature/TKDD-20241204-001`

### Commit Messages
- **Format**: `[type]: [description] (TKDD-[YYYYMMDD]-[sequence])`
- **Example**: `feat: implement user authentication (TKDD-20241204-001)`

### Pull Requests
- **Title**: Should reference the ticket
- **Description**: Should link to the ticket file
- **Closing**: Close ticket when PR is merged

## Quality Checklist

Before creating a ticket:
- [ ] Objective is clear and specific
- [ ] All acceptance criteria are testable
- [ ] Examples cover main use cases
- [ ] Restrictions are clearly defined
- [ ] Dependencies are identified
- [ ] File naming follows convention
- [ ] Ticket is in `/tickets/backlog/` folder

## Common Mistakes to Avoid

### ❌ Poor Organization
- Creating tickets in project root
- Not using folder structure
- Inconsistent naming

### ❌ Vague Requirements
- "Improve user experience"
- "Make it faster"
- "Fix the bug"

### ❌ Missing Information
- No examples provided
- Untestable criteria
- No restrictions specified

### ✅ Good Practices
- Clear, specific objectives
- Testable acceptance criteria
- Realistic examples
- Proper file organization
- Consistent naming convention

## Maintenance

### Weekly Review
- Check `in-progress/` for stalled tickets
- Review `completed/` for tickets ready to archive
- Update ticket dependencies as needed

### Monthly Cleanup
- Archive tickets older than 30 days
- Review and update ticket templates
- Analyze ticket completion patterns

### Project Milestones
- Create epic tickets for major features
- Link related tickets using dependencies
- Review ticket completion for milestones

---

**Remember**: Good ticket organization is key to successful project management. This system keeps your work organized, trackable, and maintainable. 