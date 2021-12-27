"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUsernameController = void 0;
const tsyringe_1 = require("tsyringe");
const UpdateUsernameService_1 = require("../services/UpdateUsernameService");
class UpdateUsernameController {
    async handle(request, response) {
        const { id } = request.params;
        const { username, password } = request.body;
        const updateUsernameService = tsyringe_1.container.resolve(UpdateUsernameService_1.UpdateUsernameService);
        const user = await updateUsernameService.execute(username, id, password);
        return response.json(user);
    }
}
exports.UpdateUsernameController = UpdateUsernameController;
