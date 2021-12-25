import { Request, Response } from 'express';
import { container } from 'tsyringe';
import '../shared/container';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);

    await createUserService.execute({ username, email, password });

    return response.status(201).send();
  }
}

export { CreateUserController }