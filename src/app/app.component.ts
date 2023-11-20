import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notesapp';
  products = ['apple', 'orange', 'banana'];
  loggedIn = true;
  isRed = false;

  change() {
    this.isRed = !this.isRed;
    this.loggedIn = !this.loggedIn;
  }
}
