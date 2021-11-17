import Memento from '@/behavioral/memento/memento.interface'

export default class ConcreateMemento implements Memento {
  private state: string

  private date: string

  constructor(state: string) {
    this.state = state
    this.date = new Date().toISOString().slice(0, 19).replace('T', '')
  }

  public getState(): string {
    return this.state
  }

  public getName(): string {
    return `${this.date} / (${this.state.substr(0, 9)}...`
  }

  public getDate(): string {
    return this.date
  }
}
