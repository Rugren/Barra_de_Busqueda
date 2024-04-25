/* Cosas internas de Angular */
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

/* App Component */
import { AppComponent } from './components/app/app.component';
import { SearchComponent } from './components/search/search.component';

/* Angular Material */
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, provideHttpClient } from '@angular/common/http';

/* Angular Pipes */
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // HttpClientFetchModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    // provideHttpClient({withFetch: true}) // Esto habilita fetch para HttpClient
    // provideHttpClient({}).withFetch() // Esto habilita fetch para HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
