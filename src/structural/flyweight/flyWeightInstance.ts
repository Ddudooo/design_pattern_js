import FlyWeight from '@/structural/flyweight/flyweight.interface'

export default class FlyWeightInstance implements FlyWeight {
  readonly code: number

  private readonly name: string

  constructor(code: number, name: string) {
    this.code = code
    this.name = name
  }

  some(): string {
    return `${this.name} flyweight implements!`
  }
}
