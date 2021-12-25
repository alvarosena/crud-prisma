import { User } from '@prisma/client';

interface IUsersRepository {
  create(username: string, email: string, password: string): Promise<void>
  findByEmail(username: string): Promise<User>;
  findById(id: string): any
}

export { IUsersRepository }