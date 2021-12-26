import {
  IAddAccount,
  IAddAccountModel,
  IEncrypter,
  AccountModel,
  IAddAccountRepository
} from './db-add-account-protocols'

export class DbAddAccount implements IAddAccount {
  constructor (
    private readonly encrypter: IEncrypter,
    private readonly addAccountRepository: IAddAccountRepository
  ) {
  }

  async add (accountData: IAddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)

    const account = await this.addAccountRepository.add({
      ...accountData,
      password: hashedPassword
    })

    return account
  }
}
