import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressRequestService {

  constructor() { }

  private _isProgress = new Subject();
  isProgressObservable = this._isProgress.asObservable();

  show() {
    this._isProgress.next(true);
  }

  hide() {
    this._isProgress.next(false);
  }
}
