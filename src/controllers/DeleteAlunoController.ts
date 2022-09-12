import { Request, Response } from "express";
import { DeleteAlunoService } from "../services/DeleteAlunoService";
// import { getCustomRepository } from "typeorm";
// import { InstrutorRepository } from "../repositories/InstrutorRepository";

class DeleteAlunoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteAlunoService()

    const result = await service.execute(id)

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.status(204).end();
  }
}

export { DeleteAlunoController };
