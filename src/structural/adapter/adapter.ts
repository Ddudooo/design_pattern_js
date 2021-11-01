import ExternalModule from '@/structural/adapter/external.module'
import Adaptee from '@/structural/adapter/adaptee'

export default class Adapter extends ExternalModule {
  private readonly adaptee: Adaptee

  constructor(adaptee: Adaptee) {
    super()
    this.adaptee = adaptee
  }

  public someFunc(): string {
    const adapted = this.adaptee.gnihtemoStnirp().split('').reverse().join('')
    return `어댑터 변환 결과 - ${adapted}`
  }
}
