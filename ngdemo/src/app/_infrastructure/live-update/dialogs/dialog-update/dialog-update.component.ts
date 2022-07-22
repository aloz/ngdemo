import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.css']
})
export class DialogUpdateComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogUpdateComponent>
  ) { }

  ngOnInit(): void {
  }

  onOkClick(): void {
    this.dialogRef.close();
    document.location.reload();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
