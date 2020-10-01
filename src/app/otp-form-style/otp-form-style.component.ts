import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-otp-form-style',
  templateUrl: './otp-form-style.component.html',
  styleUrls: ['./otp-form-style.component.scss']
})
export class OtpFormStyleComponent implements OnInit {
  deviceAuthForm: FormGroup;
  isLoading: boolean;
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeDeviceAuthForm();
  }

  get digits(): FormArray {
    return <FormArray>this.deviceAuthForm.get("digits");
  }

  buildDigitsFormArrItem(val = null) {
    return new FormControl(val, Validators.required);
  }

  initializeDeviceAuthForm() {
    this.deviceAuthForm = this.fb.group({
      digits: this.fb.array([]),
    });
    for (let i of Array(6).keys()) {
      this.digits.push(this.buildDigitsFormArrItem());
    }
  }

  authDevice(value) {
    let code = +`${value.digits.join("")}`;
    this.openSnackBar(`your code is: ${code}`)
  }

  getInput(id): HTMLElement {
    return document.getElementById(`${id}`);
  }

  onKeyUpEvent(event) {
    const eventCode = event.which || event.keyCode;
    const el = event.target as HTMLInputElement;
    const id = +el.id;
    const val = el.value;
    if (eventCode === 8 && id !== 1) {
      let curel: any;
      curel = this.getInput(id - 1);
      curel.focus();
      curel.value = "";
    } else if (eventCode > 46 && eventCode < 65) {
      el.value = val.slice(0, 1);
      if (val.length > 0 && id < 6) {
        this.getInput(id + 1).focus();
      }
    }
  }

  openSnackBar(message?: string) {
    this.snackBar.open(message, "close", {
      verticalPosition: "top",
      horizontalPosition: "center",
    });
  }
}
