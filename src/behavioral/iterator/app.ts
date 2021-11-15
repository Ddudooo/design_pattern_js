import WordCollection from '@/behavioral/iterator/wordCollection.aggregator'

const collection = new WordCollection()
collection.addItem('타입스크립트')
collection.addItem('디자인패턴')
collection.addItem('이터레이터')

const iterator = collection.getIterator()

console.log('정방향 순회')

while (iterator.valid()) {
  console.log(iterator.next())
}
console.log('====================================')
console.log('역방향 순회')
const reverseIt = collection.getReverseIterator()

while (reverseIt.valid()) {
  console.log(reverseIt.next())
}
