import Context from '@/behavioral/state/context'

export default abstract class State {
  // eslint-disable-next-line no-undef
  // @ts-ignore
  protected context: Context

  public setContext(context: Context) {
    this.context = context
  }

  public abstract handle1(): void

  public abstract handle2(): void
}
