import { prisma, PrismaClient } from ".prisma/client";
import { hash } from "bcrypt";
import { response } from "express";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute(username: string, password: string) {
    const userAlreadyExists = await this.usersRepository.findByUsername(username);

    if (userAlreadyExists) {
      return response.status(400).json({
        message: "User already exists"
      })
    }

    const hashPassword = await hash(password, 10);

    const user = await this.usersRepository.create(username, hashPassword);
  }
}

export { CreateUserService }