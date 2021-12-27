"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const tsyringe_1 = require("tsyringe");
require("../shared/container");
const CreateUserService_1 = require("../services/CreateUserService");
class CreateUserController {
    async handle(request, response) {
        const { username, email, password } = request.body;
        const createUserService = tsyringe_1.container.resolve(CreateUserService_1.CreateUserService);
        await createUserService.execute({ username, email, password });
        return response.status(201).send();
    }
}
exports.CreateUserController = CreateUserController;
