import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { PresupuestoService } from '../../services/presupuestos/presupuesto.service';
import Budget from '../../Budget';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private presupuestoService: PresupuestoService
  ) {}

  presupuestoForm!: FormGroup;
  
  all_budgets: Budget[] = [];
  budget: Budget = { id: 0, presupuesto: 0, divisa: 0 };
  edit:boolean=false;

  ngOnInit(): void {
    this.presupuestoForm = this.formBuilder.group({
      presupuesto: [0],
      divisa:[0],
      id:[1]
    });
    this.get_budgets();
  }

  get_budgets() {
    this.presupuestoService.get_items().subscribe((all_items:any) => {
      this.all_budgets = all_items;

      if (all_items.length > 0) {
        this.budget = this.all_budgets[0];
      }
    });
  }

  agregarPresupuesto() {
    debugger;
    this.presupuestoService.add_item(this.presupuestoForm.value).subscribe((response) => {
      debugger;
    });
  }
}
