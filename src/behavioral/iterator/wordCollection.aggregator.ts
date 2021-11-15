import Aggregator from '@/behavioral/iterator/aggregator.interface'
import AlphabeticalOrderIterator from '@/behavioral/iterator/alphabeticalOrder.iterator'
import Iterator from '@/behavioral/iterator/interator.interface'

export default class WordCollection implements Aggregator {
  private items: string[] = []

  public getItems(): string[] {
    return this.items
  }

  public getCount(): number {
    return this.items.length
  }

  public addItem(item: string): void {
    this.items.push(item)
  }

  public getIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this)
  }

  public getReverseIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this, true)
  }
}
