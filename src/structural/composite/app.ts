import Composite from '@/structural/composite/composite'
import Child from '@/structural/composite/child'

function sample() {
  const root = new Composite('루트')
  const parent = new Composite('부모')
  const child = new Child('고아 노드')

  root.add(parent)
  parent.add(child)

  console.log('컴포짓 패턴으로 구현해보는 트리 구조')
  root.operation()

  const parentB = new Composite('부모 B')
  parent.add(parentB)
  const childB = new Child('고아 노드 B')
  parentB.add(childB)
  const childC = new Child('고아 노드 C')
  parentB.add(childC)

  console.log('서브 트리 추가')
  root.operation()

  root.remove({ element: parent })

  console.log('부모 제거')
  root.operation()
}

sample()
