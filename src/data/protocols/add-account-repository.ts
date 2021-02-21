import { AddAccountModel } from '../../domains/use-cases/add-account'
import { AccountModel } from '../../domains/models/Account'

export interface AddAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
}
