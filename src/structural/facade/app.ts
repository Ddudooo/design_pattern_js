import SubsystemA from '@/structural/facade/subsystem-A'
import SubsystemB from '@/structural/facade/subsystem-B'
import Facade from '@/structural/facade/facade'

function operation() {
  const a = new SubsystemA()
  const b = new SubsystemB()

  const facade = new Facade(a, b)
  console.log(facade.some())
  console.log(facade.thing())
}

operation()
