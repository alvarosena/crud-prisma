import { inject, injectable } from "tsyringe";
import { UsersRepository } from '../repositories/UsersRepository'
import { IUsersRepository } from '../repositories/IUsersRepository';
import { json, response } from "express";

@injectable()
class ListAllUsersService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute() {
    const users = await this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersService }