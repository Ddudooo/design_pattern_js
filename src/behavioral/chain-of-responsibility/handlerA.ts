import AbstractHandler from '@/behavioral/chain-of-responsibility/handler.abstract'

export default class HandlerA extends AbstractHandler {
  public handle(param: string): string | null {
    if (param === 'A') {
      return `핸들러 A에서 처리됨!`
    }
    return super.handle(param)
  }
}
