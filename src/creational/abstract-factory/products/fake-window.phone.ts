import WindowPhone from '@/creational/abstract-factory/products/window-phone.interface'

export default class FakeWindow implements WindowPhone {
  private readonly fakeName: string

  constructor(name: string) {
    this.fakeName = `FAKE${name}`
  }

  playGame(): string {
    return `FAKE doesn't play game! ${this.fakeName}`
  }

  windowFunc(): string {
    return `FAKE window function! ${this.fakeName}`
  }
}
