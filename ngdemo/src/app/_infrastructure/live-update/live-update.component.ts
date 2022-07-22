import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';

import { LiveUpdateService } from './live-update.service';
import { DialogUpdateComponent } from './dialogs/dialog-update/dialog-update.component';

@Component({
  selector: 'app-live-update',
  templateUrl: './live-update.component.html',
  styleUrls: ['./live-update.component.css']
})
export class LiveUpdateComponent implements OnInit, OnDestroy {

  private _lusVersionReadySubscription!: Subscription;
  private _lusVersionUnrecoverableSubscription!: Subscription;

  constructor(
    private dialog: MatDialog,
    private _lus: LiveUpdateService
  ) { }

  ngOnInit(): void {
    // console.log('LiveUpdateComponent', 'ngOnInit');
    this._lusVersionReadySubscription = this._lus.isVersionReadyObservable.subscribe(x => { this._onVersionReady(x as boolean); });
    this._lusVersionUnrecoverableSubscription = this._lus.isVersionUnrecoverable.subscribe(x => { this._onVersionUnrecoverable(x as string); });
  }

  ngOnDestroy(): void {
    // console.log('LiveUpdateComponent', 'ngOnDestroy');
    this._lusVersionReadySubscription.unsubscribe();
    this._lusVersionUnrecoverableSubscription.unsubscribe();
  }

  private _onVersionReady(isReady: boolean): void {
    if (isReady) {
      // console.log('LiveUpdateComponent', '_onVersionReady');
      this.dialog.open(DialogUpdateComponent);
    }
  }

  private _onVersionUnrecoverable(reason: string): void {
    // console.log('LiveUpdateComponent', '_onVersionUnrecoverable', reason);
    this.dialog.open(DialogUpdateComponent);
  }

}
