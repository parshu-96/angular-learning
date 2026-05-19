import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // display = false;
  // toggleDiv = false;
  // color = 1;
  // handleColor(val: number) {
  //   this.color = val;
  // }
  // handleInput(event: Event) {
  //   this.color = Number((event.target as HTMLInputElement).value);
  // }
  // color = 'green';
  // handleColor(val: string) {
  //   this.color = val;
  // }
  users = ['Parmanand', 'Prajakta', 'Rohit', 'Mayur'];
  students = [
    { name: 'Parmanand', age: 22, email: 'parmanand@example.com' },
    { name: 'Prajakta', age: 21, email: 'prajakta@example.com' },
    { name: 'Rohit', age: 23, email: 'rohit@example.com' },
    { name: 'Mayur', age: 24, email: 'mayur@example.com' },
  ];

  getName(name: string) {
    console.log(name);
  }
}
