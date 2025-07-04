import mongoose from 'mongoose';
import { UserSchema } from '../users/schemas/user.schema';
import { ContentSchema } from '../content/schemas/content.schema';

const User = mongoose.model('User', UserSchema);
const Content = mongoose.model('Content', ContentSchema);

async function seed() {
  try {
    // Conectar a MongoDB
    await mongoose.connect('mongodb://localhost:27017/nimbropro');
    console.log('✅ Conectado a MongoDB para seed');

    // Limpiar datos existentes
    await User.deleteMany({});
    await Content.deleteMany({});
    console.log('🧹 Datos existentes eliminados');

    // Crear usuarios de prueba
    const programmer = await User.create({
      email: 'developer@example.com',
      firstName: 'Juan',
      lastName: 'Pérez',
      userType: 'programmer',
      emailVerified: true,
      programmerInfo: {
        skills: ['JavaScript', 'TypeScript', 'React', 'Node.js'],
        experience: '3-5 años',
        github: 'https://github.com/juanperez',
        portfolio: 'https://juanperez.dev',
      },
    });

    const company = await User.create({
      email: 'admin@techcorp.com',
      firstName: 'María',
      lastName: 'González',
      userType: 'company',
      emailVerified: true,
      companyInfo: {
        companyName: 'TechCorp Solutions',
        industry: 'Tecnología',
        size: '50-100 empleados',
        website: 'https://techcorp.com',
      },
    });

    console.log('👥 Usuarios creados exitosamente');

    // Crear contenido de prueba
    const article = await Content.create({
      title: 'Introducción a la Programación con AI',
      slug: 'introduccion-programacion-ai',
      content:
        'Este artículo explora las bases de la programación asistida por inteligencia artificial...',
      excerpt:
        'Aprende los fundamentos de la programación moderna con herramientas de AI',
      type: 'article',
      status: 'published',
      isPremium: false,
      targetAudience: 'programmer',
      tags: ['AI', 'programación', 'tecnología'],
      author: programmer._id,
      readingTime: 5,
      publishedAt: new Date(),
    });

    const caseStudy = await Content.create({
      title: 'Transformación Digital: Caso de Éxito TechCorp',
      slug: 'transformacion-digital-techcorp',
      content:
        'En este caso de estudio analizamos cómo TechCorp logró transformar sus procesos...',
      excerpt:
        'Descubre cómo una empresa logró duplicar su productividad con tecnología',
      type: 'case-study',
      status: 'published',
      isPremium: true,
      targetAudience: 'company',
      tags: ['transformación digital', 'casos de éxito', 'empresas'],
      author: company._id,
      readingTime: 8,
      publishedAt: new Date(),
    });

    console.log('📄 Contenido creado exitosamente');
    console.log('🎉 Seed completado exitosamente');

    // Mostrar estadísticas
    const userCount = await User.countDocuments();
    const contentCount = await Content.countDocuments();
    console.log(`📊 Usuarios: ${userCount}, Contenido: ${contentCount}`);

    await mongoose.connection.close();
    console.log('🔐 Conexión cerrada');
  } catch (error) {
    console.error('❌ Error en seed:', error);
    process.exit(1);
  }
}

// Ejecutar seed si es llamado directamente
if (require.main === module) {
  seed();
}

export default seed;
