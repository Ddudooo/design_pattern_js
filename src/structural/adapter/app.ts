import ExternalModule from '@/structural/adapter/external.module'
import Adaptee from '@/structural/adapter/adaptee'
import Adapter from '@/structural/adapter/adapter'

function execute(module: ExternalModule) {
  console.log('실행 인터페이스를 통한 모듈 실행.')
  console.log(module.someFunc())
}

console.log('모듈 실행.')
const externalModule = new ExternalModule()
execute(externalModule)

console.log()

const adaptee = new Adaptee()
console.log('호환 등의 이유로 제대로 실행되지 않음.')
console.log(`모듈 실행 - ${adaptee.gnihtemoStnirp()}`)

console.log()

console.log('어댑터를 통한 객체 실행')
const adapter = new Adapter(adaptee)
execute(adapter)
