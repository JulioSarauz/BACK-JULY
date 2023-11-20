import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { personaController } from './controller/persona.controller';
import { personaEntity } from './entity/persona.entity';
import { personaService } from './service/persona.service';

@Module({
  imports: [TypeOrmModule.forFeature([personaEntity])],
  controllers: [personaController],
  providers: [personaService],
  exports:[personaService]
})
export class personaModule {}
