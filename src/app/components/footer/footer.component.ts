import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../services/presupuestos/presupuesto.service';
import Budget from '../../Budget';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  
  constructor( private presupuestoService: PresupuestoService){}
  ngOnInit(): void {
   this.get_budgets();
  }

  all_budgets: Budget[] = [];
  budget: Budget = { id: 0, presupuesto: 0, divisa: 0 };


  get_budgets() {
    this.presupuestoService.get_items().subscribe((all_items:any) => {
      this.all_budgets = all_items;

      if (all_items.length > 0) {
        this.budget = this.all_budgets[0];
      }
    });
  }
}
