import Strategy from '@/behavioral/strategy/strategy.interface'

export default class Context {
  private strategy: Strategy

  constructor(strategy: Strategy) {
    this.strategy = strategy
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy
  }

  public doing(): void {
    console.log('전략 패턴에 따른 행동 결정')
    const result = this.strategy.something(['파', '라', '미', '터'])
    console.log(result.join(' '))
  }
}
