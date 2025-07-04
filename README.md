# Nimbo Pro - Portal de Transformación Digital con AI

Portal web dedicado a la transformación digital con énfasis en AI Transformation. La plataforma ofrece contenido gratuito y servicios premium para programadores y empresas (PYMES) que buscan acompañamiento en transformación digital con enfoque AI-first.

## 🚀 Características Principales

### MVP (Versión 1.0)
- **🔐 Sistema de Autenticación Multi-proveedor**: Email/Password, Google, GitHub, LinkedIn, Facebook
- **📚 Portal de Contenido Gratuito**: Artículos, casos de estudio, recursos básicos
- **👥 Área de Usuario Registrado**: Dashboard personalizado por tipo de usuario
- **💳 Sistema de Pagos Híbrido**: Stripe (internacional) + Conekta (México)
- **⚙️ CMS Integrado**: Para administradores, gestión de contenido
- **📊 Perfiles de Usuario**: Diferenciación entre Programadores y Empresas

### Características Avanzadas (V2+)
- **🎓 Cursos/Tutoriales Interactivos**: Contenido educativo estructurado
- **💬 Sistema de Consultorías**: Booking y gestión de sesiones
- **📈 Herramientas de Evaluación**: Assessment de madurez digital
- **🌐 Comunidad/Forum**: Interacción entre usuarios
- **🏆 Certificaciones**: Sistema de badges y certificados

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS utility-first
- **React Hook Form** - Gestión de formularios
- **Zustand** - Gestión de estado global

### Backend
- **NestJS** - Framework Node.js enterprise
- **TypeScript** - Tipado estático
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **Passport.js** - Autenticación multi-proveedor
- **Stripe + Conekta** - Procesamiento de pagos

### DevOps & Tools
- **pnpm** - Gestor de paquetes
- **ESLint + Prettier** - Linting y formateo
- **Dokploy** - Deployment
- **MongoDB** - Base de datos
- **Git** - Control de versiones

## 📁 Estructura del Proyecto

```
nimbo-pro/
├── frontend/                 # Aplicación Next.js
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   │   ├── components/      # Componentes reutilizables
│   │   │   ├── lib/             # Utilidades y configuraciones
│   │   │   ├── hooks/           # Custom React hooks
│   │   │   ├── types/           # Definiciones TypeScript
│   │   │   └── utils/           # Funciones utilitarias
│   │   ├── public/              # Assets estáticos
│   │   └── styles/              # Estilos globales
│   ├── backend/                 # API NestJS
│   │   ├── src/
│   │   │   ├── auth/            # Módulo de autenticación
│   │   │   ├── users/           # Gestión de usuarios
│   │   │   ├── content/         # Gestión de contenido
│   │   │   ├── payments/        # Procesamiento de pagos
│   │   │   ├── common/          # Recursos compartidos
│   │   │   └── config/          # Configuraciones
│   │   └── test/                # Tests unitarios e integración
│   ├── .CADD/                   # Documentación metodología CADD
│   ├── docs/                    # Documentación del proyecto
│   └── scripts/                 # Scripts de automatización
```

## 🚦 Instalación y Configuración

### Prerrequisitos
- Node.js 18.0 o superior
- pnpm 8.0 o superior
- MongoDB 7.0 o superior

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/nimbo-pro.git
   cd nimbo-pro
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno**
   ```bash
   # Backend (.env)
   cp backend/.env.example backend/.env
   
   # Frontend (.env.local)
   cp frontend/.env.local.example frontend/.env.local
   ```

4. **Configurar MongoDB**
   ```bash
   # Iniciar MongoDB localmente
   mongod --dbpath ./data/db
   ```

5. **Ejecutar en modo desarrollo**
   ```bash
   # Ambos servicios
   pnpm dev
   
   # Solo frontend
   pnpm dev:frontend
   
   # Solo backend
   pnpm dev:backend
   ```

### URLs de Desarrollo
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:4000
- **MongoDB**: mongodb://localhost:27017

## 🧪 Testing

```bash
# Ejecutar todos los tests
pnpm test

# Tests con coverage
pnpm test:coverage

# Tests en modo watch
pnpm test:watch

# E2E tests
pnpm test:e2e
```

## 🚀 Deployment

### Staging
```bash
pnpm deploy:staging
```

### Production
```bash
pnpm deploy:production
```

### Variables de Entorno Requeridas

```env
# Base de datos
DATABASE_URL=mongodb://localhost:27017/nimbropro

# Autenticación
AUTH_SECRET=your-secret-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
LINKEDIN_CLIENT_ID=your-linkedin-client-id
LINKEDIN_CLIENT_SECRET=your-linkedin-client-secret
FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret

# Pagos
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
CONEKTA_SECRET_KEY=your-conekta-secret-key
CONEKTA_WEBHOOK_SECRET=your-conekta-webhook-secret

# Email
EMAIL_SERVICE_API_KEY=your-email-service-key
```

## 👥 Usuarios Objetivo

### Programadores
- Desarrolladores que buscan aprender metodologías de transformación digital
- Profesionales interesados en AI-first development
- Comunidad tech enfocada en innovación

### Empresas (PYMES)
- Pequeñas y medianas empresas
- Necesidad de transformación digital
- Búsqueda de acompañamiento especializado en AI

## 🗺️ Roadmap

### Phase 1: Core Infrastructure (4 semanas)
- [x] Configuración inicial del proyecto
- [ ] Sistema de autenticación multi-proveedor
- [ ] Gestión básica de usuarios
- [ ] Conexión a base de datos

### Phase 2: User Management & Content (3 semanas)
- [ ] Perfiles de usuario diferenciados
- [ ] CMS para gestión de contenido
- [ ] Sistema de contenido gratuito
- [ ] Dashboards básicos

### Phase 3: Payment System (2 semanas)
- [ ] Integración con Stripe
- [ ] Integración con Conekta
- [ ] Planes de suscripción
- [ ] Gestión de pagos

### Phase 4: Advanced Features (3 semanas)
- [ ] Funcionalidades avanzadas
- [ ] Optimización de rendimiento
- [ ] Analytics y métricas
- [ ] Testing exhaustivo

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama de feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

### Estándares de Código
- Usar TypeScript en modo strict
- Seguir convenciones de ESLint/Prettier
- Escribir tests para nuevas funcionalidades
- Documentar APIs y componentes importantes

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

**Nimbo Pro Team**
- Email: info@nimbro-pro.com
- Website: https://nimbro-pro.com

---

⚡ **Construido con Next.js, NestJS y MongoDB**  
🚀 **Desplegado con Dokploy**  
💙 **Hecho con amor para la transformación digital** 