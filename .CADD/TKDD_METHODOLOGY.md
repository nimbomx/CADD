# Ticket-Driven Development (TKDD)

## Definition
Methodology for creating clear and executable development tickets, optimized for AI work and technical teams.

## Ticket Structure

```markdown
## Objective
[Clear and concise description of expected result in 1-2 lines]

## Specific Criteria
- [ ] Criterion 1: Must do X when Y
- [ ] Criterion 2: Validate that Z works
- [ ] Criterion 3: Error handling for case W

## Examples/Cases
- Input: [data] → Output: [expected result]
- Scenario: [situation] → Behavior: [action]
- Error: [condition] → Message: [response]

## Restrictions
- Use technology/framework X
- Do not modify file Y
- Maintain compatibility with Z
- Follow pattern/style W
```

## Principles

### 1. Clear Objectives
- Single responsibility per ticket
- Measurable and verifiable result
- Precise language, no ambiguity

### 2. Verifiable Criteria
- Checkbox format for tracking
- Each criterion must be testable
- Separate functionality from implementation

### 3. Concrete Examples
- Specific inputs and outputs
- Important edge cases
- Error scenarios

### 4. Explicit Restrictions
- Technologies to use/avoid
- Files that should not be touched
- Code standards
- Existing dependencies

## Complete Example

```markdown
## Objective
Create a reusable Button component with multiple variants and states

## Specific Criteria
- [ ] Implement variants: primary, secondary, danger
- [ ] Support states: default, hover, disabled, loading
- [ ] Allow icons before/after text
- [ ] Be accessible (ARIA labels, keyboard navigation)
- [ ] Include unit tests

## Examples/Cases
- Input: `<Button variant="primary">Save</Button>` → Output: blue button with "Save" text
- Scenario: disabled={true} → Behavior: not clickable, opacity 0.5
- Error: invalid variant → Message: fallback to variant="primary"

## Restrictions
- Use styled-components for CSS
- Do not use new external libraries
- Maintain compatibility with existing theme
- Follow design system naming convention
```

## Advantages

1. **Clarity**: Predictable and easy-to-follow structure
2. **Verifiability**: Checkable criteria
3. **Completeness**: Covers normal and edge cases
4. **Flexibility**: Adaptable to different types of tasks
5. **AI-friendly**: Format that agents can interpret without ambiguity

## When to Use TKDD

✅ **Use for:**
- Component/feature development
- Complex refactoring
- Multi-step debugging
- API integration
- Tool configuration

❌ **Don't use for:**
- Trivial tasks (1-2 lines)
- Exploratory coding
- Conceptual questions
- Simple documentation tasks

## Guide for AI Agents

### When receiving a TKDD ticket:
1. **Read completely** before starting
2. **Confirm understanding** of objective
3. **Follow order**: Objective → Criteria → Examples → Restrictions
4. **Validate each criterion** before marking as complete
5. **Use examples** as test cases
6. **Respect restrictions** without exception

### When writing code:
1. Implement to fulfill **all** criteria
2. Use examples as **test cases**
3. Consider **edge cases** mentioned
4. Apply **restrictions** from the start
5. **Verify** each checkbox before finalizing

### When finishing:
1. Confirm that **all** criteria are met
2. Test with the **examples** provided
3. Document any **deviation** from criteria
4. Suggest **improvements** or **additional cases** if relevant 