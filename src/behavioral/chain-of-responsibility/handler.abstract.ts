import { Handle } from '@/behavioral/chain-of-responsibility/handle.interface'

export default abstract class AbstractHandler implements Handle {
  private nextHandler: Handle | undefined

  public setNext(handler: Handle): Handle {
    this.nextHandler = handler
    return handler
  }

  public handle(param: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(param)
    }
    return null
  }
}
