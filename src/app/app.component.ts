import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dummyApp-dynamicValidation';

  dummyForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    /* 4. Initialize Form */
    this.dummyForm = this.formBuilder.group({
      country: ['A', Validators.required],
      county: ['']
    });
  }

  /* Set County as Required based on Country Selected */
  onCountryChange() {
    let countrySelected = this.dummyForm.get('country').value;
    if(countrySelected === 'B') {
      this.dummyForm.get('county').setValidators([Validators.required]); // 5.Set Required Validator
      this.dummyForm.get('county').updateValueAndValidity();
    } else {
      this.dummyForm.get('county').clearValidators(); // 6. Clear All Validators
      this.dummyForm.get('county').updateValueAndValidity();
    }
  }
}


