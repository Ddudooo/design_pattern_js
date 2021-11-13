import AbstractHandler from '@/behavioral/chain-of-responsibility/handler.abstract'

export default class HandlerC extends AbstractHandler {
  public handle(param: string): string | null {
    if (param === 'C') {
      return `핸들러 C에서 처리됨`
    }
    return super.handle(param)
  }
}
