import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FormService} from "../../services/form.service";

type ClientTypes = 'individual' | 'entity'

@Component({
  selector: 'app-first-step', templateUrl: './first-step.component.html', styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent {
  public selectedClientType: ClientTypes | null = null;

  public individualForm: FormGroup;

  public entityForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private formService: FormService) {
    if (formService.entityForm) {
      this.selectedClientType = 'entity';
    } else {
      this.selectedClientType = 'individual';
    }

    this.individualForm = formService.individualForm || this.formBuilder.group({
      surname: ['', [Validators.required, Validators.maxLength(255)]],
      name: ['', [Validators.required, Validators.maxLength(255)]],
      patronymic: ['', Validators.maxLength(255)],
      id: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]]
    }, {
      updateOn: "change"
    });
    this.entityForm = formService.entityForm || this.formBuilder.group({
      companyName: ['', Validators.required], id: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]],
    }, {
      updateOn: "change"
    });
  }

  public submit(): void {
    if (this.selectedClientType === 'individual' && this.individualForm.valid) {
      this.formService.individualForm = this.individualForm;
      this.formService.entityForm = null;

      this.router.navigate(['second-step']);
    }

    if (this.selectedClientType === 'entity' && this.entityForm.valid) {
      this.formService.entityForm = this.entityForm;
      this.formService.individualForm = null;

      this.router.navigate(['second-step']);
    }
  }

  public clearPrevForm(): void {
    if (this.selectedClientType === 'individual') {
      this.formService.entityForm = null;
      this.entityForm.reset();

      return;
    }

    this.formService.individualForm = null;
    this.individualForm.reset();
  }
}
