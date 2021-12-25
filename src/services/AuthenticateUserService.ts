import { compare } from "bcrypt";
import { request, response } from "express";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface IRequest {
  email: string,
  password: string,
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ email, password }: IRequest) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      return response.json({ message: "User not found" });
    }

    const passwordMatch = compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Password don't match.");
    }


    const token = sign({}, "8edb164dffe2b7066c410e45f3d20bb4", {
      subject: user.id,
    });

    return token;
  }
}

export { AuthenticateUserService }