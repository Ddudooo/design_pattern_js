import BaseComponent from '@/behavioral/mediator/component.base'

export default class Component1 extends BaseComponent {
  public someA(): void {
    console.log('컴포넌트 1 - A')
    this.mediator?.notify(this, 'A')
  }

  public someB(): void {
    console.log('컴포넌트 1 - B')
    this.mediator?.notify(this, 'B')
  }
}
