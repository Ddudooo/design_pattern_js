import Pizza from '@/creational/builder/pizza'

export default class PizzaBuilder {
  private readonly createPizza: Pizza

  constructor() {
    this.createPizza = new Pizza()
  }

  topping(topping: string): PizzaBuilder {
    this.createPizza.topping = topping
    return this
  }

  cheeze(cheeze: string): PizzaBuilder {
    this.createPizza.cheeze = cheeze
    return this
  }

  build(): Pizza {
    return this.createPizza
  }
}
