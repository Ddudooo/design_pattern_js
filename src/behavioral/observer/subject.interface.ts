import Observer from '@/behavioral/observer/observer.interface'

export default interface Subject {
  // 관측할 객체 추가
  // eslint-disable-next-line no-undef,no-unused-vars
  attach(observer: Observer): void
  // 관측 객체 제외
  // eslint-disable-next-line no-unused-vars
  detach(observer: Observer): void

  // 알림
  notify(): void
}
