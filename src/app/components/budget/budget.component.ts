import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  presupuestoForm!: FormGroup;

  ngOnInit(): void {
    this.presupuestoForm = this.formBuilder.group({
      presupuesto: new FormControl(0, Validators.required),
      divisa: new FormControl(0),
    });
  }

  agregarPresupuesto() {
    alert("funca");
  }
}
