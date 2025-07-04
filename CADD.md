# CADD - Context-Assisted Development Driven

> **🚀 Metodología para vibe coding productivo con IA**

## Inicio Rápido

### Para Agentes de IA:
```
Lee el archivo .CADD/START.md
```

### Para Usuarios:
1. **Copia** la carpeta `.CADD/` a tu proyecto
2. **Personaliza** `.CADD/PREFERENCES.md` con tus datos
3. **Inicia** cualquier conversación con: `Lee el archivo .CADD/START.md`

## Sistema de Archivos

```
.CADD/
├── START.md              # 🎯 Punto de partida universal
├── PREFERENCES.md        # 🤖 Tus preferencias personales
├── PROJECT_PLAN.md       # 📋 Plan específico del proyecto
├── TKDD_METHODOLOGY.md   # 🎫 Metodología para tickets
└── USER_GUIDE.md         # 📖 Guía completa
```

## Flujo de Trabajo

```mermaid
flowchart TD
    A[Agente lee START.md] --> B[Agente lee PREFERENCES.md]
    B --> C{¿Qué quieres hacer?}
    C -->|A| D[Crear proyecto nuevo]
    C -->|B| E[Continuar fase actual]
    C -->|C| F[Avanzar a siguiente fase]
    C -->|D| G[Planificar nueva versión]
    C -->|E| H[Actualizar preferencias]
    
    D --> I[Revisar PROJECT_PLAN.md]
    E --> I
    F --> I
    G --> I
    
    I --> J[Ejecutar plan usando TKDD]
    J --> K[Actualizar PROJECT_PLAN.md]
    K --> L[Continuar desarrollo]
```

## Beneficios

- **🎯 Contexto estructurado** - Sin ambigüedades
- **🔄 Reutilizable** - Una vez configurado, funciona en cualquier proyecto
- **📈 Escalable** - Desde principiante hasta experto
- **🤖 AI-optimizado** - Diseñado específicamente para agentes de IA
- **⚡ Productivo** - Menos tiempo explicando, más tiempo programando

## Versiones

- **v1.0.0** - Metodología completa en inglés optimizada para LLMs
- Archivos técnicos en inglés para mejor comprensión de agentes
- Preferencias de usuario en idioma elegido
- Reglas mejoradas para gestión de recordatorios

---

**¿Listo para empezar?** → [Lee la guía completa](.CADD/USER_GUIDE.md)
