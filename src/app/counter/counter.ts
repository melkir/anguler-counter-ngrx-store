export interface Counter {
  readonly currentValue: number;
}

export function setCounterCurrentValue(counter: Counter, currentValue: number): Counter {
  return Object.assign({}, counter, {currentValue});
}
