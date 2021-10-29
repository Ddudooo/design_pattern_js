export default class Pizza {
  topping: string | undefined

  cheeze: string | undefined

  describe(): string {
    return `this pizza ${this.cheeze} and ${this.topping}`
  }
}
