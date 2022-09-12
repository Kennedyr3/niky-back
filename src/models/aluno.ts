import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("Aluno")
class Aluno {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  endereco: string;
  
  @Column()
  telefone: number;

  @Column()
  dataNascimento: Date;

  @Column()
  altura: number;

  @Column()
  peso: number;

  @Column()
  turma_id: number;

  @Column()
  matricula_id: number;
  
  @Column()
  created_at: Date;
  
  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Aluno }