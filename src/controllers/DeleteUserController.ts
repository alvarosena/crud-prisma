import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteUserService } from '../services/DeleteUserService';

class DeleteUserController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { email, password } = request.body

      const deleteUserService = container.resolve(DeleteUserService);

      await deleteUserService.execute(id, email, password);

      return response.status(204).send();
    }
    catch (err) {
      console.log(err);
    }
  }
}

export { DeleteUserController }