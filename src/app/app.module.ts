import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatCardModule} from '@angular/material/card';

import {MatButtonModule, MatSliderModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {ApiService} from './api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatSliderModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})


export class AppModule { }
