import {Component, OnDestroy} from '@angular/core';
import {FormService} from "../../services/form.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ModalComponent} from "../modal/modal.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-third-step', templateUrl: './third-step.component.html', styleUrls: ['./third-step.component.css']
})
export class ThirdStepComponent implements OnDestroy {
  public form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
  });

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog, private router: Router, private formService: FormService,) {
    this.form.patchValue({
      email: formService.email,
    })
  }

  ngOnDestroy(): void {
    this.formService.email = this.form.get('email')?.value || null;
  }

  public submit(): void {
    if (this.form.valid) {
      const dialogRef = this.dialog.open(ModalComponent);

      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['first-step']);
        this.formService.clear();
      });
    }
  }
}
