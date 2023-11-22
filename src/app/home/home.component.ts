import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNoteComponent } from '../add-note/add-note.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AddNoteComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
