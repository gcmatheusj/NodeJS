import { LoadAccountByToken, Decrypter, AccountModel, LoadAccountByTokenRepository } from './db-load-account-by-token-protocols'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccounByTokenRepository: LoadAccountByTokenRepository
  ) {}

  async load (accessToken: string, role?: string): Promise<AccountModel> {
    const token = await this.decrypter.decrypt(accessToken)

    if (!token) {
      return null
    }

    const account = await this.loadAccounByTokenRepository.loadByToken(accessToken, role)

    if (!account) {
      return null
    }

    return account
  }
}
