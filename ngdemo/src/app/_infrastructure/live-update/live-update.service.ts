import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { SwUpdate, UnrecoverableStateEvent, VersionEvent } from '@angular/service-worker';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveUpdateService implements OnInit, OnDestroy {

  private _versionUpdatesSubscription!: Subscription;
  private _unrecoverableSubscruption!: Subscription;

  private _isVersionReady = new Subject<boolean>();
  isVersionReadyObservable = this._isVersionReady.asObservable();

  private _isVersionUnrecoverable = new Subject<string>();
  isVersionUnrecoverable = this._isVersionUnrecoverable.asObservable();

  constructor(private _swUpdate: SwUpdate) {
    //console.log('LiveUpdateService', 'constructor');
    //console.log('LiveUpdateService', _swUpdate.isEnabled);

    this._versionUpdatesSubscription = this._swUpdate.versionUpdates.subscribe(e => this._onVersionUpdates(e as VersionEvent));
    this._unrecoverableSubscruption = this._swUpdate.unrecoverable.subscribe(e => this._onUnrecoverable(e as UnrecoverableStateEvent));
  }

  ngOnInit(): void {
    //console.log('LiveUpdateService', 'ngOnInit');
  }

  ngOnDestroy(): void {
    //console.log('LiveUpdateService', 'ngOnDestroy');

    this._versionUpdatesSubscription.unsubscribe();
    this._unrecoverableSubscruption.unsubscribe();
  }

  private _onVersionUpdates(e: VersionEvent): void {
    //console.log('LiveUpdateService', '_onVersionUpdates', e);

    if (e.type == 'VERSION_READY') {
      this._isVersionReady.next(true);
    }
  }

  private _onUnrecoverable(e: UnrecoverableStateEvent): void {
    //console.log('LiveUpdateService', '_onUnrecoverable', e);

    this._isVersionUnrecoverable.next(e.reason);
  }
}
