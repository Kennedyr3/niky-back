import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
// import { InstrutorRepository } from "../repositories/InstrutorRepository";
import { Instrutor } from "../models/Instrutor";

type CatUpdateInstrutorService = {
  id: string;
  rg: string,
  nome: string,
  nascimento: Date,
}
class UpdateInstrutorService {
  async execute({id, rg, nome, nascimento}: CatUpdateInstrutorService) {
    const repo = getRepository(Instrutor)
    const instrutor = await repo.findOne(id)

    if (!instrutor){
      return new Error("instrutor does  not exists")
    }
    instrutor.rg = rg ? rg: instrutor.rg
    instrutor.nome = nome ? nome: instrutor.nome
    instrutor.nascimento = nascimento ? nascimento: instrutor.nascimento

    await repo.save(instrutor)
    return instrutor
  }
}

export { UpdateInstrutorService };
