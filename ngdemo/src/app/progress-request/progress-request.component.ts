import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProgressRequestService } from './progress-request.service';

@Component({
  selector: 'app-progress-request',
  templateUrl: './progress-request.component.html',
  styleUrls: ['./progress-request.component.css']
})
export class ProgressRequestComponent implements OnInit, OnDestroy {

  constructor(private _progressReqSvc: ProgressRequestService) { }

  styleDisplay: string = "none";

  private _isProgressSubscr: any;

  ngOnInit(): void {
    this._isProgressSubscr = this._progressReqSvc.isProgressObservable.subscribe(isProgress => {
      this.styleDisplay = isProgress ? 'block' : 'none';
    });
  }

  ngOnDestroy(): void {
    console.log('ProgressRequestService unsubscribed');
    const sub = this._isProgressSubscr as Subscription;
    sub.unsubscribe();
  }

}
