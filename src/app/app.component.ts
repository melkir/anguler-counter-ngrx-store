import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{title}}
          </h1>
        </div>
      </div>
    </section>
    <app-counter></app-counter>
  `,
  styles: [`
    .title {
      text-align: center;
    }
  `]
})
export class AppComponent {
  title = 'Counter with ngrx/store !';
}
