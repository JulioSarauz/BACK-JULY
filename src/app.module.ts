import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MODULOS } from './common/constantes/modulos';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ENTITIES } from './common/constantes/entities';
import { ConexionMongo } from './envirmonet/dev';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: ConexionMongo,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      entities: [...ENTITIES],
    }),
    ...MODULOS
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
