import { Component, Inject } from '@angular/core';
import registrosData from '../../../../db.json';
import { Registro } from 'src/app/Registro';
import { RegistrosService } from 'src/app/services/registros/registros.service';
import {MatDialog} from '@angular/material/dialog';
import { EditarRegistroComponent } from '../editar-registro/editar-registro.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css'],
})

export class RegistrosComponent {
  displayedColumns = ['nombre', 'categoria', 'monto', 'action'];

  constructor(private registrosService: RegistrosService, public dialog: MatDialog) {
    this.get_registros();

  }
  all_registros: Registro[] = [];

  
  openDialog(): void {
    this.dialog.open(EditarRegistroComponent, {
      width: '250px',
    });
  }

  ngOnInit(): void {
  }
  dataSource = ELEMENT_DATA;

  get_registros() {
    this.registrosService.get_items().subscribe((all_items) => {
      this.all_registros = all_items;

    });
    console.log('first')
    console.log(this.all_registros)
  }

  delete_registros(registro: Registro) {
    this.registrosService.delete_item(registro).subscribe(() => {
      this.all_registros = this.all_registros.filter(
        (t) => t.id !== registro.id
      );
    });
  }

  update_registros(registro: Registro) {
    this.registrosService.update_item(registro).subscribe(() => {
      this.get_registros();
    });
  }

  add_registros(nombre: string, categoria: string, monto: number, action: null) {
    if (!nombre) return;
    let registro: Registro = { nombre, categoria, monto,action };
    this.registrosService.add_item(registro).subscribe((new_task) => {
      this.all_registros.push(new_task);
    });
  }
}
const ELEMENT_DATA: Registro[] = registrosData.registros;
