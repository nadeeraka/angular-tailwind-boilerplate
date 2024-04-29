import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  name: string = '';
  email: string = '';

  isSubmit: boolean = false;

  onSubmit() {
    this.isSubmit = true;
  }
}
