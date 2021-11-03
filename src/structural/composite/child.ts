import Component from '@/structural/composite/component.interface'

export default class Child implements Component {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  operation(): void {
    console.log(`자식 컴포넌트 - ${this.name}`)
  }
}
