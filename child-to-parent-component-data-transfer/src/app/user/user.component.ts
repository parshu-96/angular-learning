import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Output() handleUsers = new EventEmitter();
  users = ['John', 'Jane', 'Doe', 'Smith', 'Alice', 'Bob'];
  loadData() {
    this.handleUsers.emit(this.users);
  }
}
