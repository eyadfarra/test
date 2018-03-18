import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  notes = [];
  note = '';
  notes_count = 0;

  constructor(private _data: DataService) {
    this._data.note.subscribe(res => this.notes = res);
    this._data.changeNote(this.notes);
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
