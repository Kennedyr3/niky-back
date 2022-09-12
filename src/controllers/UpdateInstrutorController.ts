import { Request, Response } from "express";
import { UpdateInstrutorService } from "../services/UpdateInstrutorService";
// import { getCustomRepository } from "typeorm";
// import { InstrutorRepository } from "../repositories/InstrutorRepository";

class UpdateInstrutorController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const {rg, nome, nascimento} = request.body
    const service = new UpdateInstrutorService()

    const result = await service.execute({id, rg, nome, nascimento})

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.status(204).end();
  }
}

export { UpdateInstrutorController };
