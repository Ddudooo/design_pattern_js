import State from '@/behavioral/state/state.abstract'
import ConcreateBState from '@/behavioral/state/concreateB.state'

export default class ConcreateAState extends State {
  public handle1(): void {
    console.log('A - 핸들링 이벤트')
    console.log('A - 컨텍스트 상태 변경 요청')
    // @ts-ignore
    // eslint-disable-next-line no-undef
    this.context.transitionTo(new ConcreateBState())
  }

  // eslint-disable-next-line class-methods-use-this
  public handle2(): void {
    console.log('A - 핸들링 이벤트2')
  }
}
