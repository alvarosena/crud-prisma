import { response } from "express";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";


@injectable()
class UpdateUsernameService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute(username: string, id: string) {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      return response.json({ Error: 'User not found!' })
    }

    const updateUser = await this.usersRepository.updateUsername(username, id);
    return updateUser;
  }
}

export { UpdateUsernameService }