// 실행 시키려는 모듈 인터페이스 구현체
export default class ExternalModule {
  // eslint-disable-next-line class-methods-use-this
  public someFunc(): string {
    return '실행 되야 되요!'
  }
}
