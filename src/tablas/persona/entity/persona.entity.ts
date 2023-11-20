// user.entity.ts
import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class personaEntity {
  @ObjectIdColumn()
  idPersona: ObjectId;

  @Column()
  nombre: string;
}
