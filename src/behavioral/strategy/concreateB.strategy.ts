import Strategy from '@/behavioral/strategy/strategy.interface'

export default class ConcreateB implements Strategy {
  // eslint-disable-next-line class-methods-use-this
  something(params: string[]): string[] {
    return params.reverse()
  }
}
