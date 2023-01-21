import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
  ) {}

  public close(): void {
    this.dialogRef.close();
  }
}
