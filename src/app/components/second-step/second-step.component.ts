import {Component, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {FormService} from "../../services/form.service";

@Component({
  selector: 'app-second-step', templateUrl: './second-step.component.html', styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent implements OnDestroy {
  public file: File | null = null;

  public isPdf: boolean | null = null;

  constructor(private router: Router, private formService: FormService) {
    this.file = formService.file;

    if (this.file) this.isPdf = true;
  }

  ngOnDestroy(): void {
    this.saveData();
  }

  public upload(event: Event): void {
    this.isPdf = true;
    this.file = null;

    const input = event.target as HTMLInputElement;
    const file: File | null = input.files && input.files[0];

    if (!file || file.type !== 'application/pdf') {
      this.isPdf = false;
      return;
    }


    this.file = file;
  }

  public submit(): void {
    if (this.isPdf && this.file) {
      this.router.navigate(['third-step']);
      this.saveData();
    }
  }

  private saveData(): void {
    this.formService.file = this.file;
  }
}
