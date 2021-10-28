import WindowPhone from '@/creational/abstract-factory/products/window-phone.interface'

export default class Lumia implements WindowPhone {
  private readonly name: string

  constructor(name: string) {
    this.name = name
  }

  public playGame(): string {
    return `${this.name} - play game~!`
  }

  public windowFunc(): string {
    return `Lumia Phone - ${this.name}`
  }
}
