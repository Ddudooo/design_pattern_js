import Iterator from '@/behavioral/iterator/interator.interface'
import WordCollection from '@/behavioral/iterator/wordCollection.aggregator'

export default class AlphabeticalOrderIterator implements Iterator<string> {
  private collection: WordCollection

  private position: number = 0

  private reverse: boolean = false

  constructor(collection: WordCollection, isReverse = false) {
    this.collection = collection
    this.reverse = isReverse

    if (isReverse) {
      this.position = collection.getCount() - 1
    }
  }

  public rewind() {
    this.position = this.reverse ? this.collection.getCount() - 1 : 0
  }

  public current(): string {
    return this.collection.getItems()[this.position]
  }

  public key(): number {
    return this.position
  }

  public next(): string {
    const item = this.collection.getItems()[this.position]
    this.position += this.reverse ? -1 : 1
    return item
  }

  public valid(): boolean {
    if (this.reverse) {
      return this.position >= 0
    }

    return this.position < this.collection.getCount()
  }
}
