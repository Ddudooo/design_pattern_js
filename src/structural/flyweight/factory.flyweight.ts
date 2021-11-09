import FlyWeight from '@/structural/flyweight/flyweight.interface'
import FlyWeightInstance from '@/structural/flyweight/flyWeightInstance'

export default class FactoryFlyweight {
  static flyweights: { [id: number]: FlyWeight } = {}

  static getFlyweight(code: number): FlyWeight {
    if (!(code in FactoryFlyweight.flyweights)) {
      FactoryFlyweight.flyweights[code] = new FlyWeightInstance(code, 'flyweight!')
    }
    return FactoryFlyweight.flyweights[code]
  }

  static getCount(): number {
    return Object.keys(FactoryFlyweight.flyweights).length
  }
}
