import Mediator from '@/behavioral/mediator/mediator.interface'

export default class BaseComponent {
  protected mediator: Mediator | undefined

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator
  }
}
