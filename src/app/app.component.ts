import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NotesListComponent } from './notes-list/notes-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, HeaderComponent, HomeComponent, NgFor, NotesListComponent, AddNoteComponent],
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
