import Command from '@/behavioral/command/command.interface'

export default class SimpleCommand implements Command {
  private payload: string

  constructor(payload: string) {
    this.payload = payload
  }

  public execute(): string {
    return `심플 커맨드 ${this.payload}`
  }
}
