import { Action } from '@ngrx/store';

import { CounterActions } from './counter.actions';
import { Counter, setCounterCurrentValue } from './counter';

export function counterReducer(counter: Counter = {currentValue: 0}, action: Action): Counter {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return setCounterCurrentValue(counter, counter.currentValue + 1);
    case CounterActions.DECREMENT:
      return setCounterCurrentValue(counter, counter.currentValue - 1);
    case CounterActions.RESET:
      return setCounterCurrentValue(counter, 0);
    default:
      return counter;
  }
}
