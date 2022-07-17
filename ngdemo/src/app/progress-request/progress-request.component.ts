import { Component, OnInit } from '@angular/core';
import { ProgressRequestService } from './progress-request.service';

@Component({
  selector: 'app-progress-request',
  templateUrl: './progress-request.component.html',
  styleUrls: ['./progress-request.component.css']
})
export class ProgressRequestComponent implements OnInit {

  constructor(private svc: ProgressRequestService) { }

  styleDisplay: string = "none";

  ngOnInit(): void {
    this.svc.isProgressObservable.subscribe(isProgress => {
      this.styleDisplay = isProgress ? 'block' : 'none';
    });
    }
}
