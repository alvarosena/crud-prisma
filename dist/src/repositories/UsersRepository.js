"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const client_1 = require(".prisma/client");
class UsersRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async create(username, email, password) {
        const user = await this.prisma.user.create({
            data: {
                username: username,
                email: email,
                password: password,
            }
        });
    }
    async list() {
        const user = await this.prisma.user.findMany({
            select: {
                id: true,
                username: true,
                email: true,
                password: true,
                created_at: true,
            }
        });
        return user;
    }
    async findByEmail(email) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: String(email)
            },
            select: {
                email: true,
                id: true,
                password: true,
                username: true,
                created_at: true,
            }
        });
        return user;
    }
    async findById(id) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: String(id),
            },
            select: {
                id: true,
                username: true,
                password: true,
                email: true,
                created_at: true
            }
        });
        return user;
    }
    async findByUsername(username) {
        const user = await this.prisma.user.findUnique({
            where: {
                username: String(username),
            },
            select: {
                username: true,
                email: true,
                password: true,
                created_at: true,
                id: true,
            }
        });
        return user;
    }
    async updateUsername(username, id) {
        const updateUser = await this.prisma.user.update({
            where: {
                id: String(id)
            },
            data: {
                username: username
            }
        });
        return updateUser;
    }
    async deleteUser(id) {
        const user = await this.prisma.user.delete({
            where: {
                id: String(id),
            },
        });
        return user;
    }
}
exports.UsersRepository = UsersRepository;
