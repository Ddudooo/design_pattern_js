import { Implementor } from '@/structural/bridge/Implementor.interface'

export default abstract class Abstraction {
  implementor: Implementor

  constructor(imp: Implementor) {
    this.implementor = imp
  }

  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  public callIt(input: string): void {
    throw new Error('이 메소드는 추상 클래스여야함!')
  }
}
