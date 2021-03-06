import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    username: string;
    email: string;
  },
  token: string;
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
      throw new Error("Email or password is incorrect");
    }

    const passwordMatch = compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or password are incorrect!");
    }

    const token = sign({}, "c4a4acd7826638c938c6ff143a2bb72b", {
      subject: user.id,
    })

    const tokenReturn: IResponse = {
      token,
      user: {
        username: user.username,
        email: user.email,
      }
    }

    return tokenReturn;

  }
}

export { AuthenticateUserService }