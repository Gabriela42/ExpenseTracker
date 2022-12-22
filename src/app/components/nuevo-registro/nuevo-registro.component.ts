import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Categorias } from '../../Categorias';
import { Registro } from '../../Registro';
import { RegistrosService } from '../../services/registros/registros.service';

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

  constructor(private fb: FormBuilder, private router: Router, private registrosService: RegistrosService,) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      categoria: this.fb.array([this.fb.control('')]),
      monto: [0, Validators.required],
    });
  }

  allItems: Registro[] = [];
  selectedValue:string="";

  add_registros() {
    let id=1;

    this.registrosService.get_items().subscribe((res:any)=>{
      this.allItems=res;
      if(this.allItems.length>0){
        id=this.allItems.length+1;
      }
  
      let nombre=this.formulario.controls["nombre"].value;
      let monto=this.formulario.controls["monto"].value;
      let categoria=this.selectedValue;
      let action=null;
  
      let registro: Registro = { id,nombre, categoria, monto,action };
      this.registrosService.add_item(registro).subscribe((new_task) => {
  
      });
    })
  }

    
}
