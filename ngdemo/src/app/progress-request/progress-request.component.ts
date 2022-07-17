import { Component } from '@angular/core';
import { ProgressRequestService } from './progress-request.service';

@Component({
  selector: 'app-progress-request',
  templateUrl: './progress-request.component.html',
  styleUrls: ['./progress-request.component.css']
})
export class ProgressRequestComponent {

  constructor(private svc: ProgressRequestService) { }

  styleDisplay: string = this.svc.isStyleDisplayBlock ? "block" : "none";

}
