import State from '@/behavioral/state/state.abstract'

export default class Context {
  // eslint-disable-next-line no-undef
  // @ts-ignore
  private state: State

  constructor(state: State) {
    this.transitionTo(state)
  }

  public transitionTo(state: State): void {
    console.log(`컨텍스트 => ${(<any>state).constructor.name}`)
    this.state = state
    this.state.setContext(this)
  }

  public someFunc1(): void {
    this.state.handle1()
  }

  public someFunc2(): void {
    this.state.handle2()
  }
}
