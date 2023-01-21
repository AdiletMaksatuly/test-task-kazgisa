import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  public individualForm: FormGroup | null = null;

  public entityForm: FormGroup | null = null;

  public file: File | null = null;

  public email: string | null = null;

  public clear(): void {
    this.individualForm = null;
    this.entityForm = null;
    this.file = null;
    this.email = null;
  }
}
