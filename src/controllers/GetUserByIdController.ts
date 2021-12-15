import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUserByIdService } from "../services/GetUserByIdService";


class GetUserByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getUserByIdService = container.resolve(GetUserByIdService);

    const user = await getUserByIdService.execute({ id });
    return response.json(user);
  }
}

export { GetUserByIdController }