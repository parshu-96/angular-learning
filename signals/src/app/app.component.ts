import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // count = signal(20);
  // x = 20;

  // constructor() {
  //   effect(() => {
  //     console.log('Signal Value: ', this.count());
  //   });
  // }

  // incrementCountOfSignal() {
  //   this.count.set(this.count() + 1);
  // }
  //data = signal<string | number>(10);
  data: WritableSignal<string | number> = signal<string | number>(10);
  count: Signal<Number> = computed(() => 20);
  updateData() {
    this.data.set('Hello World');
  }
}
