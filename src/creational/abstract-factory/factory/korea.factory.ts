import AbstractFactory from '@/creational/abstract-factory/factory/abstractFactory.interface'
import AndroidPhone from '@/creational/abstract-factory/products/android-phone.interface'
import WindowPhone from '@/creational/abstract-factory/products/window-phone.interface'
import Galaxy from '@/creational/abstract-factory/products/galaxy.phone'
import Lumia from '@/creational/abstract-factory/products/lumia.phone'

export default class KoreaFactory implements AbstractFactory {
  private readonly name: string

  public constructor(name: string) {
    this.name = name
  }

  createAndroidPhone(): AndroidPhone {
    return new Galaxy(this.name)
  }

  createWindowPhone(): WindowPhone {
    return new Lumia(this.name)
  }
}
