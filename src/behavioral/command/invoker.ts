import Command from '@/behavioral/command/command.interface'

export default class Invoker {
  private startCommand: Command | undefined

  private endCommand: Command | undefined

  public setStartCommand(command: Command): void {
    this.startCommand = command
  }

  public setEndCommand(command: Command): void {
    this.endCommand = command
  }

  public someInvokedFunc(): void {
    console.log(`인보커 메소드`)
    if (this.isCommand(this.startCommand)) {
      const startCommandResult = this.startCommand.execute()
      console.log(`start Command result = ${startCommandResult}`)
    }

    console.log('마무리 커맨드')
    if (this.isCommand(this.endCommand)) {
      const endCommandResult = this.endCommand.execute()
      console.log(`end Command result = ${endCommandResult}`)
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private isCommand(object: any): object is Command {
    return object.execute !== undefined
  }
}
