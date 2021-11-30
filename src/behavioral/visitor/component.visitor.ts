import Visitor from '@/behavioral/visitor/visitor.interface'

export default interface Component {
  // eslint-disable-next-line no-unused-vars
  accept(visitor: Visitor): void
}
