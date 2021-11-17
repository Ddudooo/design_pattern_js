import Caretaker from '@/behavioral/memento/caretaker.backup'
import Originator from '@/behavioral/memento/originator'

const originator = new Originator('메멘토 디자인 패턴 타입스크립트')
const caretaker = new Caretaker(originator)

caretaker.backUp()
originator.some()

caretaker.backUp()
originator.some()

caretaker.backUp()
originator.some()

console.log('')
caretaker.showHistory()

console.log('백업 불러오기')
caretaker.undo()

console.log('한번 더 백업 불러오기')
caretaker.undo()
