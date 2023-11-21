import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../notes';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
  name = new FormControl('James...');

  names = 'James';
  notes: Note[] = [
    {
        id: 0,
        title: 'House of Cards',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
    {
        id: 1,
        title: 'Game of Thrones',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
    {
        id: 2,
        title: 'Scandal',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
    {
        id: 3,
        title: 'Suits',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
    {
        id: 4,
        title: 'Billions',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
    {
        id: 5,
        title: 'Blacklist',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    }
  ];

  show(title: string){
    alert(title);
  }

  showName() {
    alert(this.name.value);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
