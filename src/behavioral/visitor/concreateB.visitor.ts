import Visitor from '@/behavioral/visitor/visitor.interface'
import ConcreateComponentA from '@/behavioral/visitor/concreateA.component'
import ConcreateComponentB from '@/behavioral/visitor/concreateB.Component'

export default class ConcreateVisitorB implements Visitor {
  public visitComponentA(ele: ConcreateComponentA) {
    console.log(`${this.constructor.name} 방문 ${ele.getName()}`)
  }

  public visitComponentB(ele: ConcreateComponentB) {
    console.log(`${this.constructor.name} 방문 ${ele.getName()}`)
  }
}
