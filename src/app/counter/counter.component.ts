import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CounterService } from './counter.service';
import { CounterActions } from './counter.actions';

@Component({
  selector: 'app-counter',
  template: `
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="subtitle">
          Counter: {{currentValue$ | async}}
        </p>
        <a class="button is-primary is-outlined" (click)="actions.increment()">
          <span class="icon is-small">
            <i class="fa fa-plus"></i>
          </span>
        </a>
        <a class="button is-primary is-outlined" (click)="actions.decrement()">
          <span class="icon is-small">
            <i class="fa fa-minus"></i>
          </span>
        </a>
        <a class="button is-danger is-outlined" (click)="actions.reset()">
          <span class="icon is-small">
            <i class="fa fa-undo"></i>
          </span>
        </a>
      </div>
    </div>
  `
})
export class CounterComponent {
  private currentValue$: Observable<number>;

  constructor(counterService: CounterService, public actions: CounterActions) {
    this.currentValue$ = counterService.getCurrentValue();
  }
}
