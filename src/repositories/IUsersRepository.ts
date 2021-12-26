import { User } from '@prisma/client';

interface IUsersRepository {
  list(): Promise<User[]>
  create(username: string, email: string, password: string): Promise<void>
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>
  findByUsername(username: string): Promise<User>
  updateUsername(username: string, id: string): Promise<User>
  deleteUser(id: string): Promise<User>
}

export { IUsersRepository }