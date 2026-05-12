import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  handleEvent(event: Event) {
    console.log('Event:', event.type);
    console.log('Input value:', (event.target as HTMLInputElement).value);
  }
}
