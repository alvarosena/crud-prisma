"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllUsersController = void 0;
const tsyringe_1 = require("tsyringe");
const ListAllUsersService_1 = require("../services/ListAllUsersService");
class ListAllUsersController {
    async handle(request, response) {
        const listAllUsersService = tsyringe_1.container.resolve(ListAllUsersService_1.ListAllUsersService);
        const users = await listAllUsersService.execute();
        return response.json(users);
    }
}
exports.ListAllUsersController = ListAllUsersController;
