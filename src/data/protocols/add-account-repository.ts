import { AddAccountModel } from '../../domain/use-cases/add-account'
import { AccountModel } from '../../domain/models/Account'

export interface AddAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
}
