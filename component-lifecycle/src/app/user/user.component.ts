import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() counter = 0;
  name = 'John Doe';
  constructor() {
    console.log('UserComponent constructor called');
    this.name = 'Sid';
  }

  ngOnInit() {
    console.log('UserComponent ngOnInit called');
    this.name = 'John';
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

  ngOnChanges() {
    console.log('ngValuesChanges called');
  }
}
