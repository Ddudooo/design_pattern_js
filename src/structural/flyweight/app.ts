import FactoryFlyweight from '@/structural/flyweight/factory.flyweight'

class AppContext {
  private codes: number[] = []

  constructor(codes: string) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < codes.length; i++) {
      this.codes.push(codes.charCodeAt(i))
    }
  }

  output() {
    // The context specific output that uses flyweights
    let ret = ''
    this.codes.forEach(c => {
      ret += String.fromCharCode(FactoryFlyweight.getFlyweight(c).code)
    })

    return ret
  }
}

const APP_CONTEXT = new AppContext('플라이웨이트')

console.log(APP_CONTEXT.output())

console.log(`플라이웨이트 => ${'플라이웨이트'.length}`)
console.log(`팩토리 보유 갯수 => ${FactoryFlyweight.getCount()} `)
