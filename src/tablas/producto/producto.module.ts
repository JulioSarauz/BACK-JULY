import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productoEntity } from './entity/producto.entity';
import { productoController } from './controller/producto.controller';
import { productoService } from './service/producto.service';

@Module({
  imports: [TypeOrmModule.forFeature([productoEntity])],
  controllers: [productoController],
  providers: [productoService],
  exports:[productoService]
})
export class productoModule {}
