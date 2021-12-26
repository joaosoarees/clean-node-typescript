import bcrypt from 'bcrypt'

import { IEncrypter } from '../../data/protocols/encrypter'

export class BCryptAdapter implements IEncrypter {
  constructor (private readonly salt: number) {}

  async encrypt (value: string): Promise<string> {
    const hashValue = await bcrypt.hash(value, this.salt)

    return hashValue
  }
}
