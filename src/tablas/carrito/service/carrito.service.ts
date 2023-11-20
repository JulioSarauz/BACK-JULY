import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { carritoEntity } from '../entity/carrito.entity';

@Injectable()
export class carritoService {
  constructor(
    @InjectRepository(carritoEntity)
    private readonly carritoRepository: Repository<carritoEntity>,
  ) {}

  async findAll() {
    return await this.carritoRepository.find();
  }

  async create(producto: any): Promise<any> {
    return await this.carritoRepository.save(producto);
  }

  async obtener():Promise<any>{
    return await this.carritoRepository.findAndCount();
  }

  async buscar(data:any):Promise<any>{
    return await this.carritoRepository.findOne({
       where: { _id: new ObjectId(data._id) }
    });
  }
  
  async actualizar(_id:any, data:any):Promise<any>{
    return await this.carritoRepository.update(_id,data.campos);
  }

  async buscarPersona(data:any){
    return await this.carritoRepository.findAndCount({
      where: { productos: data.productos }
   });
  }

  async buscarProducto(data:any){
    return await this.carritoRepository.findAndCount({
      where: { personas: data.personas }
   });
  }

}
