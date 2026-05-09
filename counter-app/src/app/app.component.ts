import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  count = 0;
  handleIncrement() {
    this.count++;
  }
  handleDecrement() {
    if (this.count == 0) return;
    this.count--;
  }
  handleReset() {
    this.count = 0;
  }
  handleCounter(val: string) {
    if (val == 'increment') {
      this.handleIncrement();
    } else if (val == 'decrement') {
      this.handleDecrement();
    } else {
      this.handleReset();
    }
  }
}
