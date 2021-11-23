export default class AbstractTemplate {
  public some(): void {
    this.func1()
    this.func2()
    this.hook()
    this.funcA()
    this.funcB()
    this.hook2()
  }

  // eslint-disable-next-line class-methods-use-this
  protected func1() {
    console.log('추상 클래스 함수1')
  }

  // eslint-disable-next-line class-methods-use-this
  protected func2() {
    console.log('추상 클래스 함수2')
  }

  // eslint-disable-next-line class-methods-use-this
  protected funcA() {
    console.log('추상 클래스 함수A')
  }

  // eslint-disable-next-line class-methods-use-this
  protected funcB() {
    console.log('추상 클래스 함수B')
  }

  // eslint-disable-next-line class-methods-use-this
  protected hook(): void {}

  // eslint-disable-next-line class-methods-use-this
  protected hook2(): void {}
}
