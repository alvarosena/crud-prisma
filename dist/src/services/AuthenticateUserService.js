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
exports.AuthenticateUserService = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const tsyringe_1 = require("tsyringe");
let AuthenticateUserService = class AuthenticateUserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute({ email, password }) {
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new Error("Email or password is incorrect");
        }
        const passwordMatch = (0, bcrypt_1.compare)(password, user.password);
        if (!passwordMatch) {
            throw new Error("Email or password are incorrect!");
        }
        const token = (0, jsonwebtoken_1.sign)({}, "c4a4acd7826638c938c6ff143a2bb72b", {
            subject: user.id,
        });
        const tokenReturn = {
            token,
            user: {
                username: user.username,
                email: user.email,
            }
        };
        return tokenReturn;
    }
};
AuthenticateUserService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("UsersRepository"))
], AuthenticateUserService);
exports.AuthenticateUserService = AuthenticateUserService;
