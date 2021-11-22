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
    // const userAlreadyExists = await this.usersRepository.findByUsername(username);

    // if (userAlreadyExists) {
    //   return response.status(400).json({ Error: "Username already taken" });
    // }

    await this.usersRepository.create(username, password);
  }
}

export { CreateUserService }