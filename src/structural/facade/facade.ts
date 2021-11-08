import SubsystemA from '@/structural/facade/subsystem-A'
import SubsystemB from '@/structural/facade/subsystem-B'

export default class Facade {
  protected systemA: SubsystemA

  protected systemB: SubsystemB

  constructor(systemA: SubsystemA, systemB: SubsystemB) {
    this.systemA = systemA
    this.systemB = systemB
  }

  some(): string {
    return this.systemA.some() + this.systemB.some()
  }

  thing(): string {
    return this.systemA.thing() + this.systemB.thing()
  }
}
