"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = void 0;
const tsyringe_1 = require("tsyringe");
const DeleteUserService_1 = require("../services/DeleteUserService");
class DeleteUserController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const { email, password } = request.body;
            const deleteUserService = tsyringe_1.container.resolve(DeleteUserService_1.DeleteUserService);
            await deleteUserService.execute(id, email, password);
            return response.status(204).send();
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.DeleteUserController = DeleteUserController;
