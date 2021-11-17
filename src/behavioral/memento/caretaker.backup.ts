import * as console from 'console'
import Memento from '@/behavioral/memento/memento.interface'
import Originator from '@/behavioral/memento/originator'

export default class Caretaker {
  private mementos: Memento[] = []

  private originator: Originator

  constructor(origin: Originator) {
    this.originator = origin
  }

  public backUp(): void {
    console.log('백업!')
    this.mementos.push(this.originator.save())
  }

  public undo(): void {
    const memento = this.mementos.pop()
    if (!memento) {
      return
    }

    console.log(`되돌리기 ${memento.getName()}`)

    this.originator.restore(memento)
  }

  public showHistory(): void {
    console.log('백업 보유 현황')
    // eslint-disable-next-line no-restricted-syntax
    for (const memento of this.mementos) {
      console.log(memento.getName())
    }
  }
}
