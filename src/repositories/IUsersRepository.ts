interface IUsersRepository {
  create(username: string, password: string): Promise<void>
  // findByUsername(username: string): Promise<User>
}

export { IUsersRepository }