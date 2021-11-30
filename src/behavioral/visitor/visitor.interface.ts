import ConcreateComponentA from '@/behavioral/visitor/concreateA.component'
import ConcreateComponentB from '@/behavioral/visitor/concreateB.Component'

export default interface Visitor {
  // eslint-disable-next-line no-unused-vars
  visitComponentA(ele: ConcreateComponentA): void
  // eslint-disable-next-line no-unused-vars
  visitComponentB(ele: ConcreateComponentB): void
}
