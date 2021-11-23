import AbstractTemplate from '@/behavioral/template/template.abstract'

export default class ConcreateB extends AbstractTemplate {
  protected hook() {
    // super.hook()
    console.log(`훅 변경 - ${this.constructor.name}`)
  }
}
