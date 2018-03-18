import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private notes = new BehaviorSubject(['note1', 'note2', 'note3']);
  note = this.notes.asObservable();

  constructor() {
  }

  changeNote(note) {
    this.notes.next(note);
  }
}
