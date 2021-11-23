import AbstractTemplate from '@/behavioral/template/template.abstract'
import ConcreateA from '@/behavioral/template/concreateA.template'
import ConcreateB from '@/behavioral/template/concreateB.template'

function execute(template: AbstractTemplate) {
  template.some()
}

console.log('템플릿 메소드')

execute(new ConcreateA())

console.log('변경 하고 싶은 부분만 변경=====')

execute(new ConcreateB())
