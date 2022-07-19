import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProgressRequestService } from '../../';
import { dxSummitSpot } from './spot';

@Component({
  selector: 'app-dxsummit-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['../dxsummit.component.css']
})
export class SpotComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private _progressReqSvc: ProgressRequestService,
    private _snackBar: MatSnackBar,
    private _httpcli: HttpClient
  ) { }

  readonly CONST_INTERVAL_REFRESH_SEC: number = 10;
  private _needTableRenderRows: boolean = false;
  private _timerRefreshTable: any;

  secToRefresh!: number;

  @ViewChild(MatTable) table!: MatTable<dxSummitSpot>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private _dataSource!: dxSummitSpot[];
  matDataSource = new MatTableDataSource(this._dataSource);

  columnNames = ['de_call', 'frequency', 'dx_call', 'time', 'info', 'dx_country'];

  ngOnInit(): void {
    this.secToRefresh = this.CONST_INTERVAL_REFRESH_SEC;
    this.beginHttpRequest();
    this._timerRefreshTable = setInterval(() => {
      this.refreshByTimer();
    }, this.CONST_INTERVAL_REFRESH_SEC / 10 * 1000);
  }

  private refreshByTimer(): void {
    if (--this.secToRefresh > 0)
      return;
    console.log('Refresh');

    this.secToRefresh = this.CONST_INTERVAL_REFRESH_SEC;
    this.beginHttpRequest();
  }

  ngAfterViewInit(): void {
    this.matDataSource.paginator = this.paginator;
  }

    ngOnDestroy(): void {
    clearInterval(this._timerRefreshTable);
  }

  formatRowDate(row: dxSummitSpot): string {
    return formatDate(row.time, 'HH:mm d MMM', 'en-US');
  }

  trackRows(index: number, item: dxSummitSpot): number {
    return item.id;
  }

  beginHttpRequest(): void {
    this._progressReqSvc.show();
    this._httpcli.get<dxSummitSpot[]>('http://www.dxsummit.fi/api/v1/spots', { responseType: 'json' }).subscribe(resp => {
      this.matDataSource.data = resp;
      if (this._needTableRenderRows)
        this.table.renderRows();
    },
      (err => {
        this._showLoadError();
        this._progressReqSvc.hide();
      }),
      () => {
        this._progressReqSvc.hide();
        this._needTableRenderRows = true;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.matDataSource.filter = filterValue.trim().toLowerCase();
  }

  /*
  
  // to build config with intellisence
  
    private _matSbConfig: MatSnackBarConfig = {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    };
  */

  private _showLoadError(): void {
    this._snackBar.open('Communication error', 'Dismiss', {
      duration: this.CONST_INTERVAL_REFRESH_SEC * 1000 / 2,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
