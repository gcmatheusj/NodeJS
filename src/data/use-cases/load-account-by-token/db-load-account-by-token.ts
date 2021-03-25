import { LoadAccountByToken } from '../../../domain/use-cases/load-account-by-token'
import { Decrypter } from '../../protocols/criptography/decrypter'
import { AccountModel } from '../../../domain/models/account'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (private readonly decrypter: Decrypter) {}

  async load (accessToken: string, role?: string): Promise<AccountModel> {
    await this.decrypter.decrypt(accessToken)
    return null
  }
}
