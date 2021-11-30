import ConcreateComponentA from '@/behavioral/visitor/concreateA.component'
import ConcreateComponentB from '@/behavioral/visitor/concreateB.Component'
import ConcreateVisitorA from '@/behavioral/visitor/concreateA.visitor'
import Component from '@/behavioral/visitor/component.visitor'
import Visitor from '@/behavioral/visitor/visitor.interface'
import ConcreateVisitorB from '@/behavioral/visitor/concreateB.visitor'

// eslint-disable-next-line no-unused-vars
function componentVisit(components: Component[], visitor: Visitor) {
  // eslint-disable-next-line no-restricted-syntax
  for (const component of components) {
    component.accept(visitor)
  }
}

const components = [new ConcreateComponentA(), new ConcreateComponentB()]

const visitorA = new ConcreateVisitorA()
componentVisit(components, visitorA)
console.log()

const visitorB = new ConcreateVisitorB()
componentVisit(components, visitorB)
console.log()
