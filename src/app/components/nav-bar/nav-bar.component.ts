import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PresupuestoService } from '../../services/presupuestos/presupuesto.service';
import Budget from '../../Budget';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private presupuestoService:PresupuestoService) {}

  editarPresupuesto(){
    alert("funca");
  }

  reiniciarPresupuesto(){
   this.deleteBudget();
  }

  deleteBudget(){
    let id=1;
    let presupuesto=0
    let divisa="";
    let deleteBudget:Budget={id,presupuesto,divisa};
    this.presupuestoService.delete_item(deleteBudget).subscribe((response) => {
      this.presupuestoService.get_items().subscribe((response)=>{})
    });
  }
}
