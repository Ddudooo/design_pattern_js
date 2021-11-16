import Component1 from '@/behavioral/mediator/component1'
import Component2 from '@/behavioral/mediator/component2'
import ConcreateMediator from '@/behavioral/mediator/concreate.mediator'

const component1 = new Component1()
const component2 = new Component2()

const mediator = new ConcreateMediator(component1, component2)

console.log('A 이벤트')

component1.someA()

console.log('=========================')
console.log('D 트리거')

component2.someD()
