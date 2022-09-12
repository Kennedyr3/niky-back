import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { InstrutorRepository } from "../repositories/InstrutorRepository";
import { Instrutor } from "../models/Instrutor";

class DeleteInstrutorService {
  async execute(id: string) {
    const repo = getRepository(Instrutor)
    if (!(await repo.findOne(id))){
      return new Error("Category does  not exists")
    }

    await repo.delete(id)
  }
}

export { DeleteInstrutorService };
