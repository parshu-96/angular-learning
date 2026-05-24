import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  users = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 30,
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      age: 25,
    },
    {
      id: '3',
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      age: 28,
    },
    {
      id: '4',
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
      age: 35,
    },
    {
      id: '5',
      name: 'Charlie Davis',
      email: 'charlie.davis@example.com',
      age: 40,
    },
  ];
}
