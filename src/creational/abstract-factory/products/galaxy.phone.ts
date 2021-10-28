import AndroidPhone from '@/creational/abstract-factory/products/android-phone.interface'

export default class Galaxy implements AndroidPhone {
  private readonly name: string

  constructor(name: string) {
    this.name = name
  }

  public androidFunc(): string {
    return `Samsung Galaxy - ${this.name}`
  }
}
