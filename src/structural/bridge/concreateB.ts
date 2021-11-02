import { Implementor } from '@/structural/bridge/Implementor.interface'

export default class ConcreateB implements Implementor {
  // eslint-disable-next-line class-methods-use-this
  callee(input: any): void {
    console.log(`구현체B - ${input}`)
  }
}
