import Subject from '@/structural/proxy/subject.interface'

export default class RealSubject implements Subject {
  private readonly name: string

  constructor(name: string) {
    this.name = name
  }

  public request(): string {
    return `진짜 객체[${this.name}] 요청 처리!`
  }
}
