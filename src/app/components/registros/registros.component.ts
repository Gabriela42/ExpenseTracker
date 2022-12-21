import { Component } from '@angular/core';
import { Categorias } from '../../Categorias';
import registrosData from '../../../../db.json';
import { Registro } from 'src/app/Registro';
import { RegistrosService } from 'src/app/services/registros/registros.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css'],
})
export class RegistrosComponent {
  displayedColumns = ['nombre', 'categoria', 'monto', 'action'];
  dataSource = ELEMENT_DATA;

  all_registros: Registro[] = [];
  constructor(private registrosService: RegistrosService) {}

  ngOnInit(): void {
    this.get_registros();
    console.log('testtt');
    console.log(this.all_registros);
  }

  get_registros() {
    this.registrosService.get_items().subscribe((all_items) => {
      this.all_registros = all_items;
    });
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
