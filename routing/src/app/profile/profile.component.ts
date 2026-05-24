import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  userName: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // For Link
    // this.userName = this.route.snapshot.paramMap.get('name');
    // console.log(this.userName);

    // for Button
    // this.route.queryParamMap.subscribe((params) => {
    //   this.userName = params.get('name');
    //   console.log(this.userName);
    // });

    this.route.data.subscribe((data) => {
      this.userName = data['name'];
      console.log(this.userName);
    });
  }
}
