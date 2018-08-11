import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidaors } from '../../../../shared/validators';

@Component({
  selector: 'app-adm-user-registration',
  templateUrl: './adm-user-registration.component.html',
  styleUrls: ['./adm-user-registration.component.scss']
})
export class AdmUserRegistrationComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit() {
    this.prepareForm();
  }

  disable() {
    this.form.disable();
  }

  enable() {
    this.form.enable();
  }
  disableAddr() {
    this.form.get('address').disable();
  }
  enableAddr() {
    this.form.get('address').enable();
  }

  prepareForm() {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern('a-z')
      ]),
      email: new FormControl(),
      mobile: new FormControl(),
      gender: new FormControl('Male'),
      address: new FormControl(),
      pincode: new FormControl(null, [
        Validators.required,
        CustomValidaors.pincode
      ])
    });
  }
}
