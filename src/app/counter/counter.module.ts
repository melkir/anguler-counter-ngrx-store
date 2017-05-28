import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterActions } from './counter.actions';
import { CounterService } from './counter.service';
import { CounterComponent } from './counter.component';

@NgModule({
  imports: [CommonModule],
  providers: [
    CounterActions,
    CounterService
  ],
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class CounterModule {}
