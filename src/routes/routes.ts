import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { GetUserByIdController } from '../controllers/GetUserByIdController';
import { AuthenticateUserController } from '../controllers/AuthenticateUserController';
import { ListAllUsersController } from '../controllers/ListAllUsersController';
import { UpdateUsernameController } from '../controllers/UpdateUsernameController';
import { DeleteUserController } from '../controllers/DeleteUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const routes = Router();

const createUserController = new CreateUserController();
const getUserByIdController = new GetUserByIdController();
const authenticateUserController = new AuthenticateUserController();
const listAllUsersController = new ListAllUsersController();
const updateUsernameController = new UpdateUsernameController();
const deleteUserController = new DeleteUserController();

routes.post('/api/users', createUserController.handle);
routes.get('/api/users/:id', ensureAuthenticated, getUserByIdController.handle);
routes.post('/api/users/auth', authenticateUserController.handle);
routes.get('/api/users', listAllUsersController.handle);
routes.patch('/api/users/update/:id', ensureAuthenticated, updateUsernameController.handle);
routes.delete('/api/users/delete/:id', ensureAuthenticated, deleteUserController.handle);

export { routes }