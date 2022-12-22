import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Categorias } from 'src/app/Categorias';
import { Registro } from 'src/app/Registro';
import { RegistrosService } from 'src/app/services/registros/registros.service';

@Component({
  selector: 'app-editar-registro',
  templateUrl: './editar-registro.component.html',
  styleUrls: ['./editar-registro.component.css'],
})
export class EditarRegistroComponent {
  categoriasDisponibles = [
    Categorias.EgresoGenerico,
    Categorias.Ingreso,
    Categorias.Transporte,
    Categorias.Vivienda,
  ];
  categorias = new FormControl<Categorias | null>(null);
  formulario!: FormGroup;
  showPreview = false;
  selectedValue: string = '';

  constructor(
    private fb: FormBuilder,
    private registrosService: RegistrosService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log('on init');
    console.log(this.data);

    this.formulario = this.fb.group({
      id: [this.data.id],
      nombre: [this.data.nombre, Validators.required],
      categoria: [this.data.categoria],
      monto: [this.data.monto, Validators.required],
    });
  }
  editarRegistro() {
    let id = this.formulario.controls['id'].value;
    let nombre = this.formulario.controls['nombre'].value;
    let categoria = this.selectedValue;
    let monto = this.formulario.controls['monto'].value;
    let action = null;
    let newRegistro: Registro = { id, nombre, categoria, monto, action };
    console.log('editar registro');
    console.log(newRegistro);
    this.registrosService.update_item(newRegistro).subscribe((response) => {});
  }
}
