import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../services/presupuestos/presupuesto.service';
import Budget from '../../Budget';
import { RegistrosService } from '../../services/registros/registros.service';
import { Registro } from '../../Registro';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private presupuestoService: PresupuestoService, private registrosService:RegistrosService) {}
  ngOnInit(): void {
    this.get_budgets();
    this.get_registers();
  }

  all_budgets: Budget[] = [];
  all_registers: Registro[] = [];
  gastos:number=0;
  balance:number=0;
  

  budget: Budget = { id: 0, presupuesto: 0, divisa: "LPS" };

  get_budgets() {
    this.presupuestoService.get_items().subscribe((all_items: any) => {
      this.all_budgets = all_items;

      if (all_items.length > 0) {
        this.budget = this.all_budgets[0];
    
      }
    });
  }

  get_registers() {
    this.registrosService.get_items().subscribe((all_items: any) => {
      this.all_registers = all_items;

      if (all_items.length > 0) {
         all_items.forEach((element:Registro) => {
           this.gastos+=element.monto;
         });
         this.balance=this.budget.presupuesto-this.gastos;
      }
    });
  }
}
