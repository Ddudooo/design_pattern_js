import AndroidPhone from '@/creational/abstract-factory/products/android-phone.interface'

export default class FakeAndroid implements AndroidPhone {
  private readonly fakeName: string

  constructor(name: string) {
    this.fakeName = `FAKE${name}`
  }

  androidFunc(): string {
    return `FAKE android Function! ${this.fakeName}`
  }
}
