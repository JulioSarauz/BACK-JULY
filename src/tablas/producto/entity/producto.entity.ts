// user.entity.ts
import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class productoEntity {
  @ObjectIdColumn()
  _id: ObjectId;
  @Column()
  nombre:string;
  @Column()
  inventario: number;
  @Column()
  imagen:string
  @Column()
  estado:number
  @Column()
  fecha:string
  @Column()
  precio:string
}
