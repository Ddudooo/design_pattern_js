import Component from '@/behavioral/visitor/component.visitor'
import Visitor from '@/behavioral/visitor/visitor.interface'

export default class ConcreateComponentB implements Component {
  public accept(visitor: Visitor) {
    visitor.visitComponentB(this)
  }

  public getName(): string {
    return this.constructor.name
  }
}
