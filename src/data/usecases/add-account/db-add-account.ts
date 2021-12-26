import {
  IAddAccount,
  IAddAccountModel,
  IEncrypter,
  AccountModel
} from './db-add-account-protocols'

export class DbAddAccount implements IAddAccount {
  private readonly encrypter: IEncrypter

  constructor (encrypter: IEncrypter) {
    this.encrypter = encrypter
  }

  async add (account: IAddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)

    const accountModel: AccountModel = {
      id: '',
      email: '',
      name: '',
      password: ' '
    }

    return new Promise(resolve => resolve(accountModel))
  }
}
