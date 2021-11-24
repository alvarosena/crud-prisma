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
      throw new Error("Username already taken");
    }

    const hashPassword = await hash(password, 10);

    const user = await this.usersRepository.create(username, hashPassword);
  }
}

export { CreateUserService }