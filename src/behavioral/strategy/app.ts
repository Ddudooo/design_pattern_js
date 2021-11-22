import Context from '@/behavioral/strategy/context'
import ConcreateB from '@/behavioral/strategy/concreateB.strategy'
import ConcreateA from '@/behavioral/strategy/concreateA.strategy'

const context = new Context(new ConcreateB())

console.log('전략 패턴 예시')
context.doing()

console.log('')

console.log('로직 변경')

const strategyA = new ConcreateA()

context.setStrategy(strategyA)

context.doing()
