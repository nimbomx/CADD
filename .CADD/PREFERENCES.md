# USER PREFERENCES

> **For User:** Fill out your personal preferences. Leave empty what you don't want to specify.

> **For Agent:** Apply these preferences consistently throughout the conversation. If empty, use neutral defaults.

---

## Personal Information

### Nombre
**Ernesto** - Cómo prefieres que te llamen

### Estilo de Comunicación
- **Respuestas breves** - Estilo de respuesta preferido
- **Formal** - Nivel de formalidad
- **Directo y conciso** - Instrucciones adicionales sobre comunicación

---

## Technical Preferences

### Herramientas Obligatorias
- **pnpm** - Gestor de paquetes
- **Español** - Idioma de comunicación
- **Cursor** - Editor/IDE preferido

### Tecnologías Preferidas
- **Frontend**: Next.js, Astro
- **Backend**: NestJS
- **Base de datos**: MongoDB
- **Deployment**: Dokploy

### Restricciones Técnicas
- Ninguna - Abierto a cualquier tecnología
- Sin patrones específicos a evitar
- Sin limitaciones específicas del entorno

---

## Code Style

### Formato de Tickets
- **TKDD** - Usar siempre formato Ticket-Driven Development
- **Detallado** - Nivel de detalle en tickets
- **Incluir casos específicos** - Siempre proporcionar ejemplos

### Estructura de Proyectos
- **Incremental** - Preferencia de desarrollo por fases
- **Documentación detallada** - Nivel de documentación deseado
- **Organización clara** - Estándares de carpetas y archivos

### Estilo de Código
- **Estándar del lenguaje** - Prettier, ESLint según tecnología
- **Convenciones claras** - Naming conventions consistentes
- **Arquitectura limpia** - Patrones arquitectónicos mantenibles

---

## Workflow Preferences

### Prioridades
1. **Mantenibilidad** - Código fácil de mantener y modificar
2. **Claridad** - Código claro y comprensible
3. **Simplicidad** - Soluciones simples y elegantes

### Enfoques Preferidos
- **Calidad sobre Velocidad** - Priorizando código bien estructurado
- **Estabilidad e Innovación** - Balance entre ambos enfoques
- **Simplicidad con Funcionalidad** - Soluciones simples pero completas

### Evitar
- **Complejidad innecesaria** - Soluciones over-engineered
- **Código difícil de leer** - Patrones confusos
- **Duplicación de código** - Mantener principio DRY

---

## Restrictions and Limitations

### Contexto Personal
- **Avanzado** - Nivel técnico
- **Amplia experiencia** - Conocimiento profundo de tecnologías
- **Mejores prácticas** - Enfoque en calidad y estándares

### Restricciones del Proyecto
- **Desarrollo incremental** - Construcción por fases
- **Sin restricciones de recursos** - Flexibilidad en herramientas
- **Trabajo independiente** - Capacidad de decisión técnica

### Configuraciones Específicas
- **Cursor IDE** - Entorno de desarrollo preferido
- **Workflow incremental** - Procesos de trabajo por iteraciones
- **Stack moderno** - Herramientas actualizadas y eficientes

---

## Additional Notes

### 2024-12-19 - Configuración inicial
- **Nombre**: Ernesto
- **Estilo**: Formal, breve, directo
- **Herramientas**: pnpm, Cursor, Español
- **Stack**: Next.js/Astro, NestJS, MongoDB, Dokploy
- **Prioridades**: Mantenibilidad, claridad, simplicidad

---

**Última actualización**: 2024-12-19
**Versión**: 1.0

---

> **Para el agente**: Este archivo es tu guía sobre cómo interactuar con el usuario. Léelo SIEMPRE al inicio de cada conversación y aplica estas preferencias consistentemente.

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
