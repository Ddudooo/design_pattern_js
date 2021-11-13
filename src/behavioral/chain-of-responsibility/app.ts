import { Handle } from '@/behavioral/chain-of-responsibility/handle.interface'
import HandlerA from '@/behavioral/chain-of-responsibility/handlerA'
import HandlerB from '@/behavioral/chain-of-responsibility/handlerB'
import HandlerC from '@/behavioral/chain-of-responsibility/handlerC'

function app(handler: Handle) {
  const params = ['D', 'E', 'A', 'C', 'B']

  // eslint-disable-next-line no-restricted-syntax
  for (const param of params) {
    console.log('파라미터 입력!')
    const result = handler.handle(param)
    if (result) {
      console.log(`${param} => ${result}`)
    } else {
      console.log(`처리 불가능...`)
    }
  }
}

const handlerA = new HandlerA()
const handlerB = new HandlerB()
const handlerC = new HandlerC()

handlerA.setNext(handlerB).setNext(handlerC)

app(handlerA)

app(handlerC)
