import ConcreateSubject from '@/behavioral/observer/concreate.subject'
import ConcreateObserver from '@/behavioral/observer/concreate.observer'
import ConcreateBObserver from '@/behavioral/observer/concreateB.observer'

const subject = new ConcreateSubject()

const observer1 = new ConcreateObserver()
subject.attach(observer1)

const observer2 = new ConcreateBObserver()

subject.attach(observer2)

subject.someFunc()
subject.someFunc()

subject.detach(observer2)

subject.someFunc()
subject.someFunc()
