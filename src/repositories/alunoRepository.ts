import { Aluno } from "../models/aluno";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Aluno)
class AlunoRepository extends Repository<Aluno>{

}
export { AlunoRepository }