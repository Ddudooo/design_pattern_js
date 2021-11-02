import Abstraction from '@/structural/bridge/abstraction'
import { Implementor } from '@/structural/bridge/Implementor.interface'

export default class RefinedClassB extends Abstraction {
  // eslint-disable-next-line no-useless-constructor
  constructor(imp: Implementor) {
    super(imp)
  }

  public callIt(input: string) {
    console.log('추상 클래스 구현체 B!')
    this.implementor.callee(input)
  }
}
