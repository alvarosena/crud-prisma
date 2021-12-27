"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByIdController = void 0;
const tsyringe_1 = require("tsyringe");
const GetUserByIdService_1 = require("../services/GetUserByIdService");
class GetUserByIdController {
    async handle(request, response) {
        const { id } = request.params;
        const getUserByIdService = tsyringe_1.container.resolve(GetUserByIdService_1.GetUserByIdService);
        const user = await getUserByIdService.execute({ id });
        return response.json(user);
    }
}
exports.GetUserByIdController = GetUserByIdController;
