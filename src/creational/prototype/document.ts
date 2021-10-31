import DocumentBackReference from '@/creational/prototype/document.backReference'

export default class Document {
  text: string | undefined

  noId: number | undefined

  written: Date | undefined

  backRef: DocumentBackReference | undefined

  public clone(): this {
    const clone = Object.create(this)

    // @ts-ignore
    clone.written = Object.create(this.written)

    clone.text = this.text
    clone.noId = this.noId

    clone.backRef = {
      ...this.backRef,
      prototype: { ...this },
    }

    return clone
  }
}
