export default class Singleton {
  private static instance: Singleton

  // eslint-disable-next-line no-useless-constructor,no-empty-function
  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }

  public bussiness(): string {
    return `this is Singleton. ${JSON.stringify(this)}`
  }
}
