import Mediator from '@/behavioral/mediator/mediator.interface'
import Component1 from './component1'
import Component2 from '@/behavioral/mediator/component2'

export default class ConcreateMediator implements Mediator {
  private component1: Component1

  private component2: Component2

  constructor(c1: Component1, c2: Component2) {
    this.component1 = c1
    this.component1.setMediator(this)
    this.component2 = c2
    this.component2.setMediator(this)
  }

  public notify(sender: object, event: string): void {
    if (event === 'A') {
      console.log('중재자 A 이벤트!')
      this.component2.someC()
    }

    if (event === 'B') {
      console.log('중재자 D 이벤트')
      this.component1.someB()
      this.component2.someC()
    }
  }
}
