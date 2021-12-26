import { IAddAccountModel } from '../../domain/usecases/add-account'
import { AccountModel } from '../../domain/models/account'

export interface IAddAccountRepository {
  add (accountData: IAddAccountModel): Promise<AccountModel>
}
