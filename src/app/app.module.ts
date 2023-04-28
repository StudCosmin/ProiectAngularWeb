import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import { FirebaseAppModule, initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { FirestoreModule } from '@angular/fire/firestore'
import {AngularFireModule} from "@angular/fire/compat";
import {FormsModule} from "@angular/forms";

import {config} from "./config";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(config.firebase)),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FirebaseAppModule,
    FirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
