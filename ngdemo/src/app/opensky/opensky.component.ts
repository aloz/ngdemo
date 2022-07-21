import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AsyncSubject, BehaviorSubject, debounce, debounceTime, map, Observable, pipe, ReplaySubject, Subject, delay, distinct } from 'rxjs';

import { MatTable, MatTableDataSource } from '@angular/material/table';

import { ProgressRequestService } from '../';
import { MatSnackBar } from '@angular/material/snack-bar';

import { openskyUtils } from './openskyUtils'
import { openSkyStateWrapper, openSkyState, openSkyStateView } from './types/openSkyStateTypes'
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-opensky',
  templateUrl: './opensky.component.html',
  styleUrls: ['./opensky.component.css']
})
export class OpenskyComponent implements OnInit, AfterViewInit {

  readonly CONST_INTERVAL_REFRESH_SEC: number = 10;

  private readonly _CONST_HTTPHEADER_X_Rate_Limit_Retry_After_Seconds = "X-Rate-Limit-Retry-After-Seconds";

  private readonly _CONST_BASIC_AUTH_TOKEN = 'YWxvejp4VkBuSiFTOWNxM0BqRGY=';
  private _httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Content-Accept': 'application/json',
    'Authorization': `Basic ${this._CONST_BASIC_AUTH_TOKEN}`
  });

  @ViewChild(MatTable) table!: MatTable<openSkyState>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _httpcli: HttpClient,
    private _progressRequestService: ProgressRequestService,
    private _snackBar: MatSnackBar,
  ) { }

  private _dataSource: openSkyStateView[] = [];
  matTableDataSource = new MatTableDataSource(this._dataSource);

  columnNames = ['icao24', 'callsign', 'origin_country', 'baro_altitude', 'geo_altitude', 'velocity', 'vertical_rate', 'categoryName'];

  /*
   
    dsObservable2: Subject<openSkyState[]> = new Subject();
    dsObservable3: BehaviorSubject<openSkyState[]> = new BehaviorSubject(this._dataSource);
    dsObservable4: AsyncSubject<openSkyState[]> = new AsyncSubject();
    dsObservable5: ReplaySubject<openSkyState[]> = new ReplaySubject();
  
  */

  ngOnInit(): void {
    this.beginHttpRequest();
  }

  ngAfterViewInit(): void {
    this.matTableDataSource.paginator = this.paginator;
  }

  beginHttpRequest(): void {
    this._progressRequestService.show();

    this._httpcli.get<openSkyStateWrapper>(
      // 'https://opensky-network.org/api/states/all?lamin=18.91619&lomin=-171.791110603&lamax=71.3577635769&lomax=-66.96466&extended=1',
      '/assets/states1.json', // TODO
      { headers: this._httpHeaders }
    ).subscribe(resp => {
      this._dataSource = resp.states.map((item => new openSkyStateView(<any>item)));
      this._dataSource = this._dataSource.sort(openskyUtils.sortOpenskyStatesDesc);
      this.matTableDataSource.data = this._dataSource;
    },
      (err => {
        this._progressRequestService.hide();
        const ex: HttpErrorResponse = err as HttpErrorResponse;
        let msg = `Communication error. ${ex.error}`;
        this._snackBar.open(msg, 'Dismiss', {
          duration: this.CONST_INTERVAL_REFRESH_SEC * 1000 / 2,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      }),
      () => {
        this._progressRequestService.hide();
      }
    );
  }

  trackRows(index: number, item: openSkyState): string {
    return item.icao24;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.matTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}
