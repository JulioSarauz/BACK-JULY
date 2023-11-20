import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { PUERTO } from './envirmonet/dev';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const puerto = PUERTO;
  app.enableCors();
  await app.listen(puerto);
  Logger.verbose(`Escuchando Puerto ====> ${puerto}`);
}
bootstrap();
