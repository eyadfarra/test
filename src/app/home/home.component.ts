import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  notes = [];
  note = '';
  notes_count = 0;

  constructor() {
  }

  ngOnInit() {
    this.notes_count = this.notes.length;
  }

  add_note() {
    this.notes.push(this.note);
    this.note = '';
    this.notes_count = this.notes.length;
  }

}
