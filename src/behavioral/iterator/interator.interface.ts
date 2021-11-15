export default interface Iterator<T> {
  // 현재 값 반환
  current(): T
  // 다음 객체 반환
  next(): T
  // 현재 값의 키 반환
  key(): number
  // 현재 값 검증
  valid(): boolean
  // 첫 번째로
  rewind(): void
}
