import Command from '@/behavioral/command/command.interface'
import Receiver from '@/behavioral/command/receiver'

export default class ComplexCommand implements Command {
  private receiver: Receiver

  private payloadA: string

  private payloadB: string

  constructor(receiver: Receiver, payloadA: string, payloadB: string) {
    this.receiver = receiver
    this.payloadA = payloadA
    this.payloadB = payloadB
  }

  public execute() {
    console.log(`복잡한 커맨드`)
    this.receiver.something(this.payloadA)
    this.receiver.someFunc(this.payloadB)
  }
}
