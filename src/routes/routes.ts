import { application, Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { GetUserByIdController } from '../controllers/GetUserByIdController';

const routes = Router();

const createUserController = new CreateUserController();
const getUserByIdController = new GetUserByIdController();

routes.post('/users', createUserController.handle);
routes.get('/users/:id', getUserByIdController.handle);

export { routes }