import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // name = new FormControl();
  // password = new FormControl();
  // displayValues() {
  //   console.log(this.name.value);
  //   console.log(this.password.value);
  // }
  profileForm = new FormGroup({
    name: new FormControl('John Doe'),
    email: new FormControl('john.doe@example.com'),
    password: new FormControl('password123'),
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }

  setValues() {
    this.profileForm.setValue({
      name: 'Jane Doe 2',
      email: 'jane.doe@example.com',
      password: 'newpassword123',
    });
  }
}
