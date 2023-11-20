// user.entity.ts
import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class carritoEntity {
  @ObjectIdColumn()
  _id: ObjectId;
  @Column()
  productos:string;
  @Column()
  personas: string;
}
