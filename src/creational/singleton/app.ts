import Singleton from '@/creational/singleton/singleton'

function client() {
  const client1 = Singleton.getInstance()
  const client2 = Singleton.getInstance()

  if (client1 === client2) {
    console.log('client1 === client2, 정상적으로 같은 객체 사용!')
  } else {
    console.log('정상적으로 싱글턴이 생성되지 않음.')
  }
}

client()
