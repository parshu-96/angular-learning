import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  count = signal(20);
  x = 20;

  constructor() {
    effect(() => {
      console.log('Signal Value: ', this.count());
    });
  }

  incrementCountOfSignal() {
    this.count.set(this.count() + 1);
  }
}
