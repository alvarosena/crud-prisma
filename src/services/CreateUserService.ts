import { prisma, PrismaClient } from ".prisma/client";
import { hash } from "bcrypt";
import { response } from "express";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface IRequest {
  username: string,
  email: string,
  password: string,
}

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ username, email, password }: IRequest) {

    const hashPassword = await hash(password, 10);

    const user = await this.usersRepository.create(username, email, hashPassword);
  }
}

export { CreateUserService }