import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressRequestService {

  constructor() { }

  private _isProgress = new BehaviorSubject<boolean>(false);
  isProgressObservable = this._isProgress.asObservable();

  show() {
    this._isProgress.next(true);
  }

  hide() {
    this._isProgress.next(false);;
  }
}
