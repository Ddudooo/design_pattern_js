import Memento from '@/behavioral/memento/memento.interface'
import ConcreateMemento from '@/behavioral/memento/concreate.memento'

export default class Originator {
  private state: string

  constructor(state: string) {
    this.state = state
  }

  public some(): void {
    console.log('뭔가 행동함.')
    this.state = this.generateRandom(30)
    console.log(`상태 바뀜 ${this.state}`)
  }

  // eslint-disable-next-line class-methods-use-this
  private generateRandom(length: number = 30): string {
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    // @ts-ignore
    // eslint-disable-next-line prefer-spread
    return Array.apply(null, { length })
      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
      .join('')
  }

  public save(): Memento {
    return new ConcreateMemento(this.state)
  }

  public restore(memento: Memento): void {
    this.state = memento.getState()
    console.log(`이전 상태값 불러옴 ${this.state}`)
  }
}
