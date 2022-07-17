import { Component, OnInit, OnDestroy } from '@angular/core';
import { debounce, debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { ProgressRequestService } from './progress-request.service';

@Component({
  selector: 'app-progress-request',
  templateUrl: './progress-request.component.html',
  styleUrls: ['./progress-request.component.css']
})
export class ProgressRequestComponent implements OnInit, OnDestroy {

  constructor(private _progressReqSvc: ProgressRequestService) { }

  styleDisplay: string = "none";

  private _isProgressObserver: any;

  ngOnInit(): void {
    this._isProgressObserver = this._progressReqSvc.isProgressObservable.pipe(

      debounceTime(200),
      distinctUntilChanged()

    ).subscribe(isProgress => {
      this.styleDisplay = isProgress ? 'block' : 'none';
    });
  }

  ngOnDestroy(): void {
    const sub = this._isProgressObserver as Subscription;
    sub.unsubscribe();
  }

}
