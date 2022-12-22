import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RegistrosComponent } from './components/registros/registros.component';
import { NuevoRegistroComponent } from './components/nuevo-registro/nuevo-registro.component';
import { EditarRegistroComponent } from './components/editar-registro/editar-registro.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { BudgetComponent } from './components/budget/budget.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrosService } from './services/registros/registros.service';
import { PresupuestoService } from './services/Presupuesto.service';

const appRoutes: Routes = [
  {
    path: '',
    component: BudgetComponent,
  },
  {
    path: 'registros',
    component: RegistrosComponent,
  },
  {
    path: 'nuevo-registro',
    component: NuevoRegistroComponent,
  },
  {
    path: 'editar-registro',
    component: EditarRegistroComponent,
  },
  {
    path: 'presupuesto',
    component: BudgetComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrosComponent,
    NuevoRegistroComponent,
    EditarRegistroComponent,
    NavBarComponent,
    FooterComponent,
    BudgetComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
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
    RouterModule,ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    RegistrosService,
    PresupuestoService
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
