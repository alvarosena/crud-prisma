import { application, Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { GetUserByIdController } from '../controllers/GetUserByIdController';
import { AuthenticateUserController } from '../controllers/AuthenticateUserController';

const routes = Router();

const createUserController = new CreateUserController();
const getUserByIdController = new GetUserByIdController();
const authenticateUserController = new AuthenticateUserController();

routes.post('/users', createUserController.handle);
routes.get('/users/:id', getUserByIdController.handle);
routes.post('/users/auth', authenticateUserController.handle);

export { routes }