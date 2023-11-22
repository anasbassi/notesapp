import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  template: `
    <div>
      <h1>{{ logo }}</h1>
      <img [src]="mageURL" alt="">
    </div>
    <app-navigation />
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logo = 'My Logo';
  mageURL = 'tree.jpg';

  login() {
    alert('Welcome!');
  }
}
