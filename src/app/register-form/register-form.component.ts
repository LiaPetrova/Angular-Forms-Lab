import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, NgForm, NgModel, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit, AfterViewInit {

  @ViewChild('registerForm') registerForm!: NgForm;

  telBeginning: string[] = [
    '+359',
    '+40',
    '+49',
    '+53'
  ];

  buildings: string[] = [
    'Worker',
    'Chefs',
    'Cook'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }

  onSubmit(): void {
    console.log(this.registerForm);
    this.registerForm.reset();
  }

}

