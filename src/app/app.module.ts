import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RegistrosComponent } from './components/registros/registros.component';
import { NuevoRegistroComponent } from './components/nuevo-registro/nuevo-registro.component';
import { EditarRegistroComponent } from './components/editar-registro/editar-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrosComponent,
    NuevoRegistroComponent,
    EditarRegistroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
