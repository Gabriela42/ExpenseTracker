import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RegistrosComponent } from './components/registros/registros.component';
import { NuevoRegistroComponent } from './components/nuevo-registro/nuevo-registro.component';
import { EditarRegistroComponent } from './components/editar-registro/editar-registro.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RegistrosComponent,
  },
  {
    path: 'nuevo-registro',
    component: NuevoRegistroComponent,
  },
  {
    path: 'editar-registro',
    component: EditarRegistroComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrosComponent,
    NuevoRegistroComponent,
    EditarRegistroComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    RouterModule,
    FormsModule ,ReactiveFormsModule, 
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
