import Subject from '@/behavioral/observer/subject.interface'

export default interface Observer {
  // eslint-disable-next-line no-unused-vars
  update(subject: Subject): void
}
