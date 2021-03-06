"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUsernameService = void 0;
const bcrypt_1 = require("bcrypt");
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
let UpdateUsernameService = class UpdateUsernameService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(username, id, password) {
        const user = await this.usersRepository.findById(id);
        if (!user) {
            return express_1.response.json({ Error: 'User not found!' });
        }
        const passwordMatch = (0, bcrypt_1.compare)(password, user.password);
        if (!passwordMatch) {
            throw new Error("Error: Password don't match!");
        }
        const updateUser = await this.usersRepository.updateUsername(username, id);
        return updateUser;
    }
};
UpdateUsernameService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("UsersRepository"))
], UpdateUsernameService);
exports.UpdateUsernameService = UpdateUsernameService;
