import Document from '@/creational/prototype/document'

export default class DocumentBackReference {
  document: Document

  constructor(document: Document) {
    this.document = document
  }
}
