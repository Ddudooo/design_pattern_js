import Strategy from '@/behavioral/strategy/strategy.interface'

export default class ConcreateA implements Strategy {
  // eslint-disable-next-line class-methods-use-this
  public something(params: string[]): string[] {
    return params.sort()
  }
}
