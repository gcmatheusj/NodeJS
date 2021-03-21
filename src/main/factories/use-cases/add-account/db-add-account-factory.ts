import { DbAddAccount } from '../../../../data/use-cases/add-account/db-add-account'
import { BcryptAdapter } from '../../../../infra/criptography/bcrypt-adapter/bcrypt-adapter'
import { AccountMongoRepository } from '../../../../infra/db/mongodb/account/account-mongo-repository'
import { AddAccount } from '../../../../domain/use-cases/add-account'

export const makeDbAddAccount = (): AddAccount => {
  const salt = 12

  const bcryptAdapter = new BcryptAdapter(salt)

  const accountMongoRepository = new AccountMongoRepository()

  return new DbAddAccount(bcryptAdapter, accountMongoRepository)
}
