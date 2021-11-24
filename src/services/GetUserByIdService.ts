import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
class GetUserByIdService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute(id: string) {
    const user = await this.usersRepository.findById(id);


  }
}

export { GetUserByIdService }