# TKDD Methodology - Ticket-Driven Development

## What is TKDD?
TKDD (Ticket-Driven Development) is a methodology for creating clear, actionable development tickets that AI agents can execute effectively. Each ticket contains everything needed to implement a specific feature or fix.

## Ticket Organization Structure

### Folder Structure
```
project-root/
├── tickets/
│   ├── backlog/        # Future work - tickets to be started
│   ├── in-progress/    # Current work - active tickets
│   ├── completed/      # Finished work - successfully completed
│   └── archived/       # Old tickets - moved after 30 days
└── [project files...]
```

### Ticket Workflow
1. **New tickets** → Create in `/tickets/backlog/`
2. **Start work** → Move to `/tickets/in-progress/`
3. **Complete work** → Move to `/tickets/completed/`
4. **Archive old** → Move to `/tickets/archived/` (after 30 days)

### File Naming Convention
- **Format**: `TKDD-[YYYYMMDD]-[sequence]-[short-description].md`
- **Example**: `TKDD-20241204-001-user-authentication.md`
- **Sequence**: Daily sequence (001, 002, 003...)
- **Description**: Brief kebab-case description (max 30 chars)

## Ticket Structure

### Template
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

## Ticket Types

### Feature Tickets
For new functionality:
- Focus on user value
- Include user stories
- Specify acceptance criteria
- Add UI/UX requirements

### Bug Fix Tickets
For fixing issues:
- Describe current behavior
- Specify expected behavior
- Include reproduction steps
- Add test scenarios

### Refactoring Tickets
For code improvements:
- Explain why refactoring is needed
- Specify what should be improved
- Include performance requirements
- Add testing requirements

### Documentation Tickets
For documentation tasks:
- Specify what needs documentation
- Include target audience
- Add format requirements
- Include examples needed

## Writing Quality Guidelines

### Objective Section
- **Clear**: Use simple, direct language
- **Specific**: Avoid vague terms like "improve" or "fix"
- **Measurable**: Include quantifiable outcomes when possible
- **Actionable**: Start with action verbs

### Acceptance Criteria
- **Testable**: Each criterion should be verifiable
- **Specific**: Avoid ambiguous language
- **Complete**: Cover all aspects of the feature
- **Independent**: Each criterion should stand alone

### Examples Section
- **Realistic**: Use real-world scenarios
- **Comprehensive**: Cover edge cases
- **Clear**: Include specific inputs and outputs
- **Varied**: Show different use cases

### Restrictions Section
- **Technical**: Include performance requirements
- **Business**: Add compliance requirements
- **Design**: Specify UI/UX constraints
- **Security**: Include security considerations

## Ticket Management

### Creating Tickets
1. **Always create** in `/tickets/backlog/` folder
2. **Use naming convention**: TKDD-[YYYYMMDD]-[sequence]-[description].md
3. **Fill complete template** with all sections
4. **Review criteria** before saving
5. **Link dependencies** to other tickets

### Working with Tickets
1. **Move to in-progress** when starting work
2. **Update progress** by checking off completed criteria
3. **Add notes** during development if needed
4. **Move to completed** when all criteria are met
5. **Archive old tickets** after 30 days

### Ticket Dependencies
- **List prerequisite tickets** in Dependencies section
- **Use ticket IDs** for reference (e.g., "TKDD-20241204-001")
- **Check dependencies** before starting work
- **Update dependent tickets** when completing work

## Quality Checklist

Before creating a ticket, verify:
- [ ] Objective is clear and specific
- [ ] All acceptance criteria are testable
- [ ] Examples cover main use cases
- [ ] Restrictions are clearly defined
- [ ] Dependencies are identified
- [ ] File naming follows convention
- [ ] Ticket is in correct folder (`/tickets/backlog/`)

## Advanced Ticket Techniques

### Breaking Down Large Features
For complex features:
1. **Create epic ticket** with overall objective
2. **Break into smaller tickets** (2-4 hours each)
3. **Link tickets** using dependencies
4. **Sequence tickets** logically
5. **Review epic completion** when all tickets done

### Ticket Estimation
Add time estimates:
- **Small**: 1-2 hours
- **Medium**: 3-4 hours
- **Large**: 5-8 hours
- **Extra Large**: Break down further

### Ticket Prioritization
Use priority labels:
- **Critical**: Must be done immediately
- **High**: Important for current sprint
- **Medium**: Nice to have soon
- **Low**: Future consideration

## Integration with Development Process

### With Git
- **Create branch** per ticket: `feature/TKDD-20241204-001`
- **Commit messages** reference ticket: "feat: implement user auth (TKDD-20241204-001)"
- **PR descriptions** link to ticket
- **Close tickets** in PR merge

### With Testing
- **Write tests** based on acceptance criteria
- **Test all examples** provided in ticket
- **Verify restrictions** are followed
- **Update test documentation**

### With Documentation
- **Update docs** as part of ticket completion
- **Include examples** from ticket in documentation
- **Link documentation** to ticket for reference
- **Review documentation** against acceptance criteria

## Common Mistakes to Avoid

### Vague Objectives
❌ "Improve user experience"
✅ "Reduce login time from 5 seconds to under 2 seconds"

### Untestable Criteria
❌ "Make it user-friendly"
✅ "User can complete login in maximum 3 clicks"

### Missing Examples
❌ No examples provided
✅ Specific input/output scenarios

### Incomplete Restrictions
❌ "Should be fast"
✅ "Must load in under 2 seconds on 3G connection"

### Poor File Organization
❌ Creating tickets in project root
✅ Creating tickets in `/tickets/backlog/`

### Inconsistent Naming
❌ "ticket1.md", "user_auth.md"
✅ "TKDD-20241204-001-user-authentication.md"

## Ticket Templates by Type

### Feature Template
```markdown
# TKDD - [Feature Name]

## Objective
Implement [specific feature] that allows users to [specific action] in order to [business value].

## Acceptance Criteria
- [ ] User can [specific action]
- [ ] System responds within [time requirement]
- [ ] [Data/state] is properly [saved/validated/processed]
- [ ] Error handling for [specific error scenarios]

## Technical Requirements
- [ ] Use [specific technology/framework]
- [ ] Follow [coding standards/patterns]
- [ ] Include [specific validations]
- [ ] Implement [security measures]

## Examples/Use Cases
### Happy Path
**Input**: [Normal user action]
**Expected Output**: [Successful result]

### Error Case
**Input**: [Invalid user action]
**Expected Output**: [Appropriate error message]

## Restrictions
- Must be compatible with [browsers/devices]
- Performance requirement: [specific metric]
- Security requirement: [specific measure]

## Dependencies
- [Other tickets that must be completed first]

## Notes
[Additional context or technical considerations]
```

### Bug Fix Template
```markdown
# TKDD - Fix [Bug Description]

## Objective
Fix the issue where [specific problem] occurs when [specific conditions].

## Current Behavior
[Describe what currently happens]

## Expected Behavior
[Describe what should happen]

## Acceptance Criteria
- [ ] [Specific problem] no longer occurs
- [ ] [Original functionality] still works correctly
- [ ] [Edge cases] are handled properly
- [ ] [Regression tests] pass

## Reproduction Steps
1. [Step 1]
2. [Step 2]
3. [Step 3]
4. [Bug occurs]

## Technical Requirements
- [ ] Identify root cause
- [ ] Fix without breaking existing functionality
- [ ] Add tests to prevent regression
- [ ] Update documentation if needed

## Examples/Use Cases
### Bug Scenario
**Input**: [Actions that cause the bug]
**Current Output**: [Wrong behavior]
**Expected Output**: [Correct behavior]

## Restrictions
- Must not change existing API
- Must maintain backward compatibility
- Must not impact performance

## Dependencies
- [Any related tickets or fixes]

## Notes
[Additional context about the bug or fix approach]
```

## Ticket Review Process

### Self-Review Checklist
Before submitting a ticket:
- [ ] Title is clear and descriptive
- [ ] Objective explains the "why" not just the "what"
- [ ] All acceptance criteria are specific and testable
- [ ] Examples cover both success and failure cases
- [ ] Restrictions are clearly defined
- [ ] Dependencies are identified and linked
- [ ] File is in correct location (`/tickets/backlog/`)
- [ ] Naming convention is followed

### Peer Review Guidelines
When reviewing tickets:
- **Clarity**: Is the objective clear?
- **Completeness**: Are all requirements covered?
- **Testability**: Can each criterion be verified?
- **Feasibility**: Is the ticket realistic?
- **Scope**: Is the ticket appropriately sized?

## Ticket Metrics and Tracking

### Key Metrics
- **Completion Rate**: Tickets completed vs. created
- **Cycle Time**: Time from backlog to completed
- **Defect Rate**: Bugs found after ticket completion
- **Dependency Blocking**: Time tickets wait for dependencies

### Tracking Methods
- **Daily Standups**: Review in-progress tickets
- **Sprint Reviews**: Analyze completed tickets
- **Retrospectives**: Improve ticket quality
- **Metrics Dashboard**: Track ticket flow and quality

## Integration with CADD Methodology

### Workflow Integration
1. **Project Planning**: Create epic tickets for major features
2. **Sprint Planning**: Move tickets from backlog to in-progress
3. **Daily Work**: Focus on in-progress tickets
4. **Sprint Review**: Move completed tickets and analyze metrics
5. **Retrospective**: Improve ticket quality and process

### Tool Integration
- **START.md**: References ticket creation process
- **PROJECT_PLAN.md**: Links to major epic tickets
- **PREFERENCES.md**: User preferences for ticket style
- **Git Integration**: Branch naming and commit messages

### Quality Assurance
- **Template Compliance**: All tickets follow TKDD template
- **Acceptance Criteria**: All criteria are testable
- **Documentation**: Tickets are properly documented
- **Organization**: Tickets are in correct folders

---

**Remember**: Good tickets are the foundation of successful development. Take time to write clear, complete, and actionable tickets that any developer (human or AI) can understand and execute. 