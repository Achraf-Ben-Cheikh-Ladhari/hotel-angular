import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HotelListService } from './hotels/shared/service/hotel-list-service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HotelModule } from './hotels/hotel.module';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localeFr,'fr')
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HotelModule,
    AppRoutingModule
  ],
  providers: [HotelListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
