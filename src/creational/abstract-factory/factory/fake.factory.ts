import AbstractFactory from '@/creational/abstract-factory/factory/abstractFactory.interface'
import AndroidPhone from '@/creational/abstract-factory/products/android-phone.interface'
import WindowPhone from '@/creational/abstract-factory/products/window-phone.interface'
import FakeAndroid from '@/creational/abstract-factory/products/fake-android.phone'
import FakeWindow from '@/creational/abstract-factory/products/fake-window.phone'

export default class FakeFactory implements AbstractFactory {
  private readonly name: string

  public constructor(name: string) {
    this.name = name
  }

  createAndroidPhone(): AndroidPhone {
    return new FakeAndroid(this.name)
  }

  createWindowPhone(): WindowPhone {
    return new FakeWindow(this.name)
  }
}
