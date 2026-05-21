import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  zoom = false;
  bgColor = 'lightblue';
  headingSizeSmall = '20px';
  headingSizeBig = '40px';

  toggleZoom() {
    this.zoom = !this.zoom;
  }
}
