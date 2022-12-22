import { Component } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-budget',
  templateUrl: './edit-budget.component.html',
  styleUrls: ['./edit-budget.component.css']
})
export class EditBudgetComponent {
  formulario!: FormGroup;
  showPreview = false;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<EditBudgetComponent>) {}
  ngOnInit(): void {
    this.formulario = this.fb.group({
      presupuesto: ['', Validators.required],
      divisa: [''],
    });
  }
}
