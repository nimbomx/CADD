# PROJECT PLAN - Nimbo Pro

> **Instructions for User:** Complete sections according to your project. If you don't know what to put, leave it empty and the agent will help you.

> **Instructions for Agent:** If you find empty sections, ask specific questions to complete them. Keep this file updated.

---

## 📋 Basic Information

### Project Name
**Nimbo Pro** - Portal de Transformación Digital con AI

### Project Type
- [x] Web Application
- [x] API/Backend
- [ ] Mobile App
- [ ] Desktop App
- [ ] E-commerce
- [x] SaaS
- [ ] Landing Page
- [ ] Other: ___________

### Main Objective
Nimbo Pro es un portal web dedicado a la transformación digital con énfasis en AI Transformation. La plataforma ofrece contenido gratuito y servicios premium para dos audiencias principales: programadores que desean aprender las metodologías de Nimbo, y empresas (especialmente PYMES) que necesitan acompañamiento en transformación digital con enfoque AI-first.

---

## 👥 Users and Audience

### Target Audience
1. **Programadores**: Desarrolladores que quieren aprender metodologías de transformación digital y AI
2. **Empresas/PYMES**: Pequeñas y medianas empresas que necesitan acompañamiento en transformación digital

### Main Use Cases
1. **Programadores**: Acceso a metodologías, tutoriales, recursos técnicos y comunidad
2. **Empresas**: Consultoría, herramientas de evaluación, planes de transformación digital
3. **Administradores**: Gestión de contenido, usuarios y análisis de métricas

---

## 🎯 Features

### Main Features (MVP)
> Essential functionalities for initial launch

- [ ] **Sistema de Autenticación Multi-proveedor**: Email/Password, Google, GitHub, LinkedIn, Facebook
- [ ] **Portal de Contenido Gratuito**: Artículos, casos de estudio, recursos básicos
- [ ] **Área de Usuario Registrado**: Dashboard personalizado por tipo de usuario
- [ ] **Sistema de Pagos Híbrido**: Stripe (internacional) + Conekta (México)
- [ ] **CMS Integrado**: Para administradores, gestión de contenido
- [ ] **Perfiles de Usuario**: Diferenciación entre Programadores y Empresas

### Secondary Features (V2)
> Important but not critical functionalities for MVP

- [ ] **Cursos/Tutoriales Interactivos**: Contenido educativo estructurado
- [ ] **Sistema de Consultorías**: Booking y gestión de sesiones
- [ ] **Herramientas de Evaluación**: Assessment de madurez digital
- [ ] **Comunidad/Forum**: Interacción entre usuarios
- [ ] **Certificaciones**: Sistema de badges y certificados

### Future Features (V3+)
> Ideas for later versions

- [ ] **Marketplace de Herramientas**: Integración con tools de AI
- [ ] **Sistema de Partnering**: Red de colaboradores
- [ ] **Analytics Avanzados**: Métricas detalladas de transformación

---

## 🛠️ Technologies and Restrictions

### Preferred Technology Stack
- **Frontend**: Next.js
- **Backend**: NestJS
- **Database**: MongoDB
- **Deployment**: Dokploy
- **Package Manager**: pnpm

### Technical Restrictions
- [x] Must work on mobile
- [x] Must be accessible (WCAG)
- [ ] Must support multiple languages
- [ ] Must work offline
- [ ] Others: ___________

### Required Integrations
- [x] Authentication (Google, GitHub, LinkedIn, Facebook + extensible)
- [x] Payments (Stripe + Conekta)
- [ ] Email (SendGrid, Mailchimp, etc.)
- [ ] Analytics (Google Analytics, etc.)
- [ ] Others: ___________

---

## 📅 Timeline and Phases

### Phase 1: Core Infrastructure (4 semanas)
**Estimated duration**: 4 weeks

- [ ] Set up Next.js + NestJS project structure
- [ ] Configure MongoDB database
- [ ] Implement multi-provider authentication system
- [ ] Create basic user roles and permissions
- [ ] Set up development environment

### Phase 2: User Management & Content (3 semanas)
**Estimated duration**: 3 weeks

- [ ] Implement user profiles (Programadores vs Empresas)
- [ ] Create CMS for admin content management
- [ ] Develop content display system
- [ ] Basic dashboard for users
- [ ] User registration flow

### Phase 3: Payment System (2 semanas)
**Estimated duration**: 2 weeks

- [ ] Integrate Stripe for international payments
- [ ] Integrate Conekta for Mexico payments
- [ ] Create subscription/payment plans
- [ ] Payment webhook handling
- [ ] Payment history and invoicing

### Phase 4: Advanced Features & Polish (3 semanas)
**Estimated duration**: 3 weeks

- [ ] Advanced user dashboards
- [ ] Content categorization and search
- [ ] Email notification system
- [ ] Analytics implementation
- [ ] Performance optimization and testing

---

## 🎨 Design and UX

### Visual Style
- **Colors**: Corporate, tech-focused palette
- **Typography**: Modern, professional fonts
- **Style**: Clean, modern, business-oriented

### Design References
- Professional SaaS platforms
- Educational tech portals
- Corporate consulting websites

### Wireframes/Mockups
- [ ] Landing page
- [ ] Login/register page
- [ ] User dashboard (Programadores)
- [ ] User dashboard (Empresas)
- [ ] Admin CMS interface
- [ ] Payment/subscription pages

---

## 📊 Metrics and Objectives

### Main KPIs
- **User Registration**: 500 users in first 3 months
- **Conversion Rate**: 15% free to paid conversion
- **Content Engagement**: 70% monthly active users

### Success Criteria
- [ ] Stable multi-provider authentication
- [ ] Seamless payment processing (Stripe + Conekta)
- [ ] Efficient content management for admins
- [ ] Responsive design across devices

---

## 🔄 Current Project Status

### Current Version
**v0.1.0** - Initial Planning

### Completed
- [ ] Project planning and requirements gathering
- [ ] Technology stack selection
- [ ] Architecture design

### In Progress
- [ ] Initial project setup

### Next Steps
- [ ] Setup development environment
- [ ] Create project structure
- [ ] Implement authentication system

### Development Notes
- Usar pnpm como package manager
- Enfoque en código mantenible y clara arquitectura
- Implementar testing desde el inicio
- Documentación detallada para cada fase

---

## 🚀 Deployment and Production

### Development Environment
- **URL**: localhost:3000 (Frontend) + localhost:4000 (Backend)
- **Command**: `pnpm dev`

### Staging Environment
- **URL**: https://staging.nimbro-pro.com
- **Deployment**: Dokploy staging environment

### Production Environment
- **URL**: https://nimbro-pro.com
- **Deployment**: Dokploy production

### Variable Configuration
```
# Database
DATABASE_URL=mongodb://localhost:27017/nimbropro

# Authentication
AUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
LINKEDIN_CLIENT_ID=
LINKEDIN_CLIENT_SECRET=
FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=

# Payments
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
CONEKTA_SECRET_KEY=
CONEKTA_WEBHOOK_SECRET=

# Email
EMAIL_SERVICE_API_KEY=
```

---

## 📚 Resources and Documentation

### Technical Documentation
- [Link to API documentation]
- [Link to development guide]
- [Link to system architecture]

### Useful Resources
- [Link to design resources]
- [Link to library documentation]
- [Link to relevant tutorials]

---

**Last updated**: [Date]
**Updated by**: [Name/Agent] 