import { PrismaClient, User } from ".prisma/client";
import { IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(username: string, email: string, password: string): Promise<void> {
    const user = await this.prisma.user.create({
      data: {
        username: username,
        email: email,
        password: password
      }
    });
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: String(email)
      },
      select: {
        email: true,
        id: true,
        password: true,
        username: true,
        created_at: true,
      }
    });
    return user;
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: String(id),
      },
      select: {
        id: true,
      }
    });
    return user;
  }

}

export { UsersRepository }