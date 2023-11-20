import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { carritoEntity } from './entity/carrito.entity';
import { carritoController } from './controller/carrito.controller';
import { carritoService } from './service/carrito.service';

@Module({
  imports: [TypeOrmModule.forFeature([carritoEntity])],
  controllers: [carritoController],
  providers: [carritoService],
  exports:[carritoService]
})
export class carritoModule {}
