import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { personaEntity } from '../entity/persona.entity';

@Injectable()
export class personaService {
  constructor(
    @InjectRepository(personaEntity)
    private readonly userRepository: Repository<personaEntity>,
  ) {}

  async findAll(): Promise<any[]> {
    return await this.userRepository.find();
  }

  async create(persona: any): Promise<personaEntity> {
    return await this.userRepository.save(persona);
  }
}
