import Component from '@/structural/composite/component.interface'

export default class Composite implements Component {
  private list: Component[]

  private name: string

  constructor(name: string) {
    this.name = name
    this.list = []
  }

  // eslint-disable-next-line class-methods-use-this
  operation(): void {
    console.log(`실행 - ${this.name}`)
    this.list.forEach(el => el.operation())
  }

  public add(child: Component): void {
    this.list.push(child)
  }

  public remove(condition: { index?: number; element?: Component }): boolean {
    const preCnt = this.list.length
    if (condition.index) {
      this.list.splice(condition.index, 1)
    }

    if (condition.element) {
      this.list = this.list.filter(el => el !== condition.element)
    }
    return this.list.length !== preCnt
  }
}
