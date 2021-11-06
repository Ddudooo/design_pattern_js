import Component from '@/structural/decorate/component.interface'

export default class ConcreateComponent implements Component {
  private readonly name: string

  constructor(name: string) {
    this.name = name
  }

  something(): string {
    return `구현 객체 ${this.name}`
  }
}
