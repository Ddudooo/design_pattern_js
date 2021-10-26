import PointFactory from '@/creational/factory-method/pointFactory'

export default class Point {
  private x: number

  private y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  static get factory() {
    return new PointFactory()
  }
}
