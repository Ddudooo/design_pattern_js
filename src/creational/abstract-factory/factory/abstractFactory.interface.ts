import AndroidPhone from '@/creational/abstract-factory/products/android-phone.interface'
import WindowPhone from '@/creational/abstract-factory/products/window-phone.interface'

export default interface AbstractFactory {
  createAndroidPhone(): AndroidPhone

  createWindowPhone(): WindowPhone
}
