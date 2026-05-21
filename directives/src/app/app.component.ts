import { NgFor, NgIf, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  show = false;
  students = ['Anil', 'Sunil', 'Rohit', 'Suresh', 'Mahesh'];

  studentsData = [
    {
      name: 'Anil',
      age: 25,
      city: 'Delhi',
    },
    {
      name: 'Sunil',
      age: 30,
      city: 'Mumbai',
    },
    {
      name: 'Rohit',
      age: 28,
      city: 'Bangalore',
    },
    {
      name: 'Suresh',
      age: 22,
      city: 'Chennai',
    },
    {
      name: 'Mahesh',
      age: 27,
      city: 'Hyderabad',
    },
  ];

  login = true;
  block = 0;
  updateBlock() {
    this.block = this.block + 1;
  }
}
