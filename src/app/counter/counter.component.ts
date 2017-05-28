import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CounterService } from './counter.service';
import { CounterActions } from './counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  private currentValue$: Observable<number>;

  constructor(counterService: CounterService, public actions: CounterActions) {
    this.currentValue$ = counterService.getCurrentValue();
  }
}
