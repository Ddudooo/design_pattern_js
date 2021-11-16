import BaseComponent from '@/behavioral/mediator/component.base'

export default class Component2 extends BaseComponent {
  public someC(): void {
    console.log('컴포넌트2 - C')
    this.mediator?.notify(this, 'C')
  }

  public someD(): void {
    console.log('컴포넌트 2 - D.')
    this.mediator?.notify(this, 'D')
  }
}
