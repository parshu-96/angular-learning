import { afterRender, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('user') UserComponent: any;
  title = 'component-lifecycle';
  counter = 0;

  constructor() {
    afterRender(() => {
      console.log('After Re render', this.UserComponent.counter);
    });
  }

  incrementCounter() {
    this.counter++;
  }
}
