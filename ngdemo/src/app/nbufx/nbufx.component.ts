import { Component } from '@angular/core';
import { ProgressRequestService } from '../progress-request/progress-request.service';


@Component({
  selector: 'app-nbufx',
  templateUrl: './nbufx.component.html',
  styleUrls: ['./nbufx.component.css']
})
export class NbufxComponent {

  constructor(private progressReqSvc: ProgressRequestService) { }

  showPrb(): void {
    console.log('showPrb');
    this.progressReqSvc.show();
  }

  hidePrb(): void {
    console.log('hidePrb');
    this.progressReqSvc.hide();
  }  

}
