import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = '';
  displayName = '';
  email = '';
  getName(event: Event) {
    console.log(event);
    this.name = event.target ? (event.target as HTMLInputElement).value : '';
    console.log(this.name);
  }
  showName() {
    this.displayName = this.name;
  }
  getEmail(val: string) {
    console.log('Email Is ', val);
    this.email = val;
  }
  setEmail() {
    this.email = 'Parshu@gmail.com';
  }
}
