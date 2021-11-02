import RefinedClassA from '@/structural/bridge/refinedClassA'
import ConcreateA from '@/structural/bridge/concreateA'
import RefinedClassB from '@/structural/bridge/refinedClassB'
import ConcreateB from '@/structural/bridge/concreateB'

function client() {
  const abstractA = new RefinedClassA(new ConcreateA())
  const abstractB = new RefinedClassB(new ConcreateB())

  abstractA.callIt('브릿지 패턴!')
  abstractB.callIt('인터페이스와 추상메소드로 연결!')
}

client()
