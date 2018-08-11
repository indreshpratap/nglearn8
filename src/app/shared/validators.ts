import { FormControl } from '@angular/forms';

export class CustomValidaors {
  static pincode(control: FormControl) {
    if (!control.value) {
      return null;
    }
    if (/^\d{6}$/.test(control.value)) {
      return null;
    } else {
      return { pincode: true };
    }
  }
}
