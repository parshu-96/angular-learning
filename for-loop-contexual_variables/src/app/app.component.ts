import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = [
    'Elon Musk',
    'Jeff Bezos',
    'Bill Gates',
    'Mark Zuckerberg',
    'Larry Page',
    'Sergey Brin',
    'Warren Buffett',
    'Steve Jobs',
    'Tim Cook',
    'Satya Nadella',
  ];
  users2 = [];
}
