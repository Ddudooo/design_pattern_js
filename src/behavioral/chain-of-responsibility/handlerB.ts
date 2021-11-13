import AbstractHandler from '@/behavioral/chain-of-responsibility/handler.abstract'

export default class HandlerB extends AbstractHandler {
  public handle(param: string): string | null {
    if (param === 'B') {
      return `핸들러 B에서 처리됨!`
    }
    return super.handle(param)
  }
}
