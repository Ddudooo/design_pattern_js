import Subject from '@/structural/proxy/subject.interface'

export default class ProxySubject implements Subject {
  private readonly real: Subject

  private caching?: string

  private timeout?: Date

  constructor(real: Subject) {
    this.real = real
  }

  public request(): string {
    if (this.check()) {
      return this.caching!
    }
    this.caching = this.real.request()
    const timeout = new Date()
    timeout.setMinutes(timeout.getMinutes() + 10)
    this.timeout = timeout
    return this.caching
  }

  private check(): boolean {
    console.log('프록시 객체 확인!')
    if (this.caching && new Date() < this.timeout!) {
      console.log(`${new Date()} | ${this.timeout!}`)
      return true
    }
    return false
  }
}
