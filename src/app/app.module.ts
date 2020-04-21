import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepListComponent } from './subcomponents/dep-list/dep-list.component';
import { DepartamentoFormComponent } from './subcomponents/departamento-form/departamento-form.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DepartamentoServiceService } from './services/departamento-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepUpdateFormComponent } from './subcomponents/dep-update-form/dep-update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DepListComponent,
    DepartamentoFormComponent,
    DepUpdateFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DepartamentoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
