import ConcreateComponent from '@/structural/decorate/concreate'
import Decorator from '@/structural/decorate/decorate'

function sample() {
  const component = new ConcreateComponent('김아무개')
  console.log(`기본 객체 - ${component.something()}`)

  const decorated = new Decorator(component)
  console.log(`데코레이터 추가 - ${decorated.something()}`)
}

sample()
