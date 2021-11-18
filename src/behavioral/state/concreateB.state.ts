import State from '@/behavioral/state/state.abstract'
import ConcreateAState from '@/behavioral/state/concreateA.state'

export default class ConcreateBState extends State {
  // eslint-disable-next-line class-methods-use-this
  public handle1(): void {
    console.log('B - 핸들링 이벤트')
  }

  public handle2(): void {
    console.log('B - 핸들링 이벤트 2')
    console.log('B - 컨텍스트 상태 변경 요청')
    // @ts-ignore
    // eslint-disable-next-line no-undef
    this.context.transitionTo(new ConcreateAState())
  }
}
