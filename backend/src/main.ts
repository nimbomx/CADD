import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS para comunicación con frontend
  app.enableCors({
    origin: process.env.NODE_ENV === 'production' 
      ? ['https://nimbro-pro.com', 'https://staging.nimbro-pro.com']
      : ['http://localhost:3000'],
    credentials: true,
  });

  // Habilitar validación global
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  // Configurar puerto
  const port = process.env.PORT || 4000;
  await app.listen(port);
  
  console.log(`🚀 Nimbo Pro Backend running on port ${port}`);
}

bootstrap();
