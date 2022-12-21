import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Categorias } from '../../Categorias';

@Component({
  selector: 'app-nuevo-registro',
  templateUrl: './nuevo-registro.component.html',
  styleUrls: ['./nuevo-registro.component.css'],
})
export class NuevoRegistroComponent implements OnInit {
  categoriasDisponibles = [
    Categorias.EgresoGenerico,
    Categorias.Ingreso,
    Categorias.Transporte,
    Categorias.Vivienda,
  ];
  categorias = new FormControl<Categorias | null>(null);
  formulario!: FormGroup;
  showPreview = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      categoria: this.fb.array([this.fb.control('')]),
      monto: ['', Validators.required],
    });
  }
  onSubmit() {}
}
