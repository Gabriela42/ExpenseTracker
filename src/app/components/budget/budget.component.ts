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
import { Divisas } from '../../Divisas';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent implements OnInit {

  divisasDisponibles = [
    Divisas.LPS,
    Divisas.USD,
  ];

  constructor(
    private formBuilder: FormBuilder,
    private presupuestoService: PresupuestoService
  ) {}

  presupuestoForm!: FormGroup;

  disabled:boolean=true;

  selectedValue: string="";
 
  all_budgets: Budget[] = [];
  budget: Budget = { id: 0, presupuesto: 0, divisa: "LPS" };
  divisas = new FormControl<Divisas | null>(null);

  ngOnInit(): void {
    this.presupuestoForm = this.formBuilder.group({
      presupuesto: [0],
      divisa: this.formBuilder.array([this.formBuilder.control('')]),
      id:[1]
    });
    this.get_budgets();
  }

  disableComponents(){
   this.disabled=false;
  }

  get_budgets() {
    this.presupuestoService.get_items().subscribe((all_items:any) => {
      this.all_budgets = all_items;
      if (all_items.length > 0) {
        this.budget = this.all_budgets[0];

        this.disableComponents();
      }
      else if(all_items.length===0){
      }
    });
  }

  agregarPresupuesto() {
    let id=1;

    let presupuesto=this.presupuestoForm.controls["presupuesto"].value;
    let divisa=this.selectedValue;
    let newBudget:Budget={id,presupuesto,divisa};
    this.presupuestoService.add_item(newBudget).subscribe((response) => {
      this.get_budgets();
    });
  }

  deleteBudget(){
    let id=1;
    let presupuesto=this.presupuestoForm.controls["presupuesto"].value;
    let divisa=this.selectedValue;
    let deleteBudget:Budget={id,presupuesto,divisa};
    this.presupuestoService.delete_item(deleteBudget).subscribe((response) => {
      this.get_budgets();
    });
  }

}
