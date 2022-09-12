import { Request, Response } from "express";
import { DeleteInstrutorService } from "../services/DeleteInstrutorService";
// import { getCustomRepository } from "typeorm";
// import { InstrutorRepository } from "../repositories/InstrutorRepository";

class DeleteInstrutorController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteInstrutorService()

    const result = await service.execute(id)

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.status(204).end();
  }
}

export { DeleteInstrutorController };
