import AbstractFactory from '@/creational/abstract-factory/factory/abstractFactory.interface'
import FakeFactory from '@/creational/abstract-factory/factory/fake.factory'
import AndroidPhone from '@/creational/abstract-factory/products/android-phone.interface'
import WindowPhone from '@/creational/abstract-factory/products/window-phone.interface'
import KoreaFactory from '@/creational/abstract-factory/factory/korea.factory'

function orderPhonesByFactory(factory: AbstractFactory): [AndroidPhone, WindowPhone] {
  const android = factory.createAndroidPhone()
  const window = factory.createWindowPhone()

  return [android, window]
}

console.log('create fake with Factory!')

const fakeFactory = new FakeFactory('FAKE-FACTORY')
const [fakeAndroid, fakeWindow] = orderPhonesByFactory(fakeFactory)

console.log(fakeAndroid.androidFunc())
console.log(fakeWindow.windowFunc())
console.log(fakeWindow.playGame())

console.log('create Factory!')
const realFactory = new KoreaFactory('Korea-Factory')
const [realAndroid, realWindow] = orderPhonesByFactory(realFactory)

console.log(realAndroid.androidFunc())
console.log(realWindow.windowFunc())
console.log(realWindow.playGame())
