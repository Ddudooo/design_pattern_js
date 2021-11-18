import Observer from '@/behavioral/observer/observer.interface'
import Subject from '@/behavioral/observer/subject.interface'

export default class ConcreateSubject implements Subject {
  // @ts-ignore
  public state: number

  private observers: Observer[] = []

  // eslint-disable-next-line consistent-return
  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer)
    if (isExist) {
      return console.log('이미 관찰중...')
    }
    console.log('관찰자 추가')
    this.observers.push(observer)
  }

  // eslint-disable-next-line consistent-return
  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer)

    if (observerIndex === -1) {
      return console.log('관찰자로 추가 되지 않음.')
    }

    this.observers.splice(observerIndex, 1)
    console.log('관찰자 제거...')
  }

  public notify(): void {
    console.log('관찰자들에게 알림 보냄...')
    // eslint-disable-next-line no-restricted-syntax
    for (const observer of this.observers) {
      observer.update(this)
    }
  }

  public someFunc(): void {
    console.log('뭔가 뭔가임')
    this.state = Math.floor(Math.random() * (10 + 1))

    console.log('임의로 상태 변경.')
    this.notify()
  }
}
