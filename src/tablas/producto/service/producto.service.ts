import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { productoEntity } from '../entity/producto.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class productoService {
  constructor(
    @InjectRepository(productoEntity)
    private readonly productoRepository: Repository<productoEntity>,
  ) {}

  async findAll() {
    return await this.productoRepository.find();
  }

  async create(producto: any): Promise<any> {
    return await this.productoRepository.save(producto);
  }

  async obtener():Promise<any>{
    return await this.productoRepository.findAndCount();
  }

  async buscar(data:any):Promise<any>{
    return await this.productoRepository.findOne({
       where: { _id: new ObjectId(data._id) }
    });
  }


  async actualizar(_id:any, data:any):Promise<any>{
    return await this.productoRepository.update(_id,data.campos);
  }
}
