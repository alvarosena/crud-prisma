import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUsernameService } from '../services/UpdateUsernameService';

class UpdateUsernameController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { username } = request.body;

    const updateUsernameService = container.resolve(UpdateUsernameService);
    const user = await updateUsernameService.execute(username, id);

    return response.json(user);
  }
}

export { UpdateUsernameController }