export interface Handle {
  // eslint-disable-next-line no-unused-vars
  setNext(handler: Handle): Handle

  // eslint-disable-next-line no-unused-vars
  handle(param: string): string | null
}
