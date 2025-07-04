# TKDD-001: Configuración Inicial del Proyecto Nimbo Pro

## 🎯 Objetivo
Establecer la estructura base del proyecto Nimbo Pro con Next.js (frontend) y NestJS (backend), incluyendo configuración de herramientas de desarrollo, base de datos MongoDB y configuración inicial del entorno.

## 📋 Descripción
Crear la arquitectura foundation del portal de transformación digital Nimbo Pro, estableciendo:
- Estructura de monorepo con Next.js y NestJS
- Configuración de MongoDB
- Setup de herramientas de desarrollo (ESLint, Prettier, TypeScript)
- Configuración de variables de entorno
- Documentación inicial del proyecto

## 🔧 Tareas Técnicas

### Frontend (Next.js)
- [ ] Inicializar proyecto Next.js con TypeScript
- [ ] Configurar Tailwind CSS para estilos
- [ ] Setup de ESLint y Prettier
- [ ] Configurar estructura de carpetas:
  ```
  /frontend
    /src
      /app
      /components
      /lib
      /hooks
      /types
      /utils
    /public
    /styles
  ```
- [ ] Configurar archivo de configuración Next.js
- [ ] Setup de variables de entorno (.env.local)

### Backend (NestJS)
- [ ] Inicializar proyecto NestJS con TypeScript
- [ ] Configurar estructura de módulos:
  ```
  /backend
    /src
      /auth
      /users
      /content
      /payments
      /common
      /config
    /test
  ```
- [ ] Configurar conexión a MongoDB con Mongoose
- [ ] Setup de validación con class-validator
- [ ] Configurar CORS para comunicación con frontend
- [ ] Setup de variables de entorno (.env)

### Base de Datos
- [ ] Instalar y configurar MongoDB local
- [ ] Crear esquemas iniciales para Users y Content
- [ ] Configurar string de conexión
- [ ] Setup de migraciones básicas

### DevOps y Tooling
- [ ] Configurar package.json para monorepo
- [ ] Setup de scripts de desarrollo
- [ ] Configurar VSCode settings para el proyecto
- [ ] Crear .gitignore apropiado
- [ ] Setup de commitizen para commits consistentes

## 📝 Criterios de Aceptación

### ✅ Funcionales
- [ ] **F1**: El proyecto Next.js inicia correctamente en `localhost:3000`
- [ ] **F2**: El servidor NestJS inicia correctamente en `localhost:4000`
- [ ] **F3**: La conexión a MongoDB se establece sin errores
- [ ] **F4**: Los endpoints básicos de salud responden correctamente
- [ ] **F5**: Las herramientas de linting y formateo funcionan correctamente

### ✅ Técnicos
- [ ] **T1**: TypeScript configurado con strict mode en ambos proyectos
- [ ] **T2**: ESLint y Prettier configurados con reglas consistentes
- [ ] **T3**: Variables de entorno definidas y documentadas
- [ ] **T4**: Estructura de carpetas sigue las mejores prácticas
- [ ] **T5**: Documentación README actualizada con instrucciones de setup

### ✅ de Usuario
- [ ] **U1**: Desarrollador puede clonar el repo y levantar el proyecto en < 5 minutos
- [ ] **U2**: Comandos `pnpm dev` funciona para ambos proyectos
- [ ] **U3**: Hot reload funciona correctamente en desarrollo

## 🧪 Casos de Prueba

### Caso 1: Inicialización del Proyecto
```bash
# Dado que tengo el código fuente
# Cuando ejecuto los comandos de instalación
pnpm install
pnpm dev

# Entonces
# ✅ Frontend disponible en localhost:3000
# ✅ Backend disponible en localhost:4000
# ✅ MongoDB conectado correctamente
```

### Caso 2: Endpoint de Salud
```bash
# Dado que el servidor está corriendo
# Cuando hago request a /health
curl http://localhost:4000/health

# Entonces
# ✅ Responde con status 200
# ✅ Retorna JSON con información del sistema
# ✅ Confirma conexión a base de datos
```

### Caso 3: Hot Reload
```bash
# Dado que el servidor de desarrollo está corriendo
# Cuando modifico un archivo TypeScript
# Entonces
# ✅ Los cambios se reflejan automáticamente
# ✅ No hay errores de compilación
# ✅ El navegador se actualiza automáticamente
```

## 🏗️ Arquitectura

### Stack Tecnológico
- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Backend**: NestJS + TypeScript + MongoDB
- **Database**: MongoDB 7.0
- **Package Manager**: pnpm
- **Linting**: ESLint + Prettier

### Estructura de Puertos
- Frontend: `localhost:3000`
- Backend: `localhost:4000`
- MongoDB: `localhost:27017`

## 📚 Documentación
- [ ] README.md con instrucciones de instalación
- [ ] Documentación de API inicial
- [ ] Guía de contribución
- [ ] Configuración de entorno de desarrollo

## 🔗 Dependencias
- **Ninguna**: Este es el ticket inicial

## 🎯 Estimación
**Tiempo estimado**: 8 horas
**Prioridad**: Alta
**Complejidad**: Media

## 📈 Métricas de Éxito
- Tiempo de setup inicial < 5 minutos
- 0 errores en la inicialización
- 100% de endpoints de salud funcionando
- Cobertura de documentación básica completa

---

**Asignado**: Ernesto  
**Fecha creación**: 2024-12-19  
**Estado**: Pendiente  
**Milestone**: Phase 1 - Core Infrastructure 