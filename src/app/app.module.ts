// import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
// import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { StandaloneRegisterComponent } from './declartive/components/standalone/standalone-register/standalone-register.component';
import { AddUserDataComponent } from './declartive/components/standalone/add-user-data/add-user-data.component';

// import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
// import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // MatButtonModule,
    // MatStepperModule,
    // MatFormFieldModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    HttpClientModule,
    // MatInputModule,
    StandaloneRegisterComponent,
    AddUserDataComponent,
  ],
  // providers: [HttpClientModule, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
