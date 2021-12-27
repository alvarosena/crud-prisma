import { compare } from "bcrypt";
import { response } from "express";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";


@injectable()
class UpdateUsernameService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute(username: string, id: string, password: string) {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      return response.json({ Error: 'User not found!' })
    }

    const passwordMatch = compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Error: Password don't match!");
    }

    const updateUser = await this.usersRepository.updateUsername(username, id);
    return updateUser;
  }
}

export { UpdateUsernameService }