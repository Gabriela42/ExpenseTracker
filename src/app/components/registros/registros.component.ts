import { Component, Inject } from '@angular/core';
import { Registro } from '../../Registro';
import { RegistrosService } from '../../services/registros/registros.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarRegistroComponent } from '../editar-registro/editar-registro.component';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css'],
})
export class RegistrosComponent {
  constructor(
    private registrosService: RegistrosService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.get_registros();
  }
  all_registros: Registro[] = [];
  displayedColumns = ['nombre', 'categoria', 'monto', 'action'];
  clickedRows = new Set<Registro>();

  openDialog(row: any): void {
    console.log(row)
    this.dialog.open(EditarRegistroComponent, {
      width: '250px',
      data: row,
    });
    this.get_registros();
  }

  get_registros() {
    this.registrosService.get_items().subscribe((all_items: any) => {
      this.all_registros = all_items;
    });
  }

  deleteRegistros(registro: any): void  {
    this.registrosService.delete_item(registro).subscribe((response) => {
      this.registrosService.get_items().subscribe((response)=>{})
    });
    this.get_registros();
  }

  update_registros(registro: Registro) {
    this.registrosService.update_item(registro).subscribe(() => {
      this.get_registros();
    });
  }

  add_registros(
    nombre: string,
    categoria: string,
    monto: number,
    action: null
  ) {
    if (!nombre) return;
    let id: number = this.all_registros.length;
    console.log(id)
    let registro: Registro = { id, nombre, categoria, monto, action };
    this.registrosService.add_item(registro).subscribe((new_task) => {
      this.all_registros.push(new_task);
    });
    this.get_registros();

  }
}
