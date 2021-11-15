import Iterator from '@/behavioral/iterator/interator.interface'

export default interface Aggregator {
  getIterator(): Iterator<string>
}
