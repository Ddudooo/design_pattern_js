import { Implementor } from '@/structural/bridge/Implementor.interface'

export default class ConcreateA implements Implementor {
  // eslint-disable-next-line class-methods-use-this
  callee(input: any): void {
    console.log(`구현체 A - ${input}`)
  }
}
