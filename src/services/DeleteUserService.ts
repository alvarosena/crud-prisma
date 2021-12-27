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

    const passwordMatch = compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Error: Password don't match!");
    }

    const deleteUser = await this.usersRepository.deleteUser(id);
    return deleteUser;
  }
}

export { DeleteUserService }