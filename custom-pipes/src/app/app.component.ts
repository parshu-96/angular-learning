import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrenyConvertorPipe } from './pipe/curreny-convertor.pipe';

@Component({
  selector: 'app-root',
  imports: [CurrenyConvertorPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'custom-pipes';
  amount = 100;
}
