import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
// import { InstrutorRepository } from "../repositories/InstrutorRepository";
import { Aluno } from "../models/aluno";

type CatUpdateInstrutorService = {
  id: number,
  name: string;
  endereco: string,
  telefone: number,
  dataNascimento: Date,
  altura: number,
  peso: number,
}
class UpdateAlunoService {
  async execute({id, name, endereco, telefone, dataNascimento, altura, peso}: CatUpdateInstrutorService) {
    const repo = getRepository(Aluno)
    const instrutor = await repo.findOne(id)

    if (!instrutor){
      return new Error("instrutor does  not exists")
    }
    instrutor.name = name ? name: instrutor.name
    instrutor.endereco = endereco ? endereco: instrutor.endereco
    instrutor.telefone = telefone ? telefone: instrutor.telefone
    instrutor.dataNascimento = dataNascimento ? dataNascimento: instrutor.dataNascimento
    instrutor.altura = altura ? altura: instrutor.altura
    instrutor.peso = peso ? peso: instrutor.peso


    await repo.save(instrutor)
    return instrutor
  }
}

export { UpdateAlunoService };
