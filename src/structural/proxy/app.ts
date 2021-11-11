import Subject from '@/structural/proxy/subject.interface'
import RealSubject from '@/structural/proxy/real.subject'
import ProxySubject from '@/structural/proxy/proxy.subject'

function app(subject: Subject) {
  return subject.request()
}

console.log('프록시 패턴')
const realInstance = new RealSubject('REAL')
console.log(app(realInstance))

console.log('프록시 패턴')
const proxy = new ProxySubject(realInstance)

console.log(app(proxy))

setTimeout(() => {
  console.log(app(proxy))
}, 100)
