import Observer from '@/behavioral/observer/observer.interface'
import Subject from '@/behavioral/observer/subject.interface'
import ConcreateSubject from '@/behavioral/observer/concreate.subject'

export default class ConcreateObserver implements Observer {
  // eslint-disable-next-line no-undef,class-methods-use-this
  public update(subject: Subject): void {
    if (subject instanceof ConcreateSubject && subject.state < 3) {
      console.log('이벤트 구독!')
    }
  }
}
