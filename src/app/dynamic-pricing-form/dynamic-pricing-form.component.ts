import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dynamic-pricing-form',
  templateUrl: './dynamic-pricing-form.component.html',
  styleUrls: ['./dynamic-pricing-form.component.scss']
})
export class DynamicPricingFormComponent implements OnInit {
  fileId: number;
  feesForm: FormGroup;
  constructor(private fb:FormBuilder,
    private snackBar: MatSnackBar) {
  }

  get payType():FormArray{
    return <FormArray> this.feesForm.get('payType');
  }
  
  ngOnInit(): void {
    this.feesForm = this.fb.group({
      payType: this.fb.array([this.buildPayTypeItem()])
    })
  }

  buildPayTypeItem():FormGroup{
    return this.fb.group({
      type:['', [Validators.required]],
      price:['', [Validators.required]],
    })
  }

  addPayTypeItem(){
    this.payType.push(this.buildPayTypeItem());
  }

  deletePayTypeItem(index){
    console.log(index)
    this.payType.removeAt(index);
  }

  confirmPrices(){
    this.openSnackBar("check console for form bundle")
    console.log(this.feesForm.value)
  }

  openSnackBar(message?: string) {
    this.snackBar.open(message, "close", {
      verticalPosition: "top",
      horizontalPosition: "center",
    });
  }
}
