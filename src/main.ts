import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MainModule, { cors: true });
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.APP_PORT || 3000);
}
bootstrap();
