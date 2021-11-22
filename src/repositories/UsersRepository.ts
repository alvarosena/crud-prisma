import { PrismaClient } from ".prisma/client";
import { IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(username: string, password: string): Promise<void> {
    const user = await this.prisma.user.create({
      data: {
        username: username,
        password: password
      }
    });
  }

  // async findByUsername(username: string) {
  //   const user = await this.prisma.user.findUnique({
  //     where: {
  //       username: username
  //     }
  //   })
  // }

}

export { UsersRepository }