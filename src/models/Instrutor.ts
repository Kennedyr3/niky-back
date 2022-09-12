import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("Instrutor")
class Instrutor {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  rg: string;

  @Column()
  nome: string;
  
  @Column()
  nascimento: Date;

  @Column()
  titulacao: string;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Instrutor }