import Document from '@/creational/prototype/document'
import DocumentBackReference from '@/creational/prototype/document.backReference'

function prototypePattern() {
  const document = new Document()
  document.text = 'origin document'
  document.noId = 1
  document.written = new Date()
  document.backRef = new DocumentBackReference(document)

  const copyDocument = document.clone()

  if (document.text === copyDocument.text) {
    console.log('정상적으로 text 내용 복사됨')
  } else {
    console.log('text 내용 복사 실패...')
  }

  if (document.noId === copyDocument.noId) {
    console.log('정상적으로 noId 내용 복사됨')
  } else {
    console.log('noid 내용 복사 실패...')
  }

  if (document.written === copyDocument.written) {
    console.log('written 내용 복사 실패...')
    console.log('r같은 객체를 바라봄...')
  } else {
    console.log('정상적으로 written 내용 복사됨')
  }

  if (document.backRef === copyDocument.backRef) {
    console.log('backRef 내용 복사 실패...')
    console.log('같은 객체를 바라봄...')
  } else {
    console.log('정상적으로 backRef 내용 복사됨')
  }
}

prototypePattern()
