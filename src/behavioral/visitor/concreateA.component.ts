import Component from '@/behavioral/visitor/component.visitor'
import Visitor from '@/behavioral/visitor/visitor.interface'

export default class ConcreateComponentA implements Component {
  public accept(visitor: Visitor): void {
    visitor.visitComponentA(this)
  }

  public getName(): string {
    return this.constructor.name
  }
}
