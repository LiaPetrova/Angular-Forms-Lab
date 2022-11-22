import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-reactive-form',
  templateUrl: './register-reactive-form.component.html',
  styleUrls: ['./register-reactive-form.component.css']
})
export class RegisterReactiveFormComponent implements OnInit {

  get passwordsGroup(): FormGroup {
    return this.registerForm.controls['passwords'] as FormGroup;
  }

  registerForm: FormGroup = this.formBuilder.group({
    username: new FormControl('', [Validators.required, usernameValidator]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('', [Validators.required, Validators.minLength(9)]),
    building: new FormControl(''),
    passwords: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      repassword: new FormControl('', [passwordsValidator])
    })

  });

  telPrefixes: string[] = [
    '+359',
    '+40',
    '+49',
    '+53'
  ];

  buildings: string[] = [
    'Designer',
    'Worker',
    'Chefs',
    'Cook'
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}

const usernameValidator: ValidatorFn = (control: AbstractControl) => {
  const pattern = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
  const validUsername = pattern.test(control.value);

  if (!validUsername) {
    return {usernameValid: true};
  }  
  return null;
}

const passwordsValidator: ValidatorFn = (control: AbstractControl) => {
  
  if (!control.parent || control.value !== control.parent?.value.password) {
    return {passwordsMatch: true}
  }

  return null;
}
