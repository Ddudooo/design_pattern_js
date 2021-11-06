import Component from '@/structural/decorate/component.interface'

export default class Decorator implements Component {
  private readonly component: Component

  constructor(component: Component) {
    this.component = component
  }

  public something() {
    return `데코레이터 [${this.component.something()}]`
  }
}
