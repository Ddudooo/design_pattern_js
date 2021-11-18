import Context from '@/behavioral/state/context'
import ConcreateAState from '@/behavioral/state/concreateA.state'

const context = new Context(new ConcreateAState())

context.someFunc1()
context.someFunc2()
