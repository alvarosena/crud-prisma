interface IUsersRepository {
  create(username: string, password: string): Promise<void>
  findByUsername(username: string): any
  findById(id: string): any
}

export { IUsersRepository }