import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VenueModule } from './venue/venue.module';
import { EntertainerModule } from './entertainer/entertainer.module';
import { CustomerModule } from './customer/customer.module';
import { MaterialModule } from './modules/material.module';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    routing,
    HttpClientModule,
    FormsModule,
    VenueModule,
    EntertainerModule,
    CustomerModule,
    MaterialModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
