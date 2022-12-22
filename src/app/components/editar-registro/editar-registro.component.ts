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

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public registroEdit: any
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      id: [],
      nombre: ['', Validators.required],
      categoria: this.fb.array([this.fb.control('')]),
      monto: ['', Validators.required],
    });

    console.log('modal');
    console.log(this.registroEdit);
  }
}
