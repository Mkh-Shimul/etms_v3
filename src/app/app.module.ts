import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasterLayoutModule } from './components/master-layout/master-layout.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BusModule } from './components/bus/bus.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MasterLayoutModule,
    BusModule,
    NgToastModule,
    NgxSpinnerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
