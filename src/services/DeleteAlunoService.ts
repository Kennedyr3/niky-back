import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { Aluno } from "../models/aluno";

class DeleteAlunoService {
  async execute(id: string) {
    const repo = getRepository(Aluno)
    if (!(await repo.findOne(id))){
      return new Error("Category does  not exists")
    }

    await repo.delete(id)
  }
}

export { DeleteAlunoService };
