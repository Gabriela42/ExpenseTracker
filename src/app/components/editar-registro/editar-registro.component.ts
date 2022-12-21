import { Component } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Categorias } from 'src/app/Categorias';

@Component({
  selector: 'app-editar-registro',
  templateUrl: './editar-registro.component.html',
  styleUrls: ['./editar-registro.component.css']
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

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<EditarRegistroComponent>) {}
  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      categoria: this.fb.array([this.fb.control('')]),
      monto: ['', Validators.required],
    });
  }
}
