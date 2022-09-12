import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { InstrutorRepository } from "../repositories/InstrutorRepository";

class InstrutorController {
  async create(request: Request, response: Response) {
    const { rg, nome,nascimento, titulacao } = request.body;

    const instrutorRepository = getCustomRepository(InstrutorRepository);
    
    const userAlreadyExists = await instrutorRepository.findOne({
      rg
    })

    if (userAlreadyExists) {
      return response.status(400).json({
        error: "User already exists!"
      })
    }

    const user = instrutorRepository.create({
        rg,nome,nascimento,titulacao
    })

    await instrutorRepository.save(user);

    return response.status(201).json(user);
  }
  async show(request: Request, response: Response) {
    const instrutorRepository = getCustomRepository(InstrutorRepository);

    const all = await instrutorRepository.find();

    return response.json(all);
  }

}

export { InstrutorController };
