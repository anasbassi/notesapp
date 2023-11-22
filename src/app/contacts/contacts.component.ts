import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesListComponent } from '../notes-list/notes-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, NotesListComponent, RouterModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}
