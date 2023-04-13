import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { LOCAL_HOST, PORT } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: LOCAL_HOST,
    },
  });
  app.setGlobalPrefix('api');
  await app.listen(PORT);
}
bootstrap();
