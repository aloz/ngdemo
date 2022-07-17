import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressRequestService {

  constructor() { }

  private isProgress = new BehaviorSubject<boolean>(false);
  isProgressObservable = this.isProgress.asObservable();

  show() {
    this.isProgress.next(true);;
  }

  hide() {
    this.isProgress.next(false);;
  }
}
