import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AlunoRepository } from "../repositories/alunoRepository";

class alunoController {
  async create(request: Request, response: Response) {
    const {name, endereco, telefone, dataNascimento, altura, peso,turma_id, matricula_id, created_at} = request.body;

    const instrutorRepository = getCustomRepository(AlunoRepository);
    
    const userAlreadyExists = await instrutorRepository.findOne({
      matricula_id
    })

    if (userAlreadyExists) {
      return response.status(400).json({
        error: "User already exists!"
      })
    }

    const user = instrutorRepository.create({
      name, endereco, telefone, dataNascimento, altura, peso,turma_id, matricula_id, created_at
    })

    await instrutorRepository.save(user);

    return response.status(201).json(user);
  }
  async show(request: Request, response: Response) {
    const instrutorRepository = getCustomRepository(AlunoRepository);

    const all = await instrutorRepository.find();

    return response.json(all);
  }

}

export { alunoController };
