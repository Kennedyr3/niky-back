import { Instrutor } from "../models/Instrutor";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Instrutor)
class InstrutorRepository extends Repository<Instrutor>{

}
export { InstrutorRepository }