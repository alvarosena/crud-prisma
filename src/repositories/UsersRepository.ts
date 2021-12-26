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
        password: password,
      }
    });
  }

  async list(): Promise<User[]> {
    const user = await this.prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        password: true,
        created_at: true,
      }
    });
    return user;
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

  async findById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: String(id),
      },
      select: {
        id: true,
        username: true,
        password: true,
        email: true,
        created_at: true

      }
    });
    return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        username: String(username),
      },
      select: {
        username: true,
        email: true,
        password: true,
        created_at: true,
        id: true,
      }
    });
    return user;
  }

  async updateUsername(username: string, id: string): Promise<User> {
    const updateUser = await this.prisma.user.update({
      where: {
        id: String(id)
      },
      data: {
        username: username
      }
    });
    return updateUser;
  }

  async deleteUser(id: string): Promise<User> {
    const user = await this.prisma.user.delete({
      where: {
        id: String(id),
      },
    });
    return user;
  }
}

export { UsersRepository }