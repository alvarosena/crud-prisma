import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
class DeleteUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute(id: string, email: string, password: string) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('User not found!');
    }

    compare(password, user.password)

    const deleteUser = await this.usersRepository.deleteUser(id);
    return deleteUser;
  }
}

export { DeleteUserService }